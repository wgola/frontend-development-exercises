import { planEntry } from "../models/planEntry.model.js";

export const getAllPlanEntries = async (req, res) => {
  try {
    const planEntries = await planEntry.find();

    return res.status(200).json(planEntries);
  } catch {
    return res.status(500).json({ message: "Couldn't get any plan entries" });
  }
};

export const getPlanEntryByID = async (req, res) => {
  try {
    const { lessonID } = req.params;
    const foundPlanEntry = await planEntry.findById(lessonID);

    return res.status(200).json(foundPlanEntry);
  } catch {
    return res.status(500).json({
      message: `Couldn't get plan entry with ID: ${req.params.lessonID}`,
    });
  }
};

export const createPlanEntry = async (req, res) => {
  try {
    const { lessonID, ...rest } = req.body;
    const createdEntry = await planEntry.create({
      _id: lessonID,
      ...rest,
      notes: [],
    });

    return res.status(201).json(createdEntry);
  } catch {
    return res.status(500).json({ message: "Couldn't create plan entry" });
  }
};

export const updatePlanEntry = async (req, res) => {
  try {
    const { lessonID } = req.params;
    const data = req.body;
    const updatedEntry = await planEntry.findByIdAndUpdate(lessonID, data);

    return res.status(200).json(updatedEntry);
  } catch {
    return res.status(500).json({ message: "Couldn't update plan entry" });
  }
};

export const deletePlanEntry = async (req, res) => {
  try {
    const { lessonID } = req.params;
    await planEntry.findByIdAndDelete(lessonID);

    return res.status(200).json({ message: "Succesfully deleted entry" });
  } catch {
    return res.status(500).json({ message: "Couldn't delete plan entry" });
  }
};
