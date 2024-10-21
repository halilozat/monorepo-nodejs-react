import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useSnackbarService from '../hooks/useSnackbarService';
import NotFound404 from '../pages/NotFound404';
import Root from '../pages/Root';
import Home from '../pages/Home';


function Navigation() {
  useSnackbarService();

  return (
    <BrowserRouter>
      <Routes>
        {/* root routes */}
        <Route path="/" element={<Root />}>
            <Route path="users" element={<Customers />} />
            <Route path="user-details" element={<CustomerDetails />}>
                <Route index element={<CustomerDetailWizard />} />
                <Route path=":userId" element={<CustomerDetailWizard />} />
            </Route>
        </Route>

        {/* other routs */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
