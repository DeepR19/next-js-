import { useRouter } from "next/router"

export default function Review() {
    const router = useRouter()
    const {productDetails, review} = router.query
    
  return (
    <div>Review
        {review} {productDetails}
    </div>
  )
}
