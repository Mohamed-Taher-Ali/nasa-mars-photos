export const getPhotosApi = (page: number, sol: number) => {
  const baseUrl = process.env.REACT_APP_NASA_BASE_URL;
  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  const apiPath = "mars-photos/api/v1/rovers/curiosity/photos";

  return `${baseUrl}/${apiPath}?api_key=${apiKey}&page=${page}&sol=${sol}`;
};
