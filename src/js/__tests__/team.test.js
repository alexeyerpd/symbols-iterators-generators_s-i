import { Team } from '../team';

let testData;

beforeEach(() => {
  testData = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Лучник2',
      type: 'Bowman',
      health: 80,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Лучник3',
      type: 'Bowman',
      health: 90,
      level: 1,
      attack: 20,
      defence: 10,
    },
  ];
});

test('Team - characters equals testData', () => {
  const team = new Team(testData);
  expect(team.characters).toEqual(testData);
});

test('Team - should be added 4 character', () => {
  const team = new Team([...testData]);
  team.add({
    name: 'Лучник4',
    type: 'Bowman',
    health: 95,
    level: 1,
    attack: 20,
    defence: 10,
  });

  expect(team.characters).toEqual(
    testData.concat({
      name: 'Лучник4',
      type: 'Bowman',
      health: 95,
      level: 1,
      attack: 20,
      defence: 10,
    }),
  );
});

test('Team - should be iterated through next', () => {
  const team = new Team([...testData]);

  const count = team.characters.length;

  for (let i = 0; i < count; i++) {
    expect(team.next().value).toEqual(testData[i]);
  }

  expect(team.next()).toEqual({ value: undefined, done: true });
});

test('Team - should be iterated object', () => {
  const team = new Team([...testData]);

  expect([...team]).toEqual(testData);
});

test('Team - should be empty array', () => {
  const team = new Team();

  expect(team).toEqual({
    characters: [],
  });
});
