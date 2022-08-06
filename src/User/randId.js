function rand(value) {
    return Math.floor(Math.random() * value);
  }
  
export function randChar() {
    const character = [
      "Iron Man",
      "Captain America",
      "Captain Marvel",
      "Hulk",
      "Spider Man",
      "Wolverine",
    ];
    return character[rand(character.length)];
  }