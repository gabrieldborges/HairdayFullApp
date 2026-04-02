import Icon from "../components/UiComponents/Icon"
import { iconsLib } from "../components/UiComponents/Icon"

export default function PageComponents() {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-gray-500">
                <h1>Page home</h1>
                <Icon svg={iconsLib.calendar}></Icon>
            </div>
        </div>
    )
}