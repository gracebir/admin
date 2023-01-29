import React from "react";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarBrand,
  SideBarLinks,
  LinksUpper,
  Settinglinks,
} from "./SideBarStyled";
import Brand from "../../assets/Brand.svg";
import { sidebarData } from "../../dummy";
import SideBarLink from "../SideBarLink";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <img src={Brand} alt="brand" />
        <SideBarBrand>Dashboard Kit</SideBarBrand>
      </SideBarHeader>
      <SideBarLinks>
        <LinksUpper>
          {sidebarData.slice(0, 6).map(({ linkText, LinkLogo, href }, i) => (
            <SideBarLink
              href={href}
              linkText={linkText}
              LinkLogo={LinkLogo}
              key={i}
            />
          ))}
        </LinksUpper>
        <Settinglinks>
          {sidebarData.slice(6, sidebarData.length).map(({ linkText, LinkLogo, href }, i) => (
            <SideBarLink
              href={href}
              linkText={linkText}
              LinkLogo={LinkLogo}
              key={i}
            />
          ))}
        </Settinglinks>
      </SideBarLinks>
    </SideBarContainer>
  );
}

export default SideBar;
