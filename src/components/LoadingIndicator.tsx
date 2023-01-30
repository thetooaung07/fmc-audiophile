import React from "react";

export const LoadingIndicator = () => {
  return (
    <div className="h-screen w-screen bg-black flex text-center justify-center items-center min-h-screen">
      <div className="animate-ring"></div>
      <span className="loading-text">loading...</span>
    </div>
  );
};
