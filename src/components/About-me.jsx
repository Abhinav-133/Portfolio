import Pdf from "./assets/AbhinavMittal.pdf";

export function About() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-10 rounded-xl shadow-2xl">
      <img
        className="absolute top-0 left-0 h-72 md:h-96 lg:h-full w-full object-cover rounded-xl opacity-30"
        alt="Profile Picture"
        src="/me.jpeg"
      />
      <div className="relative text-gray-300 text-left mt-8 md:mt-0 md:ml-12 max-w-2xl z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
          Hello! I'm Abhinav Mittal
        </h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          I'm a passionate MERN stack developer with a knack for creating
          intuitive and engaging web experiences. With a solid background in
          building scalable applications using Node.js, Express, MongoDB, and
          React, I thrive on transforming complex problems into elegant
          solutions.
        </p>
        <p className="text-xl md:text-2xl font-light leading-relaxed mt-6">
          My journey in web development has been marked by a commitment to
          continuous learning and innovation. From designing dynamic e-commerce
          platforms to developing robust blogging systems, I've honed my skills
          in various aspects of software development.
        </p>
        <p className="text-xl md:text-2xl font-light leading-relaxed mt-6">
          When I'm not coding, you can find me exploring the latest tech trends,
          solving problems on Leetcode, or enjoying a good movie. I'm always
          excited to take on new challenges and collaborate on projects that
          push the boundaries of technology.
        </p>
        <p className="text-xl md:text-2xl font-light leading-relaxed mt-6">
          Feel free to browse through my portfolio to see some of my work and
          get in touch if you'd like to discuss potential opportunities or
          projects.
        </p>
        <button
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300 ease-in-out"
          onClick={() => window.open(Pdf, "_blank")}
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}
