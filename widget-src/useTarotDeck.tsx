import TarotDeck from "./TarotDeck";
import { State } from "./types";

let tarotDeck: TarotDeck | null = null;

const useTarotDeck = ({
  state, 
  setState
}: {
  state: State;
  setState: (state: State) => void;
}) => {
  if (!tarotDeck) tarotDeck = new TarotDeck();

  const drawCards = () => {
    if (!tarotDeck) return;
    const newCards = tarotDeck.drawCards(state.spread);
    setState({
      ...state, 
      selected: null,
      cards: newCards,
      timestamp: Date.now()
    });
  }

  return { drawCards };
};

export default useTarotDeck;