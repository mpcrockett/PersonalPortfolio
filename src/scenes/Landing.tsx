import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import profileImage from "../assets/profile-arch.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ContactIcons from "../components/ContactIcons";

interface Props {
	setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

function Landing(props: Props) {
	const { setSelectedPage } = props;
	const isDesktopScreen = useMediaQuery("(min-width: 1060px)");

	return (
		<section
			id='home'
			className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'
		>
			{/* Image Section */}
			<div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
				{isDesktopScreen ? (
					<div
						className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
					>
						<img
							src={profileImage}
							className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[350px] md:max-w-[500px]'
							alt='profile'
						/>
					</div>
				) : (
					<img
						src={profileImage}
						className='hover:filter hover:saturate-100 transition duration-500 z-10 w-full max-w-[350px] md:max-w-[500px]'
						alt='profile'
					/>
				)}
			</div>
			{/* Main Text */}
			<div className='z-30 basis-2/5 mt-12 md:mt-32'>
				{/* Headings */}
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
					<p className='text-5xl font-playfair z-10 text-center md:text-start'>
						Melissa {""}
						<span
							className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[80px] before:z-[-1]'
						>
							Crockett
						</span>
					</p>

					<p className='mt-12 font-raleway mb-7 text-xs text-center md:text-start'>
						With a proven track record of effectively leading teams and
						delivering successful outcomes, I combine technical competency with
						a passion for innovation, drive to tackle challenges with integrity
						and grit, and a commitment to improvement.
					</p>
				</motion.div>

				{/* Call to Actions */}
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<AnchorLink
						className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
          hover:bg-blue hover:text-white transition duration-500'
						onClick={() => setSelectedPage("contact")}
						href='#contact'
					>
						Contact Me
					</AnchorLink>
				</motion.div>

				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<ContactIcons />
				</motion.div>
			</div>
		</section>
	);
}

export default Landing;
