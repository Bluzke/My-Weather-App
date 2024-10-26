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

// TRIED TO COMPLETE THIS PART BUT COULDNT

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
  private buildGeocodeQuery(): string {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const queryUrl = `${this.baseURL}/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}` 
    return queryUrl
    }
      // // TODO: Create buildWeatherQuery method
      private buildWeatherQuery(): string {
        //`api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`
        const queryUrl = `${this.baseURL}/data/2.5/forecast?q=${this.cityName}&appid=${this.apiKey}`
        return queryUrl;
      }
      // // TODO: Create fetchAndDestructureLocationData method
      // private async fetchAndDestructureLocationData() {}
      // // TODO: Create fetchWeatherData method
      private async fetchWeatherData(weatherURL: string) {
        try {
       
          const response = await fetch(weatherURL);
          const forcastData = await response.json();
          console.log(forcastData)
          return forcastData
         
        }catch(err){
          console.log("err in fetching forcast weather",err)
        }
      
      }
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    this.cityName = city
    const queryURL = this.buildGeocodeQuery()
    const location = this.fetchLocationData(queryURL)
    let weatherForcast:Weather[] = []
    let currentWeather = new Weather(
       this.cityName,
       dayjs.unix(location.dt).format("MM/DD/YYYY"),
      location.weather[0].icon,
      location.weather[0].description,
      location.main.temp,
      location.wind.speed,
     location.main.humidity)
     weatherForcast.push(currentWeather)
    const weather = this.buildWeatherQuery()
    const weatherData = this.fetchWeatherData(weather)
    weatherData.list.map((element => {
      if(element.txt.pslit(" ")[1] ==="00:00:00")
       //location  weatherData.list[i]  element.
      }
    ))
  
  }
}

export default new WeatherService();
