import jwt from ''
export const generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
