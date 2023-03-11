const mongoose = require("mongoose");

const connectWithDb = () => {
  mongoose
    .connect('mongodb+srv://ronaldpatrick1101:oGFjvTzUIo3G4N16@crescendo.hgs1qxw.mongodb.net/crescendo?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4
    })
    .then(console.log(`DB connected!`))
    .catch((err) => {
      console.log(`DB got issues`);
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDb;
