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

    
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "lc_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


    function send()
{
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}