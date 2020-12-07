export interface Reference {
  id: string;
  title: string;
  description?: string;
  capacity: number;
  image?: {
    url: string;
    credit: string;
    creditUrl: string;
  };
  scroll?: boolean;
}

const references: Reference[] = [
  {
    id: 'people',
    title: 'People',
    description: 'Picture all of these people walking into your room...',
    capacity: 1,
    scroll: true,
  },
  {
    id: 'starbucks-generic',
    title: `Starbucks's`,
    description: `Everyone in the coffee shop, all eyes on you.`,
    capacity: 35,
  },
  {
    id: 'hanley-sk',
    title: `Hanley, Saskatchewan's`,
    description: `You just had an entire prairie town interact with your content! That's no small feat.`,
    capacity: 522,
  },
  {
    id: 'empire-state-building',
    title: `Empire State Building's`,
    description: `At one point this was the worlds tallest building. Everyone inside just cheered you on.`,
    capacity: 13500,
  },
  {
    id: 'madison-square-gaurden',
    title: `Madison Square Garden's`,
    description: `New York's most popular indoor arena, regularly sold out by sports teams such as the New York Rangers and performers like Elton John. Sing them a song, piano man.`,
    capacity: 20000,
    image: {
      url:
        'https://upload.wikimedia.org/wikipedia/commons/7/78/Knicks_playing_at_Madison_Square_Garden.jpg',
      credit: 'GoCuse44, Public domain, via Wikimedia Commons',
      creditUrl:
        'https://commons.wikimedia.org/wiki/File:Knicks_playing_at_Madison_Square_Garden.jpg',
    },
  },
  {
    id: 'indianapolis-motor-speedway',
    title: `Indianapolis Motor Speedway's`,
    capacity: 257327,
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ims2.jpg',
      credit:
        'Rdikeman, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Ims2.jpg',
    },
  },
  {
    id: 'victoria-bc',
    title: `Victoria, BC's`,
    capacity: 367770,
  },
  {
    id: 'vancouver-island',
    title: `Vancouver Island's`,
    description: `Congrats, that is an entire ISLAND of people. Bravo.`,
    capacity: 870297,
  },
  {
    id: 'dallas-texas',
    title: `Dallas Texas'`,
    capacity: 1343573,
  },
  {
    id: 'los-angelas',
    title: `Los Angelas'`,
    description: `Hollywood ain't got nothin' on you.`,
    capacity: 3979576,
  },
  {
    id: 'new-york',
    title: `New York's`,
    description: `You didn't just make it to Broadway. You are Broadway.`,
    capacity: 8336817,
  },
];

export default references;
