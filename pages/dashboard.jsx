import { useState, useEffect } from "react"
export default function dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("http://localhost:4000/dashboard")
            const data1 = await res.json()

            setData(data1)
            setIsLoading(false)
        }

        fetchData()
    },[])

    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h2>Dashboard</h2>

        <hr />

        <h5>Posts: {data.posts}</h5>
        <h5>Likes: {data.likes}</h5>
        <h5>Followers: {data.followers}</h5>
        <h5>Following: {data.following}</h5>
    </div>
  )
}
