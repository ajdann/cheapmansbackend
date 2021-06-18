const mongoose = require("mongoose");

const connect = async () =>
    await mongoose.connect('mongodb+srv://dbuser:dbuser123@cluster0.ex9ne.mongodb.net/cheapmansu?retryWrites=true&w=majority/lectures', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
});

module.exports = { connect }