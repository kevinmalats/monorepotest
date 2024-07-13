import jwt from 'jsonwebtoken';
import { CONSTANS_RULES } from '../constans/constans.js';

export default class TokenService {
    constructor() {
        this.secret = CONSTANS_RULES.SECRET_JWT; 
    }

    generateToken(user, expiresIn = '1h') {
        const payload = {
            user: {
               id:user.id,
               username:user.username
            },
        };

        const options = {
            expiresIn: expiresIn,
        };

        const token = jwt.sign(payload, this.secret, options);

        return token;
    }
}
