import EventPost from './Events/EventPost';
import posts from '../data/blogPosts';

const Events = () => {
	return (
		<section id="events" className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-[#f3f4fe]">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					{posts.map((v, ind) => {
						return <EventPost {...v} key={ind} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Events;
