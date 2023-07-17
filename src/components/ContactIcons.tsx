import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function ContactIcons() {
	return (
		<div className='flex flex-center md:justify-start my-10 gap-7'>
			<a
				href='https://www.linkedin.com/in/melissa-crockett-a87a40189/'
				className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel="noreferrer"
			>
				<FaLinkedin />
			</a>
      <a
				href='mailto:mpcrockett@gmail.com'
				className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel="noreferrer"
			>
				<FaEnvelope />
			</a>
      <a
				href='https://github.com/mpcrockett'
				className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel="noreferrer"
			>
				<FaGithub />
			</a>
		</div>
	);
}

export default ContactIcons;
