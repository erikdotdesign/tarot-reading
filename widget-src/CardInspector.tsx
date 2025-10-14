import style from "./style";
import { State } from "./types";

import Container from "./Container";
import ContainerHeader from "./ContainerHeader";
import ContainerBody from "./ContainerBody";
import TextHeader from "./TextHeader";
import TextSubHeader from "./TextSubHeader";
import TextBody from "./TextBody";

const { widget } = figma;

const SPEAD_INFO = {
  3: {
    1: ["Past", "The influences, events, or patterns from the past that shape the current situation."],
    2: ["Present", "Reflects the current circumstances, emotional state, or challenges."],
    3: ["Future", "Indicates possible outcomes, lessons, or directions the situation may move toward."]
  },
  5: {
    1: ["Present", "The current situation or the querent's core energy."],
    2: ["Past", "Influences from the past that are still affecting the present."],
    3: ["Future", "The most likely outcome if things continue on the current path."],
    4: ["Root Cause", "The reason behind the current situation or a hidden aspect of the problem."],
    5: ["Potential", "A deeper insight into the situation, offering advice, potential, or the overriding area for focus."]
  },
  10: {
    1: ["Present", "The heart of the issue or the current focus."],
    2: ["Challenge", "What's affecting the present situation, both positively and negatively."],
    3: ["Foundation", "The basis of the current situation and the more immediate past."],
    4: ["Unconscious", "Something that is affecting the situation on an unconscious level."],
    5: ["Past", "The distant past and its influence on the present"],
    6: ["Future", "The most likely near-term future based on the current trajectory."],
    7: ["Inner Influences", "The querent's internal state, thoughts, and feelings about the situation."],
    8: ["External Influences", "The external factors or influences outside of the querent's control that are still impacting the situation."],
    9: ["Hopes and Fears", "The querent's greatest hopes and fears regarding the outcome."],
    10:["Outcome", "The likely outcome if things continue on their current path."]
  }
}

const CardInspector = ({
  state,
  setState
}: {
  state: State;
  setState: (state: State) => void;
}) => {
  if (!state.selected) return;

  const card = state.selected;
  const cardNumber = state.cards.findIndex(c => c.name === card.name) + 1;
  const spread = (SPEAD_INFO as any)[state.spread];
  const cardInfo = spread[cardNumber];
  console.log(card);

  return (
    <Container
      name="Board"
      width={700}
      height={1400}
      maxHeight={1400}
      direction="vertical">
      <ContainerHeader
        width="fill-parent"
        direction="vertical"
        horizontalAlignItems="center">
        <TextHeader
          horizontalAlignText="center"
          width="fill-parent">
          {`Card ${cardNumber} - ${cardInfo[0]}`}
        </TextHeader>
        <TextSubHeader>
          { cardInfo[1] }
        </TextSubHeader>
      </ContainerHeader>
      <ContainerBody
        width="fill-parent"
        height="fill-parent"
        direction="vertical">
        <TextHeader
          horizontalAlignText="center"
          width="fill-parent">
          { card.name }
        </TextHeader>
        <TextSubHeader
          horizontalAlignText="center"
          width="fill-parent">
          { card.meanings.join(", ") }
        </TextSubHeader>
        <TextBody
          horizontalAlignText="center"
          width="fill-parent">
          { card.description }
        </TextBody>
      </ContainerBody>
    </Container>
  );
};

export default CardInspector;