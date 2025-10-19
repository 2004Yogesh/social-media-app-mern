import Post from '../models/Post.js';

export const createPost = async (req, res) =>{
    try{

        const newPost = new Post(req.body);

        const post = await newPost.save();
        return res.status(201).json(post);
        
    }catch(e){
        res.status(500).json({error:e});
    }
}