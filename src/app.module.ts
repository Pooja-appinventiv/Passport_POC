import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/appConfig';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://poojaa:123@cluster0.pf0tywt.mongodb.net/nest_db',
    ),
   // ScheduleModule.forRoot(),
    UsersModule,
    PassportModule,
   ConfigModule.forRoot({ load: [appConfig], isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('This is app module');
  }
}
