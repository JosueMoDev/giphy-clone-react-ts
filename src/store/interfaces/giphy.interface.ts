export interface GiphySelectedInitialState {
  giphy?: Giphy;
  giphy_id?: string;
  giphyRelatedTags?: GiphyRelatedtag | GiphyRelatedtag[];
  giphisRelated?: Giphy[];
  user?: GiphyUser;
  giphyTags?: string[] | string;
}
export interface GiphyUser {
  name: string;
  socialMedia: string;
}
export interface Giphy {
  name: string;
  image: string;
}
export interface GiphyRelatedtag {
  name: string;
  id: string;
}
