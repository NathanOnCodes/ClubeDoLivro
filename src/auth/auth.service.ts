import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}


    async signIn(email: string): Promise<any>{
        const user = await this.usersService.findOne(email);
        if (!user){
            throw new UnauthorizedException();
        }
        const payload = { userEmail: user.email, userName: user.name };
        const token = {
            access_token: await this.jwtService.signAsync(payload),
        };
        return token;
    }
}
