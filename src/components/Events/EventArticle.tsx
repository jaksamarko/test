import { BlogPost } from '../../interfaces/blogPost.interface';

const EventArticle = (data: BlogPost) => {
	return (
		<div className="w-full px-4 md:w-1/2 lg:w-full">
			<div
				className="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5"
				data-wow-delay=".1s
                        "
			>
				<div className="mr-5 h-40 w-full max-w-[80px] overflow-hidden rounded-full">
					<img
						src={require(`../../assets/images/${data.image_url}`)}
						alt="image"
						className="w-full"
					/>
				</div>
				<div className="w-full">
					<h4>
						<a
							href="javascript:void(0)"
							className="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg"
						>
							{data.title}
						</a>
					</h4>
					<p className="text-sm text-body-color">{data.author}</p>
				</div>
			</div>
		</div>
	);
};

export default EventArticle;
