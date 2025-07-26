import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopupForm from '../components/PopupForm';
import HeaderCTA from '../components/HeaderCTA';


const MainLayout = () => {
  return (
    <>
    <PopupForm />
    <HeaderCTA />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
