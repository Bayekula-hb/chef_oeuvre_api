const {
  staff,
  parcel,
  certificate_registration,
  sequelize,
} = require("../models");
const { Op, QueryTypes } = require("sequelize");

const certificateCountByMounth = async (req, res) => {
  if (req.user.is_admin == true) {
    const numberCertificate = await sequelize.query(
      `SELECT COUNT(id_certificate) as number from certificate_registrations where MONTH(createdAt) = MONTH(now())`,
      { type: QueryTypes.SELECT }
    );
    
    const numberParcel = await sequelize.query(
      `SELECT COUNT(id_parcel) as number from parcels where MONTH(createdAt) = MONTH(now())`,
      { type: QueryTypes.SELECT }
    );
    const numberTownship = await sequelize.query(
      `SELECT COUNT(id) as number from townships`,
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({numberCertificate,numberParcel, numberTownship});
  } else {
    return res
      .status(400)
      .send("Accès refusé. Vous n'êtes pas un administrateur.");
  }
};

module.exports = { certificateCountByMounth };
