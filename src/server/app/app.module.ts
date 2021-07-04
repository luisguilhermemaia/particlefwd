import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConsoleModule } from 'nestjs-console';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConsoleModule,
    DashboardModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
