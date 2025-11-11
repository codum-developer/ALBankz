class BankAccount {
  #pay;
  #password;
  constructor(username, password, pay, bank) {
    this.bank = bank
    this.username = username
    this.#password = password
    this.#pay = pay
    
  }
  
  deposit(amount) {
    if (amount <= 0) {
      return [false, "le dépôt minimum est de 1"]
    } else {
      this.#pay += amount
      this.bank.notified(this, `Dépôt réussi montant: ${amount} , Nouveau solde : ${this.#pay}`)
      return [true, `dépôt effectué avec succès nouveau solde ${this.#pay}`]
    }
    
  }
  
  withdraw(amount) {
    if (this.#pay < amount || amount <= 0) {
      return [false, "retrait échoué, le montant doit être supérieur au solde , et supérieur à zéro."]
    } else {
      this.#pay -= amount
      this.bank.notified(this, `Retrait réussi montant: ${amount} , Nouveau solde : ${this.#pay}`)
      return [true, `Retrait effectué avec succès ! nouveau solde ${this.#pay}`]
    }
  }
  
  get pay() {
    return `${this.#pay}`
  }
  
  /*set password(newpassword) {
    if (password === this.#password) {
      this.#password = newpassword
      return true
    } else return false
    
  }
  */
  
}