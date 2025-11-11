let account = JSON.parse(sessionStorage.getItem("account"))
console.log(account)
sessionStorage.removeItem("account")

document.addEventListener("DOMContentLoaded", () => {
  withdrawButton = document.getElementById("withdrawButton")
  depositButton = document.getElementById("depositButton")
  dialogDeposit = document.querySelector(".dialogDeposit")
  dialogWithdraw = document.querySelector(".dialogWithdraw")
  closeDialogButtons = document.querySelectorAll("#closeDialog")
  dialogTags = document.querySelectorAll("dialog")
  
  
  if (withdrawButton) {
    withdrawButton.addEventListener("click", () => dialogWithdraw.showModal())
    depositButton.addEventListener("click", () => dialogDeposit.showModal() )
    
    
    closeDialogButtons.forEach((closeDialogButton)=>{
      closeDialogButton.addEventListener("click", ()=>{dialogTags.forEach((dialogTag)=>dialogTag.close())
        
      })
    })
  }
  
  
  
  
  const successMessage = document.querySelector(".message-row")
  if (successMessage) {
    successMessage.style.display = "flex"
    setTimeout(() => successMessage.style.display = "none", 2000)
  }
  const sayHiUser = document.getElementById("SayHiUser")
  if (sayHiUser) {
    sayHiUser.textContent = account.username
  }
  
  // Références aux éléments du Solde
  const soldeElement = document.getElementById('solde');
  const toggleSoldeButton = document.getElementById('toggleSolde');
  const eyeIcon = document.getElementById('eyeIcon');
  
  let isSoldeVisible = false;
  
  /**
   * Logique d'affichage/masquage du solde (Show/Hide Balance)
   */
  if (toggleSoldeButton) {
    toggleSoldeButton.addEventListener('click', () => {
      if (isSoldeVisible) {
        // Masquer le solde
        soldeElement.textContent = '********';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        toggleSoldeButton.setAttribute('aria-label', 'Afficher le solde'); // Accessibilité
      } else {
        // Afficher le solde
        soldeElement.textContent = `${account} FC`;
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        toggleSoldeButton.setAttribute('aria-label', 'Masquer le solde'); // Accessibilité
      }
      isSoldeVisible = !isSoldeVisible;
    });
    
  }
  
  
  // Références aux éléments du Menu Mobile
  const openMenuButton = document.getElementById('openMenuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const sidebar = document.getElementById('sidebar');
  const menuOverlay = document.getElementById('menuOverlay');
  
  /**
   * Logique du Menu Mobile (Mobile Menu Logic)
   */
  if (openMenuButton) {
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
    
    
  }
  
  
  
  
})