import React from "react";
import {Redirect} from "react-router-dom";
// Layout Types
import {DefaultLayout} from "./layouts";
// Route Views
import Dashboard from "./views/Dashboard";
import UserProfileLite from "./views/UserProfileLite";
import Product from "./views/product/Product";
import Order from "./views/order/Order";
import Users from "./views/users/Users";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import AddProduct from "./views/product/AddProduct";
import Category from "./views/category/Category";
import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard"/>
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/add-product/:data",
    layout: DefaultLayout,
    component: AddProduct
  },
  {
    path: "/category",
    layout: DefaultLayout,
    component: Category
  }, {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/product",
    layout: DefaultLayout,
    component: Product
  }, {
    path: "/order",
    layout: DefaultLayout,
    component: Order
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
