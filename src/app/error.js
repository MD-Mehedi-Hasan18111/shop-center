"use client";

import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h2>{error?.message}</h2>
      <button onClick={() => reset()} className="bg-primary text-white">
        Try Again
      </button>
    </div>
  );
};

export default Error;
