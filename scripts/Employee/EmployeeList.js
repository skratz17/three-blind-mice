import { getEmployees, useEmployees } from './EmployeeProvider.js';
import { getComputers, useComputers } from '../Computer/ComputerProvider.js';
import { getDepartments, useDepartments } from '../Department/DepartmentProvider.js';
import { Employee } from './Employee.js';

const contentTarget = document.querySelector('.employee-list-container');

let employees = [];
let computers = [];
let departments = [];

export const EmployeeList = () => {
  Promise.all([getEmployees(), getComputers(), getDepartments()])
    .then(() => {
      employees = useEmployees();
      computers = useComputers();
      departments = useDepartments();
      render();
    });
};

const render = () => {
  attachComputersToEmployees();
  attachDepartmentsToEmployees();

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