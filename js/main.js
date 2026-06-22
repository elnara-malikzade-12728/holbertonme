document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
  const navbar = document.getElementById('navbarResponsive');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const collapse = bootstrap.Collapse.getInstance(navbar);

      if (collapse) {
        collapse.hide();
      }
    });
  });
});