import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SeedsModule } from './seeds/seeds.module';


@Module({
  imports: [UsersModule, SeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
