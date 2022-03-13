function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return an array containing all of the strings in the input array except those that match strings in geese
    var newBirds = [];
    for(var i = 0; i<birds.length; i++) {
    if (birds[i]!=geese[0] && birds[i]!=geese[1] && birds[i]!=geese[2] && birds[i]!=geese[3] && birds[i]!=geese[4]) {
      newBirds.push(birds[i]);
    }
    }
    return newBirds;
  };
  