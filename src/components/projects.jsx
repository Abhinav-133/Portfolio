import { useNavigate } from "react-router-dom";

export function Project() {
  return (
    <div>
      <h1 className="pt-14 pb-8 text-4xl font-bold bg-[#0d2438] text-white typing-effect">
        Projects Portfolio
      </h1>

      <div className="bg-[#0d2438] text-white">
        <div className="grid grid-cols-3 gap-5 justify-items-center">
          <Projects
            image={"../public/project1.png"}
            title={"Blogging Platform"}
            description={"Web Application"}
            link={"#"}
          />
          <Projects
            image={"../public/project2.png"}
            title={"Sneakers Shopping Platform"}
            description={"Web Application"}
            link={"#"}
          />
          <Projects
            image={"../public/project3.png"}
            title={"Voice Controlled News App"}
            description={"Web Application"}
            link={"#"}
          />
          <Projects
            image={"../public/project4.png"}
            title={"E-Commerce Platform"}
            description={"Web Application"}
            link={"#"}
          />
        </div>
      </div>
      <h1 className="pt-14 pb-8 text-4xl font-bold bg-[#0d2438] text-white typing-effect">
        Practice Projects
      </h1>

      <div className="bg-[#0d2438] text-white">
        <div className="grid grid-cols-3 gap-5 justify-items-center">
          <Projects
            image={"../public/project5.png"}
            title={"Movie Search Website"}
            description={"Web Application"}
            link={"#"}
          />
          <Projects
            image={"../public/project6.png"}
            title={"Designer Clothes Platform"}
            description={"Web Application"}
            link={"#"}
          />
          <Projects
            image={"../public/project7.png"}
            title={"Real Time Chatting Application"}
            description={"Web Application"}
            link={"#"}
          />
          <Projects
            image={"../public/project8.png"}
            title={"Snake Game"}
            description={"Web Application"}
            link={"#"}
          />
           <Projects
            image={"../public/project9.png"}
            title={"Re-Imagined Nike Website"}
            description={"Web Application"}
            link={"#"}
          />
        </div>
      </div>
    </div>
  );
}

function Projects({ image, title, description, link }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => navigate(link)}
    >
      <img src={image} alt={title} className="rounded h-full w-100" />
      <div className="w-100 bg-transparent group-hover:bg-[#3f5575] p-4 absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-xl">{description}</h2>
      </div>
    </div>
  );
}
