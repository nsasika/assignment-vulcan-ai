const { errorResponse } = require("../consts/response");
const {
  createAdvertisement,
  getAdvertisements,
} = require("../service/advertisements.service");

const addAdvertisement = async (req, res, next) => {
  try {
    const advertisement = await createAdvertisement(req.body);
    res.status(advertisement.statusCode).json(advertisement);
  } catch (error) {
    console.log(`AdvertisementsController addAdvertisement error , ${error}`);
    return errorResponse(error);
  }
};

const getAllAdvertisements = async (req, res, next) => {
  try {
    const advertisements = await getAdvertisements();
    res.status(advertisements.statusCode).json(advertisements);
  } catch (error) {
    console.log(`AdvertisementsController getAdvertisements error , ${error}`);
    return errorResponse(error);
  }
};

module.exports = { addAdvertisement, getAllAdvertisements };
