export type TarotCardType = "major" | "minor";

export type TarotCardSuite = "pentacles" | "wands" | "swords" | "cups";

export type BaseTarotCard = {
  name: string;
  symbol: string;
  meanings: string[];
  description: string;
  type: TarotCardType;
  value: number;
  suit: TarotCardSuite | null;
};

export type TarotCard = BaseTarotCard & {
  image: string;
  reversed: boolean;
};

export type CardDrawSpread = 1 | 3 | 5 | 10;

export type State = {
  question: string;
  spread: CardDrawSpread;
  cards: TarotCard[] | null;
  timestamp: number | null;
  selected: TarotCard | null;
};