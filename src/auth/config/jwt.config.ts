import { registerAs } from '@nestjs/config';
import { jwtConstants } from '../constants/constants';


export default registerAs('jwt', () => {
    return {
        secret: jwtConstants.secret,
        audience: jwtConstants.audience,
        issuer: jwtConstants.issuer,
        jwtTtl: Number(jwtConstants.jwtTtl),
        jwtRefreshTtl: Number(jwtConstants.jwtRefreshTtl),
    };
})

