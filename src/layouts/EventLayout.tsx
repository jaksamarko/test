import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EventArticle from '../components/Events/EventArticle';
import EventContent from '../components/Events/EventContent';
import EventHeader from '../components/Events/EventHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/Misc/BackToTop';
import IconFacebook from '../components/Misc/IconFacebook';
import IconLinkedin from '../components/Misc/IconLinkedin';
import IconTwitter from '../components/Misc/IconTwitter';
import Navbar from '../components/Navbar';
import posts from '../data/blogPosts';

const EventLayout = () => {
	const id = parseInt(useParams().eventid || '');
	const postData = posts.find(v => v.id === id);
	const nav = useNavigate();

	useEffect(() => {
		if (!postData) {
			nav('/', { replace: true });
		}
	}, []);

	return (
		<>
			<Navbar />
			<section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
				<div className="container">
					<div className="-mx-4 flex flex-wrap justify-center">
						<div className="w-full px-4">
							<EventHeader {...postData!} />
							<div className="-mx-4 flex flex-wrap">
								<div className="w-full px-4 lg:w-8/12">
									<div>
										{postData?.paragraphs?.map((v, ind) => {
											return <EventContent {...v} key={ind} />;
										})}

										<div className="-mx-4 mb-12 flex flex-wrap items-center">
											<div className="w-full px-4 md:w-1/2">
												<div
													className="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0"
													data-wow-delay=".1s"
												>
													{postData?.badges?.map((v, ind) => {
														return (
															<a
																key={ind}
																href="javascript:void(0)"
																className="mr-2 mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-primary hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4"
															>
																{v}
															</a>
														);
													})}
												</div>
											</div>
											<div className="w-full px-4 md:w-1/2">
												<div
													className="wow fadeInUp flex items-center md:justify-end"
													data-wow-delay=".1s"
												>
													<span className="mr-5 text-sm font-medium text-body-color">
														Osszd meg (és uralkodj)
													</span>
													<div className="flex items-center">
														<IconFacebook
															href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
																window.location.href
															)}`}
															extraClass="mb-2 mr-4"
														/>
														<IconTwitter href="" extraClass="mb-2 mr-4" />
														<IconLinkedin href="" extraClass="mb-2" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="w-full px-4 lg:w-4/12">
									<div className="-mx-4 mb-8 flex flex-wrap">
										<div className="w-full px-4">
											<h2
												className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]"
												data-wow-delay=".1s
                        "
											>
												További posztjaink
											</h2>
											<span className="mb-10 inline-block h-[2px] w-full bg-primary"></span>
										</div>
										{posts
											.filter((v, i) => v.id !== postData!.id)
											.map((v, ind) => {
												return <EventArticle {...v} key={ind} />;
											})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
			<BackToTop />
		</>
	);
};

export default EventLayout;
