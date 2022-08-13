import { Router } from "express";
import IndexController from "../controllers/IndexController";

const router = Router();
router.get("/:id", IndexController.UserSettingController.findOne);
// Route untuk phone
router.put("/:id", IndexController.UserPhoneSettingController.updatePhone);
router.post("/:id", IndexController.UserPhoneSettingController.createPhone);
// Route untuk email
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
