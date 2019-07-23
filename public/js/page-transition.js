document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#app').classList.toggle('hide');
  setTimeout(function() {
    document.querySelector('.tiles').classList.add('active');
    document.querySelector('.bg-photo').classList.add('show');
  }, 10);
  setTimeout(function() {
    document.querySelector('#app-box').classList.add('active');
  }, 500);
});
