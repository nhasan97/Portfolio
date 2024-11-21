"use client";

import DashboardContainer from "@/src/components/layouts/DashboardContainer";
import { redirect, useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import LoadingSection from "@/src/components/Shared/LoadingSection";
import { useEffect } from "react";

import React from "react";

const Home = () => {
  const { isLoading: loadingUser, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user) {
      redirect("/admin-dashboard/projects");
    }
  }, [user, router]);

  if (loadingUser) {
    return (
      <div className="h-screen">
        <DashboardContainer>
          <LoadingSection />
        </DashboardContainer>
      </div>
    );
  }
};

export default Home;
