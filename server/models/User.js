const { default: mongoose } = require("mongoose");
const {Schema} = require("mongoose");
const bcrypt = require('bcrypt');
const Post = require("./Post");



const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required: true
    },
    profilePic: {
        type: String,
        default: "",
      },
      posts: [{
          type: Schema.Types.ObjectId,
          ref: 'Post'
      }],

});

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema);
module.exports = User;