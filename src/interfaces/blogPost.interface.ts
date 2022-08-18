export interface BlogBadge {
  text?: string;
  style?: string;
}

export interface BlogParagraph {
  title: string;
  text: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: Date;
  badges?: string[];
  image_url: string;
  paragraphs?: BlogParagraph[];
}
