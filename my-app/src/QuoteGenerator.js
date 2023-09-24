import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faSquareFacebook} from "@fortawesome/free-brands-svg-icons";

export class QuoteGenerator extends React.Component {
	render() {
		return (
			<div className="container p-4 bg-dark text-white rounded" id="quote-box">
				<header className="header border-bottom">
					<h2>Random Quote Generator</h2>
				</header>
				<div className="quote-body d-flex flex-column justify-content-around">
					<h1 className="quote-title display-6">Quote of the day</h1>
					<blockquote>
						<FontAwesomeIcon icon={faQuoteLeft} className="quote" />
						<span id="text">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.dadwa adwaddawdadwaddawdadawdwad
						</span>
						<FontAwesomeIcon icon={faQuoteRight} className="quote" />
					</blockquote>
					<p>
						<em id="author">- - BoBy One Two Three</em>
					</p>
					<div className="buttons-container">
						<div className="social-btn-container">
							<a href="twitter.com/intent/tweet"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
							<a href="target_blank"><FontAwesomeIcon icon={faSquareFacebook} size="2x"/></a>
						</div>
						<Button className="btn btn-light btn-active align-self-end border border-0" id="new-quote">
							Generate Random Quote
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
