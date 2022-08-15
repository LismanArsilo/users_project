const createCity = async (req, res, next) => {
  try {
    const city = await req.context.models.city.create({
      city_name: req.body.city_name,
      city_modified_date: new Date(),
      city_prov_id: req.body.city_prov_id,
    });
    req.city = city;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};
// const createType = async (req, res, next) => {
//   try {
//     const type = await req.context.models.address_type.create({
//       adty_name: req.body.adty_name,
//       adty_modified_date: new Date(),
//     });
//     req.type = type;
//     next();
//   } catch (error) {
//     return res.status(404).send(error);
//   }
// };
const createAddress = async (req, res, next) => {
  const checkCity = req.city;
  try {
    const address = await req.context.models.address.create({
      addr_line1: req.body.addr_line1,
      addr_line2: req.body.addr_line2,
      addr_postal_code: req.body.addr_postal_code,
      addr_spatial_location: req.body.addr_spatial_location,
      addr_modified_date: new Date(),
      addr_city_id: checkCity.city_id,
    });
    req.address = address;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};
const createUserAddress = async (req, res) => {
  const checkAddress = req.address;
  try {
    const users_address = await req.context.models.users_address.create({
      etad_addr_id: checkAddress.addr_id,
      etad_modified_date: new Date(),
      etad_entity_id: req.params.id,
      etad_adty_id: req.body.etad_adty_id,
    });
    return res.send(users_address);
  } catch (error) {
    return res.status(404).send(error);
  }
};
// Update semua city masih belum fix pengambilan yang menjadi pramsnya
const updateCity = async (req, res, next) => {
  try {
    const userAddress = await req.context.models.city.update({
      city_name: req.body.city_name,
      city_modified_date: new Date(),
      city_prov_id: req.body.city_prov_id,
    });
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};

const updateAddress = async (req, res, next) => {
  const checkCity = req.city;
  try {
    const address = await req.context.models.address.update({
      addr_line1: req.body.addr_line1,
      addr_line2: req.body.addr_line2,
      addr_postal_code: req.body.addr_postal_code,
      addr_spatial_location: req.body.addr_spatial_location,
      addr_modified_date: new Date(),
      addr_city_id: checkCity.city_id,
    });
    req.address = address;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};
const updateUserAddress = async (req, res) => {
  const checkAddress = req.address;
  try {
    const users_address = await req.context.models.users_address.update(
      {
        etad_addr_id: checkAddress.addr_id,
        etad_modified_date: new Date(),
        etad_entity_id: req.params.id,
        etad_adty_id: req.body.etad_adty_id,
      },
      { returning: true, where: { etad_addr_id: req.params.address } }
    );
    return res.send(users_address);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  createCity,
  // createType,
  createAddress,
  createUserAddress,
  updateCity,
  updateAddress,
  updateUserAddress,
};
