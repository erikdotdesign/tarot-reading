import style from "./style";

const { widget } = figma;
const { Text } = widget;

const TextBody = ({
  children,
  ...props
}: {
  children: any;
} & WidgetJSX.WidgetJSXTextProps) => {
  return (
    <Text
      {...style.textStyle.body}
      {...props}>
      {...children}
    </Text>
  );
};

export default TextBody;