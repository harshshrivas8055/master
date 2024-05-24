const modules = document.querySelectorAll('.module');

modules.forEach(module => {
  module.addEventListener('mouseenter', () => {
    module.style.backgroundColor = '#ddd';
  });

  module.addEventListener('mouseleave', () => {
    module.style.backgroundColor = '#eee';
  });
});
