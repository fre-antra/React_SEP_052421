import React from "react";
import "./Layout.css";
// css import order matters!!! nornmally before your components which can be over
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

export default function Layout({ children }) {
  return (
    <div>
      <AppHeader></AppHeader>
      {children}
      <AppFooter></AppFooter>
    </div>
  );
}
