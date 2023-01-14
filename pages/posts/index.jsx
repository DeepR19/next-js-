import Link from "next/link"

export default function index({posts}) {
  return (
    <>
        <h1>List of Posts</h1>

        {
            posts.map((post, index) => {
                return(
                    <div key={index}>
                        <Link href={`/posts/${post.id}`}>
                            <h2>
                                {post.id} {": "}
                                {post.title}
                            </h2>
                        </Link>
                    </div>
                )
            })
        }
    </>
  )
}

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props:{
            posts: data.slice(0,5)
        }
    }
}