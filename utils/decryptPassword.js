import bcrypt from 'bcrypt'

export function decryptPassword(password, encryptPassword) {
    return bcrypt.compareSync(password, encryptPassword)
}