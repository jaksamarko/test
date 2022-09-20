import { BlogParagraph } from '../../interfaces/blogPost.interface';

const EventContent = (v: BlogParagraph) => {
	return v.bannerURI ? (
		<div className="max-w-[530px] mx-auto mb-6">
			<img
				className="object-fill w-full rounded"
				src={require(`../../assets/images/blog/${v.bannerURI}`)}
			/>
		</div>
	) : (
		<>
			<h2
				className="wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug"
				data-wow-delay=".1s"
			>
				{v.title}
			</h2>
			<p
				className="wow fadeInUp mb-8 text-base leading-relaxed text-body-color"
				data-wow-delay=".1s"
			>
				{v.text}
			</p>
		</>
	);
};

export default EventContent;
