const mongoose = require("mongoose");

userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true
    }
});

module.exports.User = mongoose.model("User", userSchema);
