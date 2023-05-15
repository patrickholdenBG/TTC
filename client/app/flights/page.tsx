'use client';

import FlightsList from './[slug]/page';
import { IFlightsPageProps } from '@/types/types';

const FlightsPage: React.FC<IFlightsPageProps> = ({ flights, cacheResponse })  => {
  return (
    <>
      {flights && flights.length > 0 && (
        <FlightsList cacheResponse={cacheResponse} data={flights} />
      )}
    </>
  );
};

export default FlightsPage