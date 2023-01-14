import {useRouter} from "next/router"

export default function postId({post}) {
    const router = useRouter()

    // if fallback is true
    // it shows something like loading the data
    if(router.isFallback){
        return <h1>Loading...</h1>
    }


  return (
    <>
        <h1>{post.id}</h1>
        <h2>{post.title}</h2>
    </>
  )
}


// define all the values of the props data
// here we assign dynamic routes data
// we all telling this routes are present

export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    // create params data for all posts
    const paths = data.map(item =>{
        return {
            params: {postId : `${item.id}`}
        }
    })

    return {
        paths,
        fallback: true   // if fallback is 'false', then unknown params shows 404 page
    }                     // if fallback is 'true', then data is fetched from server as static, not reflect to 404 page
}   


// here context is refers the getStaticPaths
export const getStaticProps = async (context)=>{
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const data = await res.json()

    // if data is not present in the dataList, then notFound set to true
    // data out of range
    if(!data.id){
        return {
            notFound: true
        }
    }

    return {
        props:{
            post: data
        },
        revalidate: 10  // used for 'Incremental Static Regeneration [ISR] , change will only done after 10 seconds, when use reload after greater than or equal to 10 second'
    }
}

