
export default function article({data, category}) {
  return (
      <>
        <h1>Details about category -- {category}</h1>

        {data.map(item=>{
          return(
            <div key={item.id}>
              <h1>{item.id} {item.title}</h1>
              <p>{item.description}</p>

              <hr />
            </div>
          )
        })}
      </>
  )
}

// use of dynamic parameter 
export async function getServerSideProps(context){
    const {params, req, res, query} =context
    const {category} = params   // parameter comes from search bar
    console.log(context)  
    
    // set cookies
    // console.log(req.headers.cookie)
    res.setHeader("Set-Cookie", ["name=Deepak"])


    const res1 = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await res1.json()
    return {
        props:{
            data,
            category
        }
    }
}
