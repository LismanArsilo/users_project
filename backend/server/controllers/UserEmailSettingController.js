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
    const updateEmail = await req.context.models.users_email.update(
      {
        pmail_entity_id: req.params.id,
        pmail_address: req.body.pmail_address,
        pmail_modified_date: new Date(),
      },
      { returning: true, where: { pmail_id: req.params.email } }
    );
    return res.send(updateEmail);
  } catch (error) {
    return res.status(404).json(error.messagge);
  }
};
// bug id 3 tidak dapat di update
const deletedEmail = async (req, res) => {
  try {
    const deletedEmail = await req.context.models.users_email.destroy({
      where: { pmail_id: req.params.email },
    });
    return res.send(`Deleted Success`);
  } catch (error) {
    return res.status(404).json(error.messagge);
  }
};

export default {
  createEmail,
  updateEmail,
  deletedEmail,
};
