export type Color =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gblack"
  | "gred"
  | "ggreen"
  | "gyellow"
  | "gblue"
  | "gmagenta"
  | "gcyan"
  | "gwhite";
export type RunNode = {
  bg: Color;
  fg: Color;
  length: string;
  charcode?: string;
  Text?: string;
};
type StructuredLine = {
  number: string;
  run: RunNode[] | RunNode;
};

type TextNode = {
  number: string;
  Text?: string;
};

export type StructuredContent = {
  type: "structured";
  line: StructuredLine[];
};

type TextContent = {
  type: "text";
  line: TextNode;
};

type AllContent = {
  type: "all";
  line: TextNode;
};

export type Content = StructuredContent | TextContent | AllContent;

export type TeleText = {
  network: string;
  xml: string;
  page: {
    number: string;
    name: string;
    time: string;
    subpagecount: string;
    nextpg?: string;
    prevpg?: string;
    toptype: "Block";
    animated?: "yes";
    subpage: {
      number: string;
      time: string;
      content: Content[];
    }[];
  };
};

export type TeletextResponse = {
  teletext: TeleText;
};
