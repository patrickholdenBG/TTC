'use client'

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from "react"
import axios from 'axios';
import FlightsForm from '@/components/FlightsForm/page';
import FlightsPage from './page';
import { IFlight, IFlightFormData, IFlightsLayoutProps } from '@/types/types';

const FlightsLayout: React.FC<IFlightsLayoutProps>  = () => {
  const router = useRouter();
  const [flights, setFlights ] = useState<IFlight[]>([])
  const [cacheResponse, setCacheResponse ] = useState<string | undefined>()

  const [formData, setFormData] = useState<IFlightFormData>({
    direction: 'departure',
    airport: '',
    startTime: '',
    endTime: ''
  });

  const fetchFlights = async (direction: string, airport: string, queryStart: string, queryEnd: string) => {
    try {
      console.log(`http://localhost:3001/api/data/${direction}?${airport}${queryStart}${queryEnd}`)
      const response = await axios.get(`http://localhost:3001/api/data/${direction}?${airport}${queryStart}${queryEnd}`)
      console.log(response);
      setFlights(response.data.data);
      setCacheResponse(response.data.fromCache)
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    const { direction, airport, startTime, endTime } = formData;
    const queryAirport = `airport=${airport || 'EGLL'}`;
    const queryStart = startTime ? `&begin=${startTime}` : '';
    const queryEnd =  endTime ? `&end=${endTime}` : '';
    router.push(`flights/${direction}/?${queryAirport}${queryStart}${queryEnd}`);
    fetchFlights(direction, queryAirport, queryStart, queryEnd)
  };
    

  return (
    <>
      <FlightsForm
        onSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
      />
      <FlightsPage
        flights={flights}
        cacheResponse={cacheResponse}
      />
    </>
  );
};

export default FlightsLayout;