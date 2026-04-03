import Icon from "../components/UiComponents/Icon"
import { iconsLib } from "../components/UiComponents/Icon"
import Text from "../components/UiComponents/Text"

export default function PageComponents() {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-gray-500">
                <h1>Page components</h1>
                <Icon svg={iconsLib.calendar}></Icon>
            </div>
            <div className="flex flex-col gap-1">
                <Text variant={"title-lg-bold"}>This is a Text Component</Text>
                <Text variant={"title-md-bold"}>This is a Text Component</Text>
                <Text variant={"title-sm-bold"}>This is a Text Component</Text>
                <Text variant={"text-md-regular"}>This is a Text Component</Text>
                <Text variant={"text-sm-regular"}>This is a Text Component</Text>
            </div>
        </div>
    )
}