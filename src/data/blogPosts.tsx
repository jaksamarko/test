import { BlogPost } from "../interfaces/blogPost.interface";

let _id = 0;

const posts: BlogPost[] = [
  {
    title: "Test",
    description: "Smol text below the title",
    id: _id++,
    date: new Date(),
    author: "Jaksa Márkó",
    image_url: "nyitas_1.jpg",
    badges: ["Event", "Amazing", "Test"],
    paragraphs: [
      {
        title: "Test1",
        text: "First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum ",
      },
      {
        title: "Test2",
        text: "First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum\
        First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum First paragraphs, it is, just lorem ipsum ",
      },
    ],
  },
];

export default posts;
