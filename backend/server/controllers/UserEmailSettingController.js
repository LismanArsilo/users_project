const findOneEmail = async (req, res) => {
  try {
    const user_email = await req.context.models.users_email.findAll({
      where: { pmail_entity_id: req.params.id },
    });
    return res.send(user_email);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const createEmail = async (req, res) => {
  try {
    const user_email = await req.context.models.users_email.create({
      pmail_entity_id: req.params.id,
      pmail_id: req.body.pmail_id,
      pmail_address: req.body.pmail_address,
      pmail_modified_date: new Date(),
    });
    return res.send(user_email);
  } catch (error) {
    return res.status(404).json(error.messagge);
  }
};
const updateEmail = async (req, res) => {
  try {
    const userEmail = await req.context.models.users_email.update(
      {
        pmail_entity_id: req.params.id,
        pmail_address: req.body.pmail_address,
        pmail_modified_date: new Date(),
      },
      { returning: true, where: { pmail_id: req.params.email } }
    );
    return res.send(userEmail);
  } catch (error) {
    return res.status(404).json(error.messagge);
  }
};
// bug id 3 tidak dapat di update
const deletedEmail = async (req, res) => {
  try {
    const userEmail = await req.context.models.users_email.destroy({
      where: { pmail_id: req.params.email },
    });
    return res.send(`Deleted Success`);
  } catch (error) {
    return res.status(404).json(error.messagge);
  }
};

export default {
  findOneEmail,
  createEmail,
  updateEmail,
  deletedEmail,
};
