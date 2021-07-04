import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Dashboard } from './dto/dashboard.dto';

@Injectable()
export class DashboardService {
  private baseURL: string;

  constructor(configService: ConfigService, private httpService: HttpService) {
    this.baseURL = configService.get<string>('API_URL');
  }

  async findAll(): Promise<Dashboard> {
    try {
      const response = await this.httpService
        .get<Dashboard>(this.baseURL)
        .toPromise();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
