/*eslint-disable*/

const teams = ['RED', 'GREEN', 'BLUE', 'YELLOW'];

const createBlocks = team => {
  return blocks(team);
};

const blocks = team => {
  return [
    {
      id: 'i1',
      grid: { x: 1, y: 1 },
      pieces: [{ x: 1, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'i2',
      grid: { x: 1, y: 2 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'i3',
      grid: { x: 1, y: 3 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'i4',
      grid: { x: 1, y: 4 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'i5',
      grid: { x: 1, y: 5 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'v3',
      grid: { x: 2, y: 2 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'z4',
      grid: { x: 3, y: 2 },
      pieces: [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'o4',
      grid: { x: 2, y: 2 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 't4',
      grid: { x: 3, y: 2 },
      pieces: [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 2 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 't',
      grid: { x: 3, y: 3 },
      pieces: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 3 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'f',
      grid: { x: 3, y: 3 },
      pieces: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 2 }, { x: 3, y: 3 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'x',
      grid: { x: 3, y: 3 },
      pieces: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 2 }, { x: 3, y: 2 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'u',
      grid: { x: 3, y: 2 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'p',
      grid: { x: 2, y: 3 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'n',
      grid: { x: 2, y: 4 },
      pieces: [{ x: 1, y: 4 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'y',
      grid: { x: 2, y: 4 },
      pieces: [{ x: 1, y: 4 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 1 }, { x: 2, y: 3 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'l4',
      grid: { x: 2, y: 3 },
      pieces: [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'l5',
      grid: { x: 2, y: 4 },
      pieces: [{ x: 1, y: 4 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'v5',
      grid: { x: 3, y: 3 },
      pieces: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'w',
      grid: { x: 3, y: 3 },
      pieces: [{ x: 2, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
    {
      id: 'z5',
      grid: { x: 3, y: 3 },
      pieces: [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      x: 0,
      y: 0,
      team,
    },
  ];
};

module.exports = {
  createBlocks,
  teams,
};
