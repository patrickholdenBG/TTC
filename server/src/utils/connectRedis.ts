import { createClient, RedisClient } from 'redis';

const redisClient: RedisClient = createClient();

const connectRedis = async ():Promise<void> => {
  try {
    redisClient.on('connect', () => {
      console.log("connected to redis")
    })
  } catch (error) {
    console.log(error);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

export default redisClient;
