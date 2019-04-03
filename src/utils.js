const randomNum = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const findMatchingNeighbors = (tiles, position) => {
  // takes in entire board
  // takes current position
  // finds neighbors
  // return array of positions
  const currPosition = tiles[position[0]][position[1]];

  const relations = {
    top: position[0] - 1 >= 0 ? tiles[position[0] - 1][position[1]] : null,
    bottom: position[0] + 1 < tiles.length ? tiles[position[0] + 1][position[1]] : null,
    left: position[1] - 1 >= 0 ? tiles[position[0]][position[1] - 1] : null,
    right: position[1] + 1 < tiles[0].length ? tiles[position[0]][position[1] + 1] : null,
  }

  return relations;
};

const isMatched = (position, matches) => {
  return matches.some(m => m.join(',') === position.join(','));
}

const hasMatchingNeighbor = (tiles, position) => {
  const neighbors = findMatchingNeighbors(tiles, position);
  const tileToCheck = tiles[position[0]][position[1]];
  return Object.values(neighbors).includes(tileToCheck)
}

const findMatches = (tiles, position, foundMatches = [position]) => {
  const color = tiles[position[0]][position[1]];
  const neighbors = findMatchingNeighbors(tiles, position);
  const currentMatches = [];
  for (let key in neighbors) {
    if (neighbors[key] === color) {
      switch (key) {
        case 'top':
          currentMatches.push([position[0] - 1, position[1]]);
          break;
        case 'bottom':
          currentMatches.push([position[0] + 1, position[1]]);
          break;
        case 'left':
          currentMatches.push([position[0], position[1] - 1]);
          break;
        case 'right':
          currentMatches.push([position[0], position[1] + 1]);
          break;
      }
    }
  }
  console.log({position, currentMatches})
  if (currentMatches.length > 0 && !isMatched(position, currentMatches)) {
    currentMatches.forEach(match => {
      if (!isMatched(match, foundMatches)) {
        foundMatches.push(match);
        if (hasMatchingNeighbor(tiles, match)) {
          findMatches(tiles, match, foundMatches)
        }
      }
    });
    console.log({position, foundMatches})
  }
  else {
    console.log('completed', foundMatches);
  }
};

export default {
  findMatchingNeighbors,
  findMatches,
  randomNum,
}