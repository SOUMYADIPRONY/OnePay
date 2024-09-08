const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:vmFih0Xurxw3oqJG@cluster0.lj41jsy.mongodb.net/mobilepe");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
   
    firstName: {
      type: String,
      require: true,
      trim: true,
      maxlength: 40
    },
  lastName: {
    type: String,
    require: true,
    trim: true,
    maxlength: 50
  }
    
})

const accountSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  balance:{
    type: Number,
    required: true
  }
})
const Account = mongoose.model('Account', accountSchema)
const User =  mongoose.model("User", userSchema)

module.exports = {
  User,
  Account
}