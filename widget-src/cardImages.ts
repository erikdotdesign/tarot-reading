import { BaseTarotCard, TarotCardSuite } from "./types";
import cardImageMap from "./cardImages.json";

export type CardImageMap = Record<string, string>;

export const getCardImage = (card: BaseTarotCard | "back"): string => {
  if (card === "back") return (cardImageMap as CardImageMap).back;
  const prefix = card.type === "minor"
    ? (card.suit as TarotCardSuite).slice(0, 2)
    : "ma";
  const key = `${prefix}-${card.value}`;
  return (cardImageMap as CardImageMap)[key];
};