import { Column } from '@/components/ui/layout/Layout';
import avatar from '../../assets/header_footer/avatar.svg';
import { ToggleButton } from '../../components/ui/ToggleButton';
import React, { useState } from 'react';

export function Permission() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = (accordionNumber: number) => {
    if (accordionNumber === 1) {
      setIsOpen1(!isOpen1);
    } else if (accordionNumber === 2) {
      setIsOpen2(!isOpen2);
    } else if (accordionNumber === 3) {
      setIsOpen3(!isOpen3);
    }
  };

  return (
    <Column
      className="h-screen w-screen flex justify-between pl-[17px] pr-[26px]"
      style={{
        width: '100%',
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="w-full bg-[#FFFFFF] rounded-2xl pt-6 pl-8 pr-6">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="w-[133px] h-[133px]">
              <img src={avatar} alt="A" />
            </div>
            <div className="ml-[21px] ">
              <p className="text-[#0A090B] font-normal text-xl mb-1">
                Guy Hawkins
              </p>
              <p className="text-[#7F7D83] font-normal text-sm mb-3.5">
                debra.holt@example.com
              </p>
              <p className="text-[#4F4D55] font-medium text-sm">
                User ID 55700223
              </p>
            </div>
          </div>
          <div className="flex items-center -mt-[100px] ">
            <div className="bg-[#CFFFDC] w-[42px] h-4 font-normal text-[10px] text-[#00810D] mr-4 rounded flex justify-center">
              Active
            </div>
            <div>
              <ToggleButton
              // className='bg-[#018CB9]'
                // variant="default"
                // label="Toggle label"
                sublabel="validation text"
                // placeholder="Enter"
                size="default"
                name="default-radio"
              />
            </div>
          </div>
        </div>

        <div className="border rounded-lg w-full mt-10">

          <div>
            <div className="border-b overflow-hidden">
              <div className="p-3 cursor-pointer">
                <div className='flex justify-between' >
                  <div className="flex items-center" onClick={() => toggleAccordion(1)}>
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        isOpen1 ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="#018CB9"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>

                    <h2 className="text-xl font-medium ml-3">Kitchenly</h2>
                  </div>
                  <div>
                    <ToggleButton
                      variant="success"
                      // label="Toggle label"
                      sublabel="validation text"
                      // placeholder="Enter"
                      size="default"
                      name="default-radio"
                    />
                  </div>
                </div>
              </div>
              {isOpen1 && (
                <div className="p-2">
                  <p>Accordion Content goes here...</p>
                </div>
              )}
            </div>
          </div>
{/* ////////////////////////////////// */}
<div>
  Table
</div>
          <div>
            <div className="border-y overflow-hidden">
              <div className="p-3 cursor-pointer">
                <div className='flex justify-between' >
                  <div className="flex items-center" onClick={() => toggleAccordion(2)}>
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      isOpen2 ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="#018CB9"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>

                  <h2 className="text-xl font-medium ml-3">Finance</h2>
                  </div>
                  <div>
                    <ToggleButton
                      variant="success"
                      // label="Toggle label"
                      sublabel="validation text"
                      // placeholder="Enter"
                      size="default"
                      name="default-radio"
                    />
                  </div>

                </div>
              </div>
              {isOpen2 && (
                <div className="p-2">
                  <p>Accordion Content goes here...</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="overflow-hidden">
              <div
                className="p-3 cursor-pointer">
                <div className='flex justify-between' >
                  <div className="flex items-center" onClick={() => toggleAccordion(3)}>
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      isOpen3 ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="#018CB9"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>

                  <h2 className="text-xl font-medium ml-3">CRM</h2>
                  </div>
                  <div>
                    <ToggleButton
                      variant="success"
                      // label="Toggle label"
                      sublabel="validation text"
                      // placeholder="Enter"
                      size="default"
                      name="default-radio"
                    />
                  </div>

                </div>
              </div>
              {isOpen3 && (
                <div className="p-2">
                  <p>Accordion Content goes here...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Column>
  );
}
