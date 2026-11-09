document.querySelectorAll('.scale-rating').forEach(function (group) {
    const labels = Array.from(group.querySelectorAll('label'));

    group.addEventListener('change', function () {
        // индекс выбранного label
        const checked = group.querySelector('input:checked');
        if (!checked) return;
        const selectedIndex = labels.findIndex(function (lbl) {
            return lbl.contains(checked);
        });

        // крашу все до выбранного включительно
        labels.forEach(function (lbl, i) {
            lbl.classList.toggle('active', i <= selectedIndex);
        });
    });
});