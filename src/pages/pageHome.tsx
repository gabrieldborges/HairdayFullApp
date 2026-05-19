
import Container from "../components/UiComponents/Container"
import Schedule from "../components/CoreComponents/Schedule"
import Appointments from "../components/CoreComponents/Appointments"
import { AppointmentsProvider } from "../context/AppointmentsContext"

export default function PageHome() {
    return (
        <Container className="flex gap-1 justify-between" size={"main"}>
            <AppointmentsProvider>
                <Schedule></Schedule>
                <Appointments></Appointments>
            </AppointmentsProvider>
        </Container>
    )

}