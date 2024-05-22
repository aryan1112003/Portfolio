const firebaseConfig = {
    apiKey: "AIzaSyBnwp4RLBCQpirVhf526ER2FuULhLHzjF4",
    authDomain: "contactform-4a526.firebaseapp.com",
    databaseURL: "https://contactform-4a526-default-rtdb.firebaseio.com",
    projectId: "contactform-4a526",
    storageBucket: "contactform-4a526.appspot.com",
    messagingSenderId: "490413375525",
    appId: "1:490413375525:web:8c4109d737bed684fc3fcc"
  };

  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };