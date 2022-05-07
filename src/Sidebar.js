import SidebarUser from "./SidebarUser";
import SidebarSuggestions from "./SidebarSuggestions";
import SidebarLinks from "./SidebarLinks";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <SidebarUser />

      <SidebarSuggestions />

      <SidebarLinks />

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
