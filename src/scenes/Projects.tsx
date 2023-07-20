import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import Project from "../components/Project";
import projectsData from "../data/projects.json";

export type IProject = {
	id: string;
	title: string;
	description: string;
	filename: string;
	repoUrl: string
};

function Projects() {
	return (
		<section className='min-w-full min-h-full flex flex-col'>
			<div id='title-box' className='my-5'>
				<motion.div
					initial='hidden'
					className='flex flex-col justify-center items-center'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='font-lora font-semibold text-4xl mb-5 uppercase'>
						Pro<span className='text-red'>jects</span>
					</p>

					<p className='mt-18 font-raleway font-light mb-7 text-sm text-center'>
						An innovative and versatile full-stack software engineer crafting
						elegant solutions for the digital domain.
					</p>
				</motion.div>
			</div>
			<div
				id='projects-grid'
				className='py-50 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4'
			>
				{projectsData.map((proj) => (
					<Project key={proj.id} project={proj} />
				))}
			</div>
		</section>
	);
}

export default Projects;
