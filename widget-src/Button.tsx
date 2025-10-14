import style from "./style";

import TextSubHeader from "./TextSubHeader";

const { widget } = figma;
const { AutoLayout } = widget;

const Button = ({
  active = false,
  children,
  ...props
}: {
  active?: boolean,
  children: any;
} & WidgetJSX.WidgetJSXAutoLayoutProps) => {
  return (
    <AutoLayout
      verticalAlignItems="center"
      horizontalAlignItems="center"
      fill={active ? style.color.red : style.color.bg.z1}
      strokeWidth={style.strokeWidth.medium}
      stroke={style.color.black}
      strokeAlign="outside"
      padding={{
        vertical: style.padding.small,
        horizontal: style.padding.shmedium
      }}
      {...props}>
      <TextSubHeader>
        {...children}
      </TextSubHeader>
    </AutoLayout>
  );
};

export default Button;