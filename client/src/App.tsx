// import { useState } from 'react'
import './App.css'
// import {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Landing from './pages/Landing/Landing';
import Explore from './pages/Explore/Explore';
import MessagePage from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {

	const location = useLocation(); //to force passing by protected route when calling each page
	return (
	<div className="flex flex-col h-screen">
		<Header />
		<Routes>
		<Route path="/" element={<Landing />} />
		<Route element={<ProtectedRoute key={location.pathname} />}>
			<Route path="/explore" element={<Explore />} />
			<Route path="/messages" element={<MessagePage />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/settings" element={<Settings />} />
		</Route>
		</Routes>
	</div>
	);
}

export default App
