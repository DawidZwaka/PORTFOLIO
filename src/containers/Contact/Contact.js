import React from "react";
import AnimatableContainer from "../../HOC/AnimatableContainer";
import ContactAnims from "./ContactAnims";

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
		<div class="contact_methods">
			<div className="column">{methods}</div>
			<div className="column">{values}</div>
		</div>
	);
};

const Contact = () => {
	return (
		<AnimatableContainer AnimClass={ContactAnims}>
			<main className="contact">
				<section className="contact_content">
					<h1 class="portal">
						<span>Contact</span>
					</h1>
					<div className="contact_methods">
						<ContactMethods />
					</div>
				</section>
			</main>
		</AnimatableContainer>
	);
};

export default Contact;
