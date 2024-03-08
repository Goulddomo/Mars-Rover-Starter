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

   receiveMessage(message) {
      // TEST 8 - recieve message from Message and push to response.message

      const commands = message.commands;
      let response = {
         message: message.name,
         results: []
      };
      for (let i = 0; i < commands.length; i++) {
         // TEST 9 - return the two commands that are sent in the message
         response.results.push(commands[i]);
      }
      return response;
   }
      // TEST 10 if command === low power then stop??? 
   //    for (let j = 0; j < commands.commandType.length; j++) {
   //       if (commands[j].commandType === 'MOVE') {
   //       rover.position.push(commands.value)
   //       return rover.position

   //    }
   // }
      
   
}




let rover = new Rover(100);
let commands = [
   new Command('MOVE', 4321),
   // new Command('STATUS_CHECK'),
   // new Command('MODE_CHANGE', 'LOW_POWER'),
   new Command('MOVE', 3579),
   // new Command('STATUS_CHECK')
];
let message = new Message('TA power', commands);
let response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));

module.exports = Rover;