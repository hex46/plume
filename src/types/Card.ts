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

export interface Thought extends CardItem {
  created: Date;
}
