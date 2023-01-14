export default function index({articles}) {
  return (
    <>
        <h1>List of articles</h1>

        {
            articles.map(article=>{
                return(
                    <div key={article.id}>
                        {article.id} {article.title} | {article.description}
                    </div>
                )
            })
        }
    </>
  )
}


export async function getServerSideProps(){
    const res = await fetch("http://localhost:4000/news")
    const data = await res.json()

    return {
        props:{
            articles: data
        }
    }
}