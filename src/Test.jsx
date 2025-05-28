import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);  // go back one entry in the history stack without reload
  };

  return (
    <button
      onClick={goBack}
      className="
        fixed bottom-4 right-4
        bg-blue-600 hover:bg-blue-700
        text-white font-bold
        py-3 px-5
        rounded-lg
        shadow-lg
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400
      "
      aria-label="Go back to previous page"
      type="button"
    >
      Back
    </button>
  );
}
