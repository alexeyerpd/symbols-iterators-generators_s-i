import { Team } from './js/team';

const team = new Team([
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
]);

window.team = team;
