

document.addEventListener("DOMContentLoaded", () => {
  const successMesage = document.querySelector(".message-row")
  successMesage.style.display = "flex"
  setTimeout(()=>successMesage.style.display = "none", 2000)
  // Références aux éléments du Solde
  const soldeElement = document.getElementById('solde');
  const toggleSoldeButton = document.getElementById('toggleSolde');
  const eyeIcon = document.getElementById('eyeIcon');
  
  let isSoldeVisible = false;
  
  /**
   * Logique d'affichage/masquage du solde (Show/Hide Balance)
   */
  toggleSoldeButton.addEventListener('click', () => {
    if (isSoldeVisible) {
      // Masquer le solde
      soldeElement.textContent = '********';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
      toggleSoldeButton.setAttribute('aria-label', 'Afficher le solde'); // Accessibilité
    } else {
      // Afficher le solde
      console.log(window.account)
      soldeElement.textContent = `${window.account.pay} FC`;
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
      toggleSoldeButton.setAttribute('aria-label', 'Masquer le solde'); // Accessibilité
    }
    isSoldeVisible = !isSoldeVisible;
  });
  
  
  // Références aux éléments du Menu Mobile
  const openMenuButton = document.getElementById('openMenuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const sidebar = document.getElementById('sidebar');
  const menuOverlay = document.getElementById('menuOverlay');
  
  /**
   * Logique du Menu Mobile (Mobile Menu Logic)
   */
  const toggleMenu = (show) => {
    if (show) {
      sidebar.classList.add('is-open');
      menuOverlay.classList.add('is-active');
      // Empêche le défilement du contenu derrière le menu
      document.body.style.overflow = 'hidden';
    } else {
      sidebar.classList.remove('is-open');
      menuOverlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };
  
  // Ouvrir le menu
  openMenuButton.addEventListener('click', () => toggleMenu(true));
  // Fermer le menu (bouton de fermeture dans la sidebar)
  closeMenuButton.addEventListener('click', () => toggleMenu(false));
  // Fermer le menu (clic sur l'overlay)
  menuOverlay.addEventListener('click', () => toggleMenu(false));
  
  // Assurer que le menu est fermé sur grand écran (au cas où il était ouvert sur mobile)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && sidebar.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });
  
  console.log("ALBankz Dashboard script loaded."); // Confirmation de chargement
  
  
  
})