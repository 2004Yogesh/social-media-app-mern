import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String
    },
    about: {
        type: String
    },
    posts: {
        type: Array
    },
    followers: {
        type: Array
    },
    following: {
        type: Array
    }
});

const User = mongoose.model("users", userSchema);
export default User;