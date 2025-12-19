const Equipment = require("../models/Equipment");

// GET all equipment
exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find().sort({ lastCleaned: -1 });
    res.json(equipment);
  } catch {
    res.status(500).json({ message: "Unable to fetch equipment list" });
  }
};

// CREATE
exports.createEquipment = async (req, res) => {
  try {
    const newEquipment = new Equipment(req.body);
    const saved = await newEquipment.save();
    res.status(201).json(saved);
  } catch {
    res.status(400).json({ message: "Invalid equipment data" });
  }
};

// UPDATE
exports.updateEquipment = async (req, res) => {
  try {
    await Equipment.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Equipment updated successfully" });
  } catch {
    res.status(400).json({ message: "Update failed" });
  }
};

// DELETE
exports.deleteEquipment = async (req, res) => {
  try {
    await Equipment.findByIdAndDelete(req.params.id);
    res.json({ message: "Equipment removed" });
  } catch {
    res.status(400).json({ message: "Delete failed" });
  }
};
