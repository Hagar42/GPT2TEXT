// Pour les particules
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, opacity: 0.5 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' } }
  }
});

// Pour le gradient dynamique
let angle1 = 0;
let angle2 = 0;

function updateGradient() {
  angle1 = (angle1 + 1) % 360;
  angle2 = (angle2 + 2) % 360;
  const x1 = Math.cos(angle1 * Math.PI / 180) * 50 + 50;
  const y1 = Math.sin(angle1 * Math.PI / 180) * 50 + 50;
  const x2 = Math.cos(angle2 * Math.PI / 180) * 50 + 50;
  const y2 = Math.sin(angle2 * Math.PI / 180) * 50 + 50;
  
  document.getElementById('particles-js').style.background = `
    radial-gradient(circle at ${x1}% ${y1}%, #2e0854, #000000),
    radial-gradient(circle at ${x2}% ${y2}%, #000000, #00008b)
  `;
  
  requestAnimationFrame(updateGradient);
}

updateGradient();

document.addEventListener('stripe-pricing-table-ready', function() {
  const pricingTable = document.querySelector('stripe-pricing-table');
  pricingTable.addEventListener('checkout-clicked', function(event) {
    const planId = event.detail.planId;
    // Ton code pour gérer le clic sur le bouton de paiement ici, comme rediriger l'utilisateur vers une page de paiement
  });
});
