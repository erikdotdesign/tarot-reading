import CardImage from "./CardImage";

const { widget } = figma;
const { AutoLayout } = widget;

const DECK_SIZE = 3;
const SPACING = 4;

const Deck = ({
  drawCards,
  ...props
}: {
  drawCards: () => void;
} & WidgetJSX.WidgetJSXAutoLayoutProps) => {
  return (
    <AutoLayout
      name="Deck"
      width={120 + (DECK_SIZE * SPACING)}
      height={200 + (DECK_SIZE * SPACING)}
      onClick={drawCards}
      {...props}>
      {
        Array(DECK_SIZE).fill(0).map((v, i) => (
          <CardImage
            key={i}
            positioning="absolute"
            card="back"
            strokeAlign="inside"
            x={(-i * SPACING) + (DECK_SIZE * SPACING)}
            y={(-i * SPACING) + (DECK_SIZE * SPACING)} />
        ))
      }
    </AutoLayout>
  );
};

export default Deck;