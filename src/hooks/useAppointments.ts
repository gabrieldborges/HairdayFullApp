import {useLocalStorage} from "usehooks-ts"



export default function useAppointments() {
    const [appointments, setAppointments] = useLocalStorage("appointments", "0");

    function hello(){
        setAppointments("hello world");
        console.log(appointments);
    }

    return {
        appointments,
        setAppointments,
        hello
    };
    
}
