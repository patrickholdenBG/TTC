import { Request, Response, NextFunction } from 'express';
import redisClient from "../utils/connectRedis";
import { getFlightsService } from '../services/dataService';
import rateLimiter from '../helpers/rateLimiter';

let referenceTime;

const getFlights = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {

  const { startTime, currentTime } = rateLimiter(referenceTime)
  referenceTime = currentTime

  const {
    params: { direction },
    query: { airport, begin = startTime, end =  referenceTime}
  } = req;

  
  
  const cacheKey = `${direction}_${airport}_${begin}_${end}`;
  console.log(cacheKey)
  console.log('QUERY PARAMS ARE: ', 'FLIGHT TYPE: ', direction, 'AIRPORT: ', airport, 'BEGIN: ', begin, 'END: ', end)

  try {
    let results;
    let isCached = false;

    const cacheResults = await new Promise<string>((resolve, reject) => {
      redisClient.get(cacheKey, (error, result) => {
        if (error) {
          console.error(`Error retrieving value from Redis: ${error}`);
          reject(result);
        } else {
          console.log(`Retrieved value: ${result}`);
          resolve(result);
        }
      });
    });

    if (cacheResults) {
      console.log("Retrieving from cache");
      isCached = true;
      results = JSON.parse(cacheResults);
    } else {
      console.log('BEGIN: ', begin);
      results = await getFlightsService(direction, airport, begin, end);
      await redisClient.set(cacheKey, JSON.stringify(results));
    }

    res.send({
      fromCache: isCached,
      data: results,
    });
  } catch (error) {
    next(error);
  }
};

export default { getFlights };
