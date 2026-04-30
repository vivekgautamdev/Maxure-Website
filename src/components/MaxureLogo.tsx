import { useTheme } from "@/contexts/ThemeContext";
import logo from "./logo.svg";

interface MaxureLogoProps {
  className?: string;
  height?: number;
}

export default function MaxureLogo({ height = 32,  className = "h-7 w-auto object-contain" }: MaxureLogoProps) {
  const { isDark } = useTheme();

  return (
    <img
      src={logo}
      // height={height}
      className={className}
      alt="Maxure Logo"
    />
  );
}