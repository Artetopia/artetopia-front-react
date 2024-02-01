import UserDeliveryCart from "../../components/user_delivery_cart";
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./styles.scss"

const UserAllDeliveries = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (month) => {
    setSelectedMonth(month);
    // You can add your logic here for handling the selected month
  };

  return (
    <>
    <div className="p-5">
    <div className="d-flex justify-content-between p-3">
      <h3>Mis Pedidos</h3>
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>
        {selectedMonth ? `${selectedMonth} months` : 'Select Months'}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleSelect(3)}>3 months</DropdownItem>
        <DropdownItem onClick={() => handleSelect(6)}>6 months</DropdownItem>
        <DropdownItem onClick={() => handleSelect(9)}>9 months</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
    <div className="d-flex justify-content-center flex-wrap gap-5">
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    </div>
    </div>
    </>
  )
}
export default UserAllDeliveries