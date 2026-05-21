import Container from "../UiComponents/Container"
import Card from "../UiComponents/Card"
import Text from "../UiComponents/Text"
import InputDate from "../UiComponents/InputDate"
import { useAppointmentsContext } from "../../context/AppointmentsContext"
import AppointmentsSection from "./AppointmentsSection"
import { iconsLib } from "../UiComponents/Icon"
import Icon from "../UiComponents/Icon"
import React from "react"
import type { Appointment } from "../../hooks/useAppointments";


export default function Appointments() {
    const todayIso = new Date().toLocaleDateString("en-CA");

    const { appointments, deleteTask } = useAppointmentsContext();
    const [appointmentDate, setAppointmentDate] = React.useState(todayIso);

    const todaysAppointments = appointments.filter((appointment)=>{
        return appointment.date == appointmentDate
    })



    function createSections() {


        const morning = todaysAppointments.filter((appointment) => appointment.hour < "13:00")
        const afternoon = todaysAppointments.filter((appointment) => appointment.hour >= "13:00" && appointment.hour <= "19:00")
        const night = todaysAppointments.filter((appointment) => appointment.hour > "19:00")


        function renderSections(label: string, timeSpan: string, appointments: Appointment[], icon: React.FC<React.ComponentProps<"svg">>) {
            return (
                <AppointmentsSection className="mb-3 border border-gray-600 rounded-lg">
                    <div className="flex gap-3 border-b border-gray-600 py-3 px-5">
                        <Icon svg={icon}></Icon>
                        <Text className="text-gray-300!" variant={"text-sm-regular"}>{label}</Text>
                        <Text className="text-gray-400! ml-auto" variant={"text-sm-regular"}>{timeSpan}</Text>
                    </div>
                    <div className="grid gap-2 mt-2  px-5  w-full py-5">
                        {
                            appointments.length > 0 ? (
                                appointments.map((appointment, index) =>
                                    <div key={`${index}-${appointment.hour}`} className="flex gap-5 h-8 ">
                                        <Text className="w-12" variant={"title-md-bold"}>
                                            {appointment.hour || " "}
                                        </Text>
                                        <Text variant={"text-md-regular"}>
                                            {appointment.cliente_name || " "}
                                        </Text>
                                        <Icon svg={iconsLib.trash} className="ml-auto cursor-pointer" size={"function"} onClick={()=>deleteTask(appointment.id)}></Icon>

                                    </div>
                                )
                            ) : (
                                <div>No appointments</div>
                            )
                        }
                    </div>
                </AppointmentsSection>
            )
        }

        return <>
            {renderSections("Manhã", "09h-12h", morning, iconsLib.sunHorizon)}
            {renderSections("Tarde", "13h-18h", afternoon, iconsLib.cloudSun)}
            {renderSections("Noite", "19h-21h", night, iconsLib.moonStars)}
        </>

    }

    return (<>
        <Card className="py-4" size={"lg"} variant={"secondary"}>
            <Container>
                <header className="
                mt-5 
                flex flex-col text-center gap-6 justify-between items-center
                md:mt-20 md:flex-row md:text-left
                ">
                    <div className="flex flex-col gap-3">
                        <Text variant={"title-lg-bold"} className="text-gray-100! whitespace-nowrap">Sua agenda</Text>
                        <Text variant={"text-sm-regular"} className="text-gray-300! whitespace-nowrap">Consulte os seus cortes de cabelo agendados por dia</Text>
                    </div>
                    <InputDate onChange={(e) => setAppointmentDate(e.target.value)} />
                </header>
            </Container>
            <Container className="mt-6 ">
                {createSections()}
            </Container>

        </Card>
    </>)
}