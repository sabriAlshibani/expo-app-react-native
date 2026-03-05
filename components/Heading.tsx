import { Text } from "react-native";
interface HeadingProps {
  label: string;
  className?: string;
}
function Heading({ label, className }: HeadingProps) {
  return (
    <Text
      className={`text-4xl ${className}`}
      style={{ fontFamily: "appFontBold" }}
    >
      {label}
    </Text>
  );
}

export default Heading;
