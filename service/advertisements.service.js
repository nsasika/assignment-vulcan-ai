const { errorResponse, responseMapper } = require("../consts/response");
const Advertisement = require("../models/advertisements");
const Content = require("../models/contents");
const { getUser } = require("../service/users.service");
const { bulkCreateContent } = require("../service/contents.service");

const createAdvertisement = async (obj) => {
  try {
    const { email, title, description, contents } = obj;
    const user = await getUser({ email });

    if (user) {
      const advertisement = await Advertisement.create({
        userId: user.id,
        title,
        description,
      });

      if (advertisement) {
        const images = contents.map((content) => {
          return { url: content, advertisementId: advertisement.id };
        });
        await bulkCreateContent(images);
        const res = await getAdvertisementById(advertisement.id);
        return responseMapper(200, res);
      } else return responseMapper(500, "Unable to create Advertisement");
    } else
      return responseMapper(404, "User Not found!, please register user first");
  } catch (error) {
    console.log(`AdvertisementService createAdvertisement error , ${error}`);
    return errorResponse(error.message);
  }
};

const getAdvertisementById = async (id) => {
  try {
    return await Advertisement.findOne({ where: { id }, include: [Content] });
  } catch (error) {
    console.log(`AdvertisementService getAdvertisementById error , ${error}`);
    return errorResponse(error);
  }
};

module.exports = { createAdvertisement, getAdvertisementById };
