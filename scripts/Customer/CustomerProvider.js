let customers = [];

export const useCustomers = () => customers.slice();

export const getCustomers = () => {
  if(customers.length) return Promise.resolve();
  return fetch('http://localhost:8088/customers')
    .then(res => res.json())
    .then(customerData => customers = customerData);
};