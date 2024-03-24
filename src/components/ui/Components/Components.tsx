/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import { closeEditor } from 'ka-table/actionCreators';
import { DispatchFunc } from 'ka-table/types';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { supervisors } from '../Tables/WarehouseTableData';

export function KitchenlyCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

interface CustomCalendarEditorProps {
  column: any;
  rowKeyValue: any;
  dispatch: DispatchFunc;
  value: Date;
}

export const CustomCalendarEditor: React.FC<CustomCalendarEditorProps> = ({
  column,
  dispatch,
  rowKeyValue,
  value,
}) => {
  const close = () => {
    dispatch(closeEditor(rowKeyValue, column.key));
  };
  const [editorValue, setValue] = useState(value);
  return <KitchenlyCalendar />;
};

export function KitchenlyDatePicker({
  initDate,
  isEditable = true,
  onValueChange,
}: {
  initDate: Date;
  isEditable: boolean;
  onValueChange?: (newValue: any) => void;
}) {
  const [date, setDate] = React.useState<Date>(initDate);

  useEffect(() => {
    onValueChange?.(date);
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          className={cn(
            'flex justify-between text-left font-normal',

            !date && 'text-muted-foreground'
          )}
        >
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
          <CalendarIcon
            className="mr-2 h-4 w-4"
            style={{ marginLeft: '0.5em' }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          // TODO
          onSelect={(selectedDate?: Date) => {
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

type SelectorComponentProps = {
  name: string;
  options: string[];
  onValueChange?: (newValue: string) => void;
};

export function Selector({
  name,
  options,
  onValueChange,
}: SelectorComponentProps) {
  const [placeholder, setPlaceholder] = useState(name);

  // function onValueChangedInternal(newValue: string){
  //   onValueChanged(newValue)
  //   setPlaceholder(newValue)
  // }

  useEffect(() => {
    // onValueChange?.(placeholder)
  }, [placeholder]);

  return (
    <Select onValueChange={setPlaceholder}>
      <SelectTrigger style={{ width: '100%' }}>
        <SelectValue placeholder={name} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

type DividerProps = {
  height?: string;
  width?: string;
  bg?: string;
};

export function Divider({ height, width, bg }: DividerProps) {
  return (
    <div
      style={{
        backgroundColor: bg ?? 'gray',
        width: width ?? '100%',
        height: height ?? '1px',
      }}
    />
  );
}

type ComboboxComponentProps = {
  initValue: string;
  initLabel: string;
  searchPlaceholder: string;
};

export function ComboboxComponent({
  initValue,
  searchPlaceholder,
  initLabel,
}: ComboboxComponentProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(initValue);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ?? initLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>No items found.</CommandEmpty>
          <CommandGroup>
            {supervisors.map((item) => (
              <CommandItem
                key={item}
                value={item}
                onSelect={(currentValue: React.SetStateAction<string>) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === item ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
