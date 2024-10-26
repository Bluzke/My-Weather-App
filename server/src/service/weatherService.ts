// import fs from 'node:fs/promises';
import dotenv from 'dotenv';
import dayjs from 'dayjs'
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: string;
  icon: string;
  iconDescription: string;
  tempF: number;
  windSpeed: number;
  humidity: number;

  constructor(
    city: string,
    date: string,
    icon: string,
    iconDescription: string,
    tempF: number,
    windSpeed: number,
    humidity: number
  )
{
  this.city= city;
  this.date = date;
  this.icon = icon;
  this.iconDescription= iconDescription;
  this.tempF= tempF;
  this.windSpeed = windSpeed;
  this.humidity = humidity;
}
}
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string;

  private apiKey?: string;

  private cityName = ''

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';

    this.apiKey = process.env.API_KEY || '';

    this.cityName = ""
  }
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    try {
   
      const response = await fetch(query);
      const locationData = await response.json();
      console.log(locationData)
      return locationData
     
    }catch(err){
      console.log("err in fetching curent weather",err)
    }
  }
  // private async fetchLocationData(query: string) {}
    // // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {
  //   const locationDataArray: Coordinates[] = locationData.map((coordinates) => {
  //     const coordinatesObject: Coordinates = {
  //       id: coordinates.id,
  //       city: coordinates.city,
  //       date: coordinates.date,
  //       temp: coordinates.temp,
  //       wind: coordinates.wind,
  //       humidity: coordinates.humidity,
  //     };

  //     return {coordinatesObject, locationDataArray};
  //   });

  // }
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
