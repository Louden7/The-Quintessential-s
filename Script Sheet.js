 // figure out how to put 0's when the month and
 //var HCCend = 100916; // day are less than 10

 function setStartDate() {
     var HCCstart = document.getElementById("sd1").value;
 }
 // This function gives a live date that changes in real time.
 
 window.onload = function() {
     var d = new Date();
     var date = "Today's Date: " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + (d.getFullYear() - 2000);
     var xx = date.replace("/", "");
     var numDate = xx.replace("/", "");

     document.getElementById("startDate").innerHTML = "Poll Start Date: 12/1/16";
     document.getElementById("endDate").innerHTML = "Poll End Date: 12/30/16";
     document.getElementById("todaysDate").innerHTML = date;

     //document.getElementById("startDate").innerHTML = "Poll Start Date: ";
     //document.getElementById("endDate").innerHTML = "Poll End Date: ";
     //document.getElementById("todaysDate").innerHTML = date;

     //document.getElementById("check1").innerHTML = numDate;

     if (HCCstart <= numDate && HCCend >= numDate) {
         document.getElementById("check2").innerHTML = "Thanks for Voting!!!!!!";
     } else if (HCCstart > numDate && HCCend > numDate) {
         document.getElementById("check2").innerHTML = "Vote is not open yet!";
     } else {
         document.getElementById("check2").innerHTML = "Vote is already over!";
     }
 }

 // This function validates if the login information is valid and if the user is a student or admin.
 function validate() {
     var username = document.getElementById("Login").value;
     var password = document.getElementById("Password").value;
     // This if statement is for the Admids.
     if (username == "Dillon" && password == "Louden") {
         document.getElementById("Login").value = '';
         document.getElementById("login_error").innerHTML = '';
         document.getElementById("help_message").innerHTML = '';
         window.location.href = "Admin Page.html";
     }
     // This if statement is for the students.
     else if (username == "djlouden@mix.wvu.edu" && password == "dillon") {
         document.getElementById("Login").value = '';
         document.getElementById("login_error").innerHTML = '';
         document.getElementById("help_message").innerHTML = '';
         window.location.href = "Group Project.html";
     }
     // This if statement is for the HSO
     else if (username == "Jason" && password == "Schafer") {
         document.getElementById("Login").value = '';
         document.getElementById("login_error").innerHTML = '';
         document.getElementById("help_message").innerHTML = '';
         window.location.href = "Head Of Student Orgs Page.html";
     }
     // This if statement does not alow the user to login if an error was made or the user is not aloud to login
     else {
         document.getElementById("login_error").innerHTML = "Invalid Login or Password";
         document.getElementById("help_message").innerHTML = "Please try again";
         document.getElementById("Login").value = '';
         document.getElementById("Password").value = '';
     }
 }

 // This function disables the user to go forward after logging out for security resasons.
 function logout() {
     window.location.replace("Login Page.html");
     window.history.back();
     setTimeout("logout()", 0);
 }

 // Added for the tabs on the Admin Page
 function openCity(evt, cityName) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " active";
 }

 function submitBallot() {
     if (document.getElementsByClassName("FemaleCourtVote").checked && document.getElementsByClassName("MaleCourtVote").checked) {
         window.location.replace("Response Recorded.html");
     }
 }

  function submitBallot2() {
         window.location.replace("Response Recorded.html");
 }
 
 function showHomeComingResults() {
     var checkStatus = document.getElementById("show_HCC_Results");
     if (checkStatus.checked) {
         document.getElementById("myhide1").style.display = "block";
     } else {
         document.getElementById("myhide1").style.display = "none";
     }
 }

 function showStudentGovResults() {
     var checkStatus = document.getElementById("show_Studnet_Gov_Results");
     if (checkStatus.checked) {
         document.getElementById("myhide2").style.display = "block";
     } else {
         document.getElementById("myhide2").style.display = "none";
     }
 }

 function showFavoriteTeacherResults() {
     var checkStatus = document.getElementById("show_Favorite_Teacher_Results");
     if (checkStatus.checked) {
         document.getElementById("myhide3").style.display = "block";
     } else {
         document.getElementById("myhide3").style.display = "none";
     }
 }

 function showFavoriteAdvisorResults() {
     var checkStatus = document.getElementById("show_Favorite_Advisor_Results");
     if (checkStatus.checked) {
         document.getElementById("myhide4").style.display = "block";
     } else {
         document.getElementById("myhide4").style.display = "none";
     }
 }

 function showConstitutionalAmendmentsResults() {
     var checkStatus = document.getElementById("show_Constitutional_Amendments_Results");
     if (checkStatus.checked) {
         document.getElementById("myhide5").style.display = "block";
     } else {
         document.getElementById("myhide5").style.display = "none";
     }
 }

 function checkHomecomingCourtVote() {
     if (document.getElementById("a1").checked == true || document.getElementById("a2").checked == true ||
         document.getElementById("a3").checked == true || document.getElementById("a4").checked == true ||
         document.getElementById("a5").checked == true || document.getElementById("a6").checked == true)
         if (
             document.getElementById("a7").checked == true || document.getElementById("a8").checked == true ||
             document.getElementById("a9").checked == true || document.getElementById("a10").checked == true ||
             document.getElementById("a11").checked == true || document.getElementById("a12").checked == true) {
             document.getElementById("output_a").innerHTML = "<input type='submit' value='Vote' onclick='submitBallot()'>"
         }
 }

 function checkStudentGovVote() {
     if (document.getElementById("y1").checked == true || document.getElementById("y2").checked == true ||
         document.getElementById("y3").checked == true || document.getElementById("y4").checked == true ||
         document.getElementById("y5").checked == true || document.getElementById("y6").checked == true)
         if (document.getElementById("y7").checked == true || document.getElementById("y8").checked == true ||
             document.getElementById("y9").checked == true || document.getElementById("y10").checked == true ||
             document.getElementById("y11").checked == true || document.getElementById("y12").checked == true) {
             if (document.getElementById("z1").checked == true || document.getElementById("z2").checked == true ||
                 document.getElementById("z3").checked == true || document.getElementById("z4").checked == true ||
                 document.getElementById("z5").checked == true || document.getElementById("z6").checked == true) {
                 if (document.getElementById("z7").checked == true || document.getElementById("z8").checked == true ||
                     document.getElementById("z9").checked == true || document.getElementById("z10").checked == true ||
                     document.getElementById("z11").checked == true || document.getElementById("z12").checked == true) {
                     document.getElementById("output_b").innerHTML = "<input type='submit' value='Vote' onclick='submitBallot()'>"
                 }
             }
         }
 }


 function checkConstitutionalVote() {
     if (document.getElementById("e1").checked == true || document.getElementById("e2").checked == true) {
         document.getElementById("output_e").innerHTML = "<input type='submit' value='Vote'>";
     } else {
         document.getElementById("output_e").innerHTML = "INVALID";
     }
 }

 function goBack() {
     window.location.replace("Group Project.html");
 }

 function showConstitutionalAmendTab() {
     var navbar = document.getElementById("navbar");
     var bullet = document.createElement("li");

     bullet.innerHTML = "<a href=\"#\" class=\"tablinks\" onclick=\"openCity(event, 'constitutionalAmendTab')\">Constitutional Amendments<\/a>";
     navbar.insertBefore(bullet, navbar.children[4]);
 }
