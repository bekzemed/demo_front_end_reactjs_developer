import React from 'react';
import { Container } from '@material-ui/core';
import LeftSidebar from '../../components/left-side-bar/LeftSidebar';
import Main from '../../components/main/Main';
import RightSidebar from '../../components/right-side-bar/RightSidebar';
import { Route, useLocation } from 'react-router-dom';
import Explore from '../../components/explore/Explore';
import Setting from '../../components/settings/Setting';
import SettingRightBar from '../../components/setting-right-bar/SettingRightBar';
import Profile from '../../components/profile/Profile';

const Dashboard = () => {
  const location = useLocation();
  return (
    <>
      <Container maxWidth="lg" style={{ display: 'flex' }}>
        <LeftSidebar />
        <Route exact path="/dashboard/explore" component={Explore} />
        <Route exact path="/dashboard/setting" component={Setting} />
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard" component={Main} />
        {location.pathname === '/dashboard/setting' ? (
          <SettingRightBar />
        ) : (
          <RightSidebar />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
