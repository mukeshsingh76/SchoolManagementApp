const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("logEvent", function(message) {
  console.log("Log Event Called. Message is : " + message);
});

// Raise Event
emitter.emit("logEvent", "Message - How are you");
