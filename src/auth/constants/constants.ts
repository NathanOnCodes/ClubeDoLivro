import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
    secret: "TEACH ME TO DO YOUR WILL, FOR YOU ARE MY GOD; MAY YOUR GOOD SPIRIT LEAD ME ON LEVEL GROUND.\
    FOR YOUR NAME'S SAKE, LORD, PRESERVE MY LIFE; IN YOUR RIGHTEOUSNESS, BRING ME OUT OF TROUBLE"
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);