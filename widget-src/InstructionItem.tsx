import style from "./style";
import { toRoman } from "./helpers";

import Container from "./Container";
import ContainerHeader from "./ContainerHeader";
import TextHeader from "./TextHeader";
import TextSubHeader from "./TextSubHeader";
import TextBody from "./TextBody";

const { widget } = figma;
const { AutoLayout } = widget;

const InstructionItem = ({
  instruction,
  index
}: {
  instruction: string;
  index: number
}) => {
  return (
    <AutoLayout
      width="fill-parent"
      verticalAlignItems="center"
      spacing={style.spacing.medium}>
      <Container 
        strokeWidth={style.strokeWidth.small}
        padding={style.padding.xSmall}>
        <ContainerHeader 
          strokeWidth={style.strokeWidth.small}
          padding={0}>
          <TextHeader
            horizontalAlignText="center"
            verticalAlignText="center"
            width={72}
            height={72}>
            {toRoman(index + 1)}
          </TextHeader>
        </ContainerHeader>
      </Container>
      <AutoLayout 
        direction="vertical"
        spacing={style.spacing.xSmall}>
        <TextSubHeader>
          {`Step ${index + 1}`}
        </TextSubHeader>
        <TextBody>
          { instruction }
        </TextBody>
      </AutoLayout>
    </AutoLayout>
  );
};

export default InstructionItem;