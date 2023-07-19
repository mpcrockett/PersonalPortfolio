/* eslint-disable @typescript-eslint/no-misused-promises */
import LineGradient from "../components/LineGradient";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import contactImage from '../assets/contact-image.png';

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
};

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	message: yup.string().required("Message is required"),
});

function Contact() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};

	return (
		<section id='contact' className='contact py-48'>
			{/* HEADINGS */}
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
				className='flex justify-end w-full'
			>
				<div>
					<p className='font-playfair font-semibold text-4xl'>
						<span className='text-yellow'>GET IN</span> TOUCH
					</p>
					<div className='flex md:justify-end my-5'>
						<LineGradient width='w-1/2' />
					</div>
				</div>
			</motion.div>

			<div className='md:flex md:justify-between gap-16 mt-5'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					className='basis-1/2 flex justify-center'
				>
					<img
            className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[250px] md:max-w-[375px]'
            src={contactImage} 
            alt='contact' />
				</motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
				<form
          target="_blank"
          onSubmit={handleSubmit(onSubmit)}
          action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
          method="POST"
        >
					<div>
						<Controller
							name='firstName'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input
									className='w-full font-semibold placeholder-opaque-black p-3 m-2'
									placeholder='First Name'
									{...field}
									type='text'
								/>
							)}
						/>
						{errors.firstName && <p>{errors.firstName.message}</p>}
					</div>

					<div>
						<Controller
							name='lastName'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input
									className='w-full font-semibold placeholder-opaque-black p-3 m-2'
									placeholder='Last Name'
									{...field}
									type='text'
								/>
							)}
						/>
						{errors.lastName && <p>{errors.lastName.message}</p>}
					</div>

					<div>
						<Controller
							name='email'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input
									className='w-full font-semibold placeholder-opaque-black p-3 m-2'
									placeholder='Email Address'
									{...field}
									type='text'
								/>
							)}
						/>
						{errors.email && <p>{errors.email.message}</p>}
					</div>

					<div>
						<Controller
							name='message'
							control={control}
							defaultValue=''
							render={({ field }) => 
                <textarea 
                  className='w-full font-semibold placeholder-opaque-black p-3 m-2'
                  placeholder='Type your message here'
                  {...field}
                />
              }
						/>
						{errors.message && <p>{errors.message.message}</p>}
					</div>
					<button
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-200 m-2' 
            type='submit'>SUBMIT</button>
				</form>
        </motion.div>
			</div>
		</section>
	);
}

export default Contact;
