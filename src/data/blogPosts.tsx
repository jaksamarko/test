import { BlogPost } from "../interfaces/blogPost.interface";

let _id = 0;

const posts: BlogPost[] = [
  {
    title: "Esélykiegyenlítős nyitás",
    description: "Unod már hogy folyton nyersz? Igyál!",
    id: _id++,
    date: new Date(),
    author: "Jaksa Márkó Dániel",
    image_url: "nyitas_1.jpg",
    badges: ["Esélykiegyenlítős", "CS1.6", "FNT"],
    paragraphs: [
      {
        title: "Iszol te rendesen (játék közben)?",
        text: "Ha folyton azzal szembesülsz hogy valaki megver téged a kedvenc játékodban, lássuk olyan gengszter-e hogy 5 sör után is képes-e rá! Vagy ez épp neked menne?Látogass el nyitásunkra és tudd meg.",
      },
      { bannerURI: "cs_1_6.jpg" },
      {
        title: "CS1.6 és Konzolok",
        text: "Hozz gépet és játsz gyerekkorod kedvenc FPS-ével kolis ismerőseiddel vagy épp maga a Lanosch csapat ellen! Amennyiben controllerel meg auto aimmal ügyesebb vagy, fenntartunk konzolokat is azokan akik nem géppel érkeznének.",
      },
    ],
  },
];

export default posts;
