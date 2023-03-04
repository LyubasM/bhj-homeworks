const tooltipHref = Array.from(document.querySelectorAll('a.has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

const showTooltip = function(e) {
    e.preventDefault();
    if (tooltipHref.includes(e.target)) {
            if (e.target.querySelector('.tooltip_active')) {
                tooltip.classList.remove('tooltip_active');
                return;
            }
        let coordinates = e.target.getBoundingClientRect();
        tooltip.classList.add('tooltip_active');
        tooltip.textContent = e.target.title;
        tooltip.style.top = coordinates.y + coordinates.height + 'px';
        tooltip.style.left = coordinates.x + 'px';
        e.target.appendChild(tooltip);
    } else if (tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.remove('tooltip_active');
    }
}

document.addEventListener('click', showTooltip)