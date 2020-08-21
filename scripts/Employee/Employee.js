export const Employee = employee => {
  const { id, firstName, lastName, age } = employee;

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
    </section>
  `;
};