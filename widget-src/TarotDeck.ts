import { BaseTarotCard, TarotCard } from "./types";
import major from "./deck/major.json";
import pentacles from "./deck/pentacles.json";
import wands from "./deck/wands.json";
import swords from "./deck/swords.json";
import cups from "./deck/cups.json";

class TarotDeck {
  private deck: BaseTarotCard[];
  private reversedProbability: number;

  constructor(reversedProbability = 0.3) {
    this.reversedProbability = reversedProbability;

    // Merge all cards
    this.deck = [...major, ...pentacles, ...wands, ...swords, ...cups] as BaseTarotCard[];
  }

  private shuffleArray<T>(array: T[]): T[] {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  public drawCards(count = 3): TarotCard[] {
    // Group cards by base name
    const cardGroups = new Map<string, typeof this.deck[0][]>();
    this.deck.forEach((card) => {
      const baseName = card.name.replace(/ Reversed$/, "");
      if (!cardGroups.has(baseName)) cardGroups.set(baseName, []);
      cardGroups.get(baseName)!.push(card);
    });

    // Pick one variant per card with reversed bias
    const uniqueCards = Array.from(cardGroups.values()).map((variants) => {
      const upright = variants.find(c => !c.name.includes("Reversed"))!;
      const reversed = variants.find(c => c.name.includes("Reversed"))!;
      return Math.random() < this.reversedProbability ? reversed : upright;
    });

    // Shuffle the unique cards
    const shuffled = this.shuffleArray(uniqueCards);

    // Draw requested number of cards
    return shuffled.slice(0, count).map((card) => ({
      ...card,
      // image: cardImageHashes[card.name],
      reversed: card.name.includes("Reversed")
    })) as TarotCard[];
  }
}

export default TarotDeck;