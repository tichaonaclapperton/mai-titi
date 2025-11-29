import React from "react";
import './contact.css'

export default function Contact() {
	
	const googleMaps = 'https://maps.app.goo.gl/WnZwK4nvAt8vskh16?g_st=awb'

	return (
		<div className="contact-container">
			<h1 className="contact-title">Contact Us</h1>
			<p className="contact-subtitle">Visit us Or get in touch any time</p>
			<div className="contact-grid">
				<div className="contact-info">
					<h2>Our Location</h2>
					<h2>We are at Cape Town airport</h2>

					<button
						className="view"
						onClick={() => window.open(googleMaps, "_blank")}
					>
						Get directions
					</button>
					<h2>📞Phone/whtasapp</h2>
					<p>
						<a href="https://wa.me/074 559 3251" target="_blank">
							074 559 3251
						</a>
					</p>
					<h2>📧email</h2>
					<p>
						<a href="mailto:tizwif@gmail.com">tizwif@gmail.com</a>
					</p>

					<h2>🕦Hours</h2>
					<p>Mon-Sun: 9AM-1700</p>
				</div>

				<div className="contact-map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13235.161768112732!2d18.587395012316485!3d-33.97222534764287!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1764234384153!5m2!1sen!2sza"
						width="600"
						height="250"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
}
