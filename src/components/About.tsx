import img from '../assets/images/about.png';

const About = () => {
	return (
		<section id="about" className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
			<div className="container">
				<div className="wow fadeInUp bg-white" data-wow-delay=".2s">
					<div className="-mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div className="items-center justify-between overflow-hidden border lg:flex">
								<div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
									<h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
										Nem csak egy kör, hanem közösség
									</h2>
									<p className="mb-9 text-base leading-relaxed text-body-color">
										Minden kör szeret minél többször kinyitni a félév során, üdvözölni,
										szórakoztatni az egyetemistákat. Nálunk sincs ez máshogy de talán kevesen tudják
										hogy majdnem annyi belsős programot is rendezünk mivel mi igazán szeretünk
										leülni, jófej emberekkel leülni egy játékhoz és persze <s>iszogatni</s>{' '}
										beszélgetni.
									</p>
									<p className="mb-9 text-base leading-relaxed text-body-color">
										Amennyiben közösségünk felkeltette érdeklődésedet, csatlakozz Discord
										szerverünkhöz, a platformon ahol a legaktívabbak vagyunk.
									</p>
									<a
										href="javascript:void(0)"
										className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
									>
										Tudj meg többet!
									</a>
								</div>
								<div className="text-center">
									<div className="relative z-10 inline-block">
										<img src={img} alt="image" className="mx-auto lg:ml-auto" />
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

export default About;
