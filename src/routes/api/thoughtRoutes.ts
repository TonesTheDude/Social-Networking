import { Router } from "express";
import { addReaction, createThoughts, deleteOneThought, getAllThoughts, removeReaction, singleThought, updateOneThought } from "../../controllers/thoughtController.js";

const router = Router();

router.route("/").get(getAllThoughts).post(createThoughts);
router.route("/:id").get(singleThought).put(updateOneThought).delete(deleteOneThought);
router.route("/:thoughtID/reactions").post(addReaction)
router.route("/:thoughtID/reactions/:reactionID").delete(removeReaction);

export default router;