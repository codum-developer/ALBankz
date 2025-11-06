class Bank {
  #accountList;
  #bankActivities;
  #userCount = 0
  constructor(bankName = "ALBankz") {
    this.bankName = bankName
    this.#accountList = []
    this.#bankActivities = []
  }
  
  createAccount(username, password) {
    const critic = []
    if (username.length < 5 || username.length > 30) {
      return [false, "le nom doit avoir 6 à 30 caractère"]
    }
    
    let existingUsername = this.#accountList.filter((user) => user.username == username);
    
    if (existingUsername.length > 0) {
      return [false, "le nom existe déjà créer un autre"]
    } else {
      critic.push(true)
    }
    
    if (password.length >= 6) {
      critic.push(true)
    } else {
      return [false, "le mon de passe doit avoir 6 à 12 caractère"]
    }
    if (critic[0] == true && critic[1] == true) {
      let account
      account = new BankAccount(username, password, 0,this);
      this.notified(account, "Rejoint la banque")
      this.#accountList.push(account)
      console.log(this.#accountList)
      
      return [true, "Compte créer avec succès",
      {
        username,
        password,
        pay: 0
      },account]
      
      this.#userCount++
    }
    
  }
  notified(account, message) {
    this.#bankActivities.push([account, message] )
    console.log(this.#bankActivities)
  }

}
