import { useRouter } from "next/router";

const ProductDetails = () => {
    const Router = useRouter();
    const query = Router.query.productDetails
    
  return (
    <div>[productDetails] {query}</div>
  )
}

export default ProductDetails