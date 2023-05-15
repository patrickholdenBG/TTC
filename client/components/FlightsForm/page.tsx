'use client';

import { ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react';
import { IFlightsFormProps } from '@/types/types';
import styles from './FlightsForm.module.css'
const FlightsForm: React.FC<IFlightsFormProps>  = ({ onSubmit, setFormData, formData }) => {
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <label>
            Airport:
            <input
              type="text"
              name="airport"
              value={formData.airport}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.direction}>
          <div className={styles.radio}>
          <label>
            Departure
            <input
              type="radio"
              name="direction"
              value="departure"
              checked={formData.direction === "departure"}
              onChange={handleChange}
            />
          </label>
          <label>
            Arrival
            <input
              type="radio"
              name="direction"
              value="arrival"
              checked={formData.direction === "arrival"}
              onChange={handleChange}
            />
          </label>
          </div>
          {formData.direction === "arrival" && (
            <p className={styles.arrivalPrompt}>Please be aware arrivals are often only reported when the aircraft departs on its next flight, so there may a delay before they are visible here</p>
          )}
        </div>
        <div>
          <label>
            From:
            <input
              type="text"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            To:
            <input
              type="text"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FlightsForm;