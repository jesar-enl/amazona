export const generateToken = (user) => {
    return jwt.sign(user)
}