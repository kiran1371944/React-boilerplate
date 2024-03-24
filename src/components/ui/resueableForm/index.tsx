/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { TextInput } from '../Text field/TextField';
import searchIcon from '../../../../public/images/searchIcon.svg';
import { SelectInput } from '../SelectField/Select';

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

interface FormValues {
  firstname: string;
  secondname: string;
  email: string;
  include_portfolio: boolean;
  portfolio_link?: string;
}

interface Props {
  template: Template;
  watchFields: string[]; // Add the watchFields property
  // validate: (watchValues: FormValues, errorMethods: any) => void;
  // onSubmit: (values: any) => void;
}

function Form({ template }: Props) {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();
  const watchFields = template.sections.reduce(
    (fields: string[], section) => [
      ...fields,
      ...section.fields.map((field) => field.name),
    ],
    []
  );
  const watchValues = watch(watchFields);

  return (
    <div className="">
      <form
        className=""
        //  onSubmit={handleSubmit(onSubmit)}
      >
        {template.sections.map((section) => (
          <div key={section.id}>
            <div className="grid ">
              {section.fields.map((field) => {
                const { title, type, name, validationProps, dynamic } = field;
                const showField = dynamic
                  ? watchValues[dynamic.field as keyof typeof watchValues] ===
                    dynamic.value
                  : true;

                if (!showField) return null;
                const errorMessage: string = (errors[name]?.message ??
                  '') as string;
                switch (type) {
                  case 'text':
                    return (
                      <div key={name}>
                        <TextInput
                          type={type}
                          id={name}
                          label={title}
                          variant={
                            errors && errors[name] ? 'danger' : 'default'
                          }
                          // type={type}
                          {...register(name, {
                            required: validationProps?.required, // Map 'required' property
                          })}
                          sublabel={errors && errors[name] && errorMessage}
                          className="bg-[#FFFFFF] h-[40px] border border-[#E6E6E6] text-gray-900 text-sm rounded-lg focus:none focus:none block w-64 p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:focus:none"
                        />
                      </div>
                    );
                  case 'url':
                    return (
                      <div key={name}>
                        <TextInput
                          type={type}
                          id={name}
                          label={title}
                          variant={
                            errors && errors[name] ? 'danger' : 'default'
                          }
                          {...register(name, {
                            required: validationProps?.required, // Map 'required' property
                            pattern: validationProps?.pattern
                              ? {
                                  value: validationProps.pattern.value,
                                  message: validationProps.pattern.message,
                                }
                              : undefined, // Map 'pattern' property
                            minLength: validationProps?.minLength
                              ? {
                                  value: validationProps.minLength.value,
                                  message: validationProps.minLength.message,
                                }
                              : undefined, // Map 'minLength' property
                          })}
                          sublabel={errors && errors[name] && errorMessage}
                        />
                      </div>
                    );
                  case 'tel':
                  case 'number':
                  case 'email':
                    return (
                      <div key={name}>
                        <TextInput
                          type={type}
                          id={name}
                          label={title}
                          className="bg-[#FFFFFF] h-[40px] border border-[#E6E6E6] text-gray-900 text-sm rounded-lg focus:none focus:none block w-64 p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:focus:none"
                          variant={
                            errors && errors[name] ? 'danger' : 'default'
                          }
                          {...register(name, {
                            required: validationProps?.required, // Map 'required' property
                            pattern: validationProps?.pattern
                              ? {
                                  value: validationProps.pattern.value,
                                  message: validationProps.pattern.message,
                                }
                              : undefined, // Map 'pattern' property
                            minLength: validationProps?.minLength
                              ? {
                                  value: validationProps.minLength.value,
                                  message: validationProps.minLength.message,
                                }
                              : undefined, // Map 'minLength' property
                          })}
                          sublabel={errors && errors[name] && errorMessage}
                        />
                      </div>
                    );
                  case 'checkbox':
                    return (
                      <div key={name} className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            {...register(name, validationProps)}
                            className="w-4 h-4 me-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {title}
                        </label>
                        {errors && errors[name] && (
                          <span className="text-red-500">{errorMessage}</span>
                        )}
                      </div>
                    );
                  case 'file':
                    return (
                      <div key={name}>
                        <label
                          className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor={name}
                        >
                          {title}
                        </label>
                        <input
                          type={type}
                          id={name}
                          {...register(name, validationProps)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors && errors[name] && (
                          <span className="text-red-500">{errorMessage}</span>
                        )}
                      </div>
                    );
                  case 'select':
                    const { options } = field;
                    return (
                      <div key={name}>
                        <SelectInput
                          variant={
                            errors && errors[name] ? 'danger' : 'default'
                          }
                          label={title}
                          sublabel={errors && errors[name] && errorMessage}
                          size="default"
                          options={options}
                          className="bg-[#FFFFFF] h-[40px] border border-[#E6E6E6] text-gray-900 text-sm rounded-lg focus:none focus:none block w-64 p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:focus:none"
                        />
                      </div>
                    );
                  case 'date':
                    return (
                      <div key={name}>
                        <label
                          className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor={name}
                        >
                          {title}
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id={name}
                            {...register(name, {
                              required: validationProps?.required,
                            })}
                            className="bg-[#FFFFFF] h-[40px] border border-[#E6E6E6] text-gray-900 text-sm rounded-lg focus:none focus:none block w-64 p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:focus:none"
                            style={{ appearance: 'none' }} // Add inline style to remove default icon
                          />
                          {/* Icon removed */}
                        </div>
                        {errors && errors[name] && (
                          <span className="text-red-500">{errorMessage}</span>
                        )}
                      </div>
                    );
                  case 'search':
                    return (
                      <div key={name}>
                        <label
                          className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor={name}
                        >
                          {title}
                        </label>
                        <div className="common__search relative md:w-64 w-full">
                          <input
                            type="search"
                            id={name}
                            {...register(name, {
                              required: validationProps?.required,
                            })}
                            className="bg-[#FFFFFF] border h-[40px] border-[#E6E6E6] text-gray-900 text-sm rounded-lg focus:none focus:none block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:focus:none"
                          />
                          {errors && errors[name] && (
                            <span className="text-red-500">{errorMessage}</span>
                          )}
                          <span className="absolute top-[12px] cursor-pointer right-[12px]">
                            <img src={searchIcon} alt="" />
                          </span>
                        </div>
                      </div>
                    );
                  default:
                    return (
                      <div key={name}>
                        <span className="block mt-2 text-sm font-medium text-red-500 dark:text-white">
                          Invalid Field
                        </span>
                      </div>
                    );
                }
              })}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Form;
