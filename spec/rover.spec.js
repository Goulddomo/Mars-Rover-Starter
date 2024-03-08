const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// // let response = rover.receiveMessage(message);

// console.log(response);
  // 7 tests here!

  // test 7
it("constructor sets position and default values for mode and generatorWatts", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.


  expect(rover.position).toBe(98382);
  expect(rover.mode).toBe('NORMAL');
  expect(rover.generatorWatts).toBe(110);
});


// test 8
it("response returned by receiveMessage contains the name of the message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);
  console.log(response);
    
  expect(response.message).toBe('Test message with two commands');
});


// test 9
it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message)

  expect(response.results.length).toBe(2);
});


// test 10
// it("responds correctly to the status check command", function() {
//   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
//   let message = new Message('Test message with two commands', commands);
//   let rover = new Rover(98382);    // Passes 98382 as the rover's position.
//   let response = rover.receiveMessage(message)
    
//   expect(response.r).toBe("completed: true");
// });


// test 11
// it("responds correctly to the mode change command", function() {
//   let testRoverFive = new Rover();
    
//   expect(testRoverFive.).toBe();
// });


// test 12
// it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
//   let testRoverSix = new Rover();
    
//   expect(testRoverSix.).toBe();
// });



});
