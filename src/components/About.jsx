const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Shahzod, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a skilled software developer proficient in TypeScript and
              JavaScript, with a solid understanding of frameworks such as React
              and Node.js, I specialize in swiftly adapting to new technologies
              to craft efficient, scalable, and user-friendly solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
