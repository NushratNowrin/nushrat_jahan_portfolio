import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "../styles";
import contact from "../assets/contact.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
	const form = useRef();

	
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_duzs3z4",
				"template_jak3zpi",
				form.current,
				"mxsl_yiq14hGUGo07"
			)
			.then(
				(result) => {
					console.log(result.text);
            toast("Email sent successfully!");
          
        
				},
				(error) => {
					console.log(error.text);
          toast("Email doesn's send");
				}
			);
      setName("");
      setEmail("");
      setMessage("")
	};

  
	return (
		<section
			id='contact'
			className='relative contact py-20 w-full mx-auto bg-black-100'>
			<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40'></div>
			<div
				className={`lg:px-32 md:px-16 px-0 relative top-[20px] text-center `}>
				<h3 className={`${styles.bannerHeadText}`}>Get in Touch</h3>
				<h2 className={`${styles.sectionWhiteHeading}`}>Contact Me</h2>
				<div className='bg-white bg-opacity-20 grid md:grid-cols-2 grid-cols-1 justify-center items-center md:h-96 gap-10 mt-10 lg:px-20 p-10'>
					<div>
						<img src={contact} alt='' className="md:h-52 mx-auto"/>
					</div>
					<div>
						<form ref={form} onSubmit={sendEmail} className='md:text-left'>
							<div>
								<input
									type='text'
									name='user_name'
									placeholder='User Name'
                  value = {name}
                  onChange={(e)=> setName(e.target.value)}
									className={`${styles.inputField}`}
								/>
							</div>

							<div>
								<input
									type='email'
									name='user_email'
									placeholder='User Email'
                  value = {email}
                  onChange={(e)=> setEmail(e.target.value)}
									className={`${styles.inputField}`}
								/>
							</div>

							<div>
								<textarea
									name='message'
									placeholder='Write your message'
                  value = {message}
                  onChange={(e)=> setMessage(e.target.value)}
									className={`${styles.inputField}`}
								/>
							</div>
							<div>
								<input
									type='submit'
									value='Send'
									className='bg-blue-700 bg-opacity-70 w-full font-semibold p-1 hover:bg-opacity-90 cursor-pointer '
								/>
                <ToastContainer />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
