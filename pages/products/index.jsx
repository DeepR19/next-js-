import Link from "next/link";
import {useRouter} from "next/router"

export default function Products() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/")
  }
    return (
      <div>
        <h1>Details</h1>

        <Link href="/products/1">
          <p>Header 1</p>
        </Link>
        <Link href="/products/2">
          <p>Header 2</p>
        </Link>
        <Link href="/products/3">
          <p>Header 3</p>
        </Link>
        
        
        <Link href="/products/34" replace>
          <p>Header 34</p>
        </Link>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  }
  