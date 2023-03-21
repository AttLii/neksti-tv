import { ReactNode } from "react"

type FontWrapperProps = {
  children: ReactNode
}
export const FontWrapper = ({ children }: FontWrapperProps) => {
  return <div className="font-mode7">{children}</div>
}