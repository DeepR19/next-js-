import { comments } from "../../../data/comments";

//dynamic routes

export default function id(req, res) {
    const {id} = req.query

    if(req.method === "GET"){
        const comment = comments.find(item => item.id === parseInt(id))
        res.status(200).json(comment)
    }
    else if(req.method === "DELETE"){
        const deleteComment = comments.findIndex(comment => {
            comment.id === parseInt(id)
        })    
        
        comments.splice(deleteComment, 1)
        res.status(200).json({message: "done"})
    }
}
