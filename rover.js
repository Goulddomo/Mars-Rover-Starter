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
      const commands = message.commands;
      let response = {
         message: message.name,
         results: []
      };
      for (let i = 0; i < commands.length; i++) {
         if (commands[i].commandType === 'STATUS_CHECK') {
            let statusCheckResult = {
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts, 
                  position: this.position
               }
            }
         response.results.push(statusCheckResult)
      } else if (commands[i].commandType === 'MODE_CHANGE') {
            this.mode = commands[i].value

         let statusCheckResult = {
            completed: true,
     
         };
         response.results.push(statusCheckResult);
      } else if (commands[i].commandType === 'MOVE') {
         if (this.mode === 'LOW_POWER') {
            let statusCheckResult = {
               completed: false
            }
            response.results.push(statusCheckResult);
         } else {
         let statusCheckResult = {
         completed: true
         }        
         this.position = commands[i].value
         response.results.push(statusCheckResult);
      }

      }

      };
      
      return response;
   }
   
}


      




let rover = new Rover(100);
let commands = [
   // new Command('MOVE', 4321),
   // new Command('STATUS_CHECK'),
   new Command('MODE_CHANGE', 'LOW_POWER'),
   new Command('MOVE', 3579),
   // new Command('STATUS_CHECK')
];
let message = new Message('TA power', commands);
let response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));

module.exports = Rover;