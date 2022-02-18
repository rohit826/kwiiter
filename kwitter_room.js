const firebaseConfig = {
  apiKey: "AIzaSyBUaejiv-Ya_joAEv0vNtCi_slF0JI5wsM",
  authDomain: "kiwtter-2.firebaseapp.com",
  databaseURL: "https://kiwtter-2-default-rtdb.firebaseio.com",
  projectId: "kiwtter-2",
  storageBucket: "kiwtter-2.appspot.com",
  messagingSenderId: "1091440548107",
  appId: "1:1091440548107:web:4e6093453e37437c6f2a0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{
   document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot)
 {
    childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
