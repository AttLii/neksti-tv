import type { TeleText as TeleTextType } from "@/types/Yle.types";
import { isStructuredContent } from "@/utils/Yle";
import { ReactNode, useEffect, useState } from "react";
import { StructuredContent } from "./StructuredContent";

type FontWrapperProps = {
  children: ReactNode
}
const FontWrapper = ({ children }: FontWrapperProps) => {
  return <div className="font-mode7">{children}</div>
}

type Props = {
  teleText: TeleTextType
}
export const TeleText = (props: Props) => {
  const { subpagecount, subpage } = props.teleText.page
  const [subPageIndex, setSubpageIndex] = useState(0)

  const { content, time } = subpage[subPageIndex]
  useEffect(() => {
    let id = setInterval(() => {
      setSubpageIndex(index => index === Number(subpagecount) - 1 ? 0 : index + 1)
    }, Number(time) * 1000)
    return () => clearInterval(id)
  }, [time, subpagecount, setSubpageIndex])

  // TODO selector for changing content type
  const c = content[2]
  return (
    <FontWrapper>
      {isStructuredContent(c) ? <StructuredContent content={c} /> : null}
    </FontWrapper>
  )
}