type Color = "black" | "white" | "blue"; // TODO Add more once we get there

type RunNode = {
  bg: Color;
  fg: Color;
  length: string;
  charcode?: string;
  Text?: string;
};

type TextNode = {
  number: string;
  Text?: string;
};

type StructuredLine = {
  type: "structured";
  run: RunNode[];
};

type TextLine = {
  type: "text";
  line: TextNode;
};

type AllLine = {
  type: "all";
  line: TextNode;
};

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
      content: (StructuredLine | TextLine | AllLine)[];
    }[];
  };
};

export type TeletextResponse = {
  teletext: TeleText;
};
