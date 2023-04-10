import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ObjectModule } from './object/object.module';
import { ParseModule } from './parse/parse.module';
import { FilesModule } from './files/files.module';
import { WritModule } from './writ/writ.module';
import { DecisionModule } from './decision/decision.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   autoLoadEntities:true,
    //   synchronize:true
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'db',
      username: 'postgres',
      password: '1111',
      autoLoadEntities:true,
      synchronize:true
    }),
    UserModule,
    AuthModule,
    ObjectModule,
    ParseModule,
    FilesModule,
    WritModule,
    DecisionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
