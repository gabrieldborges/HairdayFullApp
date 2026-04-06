import Container from "../UiComponents/Container"
import Card from "../UiComponents/Card"
import Text from "../UiComponents/Text"
import InputDate from "../UiComponents/InputDate"
import TimeButton from "../UiComponents/TimeButton"
import InputText from "../UiComponents/InputText"
import Button from "../UiComponents/Button"


export default function Appointments() {

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
              
            </Container>
            
        </Card>
    </>)
}