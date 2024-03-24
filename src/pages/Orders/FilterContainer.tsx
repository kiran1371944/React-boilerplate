/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Chip, ClickAwayListener, Typography } from '@mui/material';
import {
  Column,
  Row,
  SpacerColumn,
  SpacerRow,
} from '@/components/ui/layout/Layout';
import { globalEvents$ } from '@/data/EventEmitter';
import { KitchenlyEvents, ToggleFilterEvent } from '@/data/KitchenlyEvents';
import SortIcon from '../../assets/table_icons/Sort2.svg?react';
import { Button, buttonVariants } from '@/components/ui/Buttons';

import {
  Divider,
  KitchenlyDatePicker,
  Selector,
} from '@/components/ui/Components/Components';
import { Input } from '@/components/ui/input';

const filterBarChips = ['12/ 02/ 2024', 'Status', 'Driver Assigned'];

export function FilterContainer() {
  useEffect(() => {
    const subscription = globalEvents$.subscribe((event) => {
      switch (event.type) {
        case KitchenlyEvents.TOGGLE_FILTER: {
          console.log(event);
          setIsOpen((value) => !value);
          setEventData(event);
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

  const [eventData, setEventData] = useState<ToggleFilterEvent>();

  const [selectedFilters, setSelectedFilters] =
    useState<string[]>(filterBarChips);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const onClickAway = (_: MouseEvent | TouchEvent) => {
    // setIsOpen(false)
  };

  useEffect(() => {
    setSelectedFilters(filterBarChips);
  }, [eventData?.tableName]);

  useEffect(() => {
    eventData?.onFilterChanged?.(selectedFilters);
  }, [selectedFilters, eventData]);

  const onFilterDelete = (filterToDelete: string) => {
    console.log({ filterToDelete });
    setSelectedFilters(
      selectedFilters.filter((item) => item !== filterToDelete)
    );
  };

  // TODO: A function should be defined here that will rerun the filter when selectedFilters

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <motion.div
        // onClick={toggleFilter}
        initial={{ width: isOpen ? '22em' : '0em' }}
        animate={{ width: isOpen ? '22em' : '0em' }}
        transition={{ type: 'tween' }}
        style={{
          display: 'flex',
          alignSelf: 'flex-start',
          margin: '1em',
          flexDirection: 'column',
          background: 'white',
          justifyContent: 'space-between',
          overflow: 'scroll',
          scrollbarWidth: 'none',
          // minWidth: "7em",
          position: 'sticky',
          top: '8em',
          height: '80vh',
          zIndex: '1000',
          borderRadius: '15px',
        }}

        // className="h-screen w-40 rounded-tr-3xl rounded-br-3xl sticky left-0 right-auto"
      >
        <Column
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            // height: '90%',
            flex: 1,
            // padding: '1em',
          }}
        >
          <Column
            style={{
              position: 'sticky',
              top: 0,
              width: '100%',
              alignItems: 'flex-start',
              backgroundColor: 'white',
              zIndex: '1005',
            }}
          >
            <Column style={{ padding: '1em', width: '100%' }}>
              <FilterHeader
                filterItems={selectedFilters}
                close={() => {
                  setIsOpen(false);
                }}
              />
            </Column>

            <Divider bg="#E3F8FF" />
          </Column>
          <Column style={{ alignItems: 'flex-start' }}>
            <Column style={{ padding: '1em', alignItems: 'flex-start' }}>
              <Typography fontSize="14px" fontFamily="inherit">
                Applied Filters
              </Typography>
              <SpacerColumn height="1em" />

              <Row
                width="100%"
                style={{
                  flexWrap: 'wrap',
                  gap: '0.5em',
                  justifyContent: 'flex-start',
                  minWidth: '15em',
                }}
              >
                {selectedFilters.map((item) => (
                  <Chip
                    color="primary"
                    key={item}
                    label={item}
                    size="small"
                    variant="outlined"
                    onClick={() => {}}
                    onDelete={() => {
                      onFilterDelete(item);
                    }}
                  />
                ))}
                <Typography
                  fontSize="0.8em"
                  fontFamily="inherit"
                  color="#018CB9"
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Show All
                </Typography>
              </Row>
            </Column>

            <SpacerColumn height="1em" />

            <Divider bg="#E3F8FF" />
          </Column>

          <Column
            style={{
              width: '100%',
              gap: '1.5em',
              whiteSpace: 'nowrap',
              padding: '1em',
              position: 'relative',
            }}
          >
            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Order Id
              </Typography>
              <Input />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Customer Name
              </Typography>
              <Input />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Status
              </Typography>
              <Selector
                name="Select"
                options={['Pending', 'Open', 'Canceled', 'Delivered']}
              />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Item Code
              </Typography>
              <Input />
            </Column>
            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Item Name
              </Typography>
              <Input />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Price
              </Typography>
              <Input />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Order Date
              </Typography>
              <KitchenlyDatePicker initDate={new Date()} isEditable />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Delivery Date
              </Typography>
              <KitchenlyDatePicker initDate={new Date()} isEditable />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Zone
              </Typography>
              <Input />
            </Column>

            <Column style={{ alignItems: 'flex-start', width: '100%' }}>
              <Typography fontSize="0.8em" fontFamily="inherit">
                Location
              </Typography>
              <Input />
            </Column>
          </Column>
          <Column
            style={{
              width: '100%',
              height: '5em',
              position: 'sticky',
              backgroundColor: 'white',
              bottom: 0,
              zIndex: '1005',
            }}
          >
            <Divider bg="#E3F8FF" />

            <Column
              style={{
                width: '100%',
                padding: '1em',
              }}
            >
              <SpacerColumn />

              <Row
                style={{
                  justifyContent: 'flex-end',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Button
                  variant="outline"
                  className={buttonVariants({ size: 'lg', className: 'w-fit' })}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <SpacerRow />
                <Button
                  onClick={() => {
                    eventData?.onFilterApplied?.({});
                  }}
                  variant="default"
                  className={buttonVariants({ size: 'lg', className: 'w-fit' })}
                  style={{ backgroundColor: '#018CB9' }}
                >
                  Apply
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </motion.div>
    </ClickAwayListener>
  );
}

function FilterHeader({
  filterItems,
  close,
}: {
  filterItems: string[];
  close: () => void;
}) {
  return (
    <Row style={{ justifyContent: 'space-between', width: '100%' }}>
      <Row>
        <SortIcon style={{ fill: '#018CB9' }} />
        <SpacerRow />
        <Typography
          color="#018CB9"
          fontSize="0.95em"
          fontFamily="inherit"
          fontWeight={500}
        >
          {`Filters (${filterItems.length})`}
        </Typography>
      </Row>
      <X
        onClick={close}
        size={24}
        color="#4F4D55"
        style={{ cursor: 'pointer' }}
      />
    </Row>
  );
}
