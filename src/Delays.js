import React from "react";

const delaysData = [
    {
        trainNumber: "F",
        trainColor: "red",
        title: "🚧 Skipping 63rd",
        description: "F Train skips 63rd because of construction. Be advised that the F train goes directly to 53rd instead of 63rd.",
    },
    {
        trainNumber: "4",
        trainColor: "green",
        title: "Burnside ➡️ Grand Concourse",
        description: "F Train skips 63rd because of construction. Be advised that the F train goes directly to 53rd instead of 63rd.",
    },
];

export default function DelayCards() {
    return (
        <>
            <div className="flex items-center">
                <div className="container max-w-6xl mx-auto my-10">
                    <div className="grid gap-7 sm:grid-cols-1 lg:grid-cols-1">
                        {delaysData.map((d, index) => (

                            <div className={`p-8 rounded-2xl border-2 border-${d.trainColor}-400 bg-${d.trainColor}-200 bg-opacity-20`} key={index}>

                                <div class="flex">
                                    <div class='w-16 h-16 mr-7'>
                                        <div className="flex items-center pt-1">
                                            <div class={`w-16 h-16 rounded-full bg-${d.trainColor}-500 flex items-center justify-center`}>
                                                <div class="text-white text-2xl font-semibold">
                                                    {d.trainNumber}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl text-gray-700 ">{d.title}</div>
                                        <div className="text-base text-gray-500 ">{d.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}