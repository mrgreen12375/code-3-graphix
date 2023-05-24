import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

	return (
		<div className="navBar">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Product">Product</Link>
					</li>
					<li>
						<Link to="/Gallery">Gallery</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;