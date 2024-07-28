export default function Page() {
	const getAllGames = () => {
		// In actuality, we should be grabbing this from our own API. and caching it, probably. there's a Next.js way to do this, let's find it out later
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	}

	const GameSelect = ({ listOfGames }: { listOfGames: number[] }) => {
		return (
			<select className="flex flex-row" name="game" id="game">
				{ listOfGames.map((game) => <option className="rounded-lg p-1 bg-white" key={game} value={game}>{game}</option>) }
			</select>
		)
	}


	return (
		<div className="rounded-lg bg-blue-50 my-3 p-3">
			<form className={""}>
				<label className="" htmlFor="game">Select a game: </label>
				<GameSelect listOfGames={getAllGames()} />
				<button className="bg-blue-700 text-white rounded-lg p-3 my-3 " type={"submit"}>Play the game!</button>
			</form>
			<hr />
		</div>
	)
}