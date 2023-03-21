import { RunNode } from "@/types/Yle.types"
import { bgColor, fgColor } from "@/utils/Tailwind"

type Props = {
  node: RunNode
}

export const StructuredNode = (props: Props) => {
  const { bg, fg, length, Text, charcode } = props.node

  let text = "";
  if (charcode) {
    // TODO: figure out how charcode works
    text = "\u00a0".repeat(Number(length))
  } else if (Text) {
    // replace spaces with no-break spaces
    text = Text.replace(/ /g, "\u00A0")
  } else {
    text = "\u00a0".repeat(Number(length))
  }
  return <span className={`${bgColor[bg]} ${fgColor[fg]}`}>{text}</span>
}