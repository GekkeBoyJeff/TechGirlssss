import bcrypt from 'bcrypt'

export function encryptPassword(password) {
    const saltRounds = 10;

    if (!password) {
        console.log('No password provided')
        return
    }

    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}