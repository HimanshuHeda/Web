function validate(){
    var fname = document.getElementById("firstName").value ;
    var lname = document.getElementById("lastName").value ;
    var email = document.getElementById("email").value ;
    var phone = document.getElementById("phone").value ;
    var dob = document.getElementById("dob-day").value ;
    var dob = document.getElementById("dob-month").value ;
    var dob = document.getElementById("dob-year").value ;
    var country = document.getElementById("country").value ; 
    var issubmit = true;
            // First Name error display 
            if(fname == "")
            {
                document.getElementById("firstNameError").innerHTML = "First Name cannot be empty";
                document.getElementById("firstName").classList.add("focus");
                issubmit = false;
                //alert("First Name cannot be empty");
            }
            else{
                document.getElementById("firstNameError").innerHTML = "";
                document.getElementById("firstName").classList.remove("focus");
                issubmit = true;
            }

            // last Name error display 
            if(lname == "")
            {
                document.getElementById("lastNameError").innerHTML = "Last Name cannot be empty";
                document.getElementById("lastName").classList.add("focus");
                issubmit = false;
                //alert("First Name cannot be empty");
            }
            else {
                document.getElementById("lastNameError").innerHTML = "";
                document.getElementById("lastName").classList.remove("focus");
            }

            // Email error display 
            if (email == "") {
                document.getElementById("emailError").innerHTML = "Email cannot be empty";
                issubmit = false;
            } 
            else {
                document.getElementById("emailError").innerHTML = "";
            }

            // Date of birth error display 
            if (dob == "") {
                document.getElementById("dobError").innerHTML = "Date of Birth cannot be empty";
                issubmit = false;
            } 
            else {
                document.getElementById("dobError").innerHTML = "";
            }

            // Country error display 
            if (country == "") {
                document.getElementById("countryError").innerHTML = "country cannot be empty";
                issubmit = false;
            } 
            else {
                document.getElementById("countryError").innerHTML = "";
            }

            // Phone error display 
            if (phone == "") {
                document.getElementById("phoneError").innerHTML = "Phone Number cannot be empty";
                issubmit = false;
            } 
            else {
                document.getElementById("phoneError").innerHTML = "";
            }

            if(issubmit == false)
               return false;
            else
                return true;
}