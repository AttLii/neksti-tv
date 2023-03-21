import { Content, StructuredContent } from "@/types/Yle.types";

export const isStructuredContent = (
  content: Content
): content is StructuredContent => content.type === "structured";
