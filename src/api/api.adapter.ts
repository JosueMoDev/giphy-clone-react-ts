import axios, {type AxiosResponse} from 'axios';
const {VITE_API_KEY, VITE_API_URL} = import.meta.env;
interface ConfigAxios {
  data?: any;
  limit?: number;
  offset?: number;
}
interface DefaultParams {
  apiKey: string;
}
export class ApiAdapter {
  private readonly axios = axios;
  private readonly baseUrl: string = VITE_API_URL;
  private readonly default_params: DefaultParams = {
    apiKey: VITE_API_KEY,
  };

  async getAxios(
    url: string,
    params: ConfigAxios,
  ): Promise<AxiosResponse<any>> {
    return await this.axios.get(url, {
      baseURL: this.baseUrl,
      params: {...this.default_params, ...params},
    });
  }
}
