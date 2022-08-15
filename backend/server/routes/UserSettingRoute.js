import { Router } from "express";
import IndexController from "../controllers/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/:id", IndexController.UserSettingController.findOne);
// Address masih belum fix pembuatan alurnya
router.post(
  "/:id/address",
  // IndexController.UserAddressSettingController.createType,
  IndexController.UserAddressSettingController.createCity,
  IndexController.UserAddressSettingController.createAddress,
  IndexController.UserAddressSettingController.createUserAddress
);
router.put(
  "/:id/address/:address",
  // IndexController.UserAddressSettingController.createType,
  IndexController.UserAddressSettingController.updateCity,
  IndexController.UserAddressSettingController.updateAddress,
  IndexController.UserAddressSettingController.updateUserAddress
);

// Route untuk phone
router.get(
  "/:id/phone/:phone",
  IndexController.UserPhoneSettingController.findOnePhone
);
router.put(
  "/:id/phone/:phone",
  IndexController.UserPhoneSettingController.updatePhone
);
router.post(
  "/:id/phone",
  IndexController.UserPhoneSettingController.createPhone
);
router.delete(
  "/:id/phone/:phone",
  IndexController.UserPhoneSettingController.deletedPhone
);

// Route untuk email
router.get(
  "/:id/email/:email",
  IndexController.UserEmailSettingController.findOneEmail
);
router.put(
  "/:id/email/:email",
  IndexController.UserEmailSettingController.updateEmail
);
router.post(
  "/:id/email",
  IndexController.UserEmailSettingController.createEmail
);
router.delete(
  "/:id/email/:email",
  IndexController.UserEmailSettingController.deletedEmail
);

// Router Education
router.get(
  "/:id/education/:education",
  IndexController.UserEducationsSettingController.findOneEducation
);
router.post(
  "/:id/education",
  IndexController.UserEducationsSettingController.createEducation
);
router.put(
  "/:id/education/:education",
  IndexController.UserEducationsSettingController.updateEducation
);
router.delete(
  "/:id/education/:education",
  IndexController.UserEducationsSettingController.deletedEducation
);

// Route Experiences
router.get(
  "/:id/experiences/:experiences",
  IndexController.UserExperienceSettingController.findOneExperiences
);
router.post(
  "/:id/experiences/",
  IndexController.UserExperienceSettingController.createExperiences
);
router.post(
  "/:id/experiences/:experiences",
  IndexController.UserExperienceSettingController.updateExperiences
);

router.delete(
  "/:id/experiences/:experiences",
  IndexController.UserExperienceSettingController.deletedExperiences
);

// Users Skill
router.get(
  "/:id/skill/:skill",
  IndexController.UserSkillSettingController.findOneSkill
);
router.post(
  "/:id/skill",
  IndexController.UserSkillSettingController.createSkill
);
router.delete(
  "/:id/skill/:skill",
  IndexController.UserSkillSettingController.deletedSkill
);

// User Profile
router.get(
  "/:id/profile",
  IndexController.UserProfileSettingController.findOneUser
);
router.put(
  "/:id/profile",
  UploadDownloadHelper.uploadSingleFile,
  IndexController.UserProfileSettingController.updateProfile
);

export default router;
