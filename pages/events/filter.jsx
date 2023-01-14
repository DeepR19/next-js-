import { useState } from "react"

export default function index({eventsList}) {

    const [list, setList] = useState(eventsList)

    const handleChange = async () =>{
        const res = await fetch("http://localhost:4000/events?category=image")
        const data = await res.json()

        setList(data)

    }
    const handleClear = async () =>{
        const res = await fetch("http://localhost:4000/events")
        const data = await res.json()

        setList(data)

    }

  return (
    <>
        <h1>List of Events are followed-</h1>

        <button onClick={handleChange}>check Images</button>
        <button onClick={handleClear}>Clear</button>
        {
            list.map(event =>{
                return(
                    <div key={event.id}>
                        <h2>{event.id} {event.title} | {event.category}</h2>
                        <p>{event.description}</p>

                        <hr />
                    </div>
                )
            })
        }
    </>
  )
}


export async function getServerSideProps(){
    const res = await fetch("http://localhost:4000/events")
    const data = await res.json()

    return {
        props:{
            eventsList: data
        }
    }
}