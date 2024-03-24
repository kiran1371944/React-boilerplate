/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import ReuseableForm from '../../components/ui/resueableForm';
// import template from '../../../public/dummyJson.json';

const formTemplate: Template = {
  title: 'Application Form',
  description: 'Form for applying',
  sections: [
    {
      title: 'Personal Information',
      id: 'personal_information',
      fields: [
        {
          type: 'text',
          name: 'firstname',
          id: 'firstname',
          title: 'First Name',
          validationProps: {
            required: 'This is a mandatory field',
          },
        },
        {
          type: 'email',
          name: 'email',
          id: 'email',
          title: 'Email Address',
          validationProps: {
            required: 'This is a mandatory field',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          },
        },
        {
          type: 'tel',
          name: 'phone_number',
          id: 'phone',
          title: 'Phone Number',
          validationProps: {
            required: 'This is a mandatory field',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Invalid number',
            },
            minLength: {
              value: 10,
              message: 'Phone number must be at least 10 digits long',
            },
          },
        },
        {
          type: 'select',
          name: 'selectField',
          id: 'selectField',
          title: 'Select Field',
          options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ],
          validationProps: {
            required: 'This field is required',
          },
        },
        {
          type: 'date',
          name: 'dateField',
          id: 'dateField',
          title: 'Date Field',
          validationProps: {
            required: 'This field is required',
          },
        },
        {
          type: 'search',
          name: 'searchField',
          id: 'searchField',
          title: 'Search Field',
          validationProps: {
            required: 'This field is required',
          },
        },
        {
          type: 'checkbox',
          name: 'include_portfolio',
          id: 'include_portfolio',
          title: 'Include Portfolio Links',
        },
        {
          type: 'url',
          name: 'portfolio_url',
          id: 'portfolio_url',
          title: 'Portfolio Link',
          validationProps: {
            required: 'This is a mandatory field',
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: 'Invalid URL',
            },
          },
        },
        {
          type: 'file',
          name: 'select_resume',
          id: 'select_resume',
          title: 'Select Resume',
        },
      ],
    },
  ],
};

// console.log('template === formTemplate', template === formTemplate);

interface FormValues {
  firstname: string;
  secondname: string;
  email: string;
  include_portfolio: boolean;
  portfolio_link?: string;
}

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
  title: string;
  id: string;
  fields: Field[];
}

interface Template {
  title: string;
  description: string;
  sections: Section[];
}

function FormComponent(props: any) {
  function onSubmit(values: any) {
    // console.log(values);
  }

  function validate(watchValues: FormValues, errorMethods: any) {
    const { errors, setError, clearErrors } = errorMethods;
    // console.log('watchValues', watchValues);
    // Firstname validation
    if (watchValues?.firstname === 'Admin') {
      if (!errors?.firstname) {
        setError('firstname', {
          type: 'manual',
          message: 'You cannot use this first name',
        });
      }
    } else if (errors?.firstname && errors?.firstname.type === 'manual') {
      clearErrors('firstname');
    }
  }

  return (
    <div className="flex justify-center">
      <ReuseableForm
        template={formTemplate}
        watchFields={['firstname', 'include_portfolio']}
      />
    </div>
  );
}

export default FormComponent;
