import { useTheme } from "@/contexts/ThemeContext";

interface MaxureLogoProps {
  className?: string;
  height?: number;
}

// SVG-based Maxure logo matching the brand files
// Colored version for light mode, dark version for dark mode

export function MaxureLogoColored({ height = 36, className = "" }: MaxureLogoProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 400 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#29ABE2" />
          <stop offset="30%" stopColor="#5B5BD6" />
          <stop offset="60%" stopColor="#9B59B6" />
          <stop offset="80%" stopColor="#E91E8C" />
          <stop offset="100%" stopColor="#F4733A" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="62"
        fontFamily="'Syne', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill="url(#mGrad)"
        letterSpacing="-2"
      >
        MAXURE
      </text>
    </svg>
  );
}

export function MaxureLogoDark({ height = 36, className = "" }: MaxureLogoProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 400 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="62"
        fontFamily="'Syne', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill="#1C2340"
        letterSpacing="-2"
      >
        MAXURE
      </text>
    </svg>
  );
}

export function MaxureLogoWhite({ height = 36, className = "" }: MaxureLogoProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 400 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="62"
        fontFamily="'Syne', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill="#FFFFFF"
        letterSpacing="-2"
      >
        MAXURE
      </text>
    </svg>
  );
}

// Auto logo that picks correct version based on theme
export default function MaxureLogo({ height = 32, className = "" }: MaxureLogoProps) {
  const { isDark } = useTheme();
  return isDark ? (
    <MaxureLogoWhite height={height} className={className} />
  ) : (
    <MaxureLogoColored height={height} className={className} />
  );
}
