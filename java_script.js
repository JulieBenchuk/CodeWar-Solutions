function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let res = [];
    let i = 0;
    while (i < birds.length) {
      if (birds[i] != 'African' && birds[i] != 'Roman Tufted' && birds[i] != 'Toulouse'
         && birds[i] != 'Pilgrim' && birds[i] != 'Steinbacher') {
        res.push(birds[i]);
      }
      i++;
    }
    return res;
  };