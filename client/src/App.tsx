// import { useState } from 'react'
import './App.css'
import {useState, useEffect} from 'react';
import Header from './components/Header/Header';

function App() {
//  const [message, setMessage] = useState<string | null>(null);
//  useEffect(() => {
//	fetch('/api/', {
//		credentials: 'include'
//	})
//	.then(response => response.text())
//	.then(setMessage);
//  }, []);
	return (
	<div className="flex flex-col h-screen">
		<Header />
		<div className="flex flex-col flex-grow">
		<div className="flex justify-center items-center flex-grow">
			body
		</div>
		</div>
	</div>
	);
}

export default App
