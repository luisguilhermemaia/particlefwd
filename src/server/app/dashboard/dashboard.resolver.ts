import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { DashboardService } from './dashboard.service';
import { Dashboard } from './dto/dashboard.dto';

@Resolver(() => Dashboard)
export class DashboardResolver {
  constructor(
    @Inject(DashboardService) private dashboardService: DashboardService,
  ) {}

  @Query(() => Dashboard)
  async dashboard(): Promise<Dashboard> {
    return this.dashboardService.findAll();
  }
}
