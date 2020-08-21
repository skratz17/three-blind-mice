export const Employee = employee => {
  const { id, firstName, lastName, age, computer, department, location } = employee;

  return `
    <section id="employee--${id}" class="employee card">
      <div class="card__content-group">
        <p class="employee__name">
          <span class="employee__firstName">${firstName}</span> <span class="employee__lastName">${lastName}</span>
        </p>
        <p class="employee__age">
          ${age}
        </p>
      </div>
      <div class="card__content-group">
        <p class="card__label">Computer</p>
        <p class="computer__info">${computer.model} (${computer.year})</p>
      </div>
      <div class="card__content-group">
        <p class="card__label">Department</p>
        <p class="department__info">${department.name}</p>
      </div>
      <div class="card__content-group">
        <p class="card__label">Location</p>
        <p class="location__info">${location.name}</p>
      </div>
    </section>
  `;
};