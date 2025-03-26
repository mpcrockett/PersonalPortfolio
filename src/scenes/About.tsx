import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

function About() {
	return (
		<section id='about' className='pt-10 pb-50'>
			<div className='z-30 basis-2/5 mt-12 md:mt-32'>
				{/* Heading */}
				<motion.div
					className='md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='font-lora font-semibold text-4xl mb-5'>
						About <span className='text-red'>Me</span>
					</p>
					<LineGradient width='w-1/3' />
					<p className='mt-10 mb-7 text-xl font-raleway font-light'>
						INTEGRITY, GRIT, COLLABORATION
					</p>
				</motion.div>

				{/* Body */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='mt-4 font-raleway mb-2 text-s text-center md:text-start max-w-[850px]'>
					I am a Full Stack Software Engineer with a focus on JavaScript and TypeScript.
					I bring empathy, collaboration, and attention to detail to my work—skills shaped by a decade as a collegiate non-profit chaplain.
					My background in leadership and project management complements my technical expertise.
					With integrity, grit, and a growth mindset, I will bring real value to your engineering team.
					</p>
					<p className='mt-4 font-raleway mb-2 text-s text-center md:text-start max-w-[850px]'>
					I work across the stack with tools like React, React Native, Redux, Next.js, and Expo. 
					On the backend, I build RESTful APIs with Express in Node.js and specialize in PostgreSQL, using both raw SQL and Prisma. 
					I also have experience with Python and C#, and I am skilled in automated testing, database design, security, debugging, version control, and CI/CD.
					</p>
					<p className='mt-4 font-raleway mb-2 text-s text-center md:text-start max-w-[850px]'>
						What sets me apart is my relentless pursuit of learning and adopting
						new technologies and skills. I am constantly pushing the boundaries
						of my knowledge, whether through studying documentation or
						implementing challenging features. My strong problem-solving
						abilities enable me to approach complex software challenges with
						diligence and precision. I am comfortable working independently
						while also knowing when to seek input from others. Moreover, my
						nearly decade-long experience in the non-profit sector has honed my
						leadership and interpersonal skills.
					</p>
					<p className='mt-12 font-raleway mb-7 text-xs text-center md:text-start max-w-[850px]'><a target="_blank" rel="noreferrer noopener" href="https://drive.google.com/file/d/1RtPdkw8OyGB9UMyixUWoSOxYqZbc_5ap/view?usp=sharing">Check out my resume here</a></p>
				</motion.div>
			</div>
		</section>
	);
}

export default About;
