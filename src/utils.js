const randomNum = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const findMatchingNeighbors = (tiles, position) => {
  // finds neighbors
  // return array of positions
  const color = getTileAtPosition(tiles, position);

  const relations = {
    top: position[0] - 1 >= 0 ? tiles[position[0] - 1][position[1]] : null,
    bottom: position[0] + 1 < tiles.length ? tiles[position[0] + 1][position[1]] : null,
    left: position[1] - 1 >= 0 ? tiles[position[0]][position[1] - 1] : null,
    right: position[1] + 1 < tiles[0].length ? tiles[position[0]][position[1] + 1] : null
  };
  const currentMatches = [];
  for (const direction in relations) {
    if (relations[direction] === color) {
      switch (direction) {
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
      default :
        return null;
      }
    }
  }
  return currentMatches;
};

const isMatched = (position, matches) => {
  return matches.some(match => match.join(',') === position.join(','));
};

const findMatches = (tiles, position, foundMatches = [position]) => {
  const neighbors = findMatchingNeighbors(tiles, position);
  // loop over array of matching neighbors
  neighbors.forEach(match => {
    // if the match is not already found, push to array
    if (!isMatched(match, foundMatches)) {
      foundMatches.push(match);
      // find matching neighbors from current position
      // filter those not already found
      // loop over unfound matches
      findMatchingNeighbors(tiles, match)
        .filter(m => !isMatched(m, foundMatches))
        .forEach(m => {
          // if match is not a neighbor of tile one step back, start recursion
          if (!isMatched(m, neighbors)) {
            findMatches(tiles, match, foundMatches);
          }
        });
    }
  });
  return foundMatches;
};

const getTileAtPosition = (tiles, position) => {
  return tiles[position[0]][position[1]];
};

const clearMatches = (tiles, matches) => {
  matches.forEach(match => {
    tiles[match[0]][match[1]] = getTileAtPosition(tiles, match) + 1;
  });
  return tiles;
};

export default {
  findMatches,
  clearMatches,
  randomNum
};
