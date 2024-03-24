/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-inner-declarations */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DataType, ITableProps, SortingMode } from 'ka-table';
import { ChildComponents } from 'ka-table/models';
import { ICellProps, ICellTextProps, IHeadCellProps } from 'ka-table/props';
import { DispatchFunc } from 'ka-table/types';
import { Typography } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import { Save } from 'lucide-react';
import { KitchenlyColors } from '../Colors';
import { Badge } from '../badge';
import editIcon from '../../../../public/images/editIcon.svg';
import binIcon from '../../../../public/images/binIcon.svg';

import { AlertComponent } from '../Alerts/Alerts';
import { KitchenlyDatePicker, Selector } from '../Components/Components';

const fullNamesArray = [
  'Alice Smith',
  'Bob Johnson',
  'Charlie Williams',
  'David Jones',
  'Emma Brown',
  'Frank Davis',
  'Grace Miller',
  'Henry Wilson',
  'Ivy Moore',
  'Jack Taylor',
  'Kate Anderson',
  'Liam Thomas',
  'Mia Jackson',
  'Noah White',
  'Olivia Harris',
  'Peter Martin',
  'Quinn Thompson',
  'Rachel Garcia',
  'Sam Martinez',
  'Tom Robinson',
];

const status = ['Delivered', 'Pending', 'Open', 'Canceled'];

const foodNames = [
  'Pizza',
  'Burger',
  'Sushi',
  'Tacos',
  'Pasta',
  'Salad',
  'Steak',
  'Sandwich',
  'Soup',
  'Rice Bowl',
];

const dataArray = Array(119)
  .fill(undefined)
  .map((_, index) => ({
    // column1: index % 2 === 0,
    column2: Math.floor(Math.random() * 900000) + 100000,
    column3: fullNamesArray[Math.floor(Math.random() * fullNamesArray.length)],
    column4: status[Math.floor(Math.random() * status.length)],
    column5: foodNames[Math.floor(Math.random() * foodNames.length)],
    column6: Math.floor(Math.random() * 900000) + 100000,
    column7: Math.floor(Math.random() * 900) + 100,
    column8: new Date(2022, 11, index),
    column9: new Date(2022, 11, index),
    column10: 'Zone 2',
    column11: 'Flat No. 178-A, Wing B, Safar',
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
        if (event.nativeEvent.shiftKey) {
          // table.selectRowsRange(props.rowKeyValue, [...props.selectedRows].pop());
        } else if (event.currentTarget.checked) {
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

export const Table1PropsInit: ITableProps = {
  columns: [
    {
      key: 'selection-cell',
      isFilterable: false,
      style: { padding: '0px' },
      isEditable: false,
    },
    {
      key: 'column2',
      title: 'Order Id',
      dataType: DataType.String,
    },
    {
      key: 'column3',
      title: 'Customer Name',
      dataType: DataType.String,
    },
    {
      key: 'column4',
      title: 'Status',
      dataType: DataType.String,
    },
    {
      key: 'column5',
      title: 'Item Name',
      dataType: DataType.String,
    },
    {
      key: 'column6',
      title: 'Item Code',
      dataType: DataType.String,
    },
    {
      key: 'column7',
      title: 'Price',
      dataType: DataType.Number,

      filterRowOperator: '>',
    },
    {
      key: 'column8',
      title: 'Order Date',
      dataType: DataType.Date,
      filterRowOperator: '<',
    },
    {
      key: 'column9',
      title: 'Delivery Date',
      dataType: DataType.Date,
      filterRowOperator: '<',
    },
    {
      key: 'column10',
      title: 'Zone',
      dataType: DataType.String,
    },
    {
      key: 'column11',
      title: 'Location',
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

export function getTable1ChildComponents(
  dispatch: DispatchFunc,
  onSaveRow: (props: PropsWithChildren<ICellProps>) => void
) {
  const tableChildComponents: ChildComponents = {
    cellText: {
      content: (props) => {
        if (props.column.key === 'selection-cell') {
          return <SelectionCell {...props} dispatch={dispatch} />;
        }

        if (props.column.key === 'column5') {
          return (
            <Typography
              fontFamily="inherit"
              fontSize="14px"
              textOverflow="ellipsis"
              maxWidth="9rem"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              {props.value}
            </Typography>
          );
        }
        if (props.column.key === 'column11') {
          return (
            <Typography
              fontFamily="inherit"
              fontSize="14px"
              textOverflow="ellipsis"
              maxWidth="11rem"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              {props.value}
            </Typography>
          );
        }
        if (props.column.key === 'column4') {
          switch (props.value) {
            case 'Canceled':
              return (
                <Badge
                  variant="secondary"
                  style={{
                    backgroundColor: KitchenlyColors.PastelRed,
                    cursor: 'pointer',
                    height: '2em',
                  }}
                >
                  Canceled
                </Badge>
              );
            case 'Pending':
              return (
                <Badge
                  variant="secondary"
                  style={{
                    backgroundColor: KitchenlyColors.PastelYellow,
                    cursor: 'pointer',
                    height: '2em',
                  }}
                >
                  Pending
                </Badge>
              );
            case 'Open':
              return (
                <Badge
                  variant="secondary"
                  style={{
                    backgroundColor: KitchenlyColors.PastelBlue,
                    cursor: 'pointer',
                    height: '2em',
                  }}
                >
                  Open
                </Badge>
              );
            case 'Delivered':
              return (
                <Badge
                  variant="secondary"
                  style={{
                    backgroundColor: KitchenlyColors.PastelGreen,
                    cursor: 'pointer',
                    height: '2em',
                  }}
                >
                  Delivered
                </Badge>
              );
            default:
              return <Typography fontFamily="inherit">__</Typography>;
          }
        }
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
            onSaveRow(props);
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
        if (props.column.key === 'column8') {
          function onValueChange(newValue: any) {
            dispatch({
              type: `UpdateCellValue`,
              rowKeyValue: props.rowKeyValue,
              columnKey: props.column.key,
              value: newValue,
            });
          }

          return (
            <KitchenlyDatePicker
              initDate={props.value}
              isEditable
              onValueChange={onValueChange}
            />
          );
        }
        if (props.column.key === 'column9') {
          function onValueChange(newValue: any) {
            console.log(`value changed to: ${newValue}`);
            dispatch({
              type: `UpdateCellValue`,
              rowKeyValue: props.rowKeyValue,
              columnKey: props.column.key,
              value: newValue,
            });
          }
          return (
            <KitchenlyDatePicker
              initDate={props.value}
              isEditable
              onValueChange={onValueChange}
            />
          );
        }
        if (props.column.key === 'column4') {
          function onValueChange(newValue: string) {
            console.log(`value changed to: ${newValue}`);
            dispatch({
              type: `UpdateCellValue`,
              rowKeyValue: props.rowKeyValue,
              columnKey: props.column.key,
              value: newValue,
            });
          }

          switch (props.value) {
            case 'Canceled':
              return (
                <Selector
                  name="Canceled"
                  options={['Pending', 'Open', 'Delivered']}
                  onValueChange={onValueChange}
                />
              );
            case 'Pending':
              return (
                <Selector
                  name="Pending"
                  options={['Cancel', 'Open', 'Delivered']}
                  onValueChange={onValueChange}
                />
              );
            case 'Open':
              return (
                <Selector
                  name="Open"
                  options={['Pending', 'Canceled', 'Delivered']}
                  onValueChange={onValueChange}
                />
              );
            case 'Delivered':
              return (
                <Selector
                  name="Delivered"
                  options={['Pending', 'Open', 'Canceled']}
                  onValueChange={onValueChange}
                />
              );
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
