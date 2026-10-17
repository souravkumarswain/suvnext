import { Post, User } from "./models";
import { connectToDB } from "./utils"

export const getPosts = async () => {
    try {
        connectToDB();
        const posts = await Post.find();
        return posts;
    }
    catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!!")
    }
}

export const getPost = async (slug) => {
    try {
        connectToDB();
        const post = await Post.find({slug});
        return post;
    }
    catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!!")
    }
}

export const getUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    }
    catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!!")
    }
}

export const getUsers = async (id) => {
    try {
        connectToDB();
        const users = await User.find();
        return users;
    }
    catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!!")
    }
}