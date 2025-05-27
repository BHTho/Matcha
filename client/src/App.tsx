// import { useState } from 'react'
import './App.css'
// import {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import Register from './pages/Register/Register';
import Landing from './pages/Landing/Landing';
import Explore from './pages/Explore/Explore';
import MessagePage from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import { Routes, Route } from 'react-router-dom';

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
		<Routes>
			<Route path="/" element={<Landing />}/>
			<Route path="/register" element={<Register />}/>
			<Route path="/explore" element={<Explore />}/>
			<Route path="/messages" element={<MessagePage />}/>
			<Route path="/profile" element={<Profile />}/>
			<Route path="/settings" element={<Settings />}/>
		</Routes>
	</div>
	);
}

export default App
