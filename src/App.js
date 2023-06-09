import React from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

	const token = localStorage.getItem('id_token');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});


function App() {

	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Header/>
				</div>
					<main>
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/product"
								element={<Product />}
							/>
							<Route
								path="/gallery"
								element={<Gallery />}
							/>
							<Route
								path="/contact"
								element={<Contact />}
							/>
							<Route
								path="/about"
								element={<About />}
							/>
						</Routes>
					</main>
				<div>
					<Footer />
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;