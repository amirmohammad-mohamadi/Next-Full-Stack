"use client";
import React from "react";

interface IErrorPage {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: IErrorPage) => {
  console.log("Error", error);
  return (
    <>
      <div>An unexpected error has occurred!</div>
      <button className="btn" onClick={reset}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
