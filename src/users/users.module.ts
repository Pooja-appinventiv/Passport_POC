// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, user_schema } from './users.schema';
import { Module } from '@nestjs/common';
import { AuthService } from 'src/belt/auth.service';
import { BasicAuthGuard } from 'src/belt/auth.strategy';
import { LocalStrategy } from 'src/belt/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/belt/jwt_strategy/jwt.strategy';
import { GoogleStrategy } from 'src/belt/google.strategy';
import { FacebookStrategy } from 'src/belt/facebook.strategy';
import { ResponseHandler } from 'src/lib/responsehandler';
import { DigestStrategy } from 'src/belt/digest.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: user.name, schema: user_schema }]),
    JwtModule.register({
      secret: "pooja",
      signOptions: { expiresIn: '1h' },
    }),
   
  ],
  controllers: [UsersController],
  providers: [
    UsersService, 
    AuthService,
    BasicAuthGuard,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
    FacebookStrategy,
    ResponseHandler,
    DigestStrategy,
  ],
})
export class UsersModule {
  constructor() {
    console.log('This is user module');
  }
}
