import { check, validationResult } from 'express-validator';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey('KCPVjFRBRO6wO1bKGQNmvA'); // Replace with your SendGrid API key

const contactRouter = Router();

contactRouter.post(
    '/api/contact',
    [
        check('name').not().isEmpty().withMessage('Name is required'),
        check('email').isEmail().withMessage('Invalid email address'),
        check('number').not().isEmpty().withMessage('Number is required'),
        check('subject').not().isEmpty().withMessage('Subject is required'),
        check('text').not().isEmpty().withMessage('Text body is required'),
    ],
    async (req, res) => {
        try {
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { name, email, number, subject, text } = req.body;

            const msg = {
                to: 'muhammadfayyaz0097@gmail.com', // Change to your recipient
                from: email, // Change to your verified sender
                subject: subject,
                text: text,
                html: `<b>From:</b> ${name} <br /> 
                    <b>Number:</b> ${number} <br /> 
                    <b>Text:</b> ${text}`
            };

            await sgMail.send(msg);
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error(error);

            // Handle SendGrid API errors
            if (error.response) {
                console.error('SendGrid API Error:', error.response.body);
                res.status(error.response.statusCode).send('Error sending email');
            } else {
                res.status(500).send('Error sending email');
            }
        }
    }
);

export default contactRouter;
