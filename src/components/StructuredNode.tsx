import { RunNode } from "@/types/Yle.types"
import { bgColor, fgColor } from "@/utils/Tailwind"

type Props = {
  node: RunNode
}

const DoubleSize = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((c, i) => {
        const char = c.charCodeAt(0)
        return (
          <span key={i} className="inline-flex flex-col">
            <span>{String.fromCharCode(char + 0xE000)}</span>
            <span>{String.fromCharCode(char + 0xE100)}</span>
          </span>
        )
      })}
    </>
  )
}
export const StructuredNode = (props: Props) => {
  const { bg, fg, length, Text, charcode, size } = props.node
  let text = "";
  if (charcode) {
    // TODO: figure out how charcode works
    text = "\u00a0".repeat(Number(length))
  } else if (Text) {
    text = Text
  } else {
    text = "\u00a0".repeat(Number(length))
  }

  return (
    <span className={`${bgColor[bg]} ${fgColor[fg]}`}>
      {(size && text.trim()) ? <DoubleSize>{text}</DoubleSize> : text.replace(/ /g, "\u00a0")}
    </span>)
}