import { FontWrapper } from "@/components/FontWrapper";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Error() {
  const { isReady, asPath } = useRouter()
  const href = isReady ? asPath : "¯\\_(ツ)_/¯"
  return (
    <FontWrapper>
      <div className="text-white text-center">
        <h1>404 - sivua ei löytynyt</h1>
        <p>Saattaa olla että sisältö on väliaikaisesti hävinnyt.</p>
        <p>Voit yrittää sivun <a className="underline" href={href}>päivittämistä</a> tai mennä <Link className="underline" href="/100">etusivulle</Link>.</p>
      </div>
    </FontWrapper>
  )
}