import { getEmployees, useEmployees } from '../Employee/EmployeeProvider.js';
import { getCustomers, useCustomers } from './CustomerProvider.js';
import { getEmployeeCustomers, useEmployeeCustomers } from './EmployeeCustomerProvider.js';
import { Customer } from './Customer.js';

const contentTarget = document.querySelector('.customer-list-container');

let customers = [];
let employees = [];
let employeeCustomers = [];

export const CustomerList = () => {
  Promise.all([ getEmployees(), getCustomers(), getEmployeeCustomers() ])
    .then(() => {
      customers = useCustomers();
      employees = useEmployees();
      employeeCustomers = useEmployeeCustomers();
      render();
    })
};

const render = () => {
  attachEmployeesToCustomers();

  contentTarget.innerHTML = `
    <article class="customer-list">
      ${ customers.map(Customer).join('') }
    </article>
  `;
};

const attachEmployeesToCustomers = () => {
  customers.forEach(c => {
    c.employees = employeeCustomers
      .filter(eC => eC.customerId === c.id)
      .map(eC => employees.find(e => e.id === eC.employeeId));
  });
};