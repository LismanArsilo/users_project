const findOneExperiences = async (req, res) => {
  try {
    const userExperiences = await req.context.models.users_experiences.findOne({
      where: { usex_id: req.params.experiences, usex_entity_id: req.params.id },
    });
    return res.send(userExperiences);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const createExperiences = async (req, res) => {
  try {
    const userExperiences = await req.context.models.users_experiences.create({
      usex_entity_id: req.params.id,
      usex_title: req.body.usex_title,
      usex_profile_headline: req.body.usex_profile_headline,
      usex_employment_type: req.body.usex_employment_type,
      usex_company_name: req.body.usex_company_name,
      usex_city_id: req.body.usex_city_id,
      usex_is_current: req.body.usex_is_current,
      usex_start_date: req.body.usex_start_date,
      usex_end_date: req.body.usex_end_date,
      usex_industry: req.body.usex_industry,
      usex_description: req.body.usex_description,
      usex_experience_type: req.body.usex_experience_type,
    });
    return res.send(userExperiences);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const updateExperiences = async (req, res) => {
  try {
    const userExperiences = await req.context.models.users_experiences.update(
      {
        usex_entity_id: req.params.id,
        usex_title: req.body.usex_title,
        usex_profile_headline: req.body.usex_profile_headline,
        usex_employment_type: req.body.usex_employment_type,
        usex_company_name: req.body.usex_company_name,
        usex_city_id: req.body.usex_city_id,
        usex_is_current: req.body.usex_is_current,
        usex_start_date: req.body.usex_start_date,
        usex_end_date: req.body.usex_end_date,
        usex_industry: req.body.usex_industry,
        usex_description: req.body.usex_description,
        usex_experience_type: req.body.usex_experience_type,
      },
      { returning: true, where: { usex_id: req.params.experiences } }
    );
    return res.send(userExperiences);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const deletedExperiences = async (req, res) => {
  try {
    const userExperiences = await req.context.models.users_experiences.destroy({
      where: { usex_id: req.params.experiences },
    });
    return res.send(`Deleted Success`);
  } catch (error) {
    return res.status(404).send(error);
  }
};
export default {
  findOneExperiences,
  createExperiences,
  updateExperiences,
  deletedExperiences,
};
