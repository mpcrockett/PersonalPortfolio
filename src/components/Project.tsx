import { motion } from "framer-motion";
import { IProject } from "../scenes/Projects";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import Modal from './Modal.tsx'
import { FaGithub } from 'react-icons/fa6';

interface Props {
	project: IProject;
}

const projectVariant = {
	hidden: { opactiy: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

function Project(props: Props) {
	const { title, description, filename, repoUrl, tags } = props.project;
	const isDesktopScreen = useMediaQuery('(min-width: 996px)');
	const [showModal, setShowModal] = useState<boolean>(false);

	const overlayStyles = `absolute h-full w-full opacity-0
    hover:opacity-95 transition duration-500
    bg-white z-30 flex flex-col justify-center
    items-center text-center p-10 py-5 text-deep-blue overflow-scroll`;
	return (
		<>
			{!isDesktopScreen &&
				<motion.div variants={projectVariant} className='relative'>
					<img src={filename} alt={title} onClick={() => setShowModal(true)} />
					{showModal && <Modal title={title} description={description} repoUrl={repoUrl} tags={tags} setShowModal={setShowModal} />}
				</motion.div>
			}
			{isDesktopScreen &&
				<motion.div variants={projectVariant} className='relative'>
					<div className={overlayStyles}>
						<p className='text-xl font-raleway uppercase m-1'>{title}</p>
						<div className={'flex-row'}>
							{/* CHIPS */}
							{tags.map((tag) => {
								return <div key={`${tag} ${title}`} className="center relative inline-block select-none whitespace-nowrap m-0.5 rounded-lg bg-red py-2 px-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
									{tag}
								</div>
							})}
						</div>
						{/* GITHUB BUTTON */}
						<a href={repoUrl} target='_blank' rel='noreferrer noopener' className="inline-flex overflow-hidden text-white bg-deep-blue rounded group my-3 shadow-sm">
							<span className="px-2.5 py-1 text-white bg-yellow group-hover:bg-dark-purple flex items-center justify-center">
								<FaGithub/>
							</span>
							<span className="pl-2 pr-2.5 py-1 text-xs uppercase">See the Code</span>
						</a>
					</div>
					{filename && <img src={filename} alt={title} />}
				</motion.div>
			}
		</>
	);
}

export default Project;

