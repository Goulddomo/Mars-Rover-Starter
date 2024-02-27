class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      if (!position) {
        throw Error("Position required.");
      }
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
}

module.exports = Rover;