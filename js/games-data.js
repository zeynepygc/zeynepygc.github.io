// Add one object per game. Copy the block below and edit it for each game you want to show.
//
// thumb:      path to a screenshot/GIF shown before the game loads, e.g. "assets/thumbnails/my-game.jpg"
// buildPath:  path to the *exported Unity WebGL build's own index.html*.
//             Export your game from Unity (File > Build Settings > WebGL > Build),
//             then drop the whole output folder into /games, e.g. /games/my-game/index.html
// links:      any of these can be omitted — just delete the line you don't need

const GAMES = [
  {
    title: "Town Rebel",
    tagline: "An endless punk running through a low-poly town, jumping to survive.",
    description:
      "The character runs automatically while he has to jump over incoming obstacles, with a seamlessly looping background, dedicated run/jump/death animations, and sound and particle effects tied to each action.",
    tags: ["Unity", "C#", "3D"],
    thumb: "assets/thumbnails/rebel.png",
    buildPath: "games/rebel/index.html",
    links: {
      github: "https://github.com/zeynepygc/TownRebel",
    },
  },

  {
    title: "Temple Tales",
    tagline: "Walk through a 3D Indian temple and receive blessings from three sacred deities.",
    description:
      "A 3D walkthrough built for Unity's Junior Programmer pathway, where the player approaches three statues — Shiva Lingam, Radha-Krishna, and Ganesh — and interacts with each to receive its blessing. Built specifically to demonstrate all four pillars of object-oriented programming, from inheritance across the statue classes to abstraction in how each interaction is presented.",
    tags: ["Unity", "C#", "3D", "OOP"],
    thumb: "assets/thumbnails/temple.png",
    buildPath: "games/temple/index.html",
    links: {
      github: "https://github.com/zeynepygc/OOP-Theory",
    },
  },


  // {
  //   title: "Second Game",
  //   tagline: "...",
  //   description: "...",
  //   tags: ["Unity", "C#", "Puzzle"],
  //   thumb: "assets/thumbnails/second-game.jpg",
  //   buildPath: "games/second-game/index.html",
  //   links: { github: "https://github.com/zeynepygc/second-game" },
  // },
     
];
