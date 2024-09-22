document.querySelector('.menu-toggle').addEventListener('click', function() {
  const menuItems = document.querySelector('.menu-items');
  menuItems.classList.toggle('show'); // Adiciona ou remove a classe "show"
});