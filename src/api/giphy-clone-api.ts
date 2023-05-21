// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {ApiAdapter} from './api.adapter.ts';

class Giphy {
  constructor(private readonly http: ApiAdapter) {}
  async getTrendingGifs() {
    return await this.http.getAxios(`gifs/trending`, {});
  }
}
const giphyApi = new ApiAdapter();
export default new Giphy(giphyApi);
