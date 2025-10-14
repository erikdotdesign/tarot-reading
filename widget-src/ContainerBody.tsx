import style from "./style";

const { widget } = figma;
const { AutoLayout } = widget;

const ContainerBody = ({
  children,
  ...props
}: {
  children: any;
} & WidgetJSX.WidgetJSXAutoLayoutProps) => {
  return (
    <AutoLayout
      fill={style.color.bg.z1}
      strokeWidth={style.strokeWidth.medium}
      stroke={style.color.black}
      strokeAlign="center"
      padding={style.padding.large}
      {...props}>
      {...children}
    </AutoLayout>
  );
};

export default ContainerBody;