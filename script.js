document.getElementById("signBtn").addEventListener("click",function(){
  // 1.get the username
  const  usernameInput  = document.getElementById("input-name");
  const  username = usernameInput.value;
  console.log(username);

  //2.get the password
const inputPassword = document.getElementById("input-password");
const password = inputPassword.value;
console.log(password);

  // 3. match username and password
if(username === "admin" && password === "admin123"){
    // // 3-1 true :::>>> alert> issue page
    alert("Login success");
    window.location.replace("./tracker.html");
}else{
    // 3-1 false:::>> alert>return
    alert("Wrong username or password");
}
return;
  
});




