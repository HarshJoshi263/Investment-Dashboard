import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
// import image  from '../public/filterIcon.png';
import { style } from 'jade/lib/runtime';

const MainContentContainer = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  margin-top: 2rem;
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  margin-right: 10px;

  &:hover {
    color: #0056b3;
  }
`;

const EditModalContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0 0 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Para = styled.p`
  padding: 1.5rem 0 0 0;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: #20C997
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const InputSearch = styled.input`
  padding: 10px;
  margin: 5px 10px 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 20%;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

Modal.setAppElement('#root');

const MainContent = () => {
  const [data, setData] = useState([
    { id: 1, segment: 'Equity', type: 'Cash', category: 'Call of the Day', leg1: '1 Day, 3 hours 20 mins', leg2: '1 Day, 6 hours 10 mins' },
    { id: 2, segment: 'Equity', type: 'Cash', category: 'Call of the Day', leg1: '1 Day, 3 hours 20 mins', leg2: '1 Day, 6 hours 10 mins' },
    { id: 3, segment: 'Equity', type: 'Derivative', category: 'Futures & Options', leg1: '2 Days, 2 hours 15 mins', leg2: '2 Days, 5 hours 50 mins' },
    { id: 4, segment: 'Commodity', type: 'Future', category: 'Futures & Options', leg1: '3 Days, 1 hour 10 mins', leg2: '3 Days, 4 hours 45 mins' },
    { id: 5, segment: 'Currency', type: 'Derivative', category: 'Cash', leg1: '1 Day, 4 hours 5 mins', leg2: '1 Day, 7 hours 30 mins' },
    { id: 6, segment: 'Equity', type: 'Option', category: 'Strategy Session', leg1: '2 Days, 3 hours 25 mins', leg2: '2 Days, 6 hours 40 mins' },
    { id: 7, segment: 'Commodity', type: 'Cash', category: 'Monthly Analysis', leg1: '4 Days, 2 hours 20 mins', leg2: '4 Days, 5 hours 55 mins' },
    { id: 8, segment: 'Currency', type: 'Future', category: 'Economic Calendar', leg1: '3 Days, 1 hour 30 mins', leg2: '3 Days, 4 hours 15 mins' },
  ]);

  const [filters, setFilters] = useState({
    category: '',
  });

  const ModalImage = styled.img`
  width: 10%;
  max-width: 400px; 
  height: auto;
  margin-top: 10px;
`;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [newCategory, setNewCategory] = useState('');

  const openModal = (row) => {
    setEditData(row);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setIsModalOpen(true);
    setEditData(null); // Reset editData for adding new category
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditData(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = () => {
    if (editData) {
      // Edit existing data
      setData((prevData) =>
        prevData.map((row) => (row.id === editData.id ? editData : row))
      );
    } else {
      // Add new category
      const newId = data.length + 1;
      const newData = {
        id: newId,
        segment: '',
        type: '',
        category: newCategory,
        leg1: '',
        leg2: '',
      };
      setData([...data, newData]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredData = data.filter((row) =>
    Object.keys(filters).every((key) =>
      filters[key] === '' ? true : row[key].toLowerCase().includes(filters[key].toLowerCase())
    )
  );

  return (
    <MainContentContainer>
      <SearchContainer>
        <h2>Category Listing: </h2>
        <div>
        
          
          <Button onClick={openAddModal}>+ Add Category</Button>
        </div>
      </SearchContainer>
      <div>
        <Label htmlFor="category">Name</Label>
            <InputSearch
              type="text"
              id="category"
              name="Name"
              value={filters.category}
              onChange={handleFilterChange}
              placeholder="Search by Category"
            />
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>No</TableHeader>
            <TableHeader>Segment</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Category Name</TableHeader>
            <TableHeader>Leg 1 Tracking</TableHeader>
            <TableHeader>Leg 2 Tracking</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {filteredData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.segment}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.leg1}</TableCell>
              <TableCell>{row.leg2}</TableCell>
              <TableCell>
                <ActionButton onClick={() => openModal(row)}>
                  <FaEdit />
                </ActionButton>
                <ActionButton onClick={() => handleDelete(row.id)}>
                  <FaTrash />
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={editData ? 'Edit Row' : 'Add New Category'}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
          },
        }}
      >
        <EditModalContent>
          <h3>{editData ? 'Edit Details:' : 'Add New Category:'}</h3>
          {!editData && (
            <div>
              <Label htmlFor="newCategory">New Category Name:</Label>
              <Input
                name="newCategory"
                value={newCategory}
                onChange={handleNewCategoryChange}
                placeholder="Enter New Category"
              />
            </div>
          )}
          <Para>Segment</Para>
          <Input
            name="segment"
            value={editData ? editData.segment : ''}
            onChange={handleInputChange}
            placeholder="Segment"
          />
          <Para>Type</Para>
          <Input
            name="type"
            value={editData ? editData.type : ''}
            onChange={handleInputChange}
            placeholder="Type"
          />
          <Para>Category Name</Para>
          <Input
            name="category"
            value={editData ? editData.category : newCategory}
            onChange={handleInputChange}
            placeholder="Category Name"
          />
          <Para>Leg 1 Tracking</Para>
          <Input
            name="leg1"
            value={editData ? editData.leg1 : ''}
            onChange={handleInputChange}
            placeholder="Leg 1 Tracking"
          />
          <Para>Leg 2 Tracking</Para>
          <Input
            name="leg2"
            value={editData ? editData.leg2 : ''}
            onChange={handleInputChange}
            placeholder="Leg 2 Tracking"
          />
          <ButtonContainer>
            <Button onClick={closeModal}>Cancel</Button>
            <Button primary onClick={handleSubmit}>
              {editData ? 'Submit' : 'Add Category'}
            </Button>
          </ButtonContainer>
        </EditModalContent>
      </Modal>
    </MainContentContainer>
  );
};

export default MainContent;
