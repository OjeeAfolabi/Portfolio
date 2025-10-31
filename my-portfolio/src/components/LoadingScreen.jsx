import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-50  bg-cover bg-[url('https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032')] text-gray-100 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 text-[4rem] font-mono font-bold">
          {text}
          <span className="animate-blink ml-1"> | </span>
        </div>
        <div className="w-[200px] h-2 bg-gray-500 rounded relative overflow-hidden  ">
          <div className="w-[40%] h-full bg-[#fca311] shadow-[0_0_15px_#3b82f6] animate-loading-bar">
            {""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
