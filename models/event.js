const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  event_title: {
    type: String,
    trim: true,
    required: [true, "Event Title is required"],
  },
  event_date: {
    type: Date,
  },
  event_description: {
    type: String,
    trim: true,
    required: [true, "Event Description is required"],
  },
  event_icon: {
    type: String,
    trim: true,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
