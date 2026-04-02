import { iconsLib } from "./components/UiComponents/Icon";
import Icon from "./components/UiComponents/Icon";
export default function App() {
  return (
    <div className="text-gray-500">
      <span>Hello</span>
      <Icon svg={iconsLib.calendar}></Icon>
    </div>
  );
}
