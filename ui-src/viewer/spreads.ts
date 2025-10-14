// spreads.ts
export type SpreadConfig = {
  count: number;
  layout: (i: number, total: number) => [number, number, number];
  scale: number;
};

export const spreads: Record<string, SpreadConfig> = {
  1: {
    count: 1,
    layout: (i) => [0, 0, 0],
    scale: 1.5,
  },
  3: {
    count: 3,
    layout: (i, total) => {
      const spacing = 1.2;
      const offset = (total - 1) * spacing * 0.5;
      return [i * spacing - offset, 0, 0];
    },
    scale: 1,
  },
  5: {
    count: 5,
    layout: (i, total) => {
      const spacing = 1.2;
      const offset = (total - 1) * spacing * 0.5;
      return [i * spacing - offset, 0, 0];
    },
    scale: 0.9,
  },
  10: {
    count: 10,
    layout: (i) => {
      // Rough Celtic Cross positions
      const positions: [number, number, number][] = [
        [0, 0, 0],       // 1
        [0, 0.8, 0],     // 2
        [-1.2, 0, 0],    // 3
        [1.2, 0, 0],     // 4
        [0, -0.8, 0],    // 5
        [0, -1.6, 0],    // 6
        [2.2, 1.2, 0],   // 7
        [2.2, 0.4, 0],   // 8
        [2.2, -0.4, 0],  // 9
        [2.2, -1.2, 0],  // 10
      ];
      return positions[i];
    },
    scale: 0.9,
  },
};