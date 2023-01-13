export default function postId({post}) {
    console.log(post)
  return (
    <>
        <h1>{post.id}</h1>
        <h2>{post.title}</h2>
    </>
  )
}


// define all the values of the props data
export const getStaticPaths = async ()=>{
    return {
        paths:[
            {
                params: {postId: "1"}
            },
            {
                params: {postId: "2"}
            },
            {
                params: {postId: "3"}
            },
        ],
        fallback: false
    }
}


// here context is refers the getStaticPaths
export const getStaticProps = async (context)=>{
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const data = await res.json()
    return {
        props:{
            post: data
        }
    }
}

