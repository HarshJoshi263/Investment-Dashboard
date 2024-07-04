import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: ${props => (props.isCollapsed ? '60px' : '250px')};
  background-color: #1b1b1b;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: width 0.3s;
`;

const ToggleButton = styled.div`
  cursor: pointer;
  color: white;
  margin-bottom: 20px;
  display: flex;
  justify-content: ${props => (props.isCollapsed ? 'center' : 'flex-start')};
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: ${props => (props.isCollapsed ? 'center' : 'space-between')};
  align-items: center;
  &:hover {
    background-color: #333;
  }
`;

const SubMenu = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  margin-left: ${props => (props.isCollapsed ? '0' : '20px')};
`;

const SubMenuItem = styled.div`
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <ToggleButton onClick={toggleSidebar} isCollapsed={isCollapsed}>
        <FaBars />
      </ToggleButton>
      <MenuContainer>
        <MenuItem isCollapsed={isCollapsed}>Dashboard</MenuItem>
        <MenuItem isCollapsed={isCollapsed}>Research</MenuItem>
        <MenuItem isCollapsed={isCollapsed}>Hierarchy</MenuItem>
        <MenuItem isCollapsed={isCollapsed}>Clients</MenuItem>
        <MenuItem isCollapsed={isCollapsed}>Analysts</MenuItem>
        <MenuItem onClick={toggleSettings} isCollapsed={isCollapsed}>
          <span>Settings</span>
          {!isCollapsed && <span>{isSettingsOpen ? '-' : '+'}</span>}
        </MenuItem>
        <SubMenu isOpen={isSettingsOpen} isCollapsed={isCollapsed}>
          <SubMenuItem>Manage Branch</SubMenuItem>
          <SubMenuItem>Manage User</SubMenuItem>
          <SubMenuItem>Add Category</SubMenuItem>
        </SubMenu>
        <MenuItem isCollapsed={isCollapsed}>Help</MenuItem>
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
