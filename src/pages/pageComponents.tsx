import Icon from "../components/UiComponents/Icon"
import { iconsLib } from "../components/UiComponents/Icon"
import Text from "../components/UiComponents/Text"
import Button from "../components/UiComponents/Button"

export default function PageComponents() {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-gray-500 flex gap-1">
                <div>
                    <Icon svg={iconsLib.calendar} size={"regular"}></Icon>
                    <Icon svg={iconsLib.calendar} size={"function"}></Icon>
                </div>
                <div>
                    <Icon svg={iconsLib.caretDown} size={"regular"}></Icon>
                    <Icon svg={iconsLib.caretDown} size={"function"}></Icon>
                </div>
                <div>
                    <Icon svg={iconsLib.caretLeft} size={"regular"}></Icon>
                    <Icon svg={iconsLib.caretLeft} size={"function"}></Icon>
                </div>
                <div>
                    <Icon svg={iconsLib.cloudSun} size={"regular"}></Icon>
                    <Icon svg={iconsLib.cloudSun} size={"function"}></Icon>
                </div>
                <div>
                    <Icon svg={iconsLib.moonStars} size={"regular"}></Icon>
                    <Icon svg={iconsLib.moonStars} size={"function"}></Icon>
                </div>
                <div>
                    <Icon svg={iconsLib.sunHorizon} size={"regular"}></Icon>
                    <Icon svg={iconsLib.sunHorizon} size={"function"}></Icon>
                </div>
                <div>
                    <Icon svg={iconsLib.trash} size={"regular"}></Icon>
                    <Icon svg={iconsLib.trash} size={"function"}></Icon>
                </div>
                <div>
                    <Icon svg={iconsLib.userSquare} size={"regular"}></Icon>
                    <Icon svg={iconsLib.userSquare} size={"function"}></Icon>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Text variant={"title-lg-bold"}>This is a Text Component</Text>
                <Text variant={"title-md-bold"}>This is a Text Component</Text>
                <Text variant={"title-sm-bold"}>This is a Text Component</Text>
                <Text variant={"text-md-regular"}>This is a Text Component</Text>
                <Text variant={"text-sm-regular"}>This is a Text Component</Text>
            </div>
            <div>
                <Button >
                    AGENDAR
                </Button>
            </div>
        </div>
    )
}