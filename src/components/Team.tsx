import teamMembers from "../data/TeamMembers";
import TeamProfile from "./Team/TeamProfile";

const Team = () => {
  return (
    <section id="team" className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Lanosch
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                Csoda csapat
              </h2>
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                Ismerd meg körünk tagjait
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((v, ind) => {
            return <TeamProfile {...v} key={ind} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
