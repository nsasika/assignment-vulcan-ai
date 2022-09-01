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
        const { statusCode, data } = await getAdvertisementById(
          advertisement.id
        );
        if (statusCode === 200) return responseMapper(200, data);
        else
          return responseMapper(
            404,
            null,
            "Unable to retrieve created advertisement details"
          );
      } else return responseMapper(500, null, "Unable to create Advertisement");
    } else
      return responseMapper(
        404,
        null,
        "User Not found!, please register user first"
      );
  } catch (error) {
    console.log(`AdvertisementService createAdvertisement error , ${error}`);
    return errorResponse(error.message);
  }
};

const getAdvertisementById = async (id) => {
  try {
    const advertisement = await Advertisement.findOne({
      where: { id },
      include: [Content],
    });

    if (advertisement) return responseMapper(200, advertisement);
    else
      return responseMapper(
        404,
        null,
        "Unable to retrieve advertisement details"
      );
  } catch (error) {
    console.log(`AdvertisementService getAdvertisementById error , ${error}`);
    return errorResponse(error);
  }
};

const getAdvertisements = async () => {
  try {
    const advertisements = await Advertisement.findAll({ include: [Content] });
    if (advertisements) return responseMapper(200, advertisements);
    else return responseMapper(500, null, "Unable to retrieve advertisements");
  } catch (error) {
    console.log(`AdvertisementService getAdvertisements error , ${error}`);
    return errorResponse(error);
  }
};

module.exports = {
  createAdvertisement,
  getAdvertisementById,
  getAdvertisements,
};
