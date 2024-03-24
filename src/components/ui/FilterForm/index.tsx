/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import crossIcon from '../../../../public/images/crossIcon.svg';
import filterIcon from '../../../../public/images/greenFilterIcon.svg';
import { Button } from '../Buttons';
import ReuseableForm from '../resueableForm';

export default function FilterForm() {
  interface FieldValidationProps {
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
  }

  interface DynamicField {
    field: string;
    value: string | number | boolean;
  }

  interface Field {
    type:
      | 'text'
      | 'email'
      | 'checkbox'
      | 'tel'
      | 'number'
      | 'file'
      | 'url'
      | 'select'
      | 'date'
      | 'search';
    name: string;
    id: string;
    title: string;
    validationProps?: FieldValidationProps;
    dynamic?: DynamicField;
    options?: { label: string; value: string }[];
  }

  interface Section {
    id: string;
    fields: Field[];
  }

  interface Template {
    sections: Section[];
  }

  interface FilterFormValues {
    OrderIdField?: string;
    customerName?: string;
    selectStatusField?: string;
    ItemCode?: string;
    selectItemName?: string;
    Prize?: number;
    OrderDateField?: string; // Assuming date format is string
    DeliveryDateField?: string; // Assuming date format is string
    selectZoneField?: string;
    Location?: string;
    DriverAssigned?: string;
  }

  const FilterformFields: Template = {
    sections: [
      {
        id: 'filter',
        fields: [
          {
            type: 'search',
            name: 'OrderIdField',
            id: 'OrderIdField',
            title: 'Order ID',
          },
          {
            type: 'text',
            name: 'customerName',
            id: 'customerName',
            title: 'Customer name',
          },
          {
            type: 'select',
            name: 'selectStatusField',
            id: 'selectStatusField',
            title: 'Status',
            options: [
              { label: 'Delivered', value: 'delivered' },
              { label: 'Pending', value: 'pending' },
              { label: 'Opened', value: 'opened' },
              { label: 'Cancelled', value: 'cancelled' },
            ],
          },
          {
            type: 'search',
            name: 'ItemCode',
            id: 'ItemCode',
            title: 'Item Code',
          },
          {
            type: 'select',
            name: 'selectItemName',
            id: 'selectItemName',
            title: 'Item Name',
            options: [{ label: 'Tuna fish', value: 'tuna fish' }],
            validationProps: {
              required: 'This field is required',
            },
          },

          {
            type: 'number',
            name: 'Prize',
            id: 'Prize',
            title: 'Prize',
            validationProps: {
              required: 'This is a mandatory field',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Invalid number',
              },
            },
          },

          {
            type: 'date',
            name: 'OrderDateField',
            id: 'OrderDateField',
            title: 'Order Date',
            validationProps: {
              required: 'This field is required',
              pattern: {
                value: /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
                message: 'Invalid date format (DD-MM-YYYY)',
              },
            },
          },
          {
            type: 'date',
            name: 'DeliveryDateField',
            id: 'DeliveryDateField',
            title: 'Delivery Date',
            validationProps: {
              required: 'This field is required',
              pattern: {
                value: /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
                message: 'Invalid date format (DD-MM-YYYY)',
              },
            },
          },
          {
            type: 'select',
            name: 'selectZoneField',
            id: 'selectZoneField',
            title: 'Zone',
            options: [
              { label: 'Zone 1', value: 'Zone1' },
              { label: 'Zone 2', value: 'Zone2' },
              { label: 'Zone 3', value: 'Zone3' },
            ],
            validationProps: {
              required: 'This field is required',
            },
          },
          {
            type: 'text',
            name: 'Location',
            id: 'Location',
            title: 'Location',
            validationProps: {
              required: 'This is a mandatory field',
            },
          },
          {
            type: 'text',
            name: 'DriverAssigned',
            id: 'DriverAssigned',
            title: 'Driver Assigned',
            validationProps: {
              required: 'This is a mandatory field',
            },
          },
        ],
      },
    ],
  };
  function onSubmit(values: any) {
    // console.log(values);
  }
  function validate(watchValues: FilterFormValues, errorMethods: any) {
    const { errors, setError, clearErrors } = errorMethods;
    // Validation logic here
  }
  return (
    <div className="flex justify-end p-6">
      <div className="w-full max-w-xs bg-white border divide-y border-gray-200 rounded-2xl shadow  dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-2">
            <img src={filterIcon} alt="" />
            <label className="text-sm font-medium text-[#007171]">Filter</label>
          </div>

          <img src={crossIcon} alt="" />
        </div>
        <form
          className="max-h-[786px] overflow-auto p-2 flex justify-center"
          action="#"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(155, 155, 155, 0.5) rgba(255, 255, 255, 0.5)',
          }}
        >
          <ReuseableForm
            template={FilterformFields}
            watchFields={[
              'OrderIdField',
              'customerName',
              'selectStatusField',
              'ItemCode',
              'selectItemName',
              'Prize',
              'OrderDateField',
              'DeliveryDateField',
              'selectZoneField',
              'Location',
              'DriverAssigned',
            ]}
          />
        </form>
        <div className="p-4">
          <div className="flex justify-end items-center gap-2">
            <Button
              variant="outline"
              className="border border-[#007171] w-[95px] h-[32px]"
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="bg-[#007171] w-[87px] h-[32px]"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
