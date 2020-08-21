export const Customer = customer => {
  const { id, name, employees } = customer;

  return `
    <section id="customer--${id}" class="customer card">
      <div class="card__content-group">
        <p class="customer__name">${name}</p>
      </div>
      <div class="card__content-group">
        <p class="card__label">Employees</p>
        <ul class="employee-list">
          ${ employees.map(e => `<li>${e.firstName} ${e.lastName}</li>`).join('') }
        </ul>
      </div>
    </section>
  `;
};