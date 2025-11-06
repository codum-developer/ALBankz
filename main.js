albankz = new Bank()
document.addEventListener("DOMContentLoaded", () => {
  //variable pour gerer l'ouverture et la fermeture de l'interface "Create account"
  const inscriptionInterface = document.querySelector(".creatingAccount")
  const displayInscriptionInterface = document.querySelectorAll("#creationAccount")
  const closeInterface = document.querySelector(".closeInterface")
  //Execute des actions sur l'interface "Create account"
  displayInscriptionInterface.forEach((element) => {
    element.addEventListener("click", () => inscriptionInterface.style.display = "flex");
  })
  if (closeInterface) {
    closeInterface.addEventListener("click", () => inscriptionInterface.style.display = "none");
  }
  
  //variable pour gérer la création de compte
  const createAccountForm = document.querySelector("#createAccountForm")
  const infoMessage = document.querySelector(".infoMessage")
  const errorMessageBadInput = document.querySelector(".errorMessageBadInput")
  
  
  if (createAccountForm) {
      //logique de vérification des input utilisateur
    let account;
    createAccountForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const usermane = document.querySelector("#Username").value.trim()
      const password = document.querySelector("#password").value.trim()
      window.account = albankz.createAccount(usermane, password)
      if (window.account[0] == false) {
        infoMessage.style.display = "block"
        errorMessageBadInput.innerText = window.account[1]
      } else {
        infoMessage.style.display = "none"
        window.location.href = "./account.html"
        
        
      }
      
    })
  }

  
  
  
  
})