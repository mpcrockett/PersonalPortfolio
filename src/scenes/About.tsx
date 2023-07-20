import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

function About() {
	return (
		<section id='about' className='pt-10 pb-24'>
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
					<p className='mt-12 font-raleway mb-7 text-xs text-center md:text-start max-w-[850px]'>
						After almost a decade in collegiate non-profit work, I have
						transitioned into software development career and seek to utilize my
						organizational leadership and project management skills in a new and
						challenging domain. As a hard-working, quick learner with a
						self-taught background, I believe that my integrity, grit,
						collaborative mindset, and desire for growth would bring great value
						to your engineering team.{" "}
					</p>
					<p className='mt-12 font-raleway mb-7 text-xs text-center md:text-start max-w-[850px]'>
						As a full-stack developer, I am proficient with JavaScript,
						TypeScript, HTML, and CSS. I am strong in React, Redux, and other
						Javascript-based frameworks and libraries, and I am experienced in
						designing and building front-end applications and features. I also
						have expertise in creating RESTful APIs and working with back-end
						server technologies such as Node.js, Express, ASP.NET, session
						management, and MVC architecture. Additionally, I am experienced in
						database design, utilizing PostgreSQL and managing schema changes
						through migrations, as well as working with NoSQL databases like
						MongoDB. Furthermore, I am well-versed in debugging, refactoring,
						version control, unit and integration testing, TDD, and CI/CD.
					</p>
					<p className='mt-12 font-raleway mb-7 text-xs text-center md:text-start max-w-[850px]'>
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
					<p className='mt-12 font-raleway mb-7 text-xs text-center md:text-start max-w-[850px]'>
						I look forward to hearing from you.
					</p>
					<p className='mt-12 font-raleway mb-7 text-xs text-center md:text-start max-w-[850px]'><a target="_blank" rel="noreferrer noopener" href="https://drive.google.com/file/d/1Zr1i0hXHRST6OHQKgB6fcJzDbSuZi6cT/view?usp=sharing">Check out my resume here</a></p>
				</motion.div>
			</div>
		</section>
	);
}

export default About;
