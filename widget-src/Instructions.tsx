import style from "./style";

import Container from "./Container";
import ContainerHeader from "./ContainerHeader";
import ContainerBody from "./ContainerBody";
import TextHeader from "./TextHeader";
import InstructionItem from "./InstructionItem";

const { widget } = figma;
const { AutoLayout } = widget;

const INSTRUCTIONS = [
  "Input a question",
  "Select the reading detail",
  "Draw the cards",
  "Read each card in order",
  "Consider the outcome"
];

const Instructions = () => {
  const splitIntoColumns = (arr: string[], cols = 2) => {
    const size = Math.ceil(arr.length / cols);
    return Array.from({ length: cols }, (_, i) => arr.slice(i * size, (i + 1) * size));
  };
  console.log(splitIntoColumns(INSTRUCTIONS));
  return (
    <AutoLayout
      width="fill-parent"
      height="fill-parent"
      horizontalAlignItems="center"
      verticalAlignItems="center">
      <Container
        name="Instructions"
        width={816}
        height={816}
        direction="vertical"
        padding={style.padding.shmedium}>
        <ContainerHeader
          width="fill-parent"
          direction="vertical"
          horizontalAlignItems="center"
          verticalAlignItems="center">
          <TextHeader
            horizontalAlignText="center"
            verticalAlignText="center"
            width="fill-parent">
            Instructions
          </TextHeader>
        </ContainerHeader>
        <ContainerBody
          width="fill-parent"
          height="fill-parent"
          direction="horizontal"
          spacing={style.spacing.xLarge}>
          <>
            {
              splitIntoColumns(INSTRUCTIONS).map((column, ci) => (
                <AutoLayout 
                  key={ci} 
                  direction="vertical" 
                  spacing={style.spacing.xLarge}>
                  {column.map((instruction, i) => {
                    const globalIndex = ci * Math.ceil(INSTRUCTIONS.length / 2) + i;
                    return (
                      <InstructionItem
                        key={instruction}
                        instruction={instruction}
                        index={globalIndex} />
                    );
                  })}
                </AutoLayout>
              ))
            }
          </>
        </ContainerBody>
      </Container>
    </AutoLayout>
  );
};

export default Instructions;