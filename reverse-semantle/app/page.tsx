"use client"

import React, { useState, useEffect } from 'react';
import { firestore } from "@/firebase/clientApp";
import MyTable from './Components/MyTable';
import {
    collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, setDoc
} from "@firebase/firestore";

const db = firestore;


interface DataItem {
    word: string;
    similarityRating: string;
}

export default function Home() {
	// think about what we need
	const [wordInput, setWordInput] = useState<string>("");
	const [similarityRatingInput, setSimilarityRatingInput] = useState<string>("");
	const [data, setData] = useState<DataItem[]>([]);
	const [editingItemId, setEditingItemId] = useState<string | null>(null);

	// Add CRUD functionality for firebase database
	const updateAllData = async () => {
		// Fetch data from Firebase and update the state
	}

	// If the user accidentally messes up the input
	const removeItem = async (id: string) => {
		// Remove item from Firebase and update the state
	}

	// Edit input item
	const editItem = async (id: string, newWord: string, newRating: string) => {
		// Update the item in Firebase and update the state
	}	

	const addItem = async () => {
		// Add a new item to Firebase and update the state
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Logic for form submission
	}

	// Handlers for input changes
	const handleWordChange = (e) => {
		setWordInput(e.target.value);
	};

	const handleSimilarityRatingChange = (e) => {
		setSimilarityRatingInput(e.target.value);
	};

	return (
		<div className='bg-gradient-animated bg-[length:200%_200%] animate-gradient-x w-full h-full'>
			<main className="flex min-h-screen flex-col">
				<div className='flex justify-start pt-10 pl-10'>
					<h3 className='text-3xl'>Enter a Word</h3>
				</div>

				<form className="m-3 p-3 rounded-lg" onSubmit={handleSubmit}>
					<input
						className="m-3 p-3 border-2 border-slate-200 rounded-lg w-fit text-black"
						placeholder="Enter Word"
						type="text"
						value={wordInput}
						onChange={handleWordChange}
					/>
					<input
						className="m-3 p-3 border-2 border-slate-200 rounded-lg w-fit text-black"
						placeholder="Similarity Rating"
						type="text"
						value={similarityRatingInput}
						onChange={handleSimilarityRatingChange}
					/>
					<button type={"submit"} className="m-3 p-3 bg-blue-500 text-white rounded-lg">Submit</button>
				</form>

				{/* Create a rectangle that displays the information the user entered in a nice format */}
				
				
				<MyTable data={data} />

			</main>
		</div>
	);
}
