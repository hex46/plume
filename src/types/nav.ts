export interface MatchItem {
  url: string;
  title?: string;
  frontmatter?: {
    title: string;
  };
}

export interface NavItem {
  url: string;
  title: string;
}
