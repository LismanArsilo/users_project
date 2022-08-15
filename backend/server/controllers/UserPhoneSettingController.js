const findOnePhone = async (req, res) => {
  try {
    const phoneNumber = await req.context.models.users_phones.findOne({
      where: { uspo_entity_id: req.params.id, uspo_number: req.params.phone },
    });
    if (!phoneNumber) {
      return res.send(`Not Found`);
    }
    return res.send(phoneNumber);
  } catch (error) {
    return res.status(404).send(error);
  }
};

// menentukan where masih menggunakan number karena pk.nya merupakan number
const createPhone = async (req, res) => {
  try {
    const phoneNumber = await req.context.models.users_phones.create({
      uspo_entity_id: req.params.id,
      uspo_number: req.body.uspo_number,
      uspo_modified_date: new Date(),
      uspo_ponty_code: req.body.uspo_ponty_code,
    });
    return res.send(phoneNumber);
  } catch (error) {
    return res.status(404).json(error.messagge);
  }
};

const updatePhone = async (req, res) => {
  try {
    const phone_number = await req.context.models.users_phones.update(
      {
        uspo_entity_id: req.params.id,
        uspo_number: req.body.uspo_number,
        uspo_modified_date: new Date(),
        uspo_ponty_code: req.body.uspo_ponty_code,
      },
      { returning: true, where: { uspo_number: req.params.phone } }
    );
    return res.send(phone_number);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deletedPhone = async (req, res) => {
  try {
    const phoneNumber = await req.context.models.users_phones.destroy({
      where: { uspo_number: req.params.phone },
    });
    return res.send(`Deleted Success`);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findOnePhone,
  updatePhone,
  createPhone,
  deletedPhone,
};
