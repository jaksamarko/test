import img from '../assets/images/justdance_logo.png';
//import bgImg from '../assets/images/justdance_logo.png';

const JustDance = () => {
	return (
		<section id="justdance" className="bg-purple-800 pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
			<div className="container">
				<div className="wow fadeInUp" data-wow-delay=".2s">
					<div className="-mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div
								style={{ 'var(--image-url)': require('../assets/images/justdance.png') } as any}
								className={`items-center justify-between overflow-hidden lg:flex bg-[image:var(--image-url))]`}
							>
								<div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
									<h2 className="mb-6 text-3xl font-bold text-slate-400 sm:text-4xl sm:leading-snug 2xl:text-[40px]">
										Csak táncolj!
									</h2>
									<p className="mb-9 text-base leading-relaxed text-slate-200">
										A tánc a mindened vagy akárcsak 1 órára is bárcsak kiengedhetnéd a félév
										fáradalmait ritmusra csapatva?
									</p>
									<p className="mb-9 text-base leading-relaxed text-slate-200">
										Amennyiben közösségünk felkeltette érdeklődésedet,{' '}
										{/* csatlakozz Discord
										szerverünkhöz, a platformon ahol a legaktívabbak vagyunk. */}{' '}
										látogass el nyitásainkra!
									</p>
									<a
										href="javascript:void(0)"
										className="inline-flex items-center justify-center rounded bg-pink-500 py-4 px-6 text-base font-medium text-black transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
									>
										Tudj meg többet!
									</a>
								</div>
								<div className="text-center">
									<div className="relative z-10 inline-block ">
										<img src={img} alt="image" className="mx-auto lg:ml-auto rounded-lg" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JustDance;
