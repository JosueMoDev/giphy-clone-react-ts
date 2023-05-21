import Giphy from './api/giphy-clone-api.ts';
import {useEffect} from 'react';
export const GiphyApp = () => {
  const getTrendingGifs = async (): Promise<any> => {
    const data = await Giphy.getTrendingGifs();
    console.log(data);
  };
  useEffect(() => {
    getTrendingGifs();
  }, []);

  return <div>GiphyApp</div>;
};
