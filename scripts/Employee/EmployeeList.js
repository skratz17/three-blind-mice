import { getEmployees, useEmployees } from './EmployeeProvider.js';
import { Employee } from './Employee.js';

const contentTarget = document.querySelector('.employee-list-container');

let employees = [];

export const EmployeeList = () => {
  getEmployees()
    .then(() => {
      employees = useEmployees();
      render();
    });
};

const render = () => {
  contentTarget.innerHTML = `
    <article class="employee-list">
      ${ employees.map(Employee).join('') }
    </article>
  `;
};