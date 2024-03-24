/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import { DataType, SortingMode } from 'ka-table/enums';
import { ITableProps } from 'ka-table';
import { Save } from 'lucide-react';

import { ICellTextProps, IHeadCellProps } from 'ka-table/props';
import React, { PropsWithChildren, useState } from 'react';
import { ChildComponents } from 'ka-table/models';
import { DispatchFunc } from 'ka-table/types';
import { Typography } from '@mui/material';
import { AlertComponent } from '../Alerts/Alerts';
import { Selector } from '../Components/Components';

import editIcon from '../../../../public/images/editIcon.svg';
import binIcon from '../../../../public/images/binIcon.svg';

const foodIngredients = [
  'Tomatoes',
  'Onions',
  'Garlic',
  'Bell peppers',
  'Basil',
  'Olive oil',
  'Pasta',
  'Chicken',
  'Cheese',
  'Spinach',
];

const units = ['kg', 'oz', 'g'];

const dataArray = Array(119)
  .fill(undefined)
  .map((_, index) => ({
    // column1: index % 2 === 0,
    column2: Math.floor(Math.random() * 900000) + 100000,
    column3:
      foodIngredients[Math.floor(Math.random() * foodIngredients.length)],
    column4: Math.floor(Math.random() * 10) + 5,
    column5: units[Math.floor(Math.random() * units.length)],
    column6: Math.floor(Math.random() * 55) + 20,
    column7: Math.floor(Math.random() * 500) + 20,
    id: index,
  }));

const SelectionCell: React.FC<ICellTextProps> = (props) => {
  return (
    <input
      type="checkbox"
      checked={props.isSelectedRow}
      className={`border-2 border-[#018bb947] cursor-pointer rounded-sm ${props.isSelectedRow ? 'checked:border-[#018CB9] text-[#018CB9] ' : ''} no-focus-ring`}
      style={{ width: '20px', height: '20px' }}
      onChange={(event: any) => {
        if (event?.nativeEvent.shiftKey) {
          // table.selectRowsRange(props.rowKeyValue, [...props.selectedRows].pop());
        } else if (event?.currentTarget.checked) {
          props.dispatch({ type: 'SelectRow', rowKeyValue: props.rowKeyValue });
        } else {
          props.dispatch({
            type: 'DeselectRow',
            rowKeyValue: props.rowKeyValue,
          });
        }
      }}
    />
  );
};

const SelectionHeader: React.FC<PropsWithChildren<IHeadCellProps>> = (
  props
) => {
  return (
    <input
      type="checkbox"
      style={{ width: '20px', height: '20px' }}
      className={`border-2 border-[#018bb947] cursor-pointer rounded-sm ${false ? 'checked:border-[#018CB9] text-[#018CB9]' : ''}`}
      onChange={(event: any) => {
        if (event.nativeEvent.shiftKey) {
          // table.selectRowsRange(props.rowKeyValue, [...props.selectedRows].pop());
        } else if (event.currentTarget.checked) {
          props.dispatch({ type: 'SelectAllRows' });
        } else {
          props.dispatch({ type: 'DeselectAllRows' });
        }
      }}
    />
  );
};

export const Table2PropsInit: ITableProps = {
  columns: [
    {
      key: 'selection-cell',
      isFilterable: false,
      style: { padding: '0px' },
      isEditable: false,
    },
    {
      key: 'column2',
      title: 'Item Number',
      dataType: DataType.String,
    },
    {
      key: 'column3',
      title: 'Item Name',
      dataType: DataType.String,
    },
    {
      key: 'column4',
      title: 'Quantity',
      dataType: DataType.String,
    },
    {
      key: 'column5',
      title: 'Unit',
      dataType: DataType.String,
    },
    {
      key: 'column6',
      title: 'Unit Price (KD)',
      dataType: DataType.String,
    },
    {
      key: 'column7',
      title: 'Net Price (KD)',
      dataType: DataType.String,
    },
    {
      key: 'action',
      title: 'Action',
      style: { textAlign: 'center' },
    },
  ],
  format: ({ column, value }) => {
    if (column.dataType === DataType.Date) {
      return (
        value &&
        value.toLocaleDateString('en-uk', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        })
      );
    }
  },
  paging: {
    enabled: true,
    pageSize: 10,
    pageIndex: 0,
  },
  data: dataArray,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
  search: ({ searchText: searchTextValue, rowData, column }) => {
    if (column.key === 'passed') {
      return (
        (searchTextValue === 'false' && !rowData.passed) ||
        (searchTextValue === 'true' && rowData.passed)
      );
    }
  },
};

export function getTable2ChildComponents(dispatch: DispatchFunc) {
  const tableChildComponents: ChildComponents = {
    cellText: {
      content: (props) => {
        if (props.column.key === 'selection-cell') {
          return <SelectionCell {...props} />;
        }
        // if (props.column.key === 'column9') {
        //   return <KitchenlyDatePicker initDate={props.value} isEditable={false} />
        // }
      },
    },
    headCell: {
      content: (props) => {
        if (props.column.key === 'selection-cell') {
          return <SelectionHeader {...props} />;
        }
      },
    },

    table: {
      elementAttributes: () => ({
        className: 'table table-auto table-striped table-hover table-bordered',
      }),
    },

    tableHead: {
      elementAttributes: () => ({
        className: 'text-[#007171] font-bold',
        style: { fontSize: '14px' },
      }),
    },

    cell: {
      elementAttributes: () => ({
        className: 'text-sm	font-normal',
        style: { color: 'rgba(79, 77, 85, 1)' },
      }),
      content: (props) => {
        const [isEditing, setIsEditing] = useState(false);

        function onEditClick() {
          if (!isEditing) {
            dispatch({
              type: 'OpenRowEditors',
              rowKeyValue: props.rowKeyValue,
            });
          } else {
            dispatch({
              type: 'SaveRowEditors',
              rowKeyValue: props.rowKeyValue,
            });
          }

          setIsEditing(!isEditing);
        }

        if (props.column.key === 'action') {
          return (
            <div className="flex justify-center gap-x-7 items-center">
              {isEditing ? (
                <Save
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => {
                    onEditClick();
                  }}
                  style={{ minWidth: '1em' }}
                />
              ) : (
                <img
                  src={editIcon}
                  alt="Edit"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => {
                    onEditClick();
                  }}
                  style={{ minWidth: '1em' }}
                />
              )}
              <AlertComponent
                message="Are you sure you want to delete?"
                heading="Confirm Delete"
                onOk={() => {}}
              >
                <img
                  style={{ minWidth: '1em' }}
                  src={binIcon}
                  alt="Delete"
                  className="w-4 h-4 cursor-pointer"
                />
              </AlertComponent>
            </div>
          );
        }
      },
    },

    cellEditor: {
      content: (props) => {
        // TODO: Refactor to switch case

        if (props.column.key === 'column5') {
          switch (props.value) {
            case 'kg':
              return <Selector name="kg" options={['oz', 'g']} />;
            case 'oz':
              return <Selector name="oz" options={['kg', 'g']} />;
            case 'g':
              return <Selector name="g" options={['oz', 'kg']} />;
            default:
              return <Typography>__</Typography>;
          }
        }
      },
    },

    noDataRow: {
      content: () => 'No Data Found',
    },
    cellEditorInput: {
      elementAttributes: ({ column }) => ({
        className: `bg-white border border-slate-400 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${
          column.dataType === DataType.Boolean ? 'form-checkbox' : ''
        }`,
      }),
    },
    pagingIndex: {
      elementAttributes: ({ isActive }) => ({
        className: `inline-block px-0 text-center w-[40px] py-2 cursor-pointer text-sm font-semibold ${isActive ? 'bg-[#018CB9] text-white border border-none rounded-md' : ''}`,
      }),
      content: ({ text }) => <div>{text}</div>,
    },
    pagingPages: {
      elementAttributes: () => ({
        className: 'flex justify-end space-x-1 mt-4 text-gray-500', // Add Tailwind CSS classes for pagination container
      }),
    },
  };
  return tableChildComponents;
}
