import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { BaseLayoutChid, BaseLayoutContainer, BaseLayoutContent } from "./BaseLayoutStyled";

const BaseLayout: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  return (
    <BaseLayoutContainer>
        <SideBar/>
        <BaseLayoutContent>
            <BaseLayoutChid>
                {children}
            </BaseLayoutChid>
        </BaseLayoutContent>
    </BaseLayoutContainer>
  );
};

export default BaseLayout;
