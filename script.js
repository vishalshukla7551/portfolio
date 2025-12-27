document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.project-card');
    card.classList.toggle('expanded');
    btn.textContent = card.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});
