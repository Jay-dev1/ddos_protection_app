import { verify } from 'jsonwebtoken';

export default function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    res.status(200).json({ message: `Hello, ${decoded.username}` });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
