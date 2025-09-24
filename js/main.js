// Reference link: https://www.youtube.com/watch?v=U8smiWQ8Seg
// Used ChatGPT 5 to debug errors after implementing ES6 module.

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.menu-button');
    const closeBtn = document.querySelector('.close-sidebar');
  
    if (openBtn) openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSidebar();
    });
  
    if (closeBtn) closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hideSidebar();
    });
  });