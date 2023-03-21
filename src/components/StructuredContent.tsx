import { StructuredContent as StructuredContentType } from "@/types/Yle.types"
import { StructuredNode } from "./StructuredNode"
import { StructuredRun } from "./StructuredRun"

type Props = {
  content: StructuredContentType
}
export const StructuredContent = (props: Props) => {
  const { line } = props.content
  return (
    <>
      {line.map(({ number, run }) => (
        <div className="leading-none" key={number}>
          {Array.isArray(run) ? (
            <StructuredRun node={run} />
          ) : (
            <StructuredNode node={run} />
          )}
        </div>
      ))}
    </>
  )
}