import { getEmployees, useEmployees } from './EmployeeProvider.js';
import { getComputers, useComputers } from '../Computer/ComputerProvider.js';
import { Employee } from './Employee.js';

const contentTarget = document.querySelector('.employee-list-container');

let employees = [];
let computers = [];

export const EmployeeList = () => {
  Promise.all([getEmployees(), getComputers()])
    .then(() => {
      employees = useEmployees();
      computers = useComputers();
      render();
    });
};

const render = () => {
  attachComputersToEmployees();

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