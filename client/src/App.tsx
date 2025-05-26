// import { useState } from 'react'
import './App.css'
import {useState, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
	fetch('/api/', {
		credentials: 'include'
	})
	.then(response => response.text())
	.then(setMessage);
  }, []);
  return (
	<div className="flex flex-col h-screen">
		<div className="flex flex-grow justify-center items-center">
			{message ?? "Loading..."}
		</div>
	</div>
  )
}

export default App
