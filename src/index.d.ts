  interface ThermometerProps {
    theme?: "light" | "dark",
    value?: number,
    max?: number,
    steps?: number,
    format?: `°C` | `°F`,
    size?: "large" | "small" | "normal",
    height?: number
  }
  export default function Thermometer(props: ThermometerProps): React.ReactNode;
