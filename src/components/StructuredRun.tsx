import { RunNode } from "@/types/Yle.types"
import { StructuredNode } from "./StructuredNode"

type Props = {
  node: RunNode[]
}
export const StructuredRun = (props: Props) => {
  return (
    <>
      {props.node.map((n, i) => (
        <StructuredNode node={n} key={i} />
      ))}
    </>
  )
}