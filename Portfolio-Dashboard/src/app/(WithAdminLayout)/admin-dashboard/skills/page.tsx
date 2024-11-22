"use client";

import DashboardContainer from "@/src/components/layouts/DashboardContainer";
import AddSkillModal from "@/src/components/modals/AddSkillModal";
import MobileView from "@/src/components/modules/skills/MobileView/MobileView";
import TabPCView from "@/src/components/modules/skills/TabPCView/TabPCView";
import DashboardPageTitle from "@/src/components/Shared/DashboardPageTitle";
import LoadingSection from "@/src/components/Shared/LoadingSection";
import { useGetAllSkills } from "@/src/hooks/skill.hook";
import React from "react";

const SkillsPage = () => {
  const {
    isLoading: loadingSkills,
    data: skillData,
    refetch: refetchSkills,
  } = useGetAllSkills();

  const title = {
    mainTitle: "Skills List",
  };

  return (
    <div className="h-screen">
      {/* bg-[url('/assets/images/users-bg-mobile.png')] md:bg-[url('/assets/images/users-bg-tab.png')] xl:bg-[url('/assets/images/admins-bg.png')] bg-cover bg-center bg-no-repeat */}

      <DashboardContainer>
        <DashboardPageTitle title={title} />

        <AddSkillModal refetchSkills={refetchSkills} />

        {loadingSkills ? (
          <LoadingSection />
        ) : (
          <>
            {/*tab pc view */}
            <TabPCView skillData={skillData} refetchSkills={refetchSkills} />

            {/* mobile view */}
            <MobileView skillData={skillData} refetchSkills={refetchSkills} />
          </>
        )}
      </DashboardContainer>
    </div>
  );
};

export default SkillsPage;
