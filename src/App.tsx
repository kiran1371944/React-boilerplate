/* eslint-disable react/jsx-no-bind */
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Button from './pages/Button';
import Colours from './pages/Colors';
import Inputs from './pages/Inputs';
import Tables from './components/ui/Tables/Tables';
import ImageUpload from './components/ui/commonUpload/ImageUpload';
import { AdminPanel, OrdersPage } from './pages/Orders/Main';
// import SignIn from './pages/authpages/SignIn';
import FormComponent from './pages/Form';
import { DashboardPage } from './pages/Dashboard';
import { AppointmentsPage } from './pages/Appointments';
import { CustomersPage } from './pages/Customers';
import { DeliveryPage } from './pages/Delivery';
import { EcommercePage } from './pages/Ecommerce';
import { MealsAndPlansPage } from './pages/MealsPlans';
import { OperationsPage } from './pages/Operations';
import { ReportsPage } from './pages/Reports';
import { SalesPage } from './pages/Sales';
import { Permission } from './pages/Permissions';
// import { SelectInput } from './components/ui/SelectField/Select';
import ProfileDropdown from './components/ui/Profile';
import { InventoryPage } from './pages/Operations/Inventory';
import { PackingPage } from './pages/Operations/Packing';
import { DispatchingPage } from './pages/Operations/Dispatching';
import { ProductionPage } from './pages/Operations/Production';
import { WarehousePage } from './pages/Operations/Warehouse';
import { UserPage } from './pages/User';
import { SettingsPage } from './pages/Settings';
import FilterForm from './components/ui/FilterForm';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/buttons" element={<Button />} />
      <Route path="/inputs" element={<Inputs />} />
      <Route path="/colours" element={<Colours />} />
      <Route path="/table" element={<Tables />} />
      <Route path="/admin" element={<AdminPanel />}>
        <Route index element={<OrdersPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="appointments" element={<AppointmentsPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="ecommerce" element={<EcommercePage />} />
        <Route path="mealsplans" element={<MealsAndPlansPage />} />
        <Route path="operations" element={<OperationsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="permission" element={<Permission />} />

        {/* Operations Routes */}
        <Route path="operations/inventory" element={<InventoryPage />} />
        <Route path="operations/packing" element={<PackingPage />} />
        <Route path="operations/dispatching" element={<DispatchingPage />} />
        <Route path="operations/delivery" element={<DeliveryPage />} />
        <Route path="operations/production" element={<ProductionPage />} />
        <Route path="operations/warehouse" element={<WarehousePage />} />

        <Route path="account" element={<UserPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route
        path="/imageUpload"
        element={
          <ImageUpload
            onUpload={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        }
      />
      {/* <Route path="/signin" element={<SignIn />} /> */}
      <Route path="/form" element={<FormComponent />} />
      <Route path="/profile" element={<ProfileDropdown />} />
      <Route path="/filter" element={<FilterForm />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
