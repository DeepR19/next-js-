import Link from "next/link"

const Home = () => {
  return (
    <>
      <h1>Hello world</h1>

      <Link href="/products">
        <p>pord</p>
      </Link>
    </>
  )
}

export default Home