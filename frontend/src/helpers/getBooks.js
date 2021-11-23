const RandomText = [
  "An elephant taking a shower",
  "Oh, the Places You'll Go!",
  "Mickey and Pluto at the beach",
  "The octopus from Finding Dory",
  "Oh, the Places You'll Go!",
  "Oh, the Places You'll Go!",
];

const PeppaText = [
  "",
  "It was a beautiful, sunny day at the Peppa pig house.",
  "'Good morning, George', Peppa said. 'Oink, Oink!', replied George. 'I can't wait to go outside and play!', said Peppa.",
  "Mommy pig has just finished making breakfast. She yelled up to her piglets, 'Peppa! George! Time for breakfast!' ",
  "While daddy pig reads the morning newspaper. 'Mmm, something smells good.'",
  "After breakfast, it was finally time to play. 'Oh no, it's raining...', she said.",
  "Good thing Peppa and George LOVE jumping up and down in muddy puddles!",
  "Oh my goodness! Wow! So much mud!. Splish, Splash, Splosh, Splish, Splash. The End.",
];
// const className = ((i + 1) % 2 ) === 0 ? "left" : "right"

export function getBooks(bookName) {
  if (bookName === "Random") {
    const Randomsvgs = require.context(
      `../assets/images/Random`,
      true,
      /\.svg$/
    );
    const RandomArr = Randomsvgs.keys().map((path) => ({
      path,
      file: Randomsvgs(path),
    }));
    const Random = [];

    for (let i = 0; i < RandomArr.length; i++) {
      const className = (i + 1) % 2 !== 0 ? "left" : "right";
      Random.push({
        path: RandomArr[i].path,
        text: RandomText[i],
        className: className,
      });
    }
    return Random;
  } else if (bookName === "Peppa") {
    const Peppasvgs = require.context(`../assets/images/Peppa`, true, /\.svg$/);
    const PeppaArr = Peppasvgs.keys().map((path) => ({
      path,
      file: Peppasvgs(path),
    }));
    const Peppa = [];

    for (let i = 0; i < PeppaArr.length; i++) {
      const className = (i + 1) % 2 !== 0 ? "left" : "right";
      Peppa.push({
        path: PeppaArr[i].path,
        text: PeppaText[i],
        className: className,
      });
    }
    return Peppa;
  }
}
