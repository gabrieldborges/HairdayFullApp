import CaretDownIcon from "../../assets/icons/caret-down.svg?react";
import CaretLeftIcon from "../../assets/icons/caret-left.svg?react";
import CaretRightIcon from "../../assets/icons/caret-right.svg?react";
import CloudSunIcon from "../../assets/icons/cloud-sun.svg?react";
import MoonStarsIcon from "../../assets/icons/moon-stars.svg?react";
import SunHorizonIcon from "../../assets/icons/sun-horizon.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import UserSquareIcon from "../../assets/icons/user-square.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconsLib = {
  caretDown: CaretDownIcon,
  caretLeft: CaretLeftIcon,
  caretRight: CaretRightIcon,
  cloudSun: CloudSunIcon,
  moonStars: MoonStarsIcon,
  sunHorizon: SunHorizonIcon,
  trash: TrashIcon,
  userSquare: UserSquareIcon,
  calendar: CalendarIcon,
};

const IconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof IconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  className,
  animate,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={IconVariants({ animate, className })} {...props} />
  );
}
