const kindNotes = [
  "You are loved. Please just rest today.",
  "It is okay to not do anything. Your health comes first.",
  "No reply needed—just drink some warm water and rest. ♡",
  "You deserve softness and care, today and always."
];

const noteButton = document.querySelector('[data-kind-note]');
const note = document.querySelector('.kind-note');
let noteIndex = 0;

if (noteButton && note) {
  noteButton.addEventListener('click', () => {
    noteIndex = (noteIndex + 1) % kindNotes.length;
    note.textContent = kindNotes[noteIndex];
    note.animate(
      [{ opacity: .25, transform: 'translateY(4px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 280, easing: 'ease-out' }
    );
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest('.button, .brand, .back-link')) return;

    const heart = document.createElement('span');
    heart.className = 'tap-heart';
    heart.textContent = Math.random() > .5 ? '♡' : '♥';
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    heart.style.setProperty('--heart-x', `${(Math.random() - .5) * 66}px`);
    heart.style.setProperty('--heart-y', `${-20 - Math.random() * 45}px`);
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  });
}
