let employeeCustomers = [];

export const useEmployeeCustomers = () => employeeCustomers.slice();

export const getEmployeeCustomers = () => {
  if(employeeCustomers.length) return Promise.resolve();
  return fetch('http://localhost:8088/employeeCustomers')
    .then(res => res.json())
    .then(employeeCustomerData => employeeCustomers = employeeCustomerData);
};