/* eslint-disable @typescript-eslint/no-misused-promises */
import LineGradient from "../components/LineGradient";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import contactImage from "../assets/contact-image.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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

	const templateID = "template_0r8k65u";
	const serviceID = "service_zlvyd0c";
	const publicKey = "3er37We2QK4s0Nugo";

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		if (data === null) return;
		const { firstName, lastName, email, message } = data;

		const templateParams = {
			name: `${firstName} ${lastName}`,
			email,
			message,
		};

		const promise = emailjs.send(serviceID, templateID, templateParams, publicKey);

		await toast.promise(promise, {
			pending: "Please Wait..",
			success: 'Message sent.',
			error: "Oops, something went wrong."
		});
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
					<p className='font-lora font-semibold text-4xl'>
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
						alt='contact'
					/>
				</motion.div>

				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					className='basis-1/2 mt-10 md:mt-0'
				>
					<form onSubmit={handleSubmit(onSubmit)} >
						<div>
							<Controller
								name='firstName'
								control={control}
								defaultValue=''
								render={({ field }) => (
									<input
										className='w-full font-light placeholder-opaque-black p-3 m-2 text-black'
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
										className='w-full font-light placeholder-opaque-black p-3 m-2 text-black'
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
										className='w-full font-light placeholder-opaque-black p-3 m-2 text-black'
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
								render={({ field }) => (
									<textarea
										className='w-full placeholder-opaque-black p-3 m-2 text-black font-light'
										placeholder='Type your message here'
										{...field}
									/>
								)}
							/>
							{errors.message && <p>{errors.message.message}</p>}
						</div>
						<button
							className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-200 m-2'
							type='submit'
						>
							SUBMIT
						</button>
					</form>
					<ToastContainer
						position='bottom-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='light'
					/>
				</motion.div>
			</div>
		</section>
	);
}

export default Contact;
