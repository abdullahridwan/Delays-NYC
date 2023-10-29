import React from "react";

const metricsData = [
    {
        title: "# of Total Reported Delays",
        value: "25",
        upward: true,
        percent: "1.8% Than Yesterday",
    },
];

export default function MetricsDefault() {
    return (
        <>
            <div className="flex items-center">
                <div className="container max-w-6xl px-5 mx-auto my-10">
                    <div className="grid gap-7 sm:grid-cols-1 lg:grid-cols-1">
                        {metricsData.map((metrics, index) => (
                            <div className="p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-xl" key={index}>
                                <div className="text-base text-gray-400 ">{metrics.title}</div>
                                <div className="flex items-center pt-1">
                                    <div className="text-3xl font-bold text-gray-900 ">
                                        {metrics.value}
                                    </div>
                                    <span
                                        className={`flex items-center px-2 py-0.5 mx-2 text-m rounded-full ${metrics.upward
                                            ? "text-green-600 bg-green-100"
                                            : "text-red-600 bg-red-100"
                                            }`}>
                                        {metrics.upward && (
                                            <svg
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18 15L12 9L6 15"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}

                                        {!metrics.upward && (
                                            <svg
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 9L12 15L18 9"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}

                                        <span>{metrics.percent}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}