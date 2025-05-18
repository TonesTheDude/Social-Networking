import { Router } from "express";
import { createUser, deleteOneUser, getAllUsers, singleUser, updateOneUser } from "../../controllers/userController.js";
const router = Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(singleUser).put(updateOneUser).delete(deleteOneUser);
// router.route("/:userId/friends/:friendId").post().delete();

export default router;