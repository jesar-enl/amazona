import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign({
      _
  }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
