const axios = require("axios");

export async function fetchCars(filters) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    "X-Api-Key": "g2cICIhFWfkZdOEKf30d2w==5QOIryO0gVJCL2mI",
  };
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};
