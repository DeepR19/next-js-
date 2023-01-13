import Link from "next/link"

const Home = ({users}) => {
  return (
    <>
      <h1>Hello world</h1>

      <Link href="/products">
        <p>see all</p>
      </Link>
    </>
  )
}

export default Home

