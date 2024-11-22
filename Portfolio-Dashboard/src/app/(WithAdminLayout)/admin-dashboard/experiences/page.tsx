"use client";

import DashboardContainer from "@/src/components/layouts/DashboardContainer";
import AddExperience from "@/src/components/modals/AddExperience";
import MobileView from "@/src/components/modules/experiences/MobileView/MobileView";
import TabPCView from "@/src/components/modules/experiences/TabPCView/TabPCView";
import DashboardPageTitle from "@/src/components/Shared/DashboardPageTitle";
import LoadingSection from "@/src/components/Shared/LoadingSection";
import { useGetAllExperiences } from "@/src/hooks/experience.hook";
import React from "react";

const ExperiencesPage = () => {
  const {
    isLoading: loadingExperiences,
    data: experienceData,
    refetch: refetchExperiences,
  } = useGetAllExperiences();

  const title = {
    mainTitle: "Experience List",
  };

  return (
    <div className="h-screen">
      {/* bg-[url('/assets/images/users-bg-mobile.png')] md:bg-[url('/assets/images/users-bg-tab.png')] xl:bg-[url('/assets/images/admins-bg.png')] bg-cover bg-center bg-no-repeat */}

      <DashboardContainer>
        <DashboardPageTitle title={title} />

        <AddExperience refetchExperiences={refetchExperiences} />

        {loadingExperiences ? (
          <LoadingSection />
        ) : (
          <>
            {/*tab pc view */}
            <TabPCView
              experienceData={experienceData}
              refetchExperiences={refetchExperiences}
            />

            {/* mobile view */}
            <MobileView
              experienceData={experienceData}
              refetchExperiences={refetchExperiences}
            />
          </>
        )}
      </DashboardContainer>
    </div>
  );
};

export default ExperiencesPage;
