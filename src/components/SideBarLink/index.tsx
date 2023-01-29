import React from 'react'
import { sideBarLinkProps } from '../../typing'
import { LinkText, SideLink } from './SideBarLinkStyled'

function SideBarLink({
  linkText,
  LinkLogo,
  href
}: sideBarLinkProps) {
  return (
    <SideLink to={href}>
        <LinkLogo size={"16px"}/>
        <LinkText>{linkText}</LinkText>
    </SideLink>
  )
}

export default SideBarLink
