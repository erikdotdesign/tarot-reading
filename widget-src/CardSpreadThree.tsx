import { State } from "./types";

import Card from "./Card";

const CardSpreadThree = ({
  cards,
  state,
  setState
}: {
  cards: number[];
  state: State;
  setState: (state: State) => void;
}) => {
  return (
    <>
      {
        cards.map((i) => (
          <Card
            key={`${state.timestamp}-${i}`}
            card={state.cards[i]}
            state={state}
            setState={setState} />
        ))
      }
    </>
  )
};

export default CardSpreadThree;