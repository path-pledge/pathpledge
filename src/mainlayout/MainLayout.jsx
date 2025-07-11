import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopupForm from '../components/PopupForm';


const MainLayout = () => {
  return (
    <>
    <PopupForm />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
