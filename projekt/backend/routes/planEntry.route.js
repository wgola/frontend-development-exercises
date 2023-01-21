import { Router } from "express";
import {
  createPlanEntry,
  deletePlanEntry,
  getAllPlanEntries,
  getPlanEntryByID,
  updatePlanEntry,
} from "../controllers/planEntry.controller.js";

const planEntryRouter = Router();

planEntryRouter.get("/", getAllPlanEntries);

planEntryRouter.post("/", createPlanEntry);

planEntryRouter.get("/:lessonID", getPlanEntryByID);

planEntryRouter.put("/:lessonID", updatePlanEntry);

planEntryRouter.delete("/:lessonID", deletePlanEntry);

export default planEntryRouter;
