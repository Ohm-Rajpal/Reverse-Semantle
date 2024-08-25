import React from "react";

export default function MyTable({ data }) {

    return (

        <div>
            
            <div className="flex justify-center pb-4">
                <p className="text-lg">Word and Info</p>
            </div>
            <div className="flex justify-center text-lg">
                <table className="table-auto rounded-xl">
                    <thead>
                        <tr className="border border-solid border-l-0 border-r-0">
                            <th className="text-md px-6 py-3">Word</th>
                            <th className="text-md px-6 py-3">Cosine Similarity</th>
                            <th className="text-md px-6 py-3">Number</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* We will have to re-render this every time a change is made on the press of a button */}
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td className="text-md px-6 py-3">{item.word}</td>
                                <td className="text-md px-6 py-3">{item.similarityRating}</td>
                                <td className="text-md px-6 py-3">{index + 1}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}