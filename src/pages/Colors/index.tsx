/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-promise-executor-return */
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Colours() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Colours</title>
      </Helmet>

      <div className="container mx-auto my-10">
        <Link to="/">
          <h1 className="mb-2 text-l link text-gray-900 dark:text-gray-400">
            Home
          </h1>
        </Link>
        <h1 className="mb-10 text-3xl font-bold text-gray-900 dark:text-gray-900">
          Colours
        </h1>
        <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-50 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-50
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-100 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-100
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-200 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-200
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-300 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-300
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-400 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-400
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-500 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-500
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-600 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-600
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-700 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-700
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-800 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-800
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
            <div className="h-10 w-10 bg-cocogreen-900 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-20">
              {' '}
            </div>
            <div className="px-0.5">
              <div className="w-30 font-medium text-xs text-slate-900 2xl:w-full ">
                cocogreen-900
              </div>
              <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                #f8fafc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colours;
