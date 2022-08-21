import bcrypt from "bcrypt";
const SALT_ROUND = 10;

const findOneUser = async (req, res) => {
  try {
    const user = await req.context.models.users.findOne({
      where: { user_entity_id: req.params.id },
    });
    return res.send(user);
  } catch (error) {
    return res.status(404).send(error);
  }
};
// Password masih belum dapat di jalankan masih harus di perbaiki hash dan compere.nya
const createPassword = async (req, res) => {
  const { password } = req.body.user_password;
  let hashPassword = password;
  hashPassword = await bcrypt.hash(hashPassword, SALT_ROUND);
  try {
    const result = await req.context.models.users.create({
      user_password: hashPassword,
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const updateProfile = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  try {
    const userProfile = await req.context.models.users.update(
      {
        user_name: fields[0].value,
        user_first_name: fields[1].value,
        user_last_name: fields[2].value,
        user_modified_date: new Date(),
        user_photo: files[0].file.newFilename,
      },
      { returning: true, where: { user_entity_id: req.params.id } }
    );
    console.log(userProfile);
    return res.send(userProfile);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const updateNoProfile = async (req, res) => {
  try {
    const userNoProfile = await req.context.models.users.update(
      {
        user_name: req.body.user_name,
        user_first_name: req.body.user_first_name,
        user_last_name: req.body.user_last_name,
        user_modified_date: new Date(),
      },
      { returning: true, where: { user_entity_id: req.params.id } }
    );
    return res.send(userNoProfile);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findOneUser,
  createPassword,
  updateProfile,
  updateNoProfile,
};
