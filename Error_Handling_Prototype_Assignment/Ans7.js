class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }
  
  getPassword() {
    return this._password.replace(/./g, '*');
  }
  
  setPassword(newPassword) {
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    if (newPassword.length < 8 || !uppercaseRegex.test(newPassword) || !numberRegex.test(newPassword)) {
      console.error('Invalid password. The password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      return;
    }
    
    this._password = newPassword;
  }
}
// example of how you can create an instance of the User class and use its setPassword and getPassword methods:

let user = new User('Harit', 'Password111');
console.log(user.getPassword()); // output: *********

user.setPassword('Mypassword');
console.log(user.getPassword()); // output: *********

user.setPassword('MyweakPassword');
console.log(user.getPassword()); // output: *********

user.setPassword('MyPassword123');
console.log(`Your New Password is Ready: ${user.getPassword()}`); // output: *********
