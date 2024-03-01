class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      if (!position) {
        throw Error("Position required.");
      }
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   // return an object
   // wihtin the object there will be two properties
   //  iterate through the commands inside the message.commands array
//    receiveMessage(message) {
// const commands = message.commands;
// for (let i = 0; i < commands.length; i++) {
//    //    message = {
//    //       message: Message.name,
//    //       results: Message.commands
//       }
}

module.exports = Rover;