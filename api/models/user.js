const mongoose= require('mongoose');

const UserSchema=mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true

  },
  phone: {
    type: String,
    required: true,
    unique : true

  }
});
const User= module.exports=mongoose.model('User',UserSchema);
