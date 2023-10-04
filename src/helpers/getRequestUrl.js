export const getRequestUrl = (camera, date) => {
  return `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=6IVi0H49JsrJg9Abeesuj2NhictTBaw3fdaqKLbs`;
};
