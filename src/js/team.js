export class Team {
  constructor(characters = []) {
    this.characters = characters;
  }

  add(character) {
    this.characters.push(character);
  }

  next() {
    const character = this.characters.shift();

    return {
      value: character,
      done: !character,
    };
  }

  [Symbol.iterator]() {
    return {
      next: this.next.bind(this),
    };
  }
}
