import { BreadcrumbsState, CurrentPageState } from '@/data/NavigationState';

// export const useKitchenlyNavigate = (): NavigateFunction => {
//   const navigate = useNavigate();

//   const currentPage = useCurrentPageStore();

//   function customNavigate(to: To, options?: NavigateOptions | undefined) {
//     switch (to) {
//       case '/admin/dashboard':
//         currentPage.set('Dashboard');
//         break;
//       case '/admin':
//         currentPage.set('Orders');
//         break;
//       case '/admin/customers':
//         currentPage.set('Customers');
//         break;
//       case '/admin/operations':
//         currentPage.set('Operations');
//         break;
//       case '/admin/mealsplans':
//         currentPage.set('Meals Plans');
//         break;
//       case '/admin/appointments':
//         currentPage.set('Appointments');
//         break;
//       case '/admin/sales':
//         currentPage.set('Sales');
//         break;
//       case '/admin/ecommerce':
//         currentPage.set('E-Commerce');
//         break;
//       case '/admin/delivery':
//         currentPage.set('Delivery');
//         break;
//       case '/admin/reports':
//         currentPage.set('Reports');
//         break;
//       default:
//         currentPage.set('Kitchenly');
//         break;
//     }
//     navigate(to, options);
//   }

//   // @ts-ignore
//   return customNavigate;
// };

export function changeGlobalPageLabel(
  location: string,
  currentPageState: CurrentPageState
) {
  switch (location) {
    case '/admin/dashboard':
      currentPageState.set('Dashboard');
      break;
    case '/admin':
      currentPageState.set('Orders');
      break;
    case '/admin/customers':
      currentPageState.set('Customers');
      break;
    case '/admin/operations':
      currentPageState.set('Operations');
      break;
    case '/admin/mealsplans':
      currentPageState.set('Meals Plans');
      break;
    case '/admin/appointments':
      currentPageState.set('Appointments');
      break;
    case '/admin/sales':
      currentPageState.set('Sales');
      break;
    case '/admin/ecommerce':
      currentPageState.set('E-Commerce');
      break;
    case '/admin/delivery':
      currentPageState.set('Delivery');
      break;
    case '/admin/reports':
      currentPageState.set('Reports');
      break;
    case '/admin/operations/warehouse':
      currentPageState.set('Warehouse');
      break;
    case '/admin/operations/inventory':
      currentPageState.set('Inventory');
      break;
    case '/admin/operations/production':
      currentPageState.set('Production');
      break;
    case '/admin/operations/packing':
      currentPageState.set('Packing');
      break;
    case '/admin/operations/dispatching':
      currentPageState.set('Dispatching');
      break;
    case '/admin/operations/delivery':
      currentPageState.set('Delivery');
      break;

    default:
      currentPageState.set('Kitchenly');
      break;
  }
}

export function changeBreadcrumbs(
  location: string,
  breadcrumbsState: BreadcrumbsState
) {
  switch (location) {
    case '/admin/dashboard':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Dashboard', path: '/admin/dashboard' },
      ]);
      break;
    case '/admin':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Orders', path: '/admin' },
        { label: 'Subscriptions', path: '/admin' },
      ]);
      break;
    case '/admin/customers':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Customers', path: '/admin/customers' },
      ]);
      break;
    case '/admin/operations':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Operations', path: '/admin/operations' },
      ]);
      break;
    case '/admin/mealsplans':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Meals Plans', path: '/admin/mealsplans' },
      ]);
      break;
    case '/admin/appointments':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Appointments', path: '/admin/appointments' },
      ]);
      break;
    case '/admin/sales':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Sales', path: '/admin/sales' },
      ]);
      break;
    case '/admin/ecommerce':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'E-Commerce', path: '/admin/ecommerce' },
      ]);
      break;
    case '/admin/delivery':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Delivery', path: '/admin/delivery' },
      ]);
      break;
    case '/admin/reports':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Reports', path: '/admin/reports' },
      ]);
      break;
    case '/admin/operations/warehouse':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Operations', path: '/admin/operations' },
        { label: 'Warehouse', path: '/admin/operations/warehouse' },
      ]);
      break;
    case '/admin/operations/inventory':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Operations', path: '/admin/operations' },
        { label: 'Inventory', path: '/admin/operations/inventory' },
      ]);
      break;
    case '/admin/operations/production':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Operations', path: '/admin/operations' },
        { label: 'Production', path: '/admin/operations/production' },
      ]);
      break;
    case '/admin/operations/packing':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Operations', path: '/admin/operations' },
        { label: 'Packing', path: '/admin/operations/packing' },
      ]);
      break;
    case '/admin/operations/dispatching':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Operations', path: '/admin/operations' },
        { label: 'Dispatching', path: '/admin/operations/dispatching' },
      ]);
      break;
    case '/admin/operations/delivery':
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Operations', path: '/admin/operations' },
        { label: 'Delivery', path: '/admin/operations/delivery' },
      ]);
      break;
    default:
      breadcrumbsState.set([
        { label: 'Kitchenly', path: '/' },
        { label: 'Dashboard', path: '/admin/dashboard' },
      ]);
      break;
  }
}
