// import "../../../styles/Sidebar.css";

import { RiUserSettingsFill } from "react-icons/ri";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { LiaBlogSolid } from "react-icons/lia";
import { MdWorkHistory } from "react-icons/md";
import SidebarMenuItem from "./SidebarMenuItem";

const AdminSideBarMenu = () => {
  return (
    <div className="sb flex flex-col justify-center items-start mx-auto">
      <SidebarMenuItem
        icon={<FaDiagramProject className="text-xl" />}
        menuText="Projects"
        route="/admin-dashboard/projects"
      />

      <SidebarMenuItem
        icon={<GiSkills className="text-xl" />}
        menuText="Skills"
        route="/admin-dashboard/skills"
      />

      <SidebarMenuItem
        icon={<LiaBlogSolid className="text-xl" />}
        menuText="Blogs"
        route="/admin-dashboard/blogs"
      />

      <SidebarMenuItem
        icon={<MdWorkHistory className="text-xl" />}
        menuText="Experiences"
        route="/admin-dashboard/experiences"
      />

      <SidebarMenuItem
        icon={<RiUserSettingsFill className="text-xl" />}
        menuText="Profile Settings"
        route="/admin-dashboard/admin-profile"
      />
    </div>
  );
};

export default AdminSideBarMenu;
