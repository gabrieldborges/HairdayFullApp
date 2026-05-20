import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useAppointments() {
  const mockAppointments = [
    {
      appointment_number: 1,
      cliente_name: "Ana Silva",
      date: "2025-06-02",
      hour: "09:00",
    },
    {
      appointment_number: 2,
      cliente_name: "Carlos Mendes",
      date: "2025-06-02",
      hour: "10:30",
    },
    {
      appointment_number: 3,
      cliente_name: "Beatriz Costa",
      date: "2025-06-03",
      hour: "11:00",
    },
    {
      appointment_number: 4,
      cliente_name: "Rafael Oliveira",
      date: "2025-06-03",
      hour: "14:00",
    },
    {
      appointment_number: 5,
      cliente_name: "Juliana Rocha",
      date: "2025-06-04",
      hour: "09:30",
    },
    {
      appointment_number: 6,
      cliente_name: "Thiago Ferreira",
      date: "2025-06-04",
      hour: "15:00",
    },
    {
      appointment_number: 7,
      cliente_name: "Mariana Lima",
      date: "2025-06-05",
      hour: "10:00",
    },
    {
      appointment_number: 8,
      cliente_name: "Pedro Alves",
      date: "2025-06-05",
      hour: "13:30",
    },
    {
      appointment_number: 9,
      cliente_name: "Fernanda Souza",
      date: "2025-06-06",
      hour: "16:00",
    },
  ];

  type Appointment = {
    id?: string;
    cliente_name: string;
    date: string;
    hour: string;
  };

  const [appointments, setAppointments] = useLocalStorage<Appointment[]>("appointments" , [])
  
  function createAppointment({cliente_name, date, hour} : Appointment) {
    if(cliente_name != "" && date != "" && hour != "" ){
      setAppointments([
        ...appointments,
        {
          id: Math.random().toString(36).substring(2, 9).toString(),
          cliente_name: cliente_name,
          date: date,
          hour: hour,
        },
      ]);
      console.log(appointments)
    }
  }

  return {
    appointments,
    setAppointments,
    mockAppointments,
    createAppointment,
  };
}
