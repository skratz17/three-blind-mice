import { getEmployees, useEmployees } from './EmployeeProvider.js';
import { getComputers, useComputers } from '../Computer/ComputerProvider.js';
import { getDepartments, useDepartments } from '../Department/DepartmentProvider.js';
import { getLocations, useLocations } from '../Location/LocationProvider.js';
import { getCustomers, useCustomers } from '../Customer/CustomerProvider.js';
import { getEmployeeCustomers, useEmployeeCustomers } from '../Customer/EmployeeCustomerProvider.js';
import { Employee } from './Employee.js';

const contentTarget = document.querySelector('.employee-list-container');

let employees = [];
let computers = [];
let departments = [];
let locations = [];
let customers = [];
let employeeCustomers = [];

export const EmployeeList = () => {
  Promise.all([getEmployees(), getComputers(), getDepartments(), getLocations(), getCustomers(), getEmployeeCustomers() ])
    .then(() => {
      employees = useEmployees();
      computers = useComputers();
      departments = useDepartments();
      locations = useLocations();
      customers = useCustomers();
      employeeCustomers = useEmployeeCustomers();
      render();
    });
};

const render = () => {
  attachComputersToEmployees();
  attachDepartmentsToEmployees();
  attachLocationsToEmployees();
  attachCustomersToEmployees();

  contentTarget.innerHTML = `
    <article class="employee-list">
      ${ employees.map(Employee).join('') }
    </article>
  `;
};

const attachComputersToEmployees = () => {
  employees.forEach(employee => {
    employee.computer = computers.find(computer => computer.id === employee.computerId)
  });
};

const attachDepartmentsToEmployees = () => {
  employees.forEach(employee => {
    employee.department = departments.find(department => department.id === employee.departmentId)
  });
};

const attachLocationsToEmployees = () => {
  employees.forEach(employee => {
    employee.location = locations.find(location => location.id === employee.locationId)
  });
};

const attachCustomersToEmployees = () => {
  employees.forEach(employee => {
    employee.customers = employeeCustomers
      .filter(employeeCustomer => employeeCustomer.employeeId === employee.id)
      .map(employeeCustomer => customers.find(customer => customer.id === employeeCustomer.customerId));
  });
};