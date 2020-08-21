let computers = [];

export const useComputers = () => computers.slice();

export const getComputers = () => {
  return fetch('http://localhost:8088/computers')
    .then(res => res.json())
    .then(computerData => computers = computerData);
};