import { ITime } from "../types/types";

const rateLimiter = (referenceTime: number) : ITime => {
  let currentTime = Math.floor(Date.now() / 1000);

  if (referenceTime) {
    const currentIncrement = currentTime - referenceTime;
    if (currentIncrement < 60) {
      currentTime = referenceTime;
    }
  } else {
    referenceTime = currentTime;
  }

  const startTime = currentTime - 604800/7
  return {startTime, currentTime};
};

export default rateLimiter;