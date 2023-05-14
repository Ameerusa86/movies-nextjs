"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <body class="bg-gray-800 flex items-center justify-center h-screen">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <p class="text-3xl text-gray-700 mb-8">Something went wrong</p>
        <button
          onClick={() => reset()}
          class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Please try again
        </button>
      </div>
    </body>
  );
};

export default Error;
