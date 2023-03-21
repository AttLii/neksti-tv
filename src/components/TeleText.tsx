import type { TeleText as TeleTextType } from "@/types/Yle.types";
import { isStructuredContent } from "@/utils/Yle";
import { ReactNode } from "react";
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
export const TeleText = ({ teleText }: Props) => {
  // TODO selector for changing content type
  const content = teleText.page.subpage[0].content[2]
  if (isStructuredContent(content)) {
    return <FontWrapper><StructuredContent content={content} /></FontWrapper>
  } else {
    // TODO add more for different types
    return null;
  }
}