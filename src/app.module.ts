import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { AuthModule } from './auth/auth.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { SharedModule } from './shared/shared.module';
import { DrawConsumerModule } from './draw-consumer/draw-consumer.module';

@Module({
  imports: [UsersModule, GroupsModule, AuthModule, WishlistModule, SharedModule, DrawConsumerModule],
})
export class AppModule {}
