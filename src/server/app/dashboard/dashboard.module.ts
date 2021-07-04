import { HttpModule, Module } from '@nestjs/common';

import { DashboardService } from './dashboard.service';
import { DashboardResolver } from './dashboard.resolver';

@Module({
  imports: [HttpModule],
  providers: [DashboardService, DashboardResolver],
})
export class DashboardModule {}
