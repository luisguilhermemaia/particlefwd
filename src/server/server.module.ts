import { Module } from '@nestjs/common';

import { AppModule } from 'src/server/app/app.module';

@Module({
  imports: [AppModule],
})
export class ServerModule {}
