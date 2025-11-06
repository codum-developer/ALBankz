albankz = new Bank()

curtain = document.querySelector(".curtain")

removeCurtain = setTimeout(() => curtain.style.display = "none", 2000)

//variable pour gerer l'ouverture et la fermeture de l'interface "Create account"
inscriptionInterface = document.querySelector(".creatingAccount")
displayInscriptionInterface = document.querySelectorAll("#creationAccount")
closeInterface = document.querySelector(".closeInterface")
//Execute des actions sur l'interface "Create account"
displayInscriptionInterface.forEach((element) => {
  element.addEventListener("click", () => inscriptionInterface.style.display = "flex");
})
closeInterface.addEventListener("click", () => inscriptionInterface.style.display = "none");

//variable pour gérer la création de compte
createAccountForm = document.querySelector("#createAccountForm")
infoMessage = document.querySelector(".infoMessage")
errorMessageBadInput = document.querySelector(".errorMessageBadInput")


createAccountForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const usermane = document.querySelector("#Username").value
  const password = document.querySelector("#password").value
  compte = albankz.createAccount(usermane, password)
  if (compte[0] == false) {
    infoMessage.style.display = "block"
    errorMessageBadInput.innerText = compte[1]
  }else{
    infoMessage.style.display = "none"
  }
  
})