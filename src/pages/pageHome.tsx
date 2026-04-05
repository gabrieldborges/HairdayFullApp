
import Container from "../components/UiComponents/Container"
import Schedule from "../components/CoreComponents/Schedule"
import Appointments from "../components/CoreComponents/Appointments"

export default function PageHome() {
    return (
        <Container className="flex gap-1" size={"main"}>
            <Schedule></Schedule>
            <Appointments></Appointments>
        </Container>
    )

}