import style from "./style";

const { widget } = figma;
const { Text } = widget;

const TextHeader = ({
  children,
  ...props
}: {
  children: any;
} & WidgetJSX.WidgetJSXTextProps) => {
  return (
    <Text
      {...style.textStyle.header}
      {...props}>
      {...children}
    </Text>
  );
};

export default TextHeader;