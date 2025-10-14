import style from "./style";

const { widget } = figma;
const { Text } = widget;

const TextSubHeader = ({
  children,
  ...props
}: {
  children: any;
} & WidgetJSX.WidgetJSXTextProps) => {
  return (
    <Text
      {...style.textStyle.subHeader}
      {...props}>
      {...children}
    </Text>
  );
};

export default TextSubHeader;