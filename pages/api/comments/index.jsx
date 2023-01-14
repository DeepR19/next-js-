import { comments } from "../../../data/comments"

export default function index(req, res) {

  // GET request
  if(req.method === "GET"){
    res.status(200).json(comments)
  }
  
  // POST request
  else if(req.method === "POST"){
    const {comment} = req.body
    const newComment = {
      id: Date.now(),
      text: comment
    }

    comments.push(newComment)

    res.status(201).json({message: "created successfully", comments})
  }
}
