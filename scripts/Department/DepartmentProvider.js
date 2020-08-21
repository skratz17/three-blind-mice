let departments = [];

export const useDepartments = () => departments.slice();

export const getDepartments = () => {
  return fetch('http://localhost:8088/departments')
    .then(res => res.json())
    .then(departmentData => departments = departmentData);
};