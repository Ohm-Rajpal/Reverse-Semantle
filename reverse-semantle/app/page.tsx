"use client"
import { useState } from 'react';


export default function Home() {
	const [formInput, setFormInput] = useState<string>();
	return (
		<main className="flex min-h-screen flex-col">
			<h3>Enter a Word</h3>
			<form className="m-3 p-3 bg-slate-100 rounded-lg">
				<input className="m-3 p-3 border-2 border-slate-200 rounded-lg w-fit" placeholder="Enter Word"
					   type="text" content={formInput} onChange={event => {
					setFormInput(event.target.value);
				}}/>
				<input
					className="m-3 p-3 border-2 border-slate-200 rounded-lg w-fit"
					placeholder="Similarity Rating" type="text" content={formInput}
					onChange={event => { setFormInput(event.target.value);
				}}/>
				<button type={"submit"} className="m-3 p-3 bg-blue-500 text-white rounded-lg">Submit</button>
			</form>
		</main>
	);
}
