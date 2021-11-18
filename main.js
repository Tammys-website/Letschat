var firebaseConfig = {
  apiKey: "AIzaSyAIuD6muVuyNntZ8ghz6ufMdvoGCLOBgK4",
  authDomain: "letschat-e3722.firebaseapp.com",
  databaseURL: "https://letschat-e3722-default-rtdb.firebaseio.com",
  projectId: "letschat-e3722",
  storageBucket: "letschat-e3722.appspot.com",
  messagingSenderId: "991586181101",
  appId: "1:991586181101:web:df7c628f337a0de53911e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  function addRoom()
  {
        room_name=document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="lc_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

console.log("room name -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
 
    });});}
getData();

function redirectToRoomName(name)
{
   localStorage.setItem("room_name", name);
   window.location="lc_page.html"; 
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}