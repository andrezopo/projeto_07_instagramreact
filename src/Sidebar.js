import SidebarUser from "./SidebarUser";
import SidebarSuggestions from "./SidebarSuggestions";
import SidebarLinks from "./SidebarLinks";

const user = {
  img: "../instagram/assets/img/catanacomics.svg",
  name: "catanacomics",
};

export default function Sidebar() {
  return (
    <div class="sidebar">
      <SidebarUser userImg={user.img} userName={user.name} />

      <SidebarSuggestions />

      <SidebarLinks />

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
