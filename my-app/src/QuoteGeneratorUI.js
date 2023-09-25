import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const quotes = [
	{
		quote:
			" The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.",
		author: "Aldous Huxley",
	},
	{
		quote: "When you have a dream, you've got to grab it and never let go.",
		author: "Carol Burnett",
	},
	{
		quote: "There is nothing impossible to they who will try.",
		author: "Alexander the Great",
	},
	{
		quote: "A person who never made a mistake never tried anything new.",
		author: "Albert Einstein",
	},
	{
		quote:
			"Do not fear mistakes. You will know failure. Continue to reach out.",
		author: "Benjamin Franklin",
	},
	{
		quote: "Your time is limited, don't waste it living someone else's life. ",
		author: "Steve Jobs",
	},
	{
		quote:
			"Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
		author: "Allan Turing",
	},
];


export class QuoteGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteText:
				"Your time is limited, don't waste it living someone else's life.",
			author: "Steve Jobs",
			bgColor: [
				'#a63695',
				'#88dc2b',
				'#642eb0',
				'#4c5c36',
				'#29e4e2',
				'#be0109',
				'#0ba812',
				'#87aedf',
				'#9f80e2',
				'#a49c23',
				'#d59897',
				'#a5da6c',
				'#32ef9d',
				'#263d51',
				'#f7e689',
				'#8cfecc'
			]
		};
	}

	quoteDisplayHandler = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		const color = this.state.bgColor[Math.floor(Math.random() * this.state.bgColor.length)]
		const body = document.body

		this.setState((state) => ({
			quoteText: quotes[randomIndex].quote,
			author: quotes[randomIndex].author,
		}));
		
		body.style.backgroundColor = color
	};

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
						<span id="text" className="fade-in" key={Math.random()}>
							{this.state.quoteText}
						</span>
						<FontAwesomeIcon icon={faQuoteRight} className="quote quote-right" />
					</blockquote>
					<p>
						<em id="author" className="fade-in" key={Math.random()}>
							- - {this.state.author}
						</em>
					</p>
					<div className="buttons-container">
						<div className="social-btn-container">
							<a href="https://twitter.com/intent/tweet" rel="noreferrer" target="_blank" id="tweet-quote">
								<FontAwesomeIcon icon={faTwitter} size="2x" />
							</a>
							<a href="https://www.facebook.com/sharer/sharer.php?u=example.org" rel="noreferrer" target="_blank" id="fb-button">
								<FontAwesomeIcon icon={faSquareFacebook} size="2x" />
							</a>
						</div>
						<Button
							className="btn btn-light btn-active align-self-end border border-0"
							id="new-quote"
							onClick={this.quoteDisplayHandler}
						>
							Generate Random Quote
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
