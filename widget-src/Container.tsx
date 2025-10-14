import style from "./style";

const { widget } = figma;
const { AutoLayout } = widget;

const Container = ({
  children,
  ...props
}: {
  children: any;
} & WidgetJSX.WidgetJSXAutoLayoutProps) => {
  return (
    <AutoLayout
      fill={style.color.white}
      strokeWidth={style.strokeWidth.large}
      stroke={style.color.black}
      strokeAlign="inside"
      padding={style.padding.medium}
      {...props}>
      {...children}
    </AutoLayout>
  );
};

export default Container;