import axios, { AxiosRequestConfig } from 'axios';
import { IResponseData } from '../types/types';

const api = axios.create({
  baseURL: 'https://opensky-network.org/api/flights',
  timeout: 60000,
});

// Fetch data from the external API
const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getFlightsService = async (direction: string, airport: any, begin: any, end: any): Promise<IResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/${direction}?airport=${airport}&begin=${begin}&end=${end}`,
  };

  return await apiRequest<IResponseData>(config);
};

export { getFlightsService }