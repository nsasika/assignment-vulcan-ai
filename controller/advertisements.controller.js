const { errorResponse } = require("../consts/response");
const { createAdvertisement } = require("../service/advertisements.service");

const addAdvertisement = async (req, res, next) => {
  try {
    const advertisement = await createAdvertisement(req.body);
    res.status(advertisement.statusCode).json(advertisement);
  } catch (error) {
    console.log(`AdvertisementsController addAdvertisement error , ${error}`);
    return errorResponse(error);
  }
};

module.exports = { addAdvertisement };
