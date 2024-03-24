/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Box, Breadcrumbs, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ICellProps } from 'ka-table/props';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Column,
  FullScreenColumn,
  Row,
  SpacerRow,
} from '@/components/ui/layout/Layout';

import { Sidebar, SidebarMobile } from './Sidebar';

import { globalEvents$ } from '@/data/EventEmitter';
import { KitchenlyEvents } from '@/data/KitchenlyEvents';
import { KitchenlyTableContainer } from '@/components/ui/Tables/Tables';
import { ChartsContainer } from './ChartsContainer';
import { FilterContainer } from './FilterContainer';
import ActivityLog from '../../assets/header_footer/activity_log.svg?react';
import Help from '../../assets/header_footer/help_.svg?react';
import HeaderIcon from '../../assets/header_footer/icon.svg?react';
import NotificationIcon from '../../assets/header_footer/notifications.svg?react';
import Menu from '../../assets/header_footer/hamburger.svg?react';
import Next from '../../assets/header_footer/Next.svg?react';

import {
  Table1PropsInit,
  getTable1ChildComponents,
} from '@/components/ui/Tables/Table1Data';
import {
  Table2PropsInit,
  getTable2ChildComponents,
} from '@/components/ui/Tables/Table2Data';
import {
  WarehouseTablePropsInit,
  getWarehouseTableChildComponents,
} from '@/components/ui/Tables/WarehouseTableData';
import {
  useBreadcrumbsStore,
  useCurrentPageStore,
} from '@/data/NavigationState';
import { changeBreadcrumbs, changeGlobalPageLabel } from '@/utils/navigator';

export function AdminPanel() {
  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  // Stop propagation is important here to have compatibility with ClickOutside
  function toggleSidebar(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    globalEvents$.next({
      type: KitchenlyEvents.TOGGLE_SIDEBAR,
      // Use this to send different variants of the sidebar
      subType: 'main',
    });
  }

  return (
    <FullScreenColumn>
      <Helmet>
        <title>Kitchenly Admin Panel : Orders</title>
        <meta name="description" content="Welcome, Administrator" />
      </Helmet>
      {isTabletOrMobile ? <SidebarMobile /> : <Sidebar />}

      <Column
        className="h-screen w-screen flex justify-between"
        style={{ justifyContent: 'flex-start', overflowY: 'scroll' }}
      >
        <Header toggleSidebar={toggleSidebar} />

        <Column
          style={{
            width: '100%',
            alignItems: 'flex-start',
            overflowX: 'clip',
            alignSelf: 'flex-start',
          }}
        >
          <Outlet />
        </Column>
      </Column>
    </FullScreenColumn>
  );
}

export function OrdersPage() {
  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  return (
    <motion.div
      initial={{ y: '1em', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 2 }}
      style={{ width: '100%' }}
    >
      <Row style={{ width: '100%' }}>
        <Column
          style={{
            width: '100%',
            alignItems: 'flex-start',
            overflowX: 'clip',
            alignSelf: 'flex-start',
          }}
        >
          <Column style={{ alignItems: 'flex-start', padding: '1em' }}>
            <Row>
              <Row
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#018CB9',
                  borderBottom: '3px solid #018CB9',
                  padding: '0 1em 0.3em 1em',
                }}
              >
                Subscription
              </Row>
              <SpacerRow />
              <Row
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  padding: '0 1em 0.3em 1em',
                }}
              >
                Ecommerce
              </Row>
            </Row>
            <Box sx={{ m: 1 }} />
            <Row style={{ width: isTabletOrMobile ? '100%' : '60%' }}>
              <Typography fontSize="14px" fontFamily="inherit" color="#4F4D55">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor{' '}
              </Typography>
            </Row>
          </Column>
          <ChartsContainer />

          <AdminTable1 />
          <AdminTable2 />
          <AdminTable3 />
        </Column>
        {!isTabletOrMobile && <FilterContainer />}
      </Row>
    </motion.div>
  );
}

function AdminTable1() {
  const [searchText, setSearchText] = useState('');

  // Implement custom backend save logic here
  function onSaveRow(props: PropsWithChildren<ICellProps>) {
    // Do backend request here and if the request fails, dispatch a toast and enable editing on the row again.
  }

  return (
    <Column
      style={{
        padding: '1em',
        width: '100%',
        alignItems: 'flex-start',
        overflowX: 'clip',
        alignSelf: 'flex-start',
      }}
    >
      <KitchenlyTableContainer
        title="Subscription Orders"
        tablePropsInit={Table1PropsInit}
        getChildComponents={getTable1ChildComponents}
        searchText={searchText}
        setSearchText={setSearchText}
        onFilterApplied={() => {
          alert('Filter applied from Subscription Orders table');
        }}
        onSaveRow={onSaveRow}
      />
    </Column>
  );
}

function AdminTable2() {
  const [searchText, setSearchText] = useState('');

  // Implement custom backend save logic here
  function onSaveRow(props: PropsWithChildren<ICellProps>) {
    // Do backend request here and if the request fails, dispatch a toast and enable editing on the row again.
  }

  return (
    <Column
      style={{
        padding: '1em',
        width: '100%',
        alignItems: 'flex-start',
        overflowX: 'clip',
        alignSelf: 'flex-start',
      }}
    >
      <KitchenlyTableContainer
        title="Meal Items"
        tablePropsInit={Table2PropsInit}
        getChildComponents={getTable2ChildComponents}
        searchText={searchText}
        setSearchText={setSearchText}
        onFilterApplied={() => {
          alert('Filter applied from Meal Items table');
        }}
        onSaveRow={onSaveRow}
      />
    </Column>
  );
}

function AdminTable3() {
  const [searchText, setSearchText] = useState('');

  // Implement custom backend save logic here
  function onSaveRow(props: PropsWithChildren<ICellProps>) {
    // Do backend request here and if the request fails, dispatch a toast and enable editing on the row again.
  }

  return (
    <Column
      style={{
        padding: '1em',
        width: '100%',
        alignItems: 'flex-start',
        overflowX: 'clip',
        alignSelf: 'flex-start',
      }}
    >
      <KitchenlyTableContainer
        title="Storage Sections"
        tablePropsInit={WarehouseTablePropsInit}
        getChildComponents={getWarehouseTableChildComponents}
        searchText={searchText}
        setSearchText={setSearchText}
        onFilterApplied={() => {
          alert('Filter applied from Storage Sections table');
        }}
        onSaveRow={onSaveRow}
      />
    </Column>
  );
}

export function Header({
  toggleSidebar,
}: {
  toggleSidebar: (event: any) => void;
}) {
  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  const currentPageLabel = useCurrentPageStore((state) => state.label);

  const location = useLocation();

  const currentPageState = useCurrentPageStore();

  const breadcrumbsStore = useBreadcrumbsStore();

  useEffect(() => {
    changeGlobalPageLabel(location.pathname, currentPageState);
    changeBreadcrumbs(location.pathname, breadcrumbsStore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div
      className="flex justify-between"
      style={{
        width: '100%',
        height: '7em',
        position: 'sticky',
        top: '0',
        backgroundColor: '#f6fdff',
        zIndex: '1100',
      }}
    >
      <Column
        style={{ alignItems: 'flex-start', padding: '1em', margin: '-0.7em' }}
      >
        <Row>
          <motion.div
            onClick={(e) => {
              toggleSidebar(e);
            }}
            whileHover={{ backgroundColor: '#00B2AB4D' }}
            style={{
              padding: '0.7em',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <Menu />
          </motion.div>
          <SpacerRow />
          <p className="font-bold text-2xl">{currentPageLabel}</p>
        </Row>

        {/* <SpacerColumn height='5em' /> */}

        {!isTabletOrMobile && <BreadcrumbsContainer />}
      </Column>

      <AccountDetails />
    </div>
  );
}

// Should use global login state.
export function AccountDetails() {
  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  const avatar =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D';

  return (
    <Row style={{ padding: '1em', gap: '0.7em' }}>
      {!isTabletOrMobile && (
        <>
          <motion.div
            whileHover={{ backgroundColor: '#00B2AB4D' }}
            style={{
              padding: '0.5em',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <Help />
          </motion.div>

          <motion.div
            whileHover={{ backgroundColor: '#00B2AB4D' }}
            style={{
              padding: '0.5em',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <HeaderIcon />
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: '#00B2AB4D' }}
            style={{
              padding: '0.5em',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <ActivityLog />
          </motion.div>
        </>
      )}

      <motion.div
        whileHover={{ backgroundColor: '#00B2AB4D' }}
        style={{ padding: '0.5em', borderRadius: '10px', cursor: 'pointer' }}
      >
        <NotificationIcon />
      </motion.div>

      <SpacerRow width="1em" />
      {isTabletOrMobile ? (
        <Row>
          {/* <Avatar alt="Remy Sharp" src={avatar} /> */}
          <CircularAvatar url={avatar} />
        </Row>
      ) : (
        <Row>
          <p
            className="flex cursor-pointer"
            style={{ fontSize: '22px', fontWeight: '500' }}
          >
            Gwen Rachel
          </p>
          <SpacerRow />
          <CircularAvatar url={avatar} />
        </Row>
      )}
    </Row>
  );
}

export const CircularAvatar = ({ url }: { url: string }) => {
  return (
    <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-300 border-2 border-yellow-400 cursor-pointer">
      <img className="object-cover w-full h-full" src={url} alt="User Avatar" />
    </div>
  );
};

// All of these values are directly fetched from a global state. So no props necessary.
export function BreadcrumbsContainer() {
  const breadcrumbsStore = useBreadcrumbsStore();

  const navigate = useNavigate();

  return (
    <Breadcrumbs
      separator={<Next style={{ padding: '0.02em' }} />}
      aria-label="breadcrumb"
      style={{ paddingLeft: '0.7em' }}
    >
      {breadcrumbsStore.breadcrumbs.items.map((crumb) => (
        <Typography
          key={crumb.path}
          className="cursor-pointer"
          color="#018CB9"
          fontWeight={500}
          fontFamily="inherit"
          fontSize="14px"
          onClick={() => {
            navigate(crumb.path);
          }}
        >
          {crumb.label}
        </Typography>
      ))}
    </Breadcrumbs>
  );
}
