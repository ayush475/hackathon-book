

import DashboardSidebar from "./dashboardSidebar";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OverView from "./overview";
import Users from "./users";
import Products from "./products";
import Orders from "./orders";
import CreateProduct from "./createProduct";
import UserAdminDetails from "./userAdminDetails";
import ProductAdminDetails from "./productAdminDetials";
import OrderAdminDetails from "./orderAdminDetails";
import Stock from "./stock";
import Sales from "./sales";
import Notification from "./notification";
import Inbox from "./inbox";







function Dashboard() {





  return (  
    <div className=" flex">
      <div className="h-screen sticky  top-10 lg:top-20 " >
      <DashboardSidebar/>
      </div>
    
     
      <div className="w-full dark:bg-gray-700">
      <Routes>
     
        <Route exact path="CreateProduct" element={<CreateProduct/>}></Route>
        <Route exact path="Users" element={<Users/>}></Route> 
        <Route exact path="User/123" element={<UserAdminDetails/>}></Route>
        <Route exact path="Product/123" element={<ProductAdminDetails/>}></Route>
        <Route exact path="Order/123" element={<OrderAdminDetails/>}></Route>
        <Route exact path="Products" element={<Products/>}></Route>
        <Route exact path="Orders" element={<Orders/>}></Route>
        <Route exact path="Stock" element={<Stock/>}></Route>
        <Route exact path="Sales" element={<Sales/>}></Route>
        <Route exact path="Notification" element={<Notification/>}></Route>
        <Route exact path="Inbox" element={<Inbox/>}></Route>
        <Route exact path="/" element={<OverView/>}></Route>
      </Routes>
      </div>
     
    </div>
  );
}

export default Dashboard;
