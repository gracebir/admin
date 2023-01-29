import { sideBarLinkProps } from "./typing";
import {FaTicketAlt, FaChartPie,FaLightbulb, FaBook} from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { ImUserTie } from 'react-icons/im'
import { RiSettings3Fill } from 'react-icons/ri'
import { IoMdRibbon } from 'react-icons/io'


export const sidebarData: Array<sideBarLinkProps> =[
    {
        linkText: 'Overview',
        href: '/overview',
        LinkLogo: FaChartPie
    },
    {
        linkText: 'Tickets',
        href: '/tickets',
        LinkLogo: FaTicketAlt
    },
    {
        linkText: 'Ideas',
        href: '/idea',
        LinkLogo: FaLightbulb
    },
    {
        linkText: 'Contacts',
        href: '/contacts',
        LinkLogo: HiUserGroup
    },
    {
        linkText: 'Agents',
        href: '/agents',
        LinkLogo: ImUserTie
    },
    {
        linkText: 'Articles',
        href: '/articles',
        LinkLogo: FaBook
    },
    {
        linkText: 'Settings',
        href: '/setting',
        LinkLogo: RiSettings3Fill
    },
    {
        linkText: 'Subscription',
        href: '/subscription',
        LinkLogo: IoMdRibbon
    }
]