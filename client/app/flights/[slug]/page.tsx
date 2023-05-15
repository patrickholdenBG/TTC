'use client'

import { IFlight, IFlightListProps } from "@/types/types";
import styles from './ListPage.module.css';

const FlightsList: React.FC<IFlightListProps> = ({cacheResponse, data}) => {


  return (
    <div className={styles.table}>
      <div>{cacheResponse? <p>Data found in cache</p> : <p>Fresh data from API</p>}</div>
      <ul>
        {!data || data.length === 0 && (
          <li>No flights available.</li>
        )}
        {data && data.length > 0 && data.map((flight: IFlight) => (
          <li key={`${flight.callsign}_${flight.firstSeen}`}>{flight.callsign}</li>
        ))}
      </ul>
    </div>
  )
}

export default FlightsList;
