document.addEventListener("DOMContentLoaded", function() {
    const languageChooser = document.querySelector('.language-chooser');
    const languageDropdownToggle = languageChooser ? languageChooser.querySelector('.language-dropdown-toggle') : null;
    const languageDropdown = languageChooser ? languageChooser.querySelector('.language-dropdown') : null;

    if (languageDropdownToggle && languageDropdown) {
        languageDropdownToggle.addEventListener('click', () => {
            languageDropdown.classList.toggle('open');
            const isExpanded = languageDropdown.classList.contains('open');
            languageDropdownToggle.setAttribute('aria-expanded', isExpanded);
            languageDropdown.setAttribute('aria-hidden', !isExpanded);
        });

        languageDropdown.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const newLanguage = event.target.textContent.split('(')[0].trim();
                switchLanguage(newLanguage);
                languageDropdown.classList.remove('open');
            }
        });
    }
});



