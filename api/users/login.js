import { sign } from 'jsonwebtoken';

const users = [{ username: 'user', password: 'password' }];  // Example users

export default function handler(req, res) {
  const { username, password } = req.body;

  // Authenticate user
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    const token = sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
