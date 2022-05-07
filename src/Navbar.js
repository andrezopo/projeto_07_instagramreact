import NavbarLogo from "./NavbarLogo";
import NavbarLogoMobile from "./NavbarLogoMobile";
import NavbarSearch from "./NavbarSearch";
import NavbarIcons from "./NavbarIcons";
import NavbarIconsMobile from "./NavbarIconsMobile";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <NavbarLogo />
        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <NavbarLogoMobile />

        <NavbarSearch />

        <NavbarIcons />

        <NavbarIconsMobile />
      </div>
    </div>
  );
}
