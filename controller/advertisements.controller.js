const { errorResponse } = require("../consts/response");
const {
  createAdvertisement,
  getAdvertisements,
  getAdvertisementById,
  deleteContentById,
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
    const result = await getAdvertisements();
    res.status(result.statusCode).json(result);
  } catch (error) {
    console.log(`AdvertisementsController getAdvertisements error , ${error}`);
    return errorResponse(error);
  }
};

const getAdvertisement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getAdvertisementById(id);
    res.status(result.statusCode).json(result);
  } catch (error) {
    console.log(`AdvertisementsController getAdvertisement error , ${error}`);
    return errorResponse(error);
  }
};

const deleteContent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { urls } = req.body;
    const result = await deleteContentById(id, urls);
    res.status(result.statusCode).json(result);
  } catch (error) {
    console.log(`AdvertisementsController deleteContent error , ${error}`);
    return errorResponse(error);
  }
};

module.exports = {
  addAdvertisement,
  getAdvertisement,
  getAllAdvertisements,
  deleteContent,
};
