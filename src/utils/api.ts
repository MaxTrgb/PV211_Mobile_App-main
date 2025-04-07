import {BASE_URL} from '../constants/urls.ts';

class Api {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  async getAll(endpoint: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`);
    return await response.json();
  }
  async getOne(endpoint: string, params: string | number): Promise<any> {
    const response = await fetch(`${this.baseUrl}/${endpoint}/${params}`);
    return await response.json();
  }
}

// singleton
const api = new Api();
export default api;
