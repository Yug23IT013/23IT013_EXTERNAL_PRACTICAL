const Event = require("../models/Event");

const eventController = {
  createEvent: async (req, res) => {
    const { title, description, date, type, image } = req.body;
    try {
      const event = new Event({ title, description, date, type, image });
      await event.save();
      res.status(201).json(event);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getAllEvents: async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getEventById: async (req, res) => {
    try {
      const { id } = req.params;
      const event = await Event.findById(id);
      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  updateEvent: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, date, type, image } = req.body;
      const event = await Event.findByIdAndUpdate(
        id,
        { title, description, date, type, image },
        { new: true }
      );
      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  deleteEvent: async (req, res) => {
    try {
      const { id } = req.params;
      const event = await Event.findByIdAndDelete(id);
      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }
      res.json({ message: "Event deleted successfully" });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};

module.exports = eventController;
