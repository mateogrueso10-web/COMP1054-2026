const tabs = document.querySelectorAll('.tabs [role="tab"]');
const tabPanels = document.querySelectorAll('.tabs [role="tabpanel"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        // PREVENT page jump
        event.preventDefault();

        // Reset all tabs
        tabs.forEach((t) => {
            t.setAttribute('aria-selected', false);
            t.classList.remove('active');
        });

        // Activate clicked tab
        tab.setAttribute('aria-selected', true);
        tab.classList.add('active');
        
        // Handle Panels
        const targetId = tab.querySelector('a').getAttribute('href').substring(1);
        
        tabPanels.forEach((panel) => {
            if (panel.id === targetId) {
                panel.removeAttribute('hidden');
                panel.classList.add('active');
            } else {
                panel.setAttribute('hidden', true);
                panel.classList.remove('active');
            }
        });
    });
});