"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button onClick={handleGoBack} className="group bg-transparent" isIconOnly>
      <IoIosArrowBack className="text-xl md:text-2xl xl:text-3xl text-[#808080] group-hover:text-white" />
    </Button>
  );
};

export default GoBackButton;
