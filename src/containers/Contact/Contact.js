//vendors
import React from "react";

//images
import Image from "../../assets/images/contactImage.png";

const contactData = [
	{ type: "phone", value: 508833686, href: "tel:508833686" },
	{
		type: "mail",
		value: "zwakadawid@gmail.com",
		href: "mailto:zwakadawid@gmail.com",
	},
	{
		type: "facebook",
		value: "Dawid Żwaka",
		href: "https://www.facebook.com/dawid.zwaka/",
	},
];

const ContactMethods = () => {
	const methods = [],
		values = [];

	contactData.forEach(({ type, value, href }) => {
		methods.push(
			<strong class="portal">
				<span>{type}</span>
			</strong>
		);
		values.push(
			<a href={href} target="_blank" rel="noreferrer" class="portal">
				<span>{value}</span>
			</a>
		);
	});

	return (
		<div class="methods__content">
			<div className="column">
				<h4>Socials</h4>
				<p>LinkedIn</p>
				<p>Facebook</p>
				<p>Instagram</p>
				<p>Github</p>
			</div>
			<div className="column">
				<h4>Standard methods</h4>
				<p>508833686</p>
				<p>zwakadawid@gmail.com</p>
				<p>Dawid Żwaka</p>
			</div>
		</div>
	);
};

const Contact = () => {
	return (
		<main className="contact">
			<div className="contact__img">
				<img src={Image} />
			</div>
			<div className="contact__methods">
				<h4 class="methods__title">
					<div className="portal">
						<span>Contact</span>
					</div>
				</h4>
				<ContactMethods className="methods__content" />
			</div>
		</main>
	);
};

export default Contact;
