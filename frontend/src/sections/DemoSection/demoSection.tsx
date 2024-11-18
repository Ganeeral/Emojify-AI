'use client';

import React, { useState } from "react";

const DemoSection = () => {
  const [scene, setScene] = useState("");
  const [emotion, setEmotion] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scene }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        return;
      }

      const data = await response.json();
      setEmotion(data.emotion); // Теперь корректно обрабатываем 'emotion'
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-full">
      <h4 className="clamp-text Inter font-bold">
        Попробуй <span className="gradientText">Emojify AI</span>
      </h4>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-[#312E2F] max-w-[1100px] mt-24 rounded-3xl w-full"
      >
        <input
          className="placeholder text-xl text-[#AFAFAF] max-w-[1100px] rounded-3xl px-8 py-6 w-full placeholder:text-xl Inter font-bold bg-inherit outline-none"
          type="text"
          placeholder="Введите сцену..."
          value={scene}
          onChange={(e) => setScene(e.target.value)}
        />
        <button className="bg-[#171717] px-7 py-6 z-10 rounded-3xl">
          <p className="gradientText text-[22px]">Emojify</p>
        </button>
      </form>
      {emotion && (
        <div className="mt-8 text-xl text-white">
          <strong>{emotion}</strong>
        </div>
      )}
    </div>
  );
};

export default DemoSection;
