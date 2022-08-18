import { BlogPost } from "../../interfaces/blogPost.interface";

const EventPost = (data: BlogPost) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
        <div className="mb-8 overflow-hidden rounded">
          <a href={`/events/${data.id}`} className="block">
            <img
              src={require(`../../assets/images/${data.image_url}`)}
              alt="image"
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            />
          </a>
        </div>
        <div>
          {data.badges?.map((v, ind) => {
            return (
              <span
                key={ind}
                className="mr-3 mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
              >
                {v}
              </span>
            );
          })}
          <h3>
            <a
              href="blog-details.html"
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {data.title}
            </a>
          </h3>
          <p className="text-base text-body-color">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPost;
