import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Siedebar';
import Dashboard from './pages/Dashboard';
import OrderList from './pages/Orders/Orders';
import OrderDetails from './pages/Orders/OrderDetails';
import CategoryPage from './pages/Category/CategoryList';
import AddCategory from './pages/Category/AddCategory';
import CustomersList from './pages/Customers/Customers';
import CustomerDetails from './pages/Customers/CustomerDetails';
import LoginPage from './pages/AdminLogin';
import AddProduct from './pages/Products/AddProduct';
import ProductList from './pages/Products/ProductList';

const App = () => {
  const location = useLocation(); // Get current route

  const isLoginPage = location.pathname === '/admin-login';

  return (
    <div style={appStyle}>
      {/* Conditionally render Sidebar and Header */}
      {!isLoginPage && <Sidebar />}
      <div style={contentStyle}>
        {!isLoginPage && <Header />}
        <div style={mainStyle}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/category-list" element={<CategoryPage />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/customers-list" element={<CustomersList />} />
            <Route path="/customers-details" element={<CustomerDetails />} />
            <Route path="/admin-login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const appStyle = {
  display: 'flex',
  height: '100vh', // Full viewport height
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1, // Allows the content section to fill the remaining space next to the sidebar
};

const mainStyle = {
  padding: '20px',
  flexGrow: 1, // Allows the main content to grow
  overflowY: 'auto', // Enables scrolling if content overflows
  backgroundColor: '#f5f5f5', // Optional: to match background
};

export default App;
