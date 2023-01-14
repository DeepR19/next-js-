import useSWR from "swr"   // Stale While Revalidate

const handleFetching = async ()=>{
    const res = await fetch("http://localhost:4000/dashboard")
    const data = await res.json();
    return data
}

export default function dashboardswr() {
    const {data, error}= useSWR("dashboard", handleFetching)

    if(error) return "An Error Occured";
    if(!data) return "Loading..."

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
