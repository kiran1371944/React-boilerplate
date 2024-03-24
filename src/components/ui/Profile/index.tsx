/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import avatar from '../../../../public/images/avatar2.png';
import fileIcon from '../../../../public/images/dropdownFileIcon.svg';
import subscriptionIcon from '../../../../public/images/subscriptionIcon.svg';
import UsersIcon from '../../../../public/images/UsersIcon.svg';
import LogoutIcon from '../../../../public/images/LogoutIcon.svg';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  return (
    <div className="flex justify-center items-center">
      <Menu as="div" className="relative inline-block text-left mt-10">
        <div>
          <Menu.Button className="w-10 h-10 rounded-full">
            <img src={avatar} alt="user profile" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 md:w-[340px] w-80 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y">
            <div className=" text-gray-900 p-6 dark:text-white flex items-center">
              <img src={avatar} className="w-14 h-14" alt="" />
              <div className="py-[10.5px] px-2">
                <div className="font-medium text-lg">Sarah John</div>
                <div className="truncate text-sm font-normal">
                  admin@example.com
                </div>
              </div>
            </div>
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'py-1 px-6 text-lg font-medium flex'
                    )}
                  >
                    <img src={fileIcon} alt="" />
                    <p className="py-3 px-3">Billing History</p>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'py-1 px-6 text-lg font-medium flex'
                    )}
                  >
                    <img src={subscriptionIcon} alt="" />
                    <p className="py-3 px-3">Subscription</p>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'py-1 px-6 text-lg font-medium flex'
                    )}
                  >
                    <img src={UsersIcon} alt="" />
                    <p className="py-3 px-3">Users</p>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'py-1 px-6 text-lg font-medium flex'
                    )}
                  >
                    <img src={LogoutIcon} alt="" />
                    <p className="py-3 px-3">Logout</p>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
