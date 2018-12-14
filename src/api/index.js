const testData =
  "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&APPID=e2a4d8b55c5d115b04b00a5b2b95c1c9";

export const weatherApi = async () => {
  return await fetch(testData)
    .then(data => data.json())
    .catch(error => console.log(error));
};
