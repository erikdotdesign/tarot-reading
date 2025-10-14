// cardImages.ts
import { BaseTarotCard } from "../widget-src/types";

// --- Major Arcana (0–21) ---
import ma0 from "./images/ma-0.webp";
import ma1 from "./images/ma-1.webp";
import ma2 from "./images/ma-2.webp";
import ma3 from "./images/ma-3.webp";
import ma4 from "./images/ma-4.webp";
import ma5 from "./images/ma-5.webp";
import ma6 from "./images/ma-6.webp";
import ma7 from "./images/ma-7.webp";
import ma8 from "./images/ma-8.webp";
import ma9 from "./images/ma-9.webp";
import ma10 from "./images/ma-10.webp";
import ma11 from "./images/ma-11.webp";
import ma12 from "./images/ma-12.webp";
import ma13 from "./images/ma-13.webp";
import ma14 from "./images/ma-14.webp";
import ma15 from "./images/ma-15.webp";
import ma16 from "./images/ma-16.webp";
import ma17 from "./images/ma-17.webp";
import ma18 from "./images/ma-18.webp";
import ma19 from "./images/ma-19.webp";
import ma20 from "./images/ma-20.webp";
import ma21 from "./images/ma-21.webp";

// --- Minor Arcana - Cups - (1–14) ---
import cu1 from "./images/cu-1.webp";
import cu2 from "./images/cu-2.webp";
import cu3 from "./images/cu-3.webp";
import cu4 from "./images/cu-4.webp";
import cu5 from "./images/cu-5.webp";
import cu6 from "./images/cu-6.webp";
import cu7 from "./images/cu-7.webp";
import cu8 from "./images/cu-8.webp";
import cu9 from "./images/cu-9.webp";
import cu10 from "./images/cu-10.webp";
import cu11 from "./images/cu-11.webp";
import cu12 from "./images/cu-12.webp";
import cu13 from "./images/cu-13.webp";
import cu14 from "./images/cu-14.webp";

// --- Minor Arcana - Pentacles - (1–14) ---
import pe1 from "./images/pe-1.webp";
import pe2 from "./images/pe-2.webp";
import pe3 from "./images/pe-3.webp";
import pe4 from "./images/pe-4.webp";
import pe5 from "./images/pe-5.webp";
import pe6 from "./images/pe-6.webp";
import pe7 from "./images/pe-7.webp";
import pe8 from "./images/pe-8.webp";
import pe9 from "./images/pe-9.webp";
import pe10 from "./images/pe-10.webp";
import pe11 from "./images/pe-11.webp";
import pe12 from "./images/pe-12.webp";
import pe13 from "./images/pe-13.webp";
import pe14 from "./images/pe-14.webp";

// --- Minor Arcana - Swords - (1–14) ---
import sw1 from "./images/sw-1.webp";
import sw2 from "./images/sw-2.webp";
import sw3 from "./images/sw-3.webp";
import sw4 from "./images/sw-4.webp";
import sw5 from "./images/sw-5.webp";
import sw6 from "./images/sw-6.webp";
import sw7 from "./images/sw-7.webp";
import sw8 from "./images/sw-8.webp";
import sw9 from "./images/sw-9.webp";
import sw10 from "./images/sw-10.webp";
import sw11 from "./images/sw-11.webp";
import sw12 from "./images/sw-12.webp";
import sw13 from "./images/sw-13.webp";
import sw14 from "./images/sw-14.webp";

// --- Minor Arcana - Wands - (1–14) ---
import wa1 from "./images/wa-1.webp";
import wa2 from "./images/wa-2.webp";
import wa3 from "./images/wa-3.webp";
import wa4 from "./images/wa-4.webp";
import wa5 from "./images/wa-5.webp";
import wa6 from "./images/wa-6.webp";
import wa7 from "./images/wa-7.webp";
import wa8 from "./images/wa-8.webp";
import wa9 from "./images/wa-9.webp";
import wa10 from "./images/wa-10.webp";
import wa11 from "./images/wa-11.webp";
import wa12 from "./images/wa-12.webp";
import wa13 from "./images/wa-13.webp";
import wa14 from "./images/wa-14.webp";

// --- Deck Map ---
export const cardImageMap: Record<string, string> = {
  // Major
  "0-ma": ma0,
  "1-ma": ma1,
  "2-ma": ma2,
  "3-ma": ma3,
  "4-ma": ma4,
  "5-ma": ma5,
  "6-ma": ma6,
  "7-ma": ma7,
  "8-ma": ma8,
  "9-ma": ma9,
  "10-ma": ma10,
  "11-ma": ma11,
  "12-ma": ma12,
  "13-ma": ma13,
  "14-ma": ma14,
  "15-ma": ma15,
  "16-ma": ma16,
  "17-ma": ma17,
  "18-ma": ma18,
  "19-ma": ma19,
  "20-ma": ma20,
  "21-ma": ma21,

  // Cups
  "1-cu": cu1,
  "2-cu": cu2,
  "3-cu": cu3,
  "4-cu": cu4,
  "5-cu": cu5,
  "6-cu": cu6,
  "7-cu": cu7,
  "8-cu": cu8,
  "9-cu": cu9,
  "10-cu": cu10,
  "11-cu": cu11,
  "12-cu": cu12,
  "13-cu": cu13,
  "14-cu": cu14,

  // Pentacles
  "1-pe": pe1,
  "2-pe": pe2,
  "3-pe": pe3,
  "4-pe": pe4,
  "5-pe": pe5,
  "6-pe": pe6,
  "7-pe": pe7,
  "8-pe": pe8,
  "9-pe": pe9,
  "10-pe": pe10,
  "11-pe": pe11,
  "12-pe": pe12,
  "13-pe": pe13,
  "14-pe": pe14,

  // Swords
  "1-sw": sw1,
  "2-sw": sw2,
  "3-sw": sw3,
  "4-sw": sw4,
  "5-sw": sw5,
  "6-sw": sw6,
  "7-sw": sw7,
  "8-sw": sw8,
  "9-sw": sw9,
  "10-sw": sw10,
  "11-sw": sw11,
  "12-sw": sw12,
  "13-sw": sw13,
  "14-sw": sw14,

  // Wands
  "1-wa": wa1,
  "2-wa": wa2,
  "3-wa": wa3,
  "4-wa": wa4,
  "5-wa": wa5,
  "6-wa": wa6,
  "7-wa": wa7,
  "8-wa": wa8,
  "9-wa": wa9,
  "10-wa": wa10,
  "11-wa": wa11,
  "12-wa": wa12,
  "13-wa": wa13,
  "14-wa": wa14,
};

// --- Helper function ---
export const getCardImage = (card: BaseTarotCard): string => {
  let prefix;
  switch (card.suit) {
    case "cups":
    case "pentacles":
    case "swords":
    case "wands":
      prefix = card.suit.slice(0, 2);
      break;
    default:
      prefix = "ma";
      break;
  }
  const key = `${card.value}-${prefix}`;
  return cardImageMap[key];
};