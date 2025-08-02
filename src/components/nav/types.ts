export interface MarkdownOrAstroPage {
  url: string;
  title?: string;
  collection?: string;
  frontmatter?: {
    title: string;
  };
}

export interface NavElement {
  url: string;
  title: string;
}
