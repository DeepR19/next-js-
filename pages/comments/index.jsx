import { useState } from "react"



export default function index() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")

    // GET route
    const handleClick = async ()=>{
        const res = await fetch("http://localhost:3000/api/comments")
        const data = await res.json()

        setComments(data)
    }   

    //POST route
    const addComment = async ()=>{
        const res = await fetch("/api/comments",{
            method: "POST",
            body: JSON.stringify({comment}),
            headers:{
                "Content-Type": "application/json"
            }
        })

        await res.json()    
    }

    // DELETE route
    const handleDelete =async (id) => {
        const res = await fetch(`/api/comments/${id}`, {
            method: "DELETE"
        })
        res.json()
        handleClick()
    }
  return (
    <>
        <div>Deal with Comments</div>

        <input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder="Enter some comments..."/>
        <button onClick={addComment}>Send Comment</button>

        <br />
        <button onClick={handleClick}>Fetch Data</button>
        {
            comments.map(item=>{
                return(
                    <div key={item.id}>
                        <h1>{item.id} | {item.text}</h1>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                )
            })
        }
    </>


  )
}
