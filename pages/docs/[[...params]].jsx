import {useRouter} from "next/router"

export default function Params() {
    const router = useRouter()
    const {params} = router.query;

    console.log(params)
  return (
    <div>Params {params}</div>
  )
}
