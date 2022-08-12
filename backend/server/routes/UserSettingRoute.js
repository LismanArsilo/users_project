import { Router } from "express";
import IndexController from "../controllers/IndexController";

const router = Router();
router.get("/:id", IndexController.UserSettingController.findOne);
router.put("/:id", IndexController.UserSettingController.updatePhone);
router.put(
  "/:id/email/:email",
  IndexController.UserEmailSettingController.updateEmail
);
router.post("/:id", IndexController.UserEmailSettingController.createEmail);
router.delete(
  "/:id/email/:email",
  IndexController.UserEmailSettingController.deletedEmail
);

export default router;
