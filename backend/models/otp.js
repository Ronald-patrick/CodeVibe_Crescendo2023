const { Schema, model } = require("mongoose");

module.exports.Otp = model(
  "Otp",
  Schema(
    {
      phone_number: {
        type: String,
        required: true,
      },
      otp: {
        type: String,
        required: true,
      },
      createdAt: { type: Date, default: Date.now, index: { expires: 300 } },

      // After 5 minutes the otp will get deleted from the DB automatically
    },
    { timestamps: true }
  )
);
