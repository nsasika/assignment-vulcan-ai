const express = require("express");
const router = express.Router();
const AdvertisementsCtrl = require("../controller/advertisements.controller");

router
  .route("/")
  .get(AdvertisementsCtrl.getAllAdvertisements)
  .post(AdvertisementsCtrl.addAdvertisement);

router
  .route("/:id")
  .get(AdvertisementsCtrl.getAdvertisement)
  .delete(AdvertisementsCtrl.deleteContent);

module.exports = router;
