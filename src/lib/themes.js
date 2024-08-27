import { initialColors } from "./colors";

export const initialThemes = [
  {
    id: "t1",
    name: "Default Theme",
    colors: [
      initialColors[0], // c1: primary main
      initialColors[1], // c2: primary dark
      initialColors[2], // c3: primary light
      initialColors[3], // c4: secondary main
      initialColors[4], // c5: secondary dark
    ],
  },
  {
    id: "t2",
    name: "2nd Theme",
    colors: [
      initialColors[5], // c6: secondary light
      initialColors[6], // c7: background main
      initialColors[7], // c8: background dark
      initialColors[8], // c9: background light
    ],
  },
];
