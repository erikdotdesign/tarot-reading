import style from "./style";
import { State } from "./types";

import Container from "./Container";
import ContainerHeader from "./ContainerHeader";
import ContainerBody from "./ContainerBody";
import TextHeader from "./TextHeader";
import TextSubHeader from "./TextSubHeader";
import TextBody from "./TextBody";
import CardImage from "./CardImage";

const { widget } = figma;
const { AutoLayout } = widget;

const SPEAD_INFO = {
  3: {
    1: ["The Past", "The influences, events, or patterns from the past that shape the current situation."],
    2: ["The Present", "Reflects the current circumstances, emotional state, or challenges."],
    3: ["The Future", "Indicates possible outcomes, lessons, or directions the situation may move toward."]
  },
  5: {
    1: ["The Present", "The current situation or the querent's core energy."],
    2: ["The Past", "Influences from the past that are still affecting the present."],
    3: ["The Future", "The most likely outcome if things continue on the current path."],
    4: ["The Root Cause", "The reason behind the current situation or a hidden aspect of the problem."],
    5: ["The Potential", "A deeper insight into the situation, offering advice, potential, or the overriding area for focus."]
  },
  10: {
    1: ["The Present", "The heart of the issue or the current focus."],
    2: ["The Challenge", "What's affecting the present situation, both positively and negatively."],
    3: ["The Foundation", "The basis of the current situation and the more immediate past."],
    4: ["The Unconscious", "Something that is affecting the situation on an unconscious level."],
    5: ["The Past", "The distant past and its influence on the present."],
    6: ["The Future", "The most likely near-term future based on the current trajectory."],
    7: ["Inner Influences", "The querent's internal state, thoughts, and feelings about the situation."],
    8: ["External Influences", "The external factors or influences outside of the querent's control that are still impacting the situation."],
    9: ["Hopes and Fears", "The querent's greatest hopes and fears regarding the outcome."],
    10:["The Outcome", "The likely outcome if things continue on their current path."]
  }
};

const CardInspector = ({
  state
}: {
  state: State;
}) => {
  if (!state.selected) return;

  const card = state.selected;
  const cardNumber = state.cards.findIndex(c => c.name === card.name) + 1;
  const spread = (SPEAD_INFO as any)[state.spread];
  const cardInfo = spread[cardNumber];

  return (
    cardInfo &&
    <Container
      name="Card Inspector"
      width="hug-contents"
      direction="vertical"
      height="hug-contents"
      minWidth={700}
      maxWidth={700}>
      <ContainerHeader
        width="fill-parent"
        direction="vertical"
        horizontalAlignItems="center"
        spacing={style.spacing.shmedium}
        height="hug-contents">
        <TextSubHeader
          width="fill-parent"
          horizontalAlignText="center"
          textCase="upper"
          fill={style.color.text.lighter}>
          {`Card ${cardNumber}`}
        </TextSubHeader>
        <TextHeader
          horizontalAlignText="center"
          width="fill-parent">
          {cardInfo[0]}
        </TextHeader>
        <TextSubHeader
          width="fill-parent"
          horizontalAlignText="center">
          { cardInfo[1] }
        </TextSubHeader>
      </ContainerHeader>
      <ContainerBody
        width="fill-parent"
        height="hug-contents"
        direction="vertical"
        horizontalAlignItems="center"
        spacing={style.spacing.large}
        padding={{
          horizontal: style.padding.large,
          vertical: style.padding.large,
          bottom: style.padding.xLarge
        }}>
        <AutoLayout
          direction="vertical"
          width="fill-parent"
          height="hug-contents"
          spacing={style.spacing.shmedium}>
          <TextSubHeader
            width="fill-parent"
            horizontalAlignText="center"
            textCase="upper"
            fill={style.color.text.lighter}>
            {card.type}
          </TextSubHeader>
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
        </AutoLayout>
        <AutoLayout
          direction="vertical"
          width="fill-parent"
          horizontalAlignItems="center"
          fill={style.color.red}
          spacing={style.spacing.medium}
          padding={72}
          // stroke={style.color.black}
          // strokeWidth={style.strokeWidth.large}
          // strokeAlign="inside"
          onClick={async () => {
            await new Promise((resolve) => {
              figma.showUI(__html__, {width: 564, height: 564, themeColors: true});
            })
          }}>
          <CardImage
            card={card}
            display />
        </AutoLayout> 
        <AutoLayout
          width="fill-parent"
          height="hug-contents">
          <TextBody
            horizontalAlignText="center"
            width="fill-parent"
            fontSize={style.textStyle.subHeader.fontSize}
            lineHeight={style.textStyle.subHeader.lineHeight}
            fill={style.color.text.light}
            italic={true}>
            { card.description }
          </TextBody>
        </AutoLayout>
      </ContainerBody>
    </Container>
  );
};

export default CardInspector;