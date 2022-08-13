const updatePhone = async (req, res) => {
  const { id } = req.params;
  try {
    const phone_number = await req.context.models.users_phones.update(
      {
        uspo_number: req.body.uspo_number,
        uspo_modified_date: new Date(),
        uspo_ponty_code: req.body.uspo_ponty_code,
      },
      { returning: true, where: { uspo_entity_id: id } }
    );
    return res.send(phone_number);
  } catch (error) {
    return res.status(404).json(error.messagge);
  }
};
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
// problem karena entity_id di jadikan pk maka tidak dapat membuat 2 number dengan type yang berbeda
export default {
  updatePhone,
  createPhone,
};
