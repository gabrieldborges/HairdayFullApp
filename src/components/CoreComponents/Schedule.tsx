import Container from "../UiComponents/Container"
import Card from "../UiComponents/Card"
import Text from "../UiComponents/Text"
import InputDate from "../UiComponents/InputDate"
import TimeButton from "../UiComponents/TimeButton"
import InputText from "../UiComponents/InputText"
import Button from "../UiComponents/Button"
import React, { useEffect } from "react"
import { useAppointmentsContext } from "../../context/AppointmentsContext"


export default function Schedule() {

    const { mockAppointments, createAppointment } = useAppointmentsContext();
    const [scheduleDate, setScheduleDate] = React.useState("");
    const [scheduleHour, setScheduleHour] = React.useState("");
    const [scheduleClientName, setScheduleClientName] = React.useState("");

    useEffect(() => {
        console.log(scheduleHour)
    }, [scheduleHour])
    useEffect(() => {
        console.log(scheduleDate)
    }, [scheduleDate])

    type Hour = { time: string; disabled: boolean };

    const OPEN_HOURS: Hour[] = [
        { time: "09:00", disabled: false }, { time: "10:00", disabled: false },
        { time: "11:00", disabled: false }, { time: "12:00", disabled: false },
        { time: "13:00", disabled: false }, { time: "14:00", disabled: false },
        { time: "15:00", disabled: false }, { time: "16:00", disabled: false },
        { time: "17:00", disabled: false }, { time: "18:00", disabled: false },
        { time: "19:00", disabled: false }, { time: "20:00", disabled: false },
        { time: "21:00", disabled: false },
    ];

    function createSections(hours: Hour[]) {
        const morning = hours.filter((hour) => hour.time < "13:00")
        const afternoon = hours.filter((hour) => hour.time >= "13:00" && hour.time <= "19:00")
        const night = hours.filter((hour) => hour.time > "19:00")

        function renderSections(label: string, hours: Hour[]) {
            return (
                <div className="mb-3">
                    <Text className="text-gray-300!" variant={"text-sm-regular"}>{label}</Text>
                    <div className="grid grid-cols-4 gap-2 mt-2 w-[21.125rem]">
                        {hours.map((hour, index) => {
                            const isDisabled = hour.disabled || mockAppointments.some(
                                (appointment) => appointment.hour == hour.time
                            );
                            return (
                                <TimeButton key={`${index}-${hour.time}`} disabled={isDisabled}
                                    onClick={() => {
                                        setScheduleHour(hour.time)
                                    }}
                                >{hour.time}</TimeButton>
                            );
                        })}
                    </div>
                </div>
            )
        }

        return <>
            {renderSections("Manhã", morning)}
            {renderSections("Tarde", afternoon)}
            {renderSections("Noite", night)}
        </>

    }

    return (<>
        <Card className="py-4" size={"md"}>
            <Container>
                <header className="mt-6 md:mt-20 flex flex-col gap-2
                text-center md:text-left
                ">
                    <Text variant={"title-lg-bold"} className="text-gray-100!">Agende um atendimento</Text>
                    <Text variant={"text-sm-regular"} className="text-gray-300!">Selecione data, horário e informe o nome do cliente para
                        <br />criar o agendamento</Text>
                </header>
            </Container>
            <Container className="mt-6 ">
                <form action="" className="grid gap-8">
                    <section className="grid gap-2">
                        <Text variant={"title-md-bold"}>Data</Text>
                        <InputDate onChange={(e) => {
                            setScheduleDate(e.target.value)
                        }}></InputDate>
                    </section>
                    <section className="grid gap-2">
                        <Text variant={"title-md-bold"}>Horários</Text>
                        {createSections(OPEN_HOURS)}
                    </section>
                    <section className="grid gap-2">
                        <Text>Cliente</Text>
                        <InputText value={scheduleClientName} onChange={
                            (e) => {
                                console.log(scheduleClientName)
                                setScheduleClientName(e.target.value)
                            }
                        }></InputText>
                    </section>
                </form>
            </Container>
            <Container className="mt-6">
                <Button onClick={()=>{
                    createAppointment({
                        cliente_name : scheduleClientName,
                        date : scheduleDate,
                        hour : scheduleHour
                    })
                }}>Agendar</Button>
            </Container>
        </Card>
    </>)
}