export default function Users({users}) {
  return (
        <>
            <h1>Users List</h1>

            {users.map((user, index) =>(
                <div key={index}>
                    {user.name}
                    {user.email}
                </div>
            ))}
        </>
    )
}

// pre rendering with data 
// getStaticProps is used for server side rendering
// work in server side 
// not run in clinet side
export const getStaticProps  =async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props:{
            users: data
        }
    }
}