import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const url = "/api/contact"; // Assuming your API is running on the same host
      await axios.post(url, data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="contact-form">
      <h2>Ready to Get Started?</h2>
      <p>Your email address will not be published. Required fields are marked *</p>

      <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                ref={register({ required: "Name is required." })}
              />
              {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Your email address"
                ref={register({
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address.",
                  },
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
          </div>

          <div className="col-lg-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder="Your phone number"
                ref={register({ required: "Number is required." })}
              />
              {errors.number && <div className="invalid-feedback">{errors.number.message}</div>}
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                ref={register({ required: "Subject is required." })}
              />
              {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="5"
                placeholder="Write your message..."
                ref={register({ required: "Text body is required." })}
              />
              {errors.text && <div className="invalid-feedback">{errors.text.message}</div>}
            </div>
          </div>

          <div className="col-lg-12 col-sm-12">
            <button type="submit" className="default-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
