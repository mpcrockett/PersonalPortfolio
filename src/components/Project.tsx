import { motion } from "framer-motion";

interface Props {
  title: string
}

const projectVariant = { 
  hidden: { opactiy: 0, scale: 0.8 }, 
  visible: { opacity: 1, scale: 1}
}

function Project({title}: Props) {
  const overlayStyles = 
    `absolute h-full w-full opacity-0
    hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center
    items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      {/* <img src={} alt={projectTitle} /> */}
    </motion.div>
  );
}

export default Project