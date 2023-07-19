import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import skillsPhoto from '../assets/skills-photo.png'

function Skills() {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
	return (
    <section id="skills" className="pt-10 pb-24">
    {/* HEADER AND IMAGE SECTION */}
    <div className="md:flex md:justify-between md:gap-16 mt-32">
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          MY <span className="text-red">SKILLS</span>
        </p>
        <LineGradient width="w-1/3" />
        <p className="mt-10 mb-7 text-xl font-raleway font-light">
          COMBINING TECHNICAL EXPERTISE WITH FUNCTIONAL DESIGN
        </p>
      </motion.div>

      <div className="mt-16 md:mt-0">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] max-w-md"
          >
            <img
              alt="skills"
              className="z-10"
              src={skillsPhoto}
            />
          </div>
        ) : (
          <img alt="skills" className="z-10" src={skillsPhoto} />
        )}
      </div>
    </div>

    {/* SKILLS */}
    <div className="md:flex md:justify-between mt-16 gap-32">

      {/* EXPERIENCE */}
      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-3xl mt-3">
              Programming Languages
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
        </div>
        <p className="mt-5 text-xs">
        Javascript, Typescript, C#, SQL, HTML, CSS
        </p>
      </motion.div>

      {/* INNOVATIVE */}
      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-3xl mt-3">
              Front-end Experiences
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
        </div>
        <p className="mt-5 text-xs">
         React, Angular, Redux, Jest, Webpack, Vite, Axios, Mocha Next.js, ChakraUI, MaterialUI, Bootstrap, TailwindCSS
        </p>
      </motion.div>

      {/* IMAGINATIVE */}
      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-3xl mt-3">
              Back-end Technologies
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
        </div>
        <p className="mt-5 text-xs">
          Express, Express-Session, Node.js, Mongoose, Passport, ASP.NET, .NET, Entity Framework, PostgreSQL, MongoDB, psql, Sqlite
        </p>
      </motion.div>
    </div>
  </section>
	);
}

export default Skills;
