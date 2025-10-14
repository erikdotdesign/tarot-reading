import style from "./style";
import { State } from "./types";

import Container from "./Container";
import ContainerHeader from "./ContainerHeader";
import ContainerBody from "./ContainerBody";
import TextHeader from "./TextHeader";
import QuestionInput from "./QuestionInput";
import ReadingDetail from "./ReadingDetail";
import Deck from "./Deck";

const { widget } = figma;

const Board = ({
  state,
  setState,
  drawCards
}: {
  state: State;
  setState: (state: State) => void;
  drawCards: () => void;
}) => {
  return (
    <Container
      name="Board"
      width={1400}
      height={1400}
      direction="vertical">
      <ContainerHeader
        width="fill-parent"
        direction="vertical"
        horizontalAlignItems="center">
        <TextHeader
          horizontalAlignText="center"
          width="fill-parent">
          Tarot Reading
        </TextHeader>
        <QuestionInput
          state={state}
          setState={setState} />
        <ReadingDetail
          state={state}
          setState={setState} />
      </ContainerHeader>
      <ContainerBody
        width="fill-parent"
        height="fill-parent">
        <Deck 
          drawCards={drawCards}
          positioning="absolute"
          x={48}
          y={740} />
      </ContainerBody>
    </Container>
  );
};

export default Board;