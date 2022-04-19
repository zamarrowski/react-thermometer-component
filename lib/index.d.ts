import { CSSProperties } from 'react'

interface ThermometerProps {
  theme?: "light" | "dark",
  value?: number,
  max?: number,
  steps?: number,
  format?: string,
  size?: "large" | "small" | "normal",
  height?: number
}

export default function Thermometer(props: ThermometerProps): JSX.Element;
