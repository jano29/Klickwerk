// Mobile Menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Contact Form - mailto
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const packageSelect = document.getElementById('package').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    const subject = `Neue Anfrage von ${name} – Klickwerk Freiberg`;
    const body = `
Neue Website-Anfrage über die Website:

Name: ${name}
Unternehmen: ${company || '–'}
E-Mail: ${email}
Telefon: ${phone || '–'}
Gewünschtes Paket: ${packageSelect}

Nachricht:
${message}
    `.trim();

    const mailto = `mailto:Klickwerk-Freiberg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

// Admin Access
const adminDot = document.getElementById('admin-dot');
const loginModal = document.getElementById('login-modal');
const adminModal = document.getElementById('admin-modal');
const passwordInput = document.getElementById('admin-password');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const closeLogin = document.getElementById('close-login');
const closeAdmin = document.getElementById('close-admin');

const CORRECT_PASSWORD = 'Jano!/=&2006';

if (adminDot) {
  adminDot.addEventListener('click', () => {
    loginModal.classList.add('active');
    passwordInput.focus();
  });
}

if (closeLogin) {
  closeLogin.addEventListener('click', () => {
    loginModal.classList.remove('active');
    passwordInput.value = '';
  });
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    if (passwordInput.value === CORRECT_PASSWORD) {
      loginModal.classList.remove('active');
      adminModal.classList.add('active');
      passwordInput.value = '';
    } else {
      alert('Falsches Passwort.');
      passwordInput.value = '';
      passwordInput.focus();
    }
  });

  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      loginBtn.click();
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    adminModal.classList.remove('active');
  });
}

if (closeAdmin) {
  closeAdmin.addEventListener('click', () => {
    adminModal.classList.remove('active');
  });
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});
