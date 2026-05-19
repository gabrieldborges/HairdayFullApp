import React from "react";
import useAppointments from "../hooks/useAppointments";


type AppointmentsContextValue = ReturnType<typeof useAppointments>

const AppointmentsContext = React.createContext<AppointmentsContextValue | null>(null);

export function AppointmentsProvider({ children }: { children: React.ReactNode }) {
    const value = useAppointments();
    return <AppointmentsContext.Provider value={value}>{children}</AppointmentsContext.Provider>
}

export function useAppointmentsContext() {
    const ctx = React.useContext(AppointmentsContext);
    if (!ctx) throw new Error("useAppointmentsContext must be used inside AppointmentsProvider");
    return ctx
}