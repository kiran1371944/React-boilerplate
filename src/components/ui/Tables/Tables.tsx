/* eslint-disable import/extensions */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/order */
import {
  DataType,
  EditingMode,
  FilteringMode,
  SortingMode,
} from 'ka-table/enums';
import { ITableProps, Table, kaReducer, useTableInstance } from 'ka-table';
import addIcon from '../../../../public/images/addIcon.svg';
import filterIcon from '../../../../public/images/filterIcon.svg';
import sortIcon from '../../../../public/images/SortIcon.svg';

import { ICellProps, ICellTextProps } from 'ka-table/props';
import React, { PropsWithChildren, useState } from 'react';
import { kaPropsUtils } from 'ka-table/utils';
import { ChildComponents } from 'ka-table/models';
import { Link } from 'react-router-dom';
import { DispatchFunc } from 'ka-table/types';
import { AlertComponent } from '../Alerts/Alerts';
import {
  CustomCalendarEditor,
  KitchenlyCalendar,
  KitchenlyDatePicker,
  Selector,
} from '../Components/Components';
import { Typography, useMediaQuery } from '@mui/material';
import { globalEvents$ } from '@/data/EventEmitter';
import { KitchenlyEvents } from '@/data/KitchenlyEvents';
import { Badge } from '../badge';
import { KitchenlyColors } from '../Colors';
import { Table1PropsInit, getTable1ChildComponents } from './Table1Data';
import MagnifierIcon from '../../../assets/table_icons/Magnifier.svg?react';
import Import from '../../../assets/table_icons/import.svg?react';
import Export from '../../../assets/table_icons/file-export.svg?react';

import { motion } from 'framer-motion';

const tableDemo: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  function onSaveRow() {}

  return (
    <div className="container mx-auto my-10">
      <Link to="/">
        <h1 className="mb-2 text-l link text-gray-900 dark:text-gray-400">
          Home
        </h1>
      </Link>
      <h1 className="mb-10 text-3xl font-bold text-gray-900 dark:text-gray-900">
        Table
      </h1>
      <KitchenlyTableContainer
        title="Subscription Orders"
        tablePropsInit={Table1PropsInit}
        getChildComponents={getTable1ChildComponents}
        searchText={searchText}
        setSearchText={setSearchText}
        onSaveRow={onSaveRow}
        onFilterApplied={() => {
          alert('Filter applied from demo table');
        }}
      />
    </div>
  );
};

export default tableDemo;

export type KitchenlyTableContainerProps = {
  title: string;
  onSearch?: (value: string) => void;
  tablePropsInit: ITableProps;
  getChildComponents: (
    dispatch: DispatchFunc,
    onSaveRow: (data: PropsWithChildren<ICellProps>) => void
  ) => ChildComponents;
  searchText: string;
  setSearchText: (value: string) => void;
  onFilterApplied: (data: any) => void;
  onSaveRow: (data: PropsWithChildren<ICellProps>) => void;
};

export function KitchenlyTableContainer({
  title,
  onSearch,
  tablePropsInit,
  getChildComponents,
  searchText,
  setSearchText,
  onFilterApplied,
  onSaveRow,
}: KitchenlyTableContainerProps) {
  const [tableProps, changeTableProps] = useState(tablePropsInit);

  const handleSortButtonClick = () => {
    const randomSortingMode =
      Math.random() < 0.5 ? SortingMode.SingleRemote : SortingMode.Single;

    changeTableProps({
      ...tablePropsInit,
      sortingMode: randomSortingMode,
    });
  };

  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };

  function openFilterSettings(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log('called');
    e.stopPropagation();
    globalEvents$.next({
      type: KitchenlyEvents.TOGGLE_FILTER,
      tableName: title,
      onFilterApplied: (data) => {
        onFilterApplied(data);
      },
      onFilterChanged: (filters) => {
        onFilterChanged(filters);
      },
    });
  }

  const [appliedFiltersCount, setAppliedFiltersCount] = useState(0);

  function onFilterChanged(filters: string[]) {
    setAppliedFiltersCount(filters.length);
  }
  const tableChildComponents = getChildComponents(dispatch, onSaveRow);

  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  return (
    <div
      className="flex"
      style={{ width: '100%', justifyContent: 'flex-start' }}
    >
      <div
        className=" border rounded-lg border-[#EFEFFA] shadow-md overflow-hidden px-3	py-3.5 bg-white"
        style={{
          alignItems: 'center',
          width: '100%',
          maxWidth: isTabletOrMobile ? '100%' : '100%',
        }}
      >
        <div
          className="flex  sm:flex-row items-center mb-4"
          style={{
            justifyContent: isTabletOrMobile ? 'flex-start' : 'space-between',
          }}
        >
          <div className="mb-1 sm:mb-0">
            <h2 className="text-lg font-bold mb-1 text-[#018CB9]">{title}</h2>
          </div>

          {!isTabletOrMobile && (
            <div className="flex justify-between gap-4 flex-col sm:flex-row">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 pb-1">
                  <MagnifierIcon />
                </span>
                <input
                  className=" placeholder:text-[#7F7D83] bg-[#F8F8F8] w-[30em] rounded-md py-2 pl-9 border-0 pr-3 focus:outline-none focus:border-none focus:ring-none focus:ring-none sm:text-sm"
                  placeholder="Search"
                  type="search"
                  value={searchText}
                  onChange={(event) => {
                    setSearchText(event.currentTarget.value);
                  }}
                />
              </label>

              <button
                onClick={() => handleSortButtonClick()}
                className="rounded-md border-[#EFEFFA] px-2.5 py-2 font-medium	 text-xs text-[#0A090B] border bg-[#fff] flex items-center gap-1"
              >
                <img src={sortIcon} alt="" />
                <label htmlFor="">Sort</label>
              </button>
              <button
                onClick={openFilterSettings}
                className="rounded-md border-[#EFEFFA] px-2.5 py-2 font-medium	 text-xs text-[#0A090B] border bg-[#fff] flex items-center gap-1"
              >
                <img src={filterIcon} alt="" />
                <label htmlFor="">{`Filter (${appliedFiltersCount})`}</label>
              </button>
              <motion.div
                whileHover={{ backgroundColor: '#00B2AB4D' }}
                style={{
                  padding: '0.5em',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                <Export />
              </motion.div>
              <motion.div
                whileHover={{ backgroundColor: '#00B2AB4D' }}
                style={{
                  padding: '0.5em',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                <Import />
              </motion.div>
              <button className="rounded-md bg-[#018CB9] w-14 text-slate-50 px-2.5 py-2 flex justify-center items-center">
                <img src={addIcon} alt="" />
              </button>
            </div>
          )}
        </div>
        <div
          className="overflow-auto"
          style={{ maxHeight: '100%', width: '100%' }}
        >
          <KitchenlyTable
            tableProps={tableProps}
            childComponents={tableChildComponents}
            searchText={searchText}
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
}

type TableComponentProps = {
  tableProps: ITableProps;
  childComponents: ChildComponents;
  searchText: string;
  dispatch: DispatchFunc;
};

export const KitchenlyTable: React.FC<TableComponentProps> = ({
  tableProps,
  childComponents,
  searchText,
  dispatch,
}) => {
  return (
    <Table
      {...tableProps}
      childComponents={childComponents}
      // sortingMode={SortingMode.Single}
      // filteringMode={FilteringMode.FilterRow}
      dispatch={dispatch}
      width="100%"
    />
  );
};
