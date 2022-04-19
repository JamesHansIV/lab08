const validate = () => {
  let goodLength, match = false;
  //check length
  let passwords = document.querySelectorAll("input");
  if(passwords[0].value!==passwords[1].value) { alert("passwords do not match!"); return;}
  if(passwords[0].value.length < 8) alert("password must be at least 8 characters");
}

const showPswd = () => {
  let fields = document.querySelectorAll("input");
  let btn = document.getElementById("showPswdBtn");
  for(let field of fields) {
    if(field.type==="password") {
      field.type="text";
      btn.innerText = "Hide password";
    } else {
      field.type="password";
      btn.innerText = "Show password";
    }
  }
}
