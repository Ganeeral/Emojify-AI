"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfileSection = () => {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const { push } = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log(`Bearer ${token}`);

    axios
      .get("http://localhost:8080/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  if (!profile) return <p>Загрузка...</p>;

  return (
    <div className="grid gap-y-12 mx-auto w-full max-w-[1070px] px-4">
      <div className="grid bg-[#0D0D0D] rounded-xl p-6 w-full grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-y-4 sm:gap-y-0">
        <div className="flex items-center gap-x-5">
          <div className="h-[74px] w-[74px] flex justify-center items-center text-3xl rounded-full text-white bg-sky-600">
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-2xl text-[#B0B0B0] Inter font-semibold">
              {profile.name}
            </span>
            <Link href="/" className="text-[#626262] Inter font-medium text-sm">
              Изменить профиль
            </Link>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-3 py-2 max-h-[38px] rounded-md Inter font-semibold bg-[#393939] text-[#B0B0B0] sm:justify-self-end"
        >
          Выйти
        </button>
      </div>

      <div className="grid gap-y-6 bg-[#0D0D0D] rounded-xl w-full px-4 lg:px-[75px] py-6">
        <p className="Inter font-bold text-xl">Мои сцены</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg bg-[#121212] w-full h-full max-h-[240px] p-3 flex items-center flex-col gap-y-4 relative">
            <span className="px-6 py-2 bg-[#1A1A1A] rounded-lg text-sm text-[#BEBEBE] Inter font-bold absolute top-3 left-3">
              Смех
            </span>
            <Image
              alt="Profile Scene"
              width={116}
              height={116}
              src="/Face.webp"
            />
            <div className="bg-[#191919] text-xs text-[#BEBEBE] p-2 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="rounded-lg bg-[#121212] w-full h-full max-h-[240px] p-3 flex items-center flex-col gap-y-4 relative">
            <span className="px-6 py-2 bg-[#1A1A1A] rounded-lg text-sm text-[#BEBEBE] Inter font-bold absolute top-3 left-3">
              Смех
            </span>
            <Image
              alt="Profile Scene"
              width={116}
              height={116}
              src="/Face.webp"
            />
            <div className="bg-[#191919] text-xs text-[#BEBEBE] p-2 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="rounded-lg bg-[#121212] w-full h-full max-h-[240px] p-3 flex items-center flex-col gap-y-4 relative">
            <span className="px-6 py-2 bg-[#1A1A1A] rounded-lg text-sm text-[#BEBEBE] Inter font-bold absolute top-3 left-3">
              Смех
            </span>
            <Image
              alt="Profile Scene"
              width={116}
              height={116}
              src="/Face.webp"
            />
            <div className="bg-[#191919] text-xs text-[#BEBEBE] p-2 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
