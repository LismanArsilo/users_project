import axios from "axios";
import config from "../config/config";

const findOneUser = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}`);
    return result.data;
  } catch (error) {
    return error.messagge;
  }
};
const findAllUser = async () => {
  try {
    const result = await axios.get(`${config.domain}/setting/`);
    return result.data;
  } catch (error) {
    return error.messagge;
  }
};

const deletedEmail = async (id, email) => {
  try {
    const result = await axios.delete(
      `${config.domain}/setting/${id}/email/${email}`
    );
    return result;
  } catch (error) {
    return error.messagge;
  }
};

export default {
  findOneUser,
  findAllUser,
  deletedEmail,
};
