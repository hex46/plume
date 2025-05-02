export interface MarkdownOrAstroPage {
  url: string;
  title?: string;
  frontmatter?: {
    title: string;
  };
}

export interface NavElement {
  url: string;
  title: string;
}

export interface CardItem {
  title: string;
  url: string;
  description: string;
}

export interface Post extends CardItem {
  created: Date;
  lastModified?: Date;
}

export interface Project extends CardItem {
  archived: boolean;
}
