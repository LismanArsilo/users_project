const findOne = async (req, res) => {
  try {
    const users = await req.context.models.users.findOne({
      where: { user_entity_id: req.params.id },
      include: [
        {
          model: req.context.models.users_email,
          as: "users_emails",
        },
        {
          model: req.context.models.users_education,
          as: "users_educations",
        },
        {
          model: req.context.models.users_address,
          as: "users_addresses",
          include: [
            {
              model: req.context.models.address,
              as: "etad_addr",
              include: {
                model: req.context.models.city,
                as: "addr_city",
              },
            },
            {
              model: req.context.models.address_type,
              as: "etad_adty",
            },
          ],
        },
        {
          model: req.context.models.users_experiences,
          as: "users_experiences",
          include: {
            model: req.context.models.city,
            as: "usex_city",
          },
        },
        {
          model: req.context.models.users_skill,
          as: "users_skills",
        },
        {
          model: req.context.models.users_phones,
          as: "users_phones",
        },
      ],
    });
    return res.send(users);
  } catch (error) {
    return res.status(404).send(error);
  }
};

// const updatePhone = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const phone_number = await req.context.models.users_phones.update(
//       {
//         uspo_number: req.body.uspo_number,
//         uspo_modified_date: new Date(),
//         uspo_ponty_code: req.body.uspo_ponty_code,
//       },
//       { returning: true, where: { uspo_entity_id: id } }
//     );
//     return res.send(phone_number);
//   } catch (error) {
//     return res.status(404).send(error);
//   }
// };

export default {
  findOne,
  // updatePhone,
};
