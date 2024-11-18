'use client';

import HeaderAuth from "@/components/HeaderAuth/headerAuth";
import ProfileSection from "@/sections/ProfileSection/profileSection";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { push } = useRouter();
  const token = localStorage.getItem("authToken");
  if (!token) {
    push("/auth");
  }

  return (
    <>
      <HeaderAuth />
      <ProfileSection />
    </>
  );
};

export default Page;
