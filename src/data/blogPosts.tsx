import { BlogPost } from '../interfaces/blogPost.interface';

let _id = 0;

const posts: BlogPost[] = [
	{
		title: 'Esélykiegyenlítős nyitás',
		description: 'Unod már hogy folyton nyersz? Igyál!',
		id: _id++,
		date: new Date(),
		author: 'Jaksa Márkó Dániel',
		image_url: 'nyitas_1.jpg',
		badges: ['Esélykiegyenlítős', 'CS1.6', 'FNT'],
		paragraphs: [
			{
				title: 'Iszol te rendesen (játék közben)?',
				text: 'Ha folyton azzal szembesülsz hogy valaki megver téged a kedvenc játékodban, lássuk olyan gengszter-e hogy 5 sör után is képes-e rá! Vagy ez épp neked menne?Látogass el nyitásunkra és tudd meg.',
			},
			{ bannerURI: 'cs_1_6.jpg' },
			{
				title: 'CS1.6 és Konzolok',
				text: 'Hozz gépet és játsz gyerekkorod kedvenc FPS-ével kolis ismerőseiddel vagy épp maga a Lanosch csapat ellen! Amennyiben controllerel meg auto aimmal ügyesebb vagy, fenntartunk konzolokat is azokan akik nem géppel érkeznének.',
			},
		],
	},
	{
		title: 'Lanosch',
		description: 'Ismerd meg körünket bővebben!',
		id: _id++,
		image_url: 'banner.jpg',
		date: new Date(),
		author: 'Jaksa Márkó Dániel',
		badges: ['Lanosch', 'Kör', 'Közösség'],
		paragraphs: [
			{
				title: 'Körünk története',
				text: `Még X-ban alapította Y a kört. Kezdetben a célja a közösség összehozása volt pár baráti játékra,
        ez azóta sincs máshogy de az évek során konzolokra is szert tudtunk tenni amivel több lehetőséget tudunk a kolisoknak vagy a kolin belüli embereknek biztosítani.`,
			},
			{
				title: 'Több infó hamarosan..',
				text: '',
			},
		],
	},
	{
		title: 'Just Dance',
		description: 'Ismerd meg a körünk másik részét!',
		id: _id++,
		image_url: 'justdance_cover.jpg',
		author: 'Jaksa Márkó Dániel',
		date: new Date(),
		badges: ['Just dance', 'Tánc', 'Zene'],
		paragraphs: [
			{
				title: 'Több infó hamarosan..',
				text: '',
			},
		],
	},
];

export default posts;
