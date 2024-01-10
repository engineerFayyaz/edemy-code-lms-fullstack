import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';
import { users as User } from '@/models/index'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'OPTIONS'],
  })
);

export default async (req, res) => {
  await cors(req, res);

  try {
    const teachers = await User.findAll({
      where: {
        role: 'teacher',
      },
    });

    res.status(200).json({ teachers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching teacher data' });
  }
};
