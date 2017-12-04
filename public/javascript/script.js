(function(){
  console.log("Sample");
  $("#name").blur(function(){
    console.log(this.value.length);
    if(this.value.length == 0 || this.value != null)
      alert("Name cannot be empty");
    else{
      if(/^([A-Za-z]{1,})$/.test(this.value))
        console.log("Success");
      else
        alert("Invalid Name");
      }
  });
  $("#answer").blur(function(){

    if(/^([A-Za-z]{1,})$/.test(this.value))
      console.log("Success");
    else
      alert("Invalid Answer Format");
  });
  $("#email").blur(function(){
    if(^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$.test(this.value))
      console.log("Success");
    else
      alert("Invalid Email");
  });
  $("#password").blur(function(){
    if(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"/.test(this.value))
      console.log("Success");
    else
      alert("Password should have atleast 1 Capital character and a special character");
  });
})();
