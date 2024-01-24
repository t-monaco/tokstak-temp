type HeroProps = object;

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero min-h-screen text-gray-700">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="text-5xl font-bold">
            Hi there, welcome to <b className="text-indigo-500">TokStak</b>
          </h1>
          <p className="">
            We offer an extensive collection of the most popular TikTok videos
            presented in a user-friendly video grid gallery format. This allows
            you to easily choose the one that captures your attention the most.
          </p>
          <a className="btn btn-primary text-lg" href="#video-grid">
            Take a look!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
