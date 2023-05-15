export interface IFlightFormData {
  direction: string;
  airport: string;
  startTime: string;
  endTime: string;
}

export interface IFlight {
  icao24: string;
  firstSeen: number;
  estDepartureAirport: string | null;
  lastSeen: number;
  estArrivalAirport: number | null;
  callsign: string | null;
  estDepartureAirportHorizDistance: number;
  estDepartureAirportVertDistance: number;
  estArrivalAirportHorizDistance: number | null;
  estArrivalAirportVertDistance: number | null;
  departureAirportCandidatesCount: number;
  arrivalAirportCandidatesCount: number;
}

export interface IFlightsLayoutProps {
  children: React.ReactNode;
}

export interface IFlightsFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setFormData: Dispatch<SetStateAction<FlightFormData>>;
  formData: FlightFormData;
}

export interface IFlightsPageProps {
  flights: Flight[];
  cacheResponse: string | undefined;
}

export interface IFlightListProps {
  cacheResponse: string | undefined;
  data: IFlight[];
}