// import { useState } from 'react'
import './App.css'
import {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

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
		<Landing />
	</div>
	);
}

export default App
