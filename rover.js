const Command = require("./command")
const Message = require('./message.js');




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
   receiveMessage(message) {
      const commands = message.commands;
      let response = {
         message: message.name,
         results: []
      };
      for (let i = 0; i < commands.length; i++) {
      let result = {}
         if ()
response.results.push(result)
      }
      return response;

   }
}




let rover = new Rover(100);
let commands = [
   new Command('MOVE', 4321),
   new Command('STATUS_CHECK'),
   new Command('MODE_CHANGE', 'LOW_POWER'),
   new Command('MOVE', 3579),
   new Command('STATUS_CHECK')
];
let message = new Message('TA power', commands);
let response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));

module.exports = Rover;