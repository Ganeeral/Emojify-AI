"use client";

import React, { useState, useEffect } from "react";
import ResultSection from "@/sections/ResultSection/resultSection";
import HeaderAuth from "@/components/HeaderAuth/headerAuth";
import Loader from "@/components/Loader/loader";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [scene, setScene] = useState("");
  const [emotion, setEmotion] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { push } = useRouter();
  const id = Number(localStorage.getItem("id"));

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      push("/");
    }
  }, [push]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowForm(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowForm(false);
    setShowResult(false);

    try {
      const response = await fetch("http://localhost:8080/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: id, scene }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error from server:", errorData);

        // Показать сообщение об ошибке
        toast.error("Произошла ошибка! Попробуйте снова.");
        setShowForm(true);
        return;
      }

      const data = await response.json();
      setEmotion(data.emotion);
    } catch (error) {
      console.error("Fetch error:", error);

      // Показать сообщение об ошибке
      toast.error("Ошибка сети! Попробуйте позже.");
      setShowForm(true);
    } finally {
      setLoading(false);
      setShowResult(true);
    }
  };

  return (
    <>
      <HeaderAuth />
      <div className="flex justify-center items-center w-full flex-col h-full">
      <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div
          className={`transition-opacity duration-500 ${
            loading ? "opacity-100" : "opacity-0"
          } ${loading ? "block" : "hidden"}`}
        >
          <Loader />
        </div>
        <div
          className={`transition-opacity w-full flex justify-center px-2 flex-col items-center duration-500 ${
            !loading && showForm ? "opacity-100" : "opacity-0"
          } ${!loading && showForm ? "block" : "hidden"}`}
        >
          <h4 className="clamp-text Inter font-bold">
            <span className="gradientText">Emojify AI</span>
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
              required
              onChange={(e) => setScene(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#171717] px-7 py-6 z-10 rounded-3xl"
            >
              <p className="gradientText text-[22px]">Emojify</p>
            </button>
          </form>
        </div>

        <div
          className={`transition-opacity duration-700 mt-8 text-xl text-white ${
            !loading && showResult && emotion ? "opacity-100" : "opacity-0"
          } ${!loading && showResult && emotion ? "block" : "hidden"}`}
        >
          <ResultSection emotion={emotion} />
        </div>
      </div>
    </>
  );
};

export default Page;
