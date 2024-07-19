export default function ReverseLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<h3 className="text-xl font-light text-red-700">Reverse Engineering</h3>
			{ children }
		</div>
	)
}