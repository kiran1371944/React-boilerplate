/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Cloud,
  Settings,
  CircleUserRound,
  MenuIcon,
  ChevronDown,
} from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ClickAwayListener, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { globalEvents$ } from '@/data/EventEmitter';
import { KitchenlyEvents } from '@/data/KitchenlyEvents';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Column,
  Row,
  SpacerColumn,
  SpacerRow,
} from '@/components/ui/layout/Layout';

import AppointmentsIcon from '../../assets/menu_icons/Appoinments.svg?react';
import DashboardIcon from '../../assets/menu_icons/dashboard.svg?react';
import OrdersIcon from '../../assets/menu_icons/Orders.svg?react';
import CustomersIcon from '../../assets/menu_icons/customers.svg?react';
import OperationsIcon from '../../assets/menu_icons/operations.svg?react';
import MealsPlans from '../../assets/menu_icons/meal_plans.svg?react';
import SalesIcon from '../../assets/menu_icons/sales.svg?react';
import Ecommerce from '../../assets/menu_icons/ecommerce.svg?react';
import Delivery from '../../assets/menu_icons/Delivery.svg?react';
import Reports from '../../assets/menu_icons/reports.svg?react';
import Warehouse from '../../assets/menu_icons/Warehouse.svg?react';

import Production from '../../assets/menu_icons/Production.svg?react';
import Packing from '../../assets/menu_icons/Packing.svg?react';
import Dispatching from '../../assets/menu_icons/dispatching.svg?react';
import Inventory from '../../assets/menu_icons/Inventory.svg?react';
import { useCurrentPageStore } from '@/data/NavigationState';

type SidebarItem = {
  icon: ReactNode;
  label: string;
  hasChildren: boolean;
  children: SidebarItem[];
  url: string;
};

const items: SidebarItem[] = [
  {
    icon: <DashboardIcon color="white" />,
    label: 'Dashboard',
    hasChildren: false,
    url: '/admin/dashboard',
    children: [],
  },
  {
    icon: <OrdersIcon color="white" />,
    label: 'Orders',
    hasChildren: false,
    url: '/admin',
    children: [],
  },
  {
    icon: <CustomersIcon color="white" />,
    label: 'Customers',
    hasChildren: false,
    url: '/admin/customers',
    children: [],
  },
  {
    icon: <OperationsIcon color="white" />,
    label: 'Operations',
    hasChildren: true,
    url: '/admin/operations',
    children: [
      {
        icon: <Warehouse color="white" />,
        label: 'Warehouse',
        hasChildren: false,
        url: '/admin/operations/warehouse',
        children: [],
      },
      {
        icon: <Inventory color="white" />,
        label: 'Inventory',
        hasChildren: false,
        url: '/admin/operations/inventory',
        children: [],
      },
      {
        icon: <Production color="white" />,
        label: 'Production',
        hasChildren: false,
        url: '/admin/operations/production',
        children: [],
      },
      {
        icon: <Packing color="white" />,
        label: 'Packing',
        hasChildren: false,
        url: '/admin/operations/packing',
        children: [],
      },
      {
        icon: <Dispatching color="white" />,
        label: 'Dispatching',
        hasChildren: false,
        url: '/admin/operations/dispatching',
        children: [],
      },
      {
        icon: <Delivery color="white" />,
        label: 'Delivery',
        hasChildren: false,
        url: '/admin/operations/delivery',
        children: [],
      },
    ],
  },
  {
    icon: <MealsPlans color="white" />,
    label: 'Meals & Plans',
    hasChildren: false,
    url: '/admin/mealsplans',
    children: [],
  },
  {
    icon: <AppointmentsIcon />,
    label: 'Appointments',
    hasChildren: false,
    url: '/admin/appointments',
    children: [],
  },
  {
    icon: <SalesIcon color="white" />,
    label: 'Sales',
    hasChildren: false,
    url: '/admin/sales',
    children: [],
  },
  {
    icon: <Ecommerce color="white" />,
    label: 'E-Commerce',
    hasChildren: false,
    url: '/admin/ecommerce',
    children: [],
  },
  {
    icon: <Delivery color="white" />,
    label: 'Delivery',
    hasChildren: false,
    url: '/admin/delivery',
    children: [],
  },
  {
    icon: <Reports color="white" />,
    label: 'Reports',
    hasChildren: false,
    url: '/admin/reports',
    children: [],
  },
];

export function Sidebar() {
  useEffect(() => {
    const subscription = globalEvents$.subscribe((event) => {
      switch (event.type) {
        case KitchenlyEvents.TOGGLE_SIDEBAR: {
          setIsOpen((value) => !value);
          break;
        }
        default: {
          console.log('');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onClickAway = (_: MouseEvent | TouchEvent) => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <motion.div
        id="main-sidebar"
        className="hide-scrollbar"
        onClick={toggleSidebar}
        initial={{ width: isOpen ? '22em' : '7em' }}
        animate={{ width: isOpen ? '22em' : '7em' }}
        transition={{ type: 'spring' }}
        style={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          boxShadow: '0 50px 50px rgba(0, 0, 0, 0.5)',
          background:
            'linear-gradient(179.9deg, #0134D7 -144.9%, #00B2AB 64.71%)',
          justifyContent: 'space-between',
          overflow: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          position: 'relative',
          left: 0,
          height: '100vh',
          zIndex: '1200',
          borderRadius: '0 15px 15px 0',
        }}

        // className="h-screen w-40 rounded-tr-3xl rounded-br-3xl sticky left-0 right-auto"
      >
        <Column style={{ alignItems: 'flex-start' }}>
          <LogoContainer sidebarIsExpanded={isOpen} />

          <SpacerColumn height="1em" />

          {items.map((item, index) => SidebarItem(item, index, isOpen))}
        </Column>
        <Column style={{ paddingTop: '1em', paddingBottom: '1em' }}>
          <PreferencesAreaSidebar isOpen={isOpen} />
        </Column>
      </motion.div>
    </ClickAwayListener>
  );
}

export function SidebarMobile() {
  useEffect(() => {
    const subscription = globalEvents$.subscribe((event) => {
      switch (event.type) {
        case KitchenlyEvents.TOGGLE_SIDEBAR: {
          setIsOpen((value) => !value);
          break;
        }
        default: {
          console.log('');
          break;
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onClickAway = (_: MouseEvent | TouchEvent) => {
    // console.log(e.target)

    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <motion.div
        onClick={toggleSidebar}
        initial={{ height: isOpen ? '80vh' : '5em' }}
        animate={{ height: isOpen ? '80vh' : '5em' }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          boxShadow:
            '-5px -32px 52px -20px rgba(0,0,0,0.45),0px 25px 20px -20px rgba(0,0,0,0.45)',
          background:
            'linear-gradient(179.9deg, #0134D7 -144.9%, #00B2AB 64.71%)',
          justifyContent: 'space-between',
          overflow: isOpen ? 'scroll' : 'hidden',
          scrollbarWidth: 'none',
          width: '100vw',
          borderRadius: '10px 10px 0 0',
          position: 'fixed',
          zIndex: '1200',
          bottom: 0,
        }}

        // className="w-screen rounded-tr-3xl rounded-br-3xl sticky bottom-0"
      >
        <Column style={{ alignItems: 'flex-start' }}>
          <LogoContainer sidebarIsExpanded />

          <ExpandSidebarIconMobile isExpanded={isOpen} />

          <SpacerColumn height="3em" />

          {items.map((item, index) => SidebarItem(item, index, isOpen))}
        </Column>
        <Column style={{ paddingTop: '1em', paddingBottom: '1em' }}>
          <PreferencesAreaSidebar isOpen={isOpen} />
        </Column>
      </motion.div>
    </ClickAwayListener>
  );
}

export function LogoContainer({
  sidebarIsExpanded,
}: {
  sidebarIsExpanded: boolean;
}) {
  // const navigate = useNavigate();

  // function onClickLogo() {
  //     navigate("/")
  // }

  return (
    <motion.div
      // whileHover={{ scale: 1.0, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}

      style={{
        display: 'flex',
        position: 'sticky',
        top: 0,
        justifyContent: 'flex-start',
        backgroundColor: '#0191b8',
        alignItems: 'center',
        height: '5em',
        width: '100%',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SpacerRow width="2.3em" />
        <LogoIcon />
        <AnimatedLogoLabel sidebarIsExpanded={sidebarIsExpanded} />
      </Row>
    </motion.div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function SidebarItem(
  item: SidebarItem,
  index: number,
  sidebarIsExpanded: boolean
) {
  const navigate = useNavigate();
  const location = useLocation();

  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  const navigateToPage = (event: any) => {
    if (item.url !== location.pathname) {
      event.stopPropagation();

      navigate(item.url);

      if (isTabletOrMobile) {
        globalEvents$.next({
          type: KitchenlyEvents.TOGGLE_SIDEBAR,
          subType: 'default',
        });
      }
    }
  };

  const currentPage = useCurrentPageStore();

  return (
    <motion.div
      onClick={navigateToPage}
      key={index}
      whileHover={{ scale: 1.0, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '3em',
        // backgroundColor:
        //   currentPage.label === item.label ? 'green' : 'transparent',
        // paddingTop: "0.5em",
        // paddingBottom: "0.5em",
        position: 'relative',
        height: 'auto',
        width: '100%',
        cursor: 'pointer',
      }}
    >
      <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SpacerRow width="2.3em" />
        <SidebarIcon item={item} index={index} />
        <AnimatedLabel
          item={{ item, index }}
          sidebarIsExpanded={sidebarIsExpanded}
        />
      </Row>
    </motion.div>
  );
}

export function SidebarChildItem(
  item: SidebarItem,
  index: number,
  sidebarIsExpanded: boolean
) {
  const navigate = useNavigate();
  const location = useLocation();
  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  const navigateToPage = (event: any) => {
    if (item.url !== location.pathname) {
      event.stopPropagation();
      navigate(item.url);

      if (isTabletOrMobile) {
        globalEvents$.next({
          type: KitchenlyEvents.TOGGLE_SIDEBAR,
          subType: 'default',
        });
      }
    }
  };

  return (
    <motion.div
      key={index}
      onClick={navigateToPage}
      whileHover={{ scale: 1.0, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        minHeight: '1em',
        // paddingTop: "0.2em",
        paddingLeft: '1.5em',
        paddingRight: '3em',
        // paddingBottom: "0.2em",
        height: 'auto',
        width: '100%',
        cursor: 'pointer',
      }}
    >
      <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SidebarIconChild item={item} index={index} />
        <AnimatedLabel
          item={{ item, index }}
          sidebarIsExpanded={sidebarIsExpanded}
        />
      </Row>
    </motion.div>
  );
}

type SidebarItemProps = {
  item: SidebarItem;
  index: number;
};

function LogoIcon() {
  return (
    <Cloud
      color="white"
      className="max-lg: rounded hover:rounded-lg"
      size={32}
    />
  );
}

export function SidebarIconChild({ item, index }: SidebarItemProps) {
  return (
    <Row
      className="rounded hover:rounded-lg"
      style={{ height: '3em', alignSelf: 'flex-start' }}
      key={index}
    >
      {item.icon}
    </Row>
  );
}

export function SidebarIcon({ item, index }: SidebarItemProps) {
  return (
    <Row
      className="rounded hover:rounded-lg"
      style={{ height: '3.9em', alignSelf: 'flex-start' }}
      key={index}
    >
      {item.icon}
    </Row>
  );
}

export function AnimatedLogoLabel({
  sidebarIsExpanded,
}: {
  sidebarIsExpanded: boolean;
}) {
  return (
    <AnimatePresence>
      {sidebarIsExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 500,
          }}
          style={{
            color: 'white',
            fontSize: '1.2em',
            fontWeight: '400',
          }}
        >
          <Row>
            <SpacerRow width="1.2em" />
            <div className="font-bold" style={{ fontSize: '1.3em' }}>
              Kitchenly
            </div>
          </Row>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AnimatedLabel({
  item,
  sidebarIsExpanded,
}: {
  item: SidebarItemProps;
  sidebarIsExpanded: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatePresence key={item.index}>
      {sidebarIsExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '0.9em',
            // paddingTop: "1em",
            // paddingBottom:"1em",
            fontWeight: '400',
            whiteSpace: 'nowrap',
            alignSelf: 'center',
          }}
        >
          {item.item.hasChildren ? (
            <DropdownMenuItem content={item.item} isExpanded={isExpanded} />
          ) : (
            <Row>
              <SpacerRow width="0.7em" />
              {item.item.label}
            </Row>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DropdownMenuItem({
  content,
}: {
  content: SidebarItem;
  isExpanded: boolean;
}) {
  function onClick(e: any) {
    e.stopPropagation();
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={onClick}>
          <SpacerRow width="0.7em" />
          <Row>{content.label}</Row>
          <SpacerRow width="1.5em" />
        </AccordionTrigger>

        {content.children.map((item, index) => (
          <AccordionContent
            style={{ paddingLeft: '0', width: '100%' }}
            key={item.url}
          >
            <SpacerColumn height="0.5em" />
            {SidebarChildItem(item, index, true)}
            <SpacerColumn height="0.5em" />
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}

function PreferencesAreaSidebar({ isOpen }: { isOpen: boolean }) {
  const preferencesItems: SidebarItem[] = [
    {
      icon: <CircleUserRound color="white" />,
      label: 'User',
      hasChildren: false,
      url: '/admin/account',
      children: [],
    },
    {
      icon: <Settings color="white" />,
      label: 'Settings',
      hasChildren: false,
      url: '/admin/settings',
      children: [],
    },
  ];

  return (
    <>
      {preferencesItems.map((item, index) => SidebarItem(item, index, isOpen))}
    </>
  );
}

function ExpandSidebarIconMobile({ isExpanded }: { isExpanded: boolean }) {
  return (
    <Row
      style={{
        padding: '2em',
        paddingTop: '2.5em',
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    >
      {isExpanded ? (
        <ChevronDown size={30} color="white" />
      ) : (
        <MenuIcon size={30} color="white" />
      )}
    </Row>
  );
}
