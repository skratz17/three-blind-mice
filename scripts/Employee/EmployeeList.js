import { getEmployees, useEmployees } from './EmployeeProvider.js';
import { getComputers, useComputers } from '../Computer/ComputerProvider.js';
import { getDepartments, useDepartments } from '../Department/DepartmentProvider.js';
import { getLocations, useLocations } from '../Location/LocationProvider.js';
import { Employee } from './Employee.js';

const contentTarget = document.querySelector('.employee-list-container');

let employees = [];
let computers = [];
let departments = [];
let locations = [];

export const EmployeeList = () => {
  Promise.all([getEmployees(), getComputers(), getDepartments(), getLocations()])
    .then(() => {
      employees = useEmployees();
      computers = useComputers();
      departments = useDepartments();
      locations = useLocations();
      render();
    });
};

const render = () => {
  attachComputersToEmployees();
  attachDepartmentsToEmployees();
  attachLocationsToEmployees();

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