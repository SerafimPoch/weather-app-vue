const testData =
  "https://api.openweathermap.org/data/2.5/forecast?q=London&APPID=e2a4d8b55c5d115b04b00a5b2b95c1c9";

export const weatherApi = async (city = "Kiev") => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=e2a4d8b55c5d115b04b00a5b2b95c1c9`
  );

  const data = await response.json();
  return data;
};
