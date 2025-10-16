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
  "3": {
    "1": ["The Past", "The influences, events, or patterns from the past that shape the current situation."],
    "2": ["The Present", "Reflects the current circumstances, emotional state, or challenges."],
    "3": ["The Future", "Indicates possible outcomes, lessons, or directions the situation may move toward."]
  },
  "5": {
    "1": ["The Present", "Represents the current situation or the querent’s core energy."],
    "2": ["The Past", "Influences or experiences from the past that continue to affect the present."],
    "3": ["The Future", "The most likely outcome if things continue along the current path."],
    "4": ["The Root Cause", "The underlying reason behind the situation or a hidden factor influencing it."],
    "5": ["The Potential", "Offers deeper insight, guidance, or the key area for growth and focus."]
  },
  "10": {
    "1": ["The Present", "The heart of the matter or the current focus."],
    "2": ["The Challenge", "The main obstacle or influence—positive or negative—affecting the situation."],
    "3": ["The Foundation", "The underlying basis of the current situation and the recent past."],
    "4": ["The Unconscious", "Forces or feelings influencing the situation on an unconscious level."],
    "5": ["The Past", "Events from the distant past that continue to shape the present."],
    "6": ["The Future", "The most likely near-term outcome based on current circumstances."],
    "7": ["Inner Influences", "The querent’s internal thoughts, emotions, and attitudes about the situation."],
    "8": ["External Influences", "Outside factors or people that are impacting the situation."],
    "9": ["Hopes and Fears", "The querent’s greatest hopes and anxieties surrounding the outcome."],
    "10": ["The Outcome", "The probable result if the current path continues unchanged."]
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
            width="fill-parent"
            fontSize={28}
            lineHeight={42}>
            { card.meanings.join(", ") }
          </TextSubHeader>
        </AutoLayout>
        <AutoLayout
          direction="vertical"
          width="fill-parent"
          horizontalAlignItems="center"
          spacing={style.spacing.medium}
          padding={style.padding.medium}>
          <CardImage
            card={card}
            large
            onClick={async () => {
              await new Promise((resolve) => {
                figma.showUI(__html__, {width: 564, height: 564, themeColors: true});
              })
            }} />
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