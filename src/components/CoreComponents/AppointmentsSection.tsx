import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Icon from "../UiComponents/Icon"

const AppointmentsSectionVariants = cva("text-gray-200", {
    variants: {
        variant: {
            "primary": ""
        },

    },
    defaultVariants: {
        variant: "primary"
    }
})

interface AppointmentsSectionProps extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof AppointmentsSectionVariants> {
    icon?: typeof Icon,
}

export default function AppointmentsSection({ className, children, variant, ...props }: AppointmentsSectionProps) {
    return (
        <div className={AppointmentsSectionVariants({ variant, className })}>
            {children}
        </div>
    )
}