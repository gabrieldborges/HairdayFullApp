# Hairday

Appointment scheduling app for hairdressers and barbershops. Lets you book client sessions by date and time slot, and view your daily agenda at a glance.

## Features

- Book appointments by selecting a date, a time slot, and a client name
- Time slots split into Morning (09h–12h), Afternoon (13h–18h), and Night (19h–21h)
- Already-booked slots are automatically disabled on the scheduler
- View, filter, and delete appointments from the agenda panel
- Appointments persist via `localStorage` — no backend required

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Tailwind CSS | 4 |
| React Router | 7 |
| Vite | 8 |
| class-variance-authority | 0.7 |
| usehooks-ts | 3 |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── assets/icons/          # SVG icons (imported via vite-plugin-svgr)
├── components/
│   ├── CoreComponents/    # Feature-level components (Schedule, Appointments, Header, Footer)
│   └── UiComponents/      # Design system primitives (Button, Card, Text, Icon, InputDate, TimeButton…)
├── context/               # AppointmentsContext — shared state between Schedule and Appointments panels
├── hooks/                 # useAppointments — localStorage read/write logic
└── pages/                 # pageHome (main view), pageLayout (shell), pageComponents (design kitchen sink)
```

## Routes

| Path | Description |
|---|---|
| `/` | Main scheduling and agenda view |
| `/components` | UI component showcase |
