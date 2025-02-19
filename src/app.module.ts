import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { AuthModule } from './auth/auth.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { SharedModule } from './shared/shared.module';
import { DrawConsumerModule } from './draw-consumer/draw-consumer.module';
import { typeOrmConfig } from './db.typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule, GroupsModule, AuthModule, WishlistModule, SharedModule, DrawConsumerModule],
})
export class AppModule {}