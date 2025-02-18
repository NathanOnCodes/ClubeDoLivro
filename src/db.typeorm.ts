import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,   
    username: 'adm',
    password: 'password1',
    database: 'friendsdb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
}