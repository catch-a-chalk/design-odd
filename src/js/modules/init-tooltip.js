export const initTooltip = () => {
const tooltips = document.getElementsByClassName("form__stages-tooltip");

for (let i = 0; i < tooltips.length; i++) {
  const tooltip = tooltips[i];

  if (tooltip.textContent === "") {
    tooltip.style.display = "none";
  }
}
}
