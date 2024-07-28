"use client"
import { useState } from 'react';


export default function Home() {

	// modifying this code so we can handle more than one input!
	const [wordInput, setWordInput] = useState<string>();
	const [similarityRatingInput, setSimilarityRatingInput] =
		useState<string>();

	const handleWordChange = (event) => {
    	setWordInput(event.target.value);
  	};

  	const handleSimilarityRatingChange = (event) => {
  	  setSimilarityRatingInput(event.target.value);
  	};

  	const handleSubmit = (event) => {
		event.preventDefault();
    	console.log('Word:', wordInput);
    	console.log('Similarity Rating:', similarityRatingInput);
	}

	return (
		<main className="flex min-h-screen flex-col">
			<h3>Enter a Word</h3>
			<form className="m-3 p-3 bg-slate-100 rounded-lg" onSubmit={handleSubmit}>
				<input
					className="m-3 p-3 border-2 border-slate-200 rounded-lg w-fit"
					placeholder="Enter Word"
					type="text"
					value={wordInput}
					onChange={handleWordChange}
				/>
				<input
					className="m-3 p-3 border-2 border-slate-200 rounded-lg w-fit"
					placeholder="Similarity Rating"
					type="text"
					value={similarityRatingInput}
					onChange={handleSimilarityRatingChange}
				/>
				<button type={"submit"} className="m-3 p-3 bg-blue-500 text-white rounded-lg">Submit</button>
			</form>
		</main>
	);
}
