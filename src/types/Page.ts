export interface MarkdownOrAstroPage {
  url: string;
  title?: string;
  frontmatter?: {
    title: string;
  };
}
