import Container from "../UiComponents/Container"
import Card from "../UiComponents/Card"
import Text from "../UiComponents/Text"
import InputDate from "../UiComponents/InputDate"
import TimeButton from "../UiComponents/TimeButton"
import InputText from "../UiComponents/InputText"
import Button from "../UiComponents/Button"
import { useAppointmentsContext } from "../../context/AppointmentsContext"


export default function Appointments() {

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

        // setAppointments(OPEN_HOURS);
    
        function createSections(hours: Hour[]) {
            const morning = hours.filter((hour) => hour.time < "13:00")
            const afternoon = hours.filter((hour) => hour.time >= "13:00" && hour.time <= "19:00")
            const night = hours.filter((hour) => hour.time > "19:00")
    
            function renderSections(label: string, hours: Hour[]) {
                return (
                    <div className="mb-3">
                        <Text className="text-gray-300!" variant={"text-sm-regular"}>{label}</Text>
                        <div className="grid grid-cols-4 gap-2 mt-2 w-[21.125rem]">
                            {hours.map((hour, index) => <TimeButton key={`${index}-${hour.time}`} disabled={hour.disabled}>{hour.time}</TimeButton>)}
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
        <Card className="py-4" size={"lg"} variant={"secondary"}>
            <Container>
                <header className="
                mt-5 
                flex flex-col text-center gap-6 justify-between items-center
                md:mt-20 md:flex-row md:text-left
                ">
                    <div className="flex flex-col gap-3">
                        <Text variant={"title-lg-bold"} className="text-gray-100!">Sua agenda</Text>
                        <Text variant={"text-sm-regular"} className="text-gray-300!">Consulte os seus cortes de cabelo agendados por dia</Text>
                    </div>
                    <InputDate/>
                </header>
            </Container>
            <Container className="mt-6 ">
               {createSections(OPEN_HOURS)}
            </Container>
            
        </Card>
    </>)
}