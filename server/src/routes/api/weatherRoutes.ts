import { Router, type Request, type Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

// import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';
console.log(process.env);
console.log("Start");
console.log(process.env.API_KEY);
console.log(process.env.API_BASE_URL);
console.log("end");

// TODO: POST Request with city name to retrieve weather data
router.post('/', (_req: Request, _res: Response) => {
  // TODO: GET weather data from city name
  const cityName = _req.body.cityname
 const test = WeatherService.getWeatherForCity('') 
  console.log(test)
 
  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (_req: Request, _res: Response) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req: Request, _res: Response) => {});

export default router;