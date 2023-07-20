import { motion } from "framer-motion";
import { IProject } from "../scenes/Projects";

interface Props {
	project: IProject;
}

const projectVariant = {
	hidden: { opactiy: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

function Project(props: Props) {
	const { title, description, filename, repoUrl } = props.project;

	const overlayStyles = `absolute h-full w-full opacity-0
    hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center
    items-center text-center p-16 text-deep-blue`;
	return (
		<motion.div variants={projectVariant} className='relative'>
			<div className={overlayStyles}>
				<p className='text-2xl font-lora'>{title}</p>
				<p className='mt-7 text-xs text-left'>{description}</p>
				<p className='text-red font-raleway uppercase text-xs font-bold m-2'>
					<a target='_blank' rel='noreferrer noopener' href={repoUrl}>
						See the code
					</a>
				</p>
			</div>
			{filename && <img src={filename} alt={title} />}
		</motion.div>
	);
}

export default Project;
