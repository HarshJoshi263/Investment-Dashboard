import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const TopBar = () => (
      <TopBarContainer>
            <MenuContainer>
                  <MenuItem>Dashboard</MenuItem>
                  <MenuItem>Research</MenuItem>
                  <MenuItem>Hierarchy</MenuItem>
                  <MenuItem>Clients</MenuItem>
                  <MenuItem>Analysts</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Help</MenuItem>
            </MenuContainer>
            <SearchContainer>
                  <FaSearch />
                  <SearchInput type="text" placeholder="Search..." />
            </SearchContainer>
            <IconsContainer>
                  <IconWrapper>
                        <FaBell />
                  </IconWrapper>
                  <IconWrapper>
                        <FaUserCircle />
                  </IconWrapper>
            </IconsContainer>
      </TopBarContainer>
);

export default TopBar;