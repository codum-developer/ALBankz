let checkedData = JSON.parse(sessionStorage.getItem("entriesChecked"))
let account;
if (checkedData) {
  account = albankz.createAccount(checkedData.username, checkedData.password)
  //sessionStorage.removeItem("entriesChecked")
} else document.location.href = "./index.html"


document.addEventListener("DOMContentLoaded", () => {
  const withdrawButton = document.getElementById("withdrawButton")
  const depositButton = document.getElementById("depositButton")
  const dialogDeposit = document.querySelector(".dialogDeposit")
  const dialogWithdraw = document.querySelector(".dialogWithdraw")
  const closeDialogButtons = document.querySelectorAll("#closeDialog")
  const dialogTags = document.querySelectorAll("dialog")
  
  if (withdrawButton) {
    withdrawButton.addEventListener("click", () => dialogWithdraw.showModal())
    depositButton.addEventListener("click", () => dialogDeposit.showModal())
    
    closeDialogButtons.forEach((closeDialogButton) => {
      closeDialogButton.addEventListener("click", () => {
        dialogTags.forEach((dialogTag) => dialogTag.close())
        
      })
    })
  }
  
  
  
  
  const successMessage = document.querySelector(".message-row")
  if (successMessage) {
    successMessage.style.display = "flex"
    setTimeout(() => successMessage.style.display = "none", 2000)
  }
  
  const sayHiUser = document.getElementById("SayHiUser")
  const userAvatar = document.querySelector(".user-avatar")
  const nameInCard = document.querySelector(".nameInCard")
  
  userAvatar.textContent = String(account.username)[0]
  nameInCard.textContent = String(account.username)
  sayHiUser.textContent = account.username
  
  
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
        soldeElement.textContent = `${account.pay} FC`;
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
    //console.log("ALBankz Dashboard script loaded."); // Confirmation de chargement
  }
  
  //Validation de dépôt et retrait ,script 
  const validDepositButton = document.getElementById("validDeposit")
  const depositInput = document.getElementById("depositInput")
  const depositError = document.getElementById("depositError")
  
  const successRequestMessage = document.querySelector(".successRequestMessageContainer")
  const successRequestMessageWthdraw = document.querySelector(".successRequestMessageWthdraw")
  
  const validWithdrawalButton = document.getElementById("validWithdrawal")
  const withdrawInput = document.getElementById("withdrawInput")
  const withdrawalError = document.getElementById("withdrawalError")
  
  validDepositButton.addEventListener("click", () => {
    if (depositInput.value) {
      let depositRequest = account.deposit(depositInput.value)
      if (depositRequest[0] == false) {
        depositError.textContent = depositRequest[1]
      } else {
        successRequestMessage.lastElementChild.textContent = depositRequest[1]
        successRequestMessage.classList.add("open")
        setTimeout(() => {
          dialogTags.forEach((dialogTag) => dialogTag.close())
          successRequestMessage.classList.remove("open")
        }, 1000)
      }
    }
    else { depositError.textContent = "Enter quelques chose svp" }
  })
  
  validWithdrawalButton.addEventListener("click", () => {
    if (withdrawInput.value) {
      let withdrawalRequest = account.withdraw(withdrawInput.value)
      if (withdrawalRequest[0] == false) {
        withdrawalError.textContent = withdrawalRequest[1]
      } else {
        successRequestMessageWthdraw.lastElementChild.textContent = withdrawalRequest[1]
        successRequestMessageWthdraw.classList.add("open")
        setTimeout(() => {
          dialogTags.forEach((dialogTag) => dialogTag.close())
          successRequestMessageWthdraw.classList.remove("open")
        }, 2000)
      }
    }
    else { withdrawalError.textContent = "Enter quelques chose svp" }
  })
  
  
  
  
  
  
})