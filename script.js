// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDehzIpE_E0tC2I98cbMI78rQhjf_lxpKU",
  authDomain: "conteo-92e34.firebaseapp.com",
  databaseURL: "https://conteo-92e34.firebaseio.com",
  projectId: "conteo-92e34",
  storageBucket: "conteo-92e34.appspot.com",
  messagingSenderId: "693305890138",
  appId: "1:693305890138:web:169ecf3ac609e4fe720f63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Recuperamos toda la info de la base de datos de Firebase
/*
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
*/


// Recuperamos solo cierta info la de setData que nos da el valor actualizado del % aforo

var porcentajeactual = firebase.database().ref("setData/").limitToFirst(1);


porcentajeactual.on("value", function(data) {
  
   console.log(data.val());
   var porcentajeactual = data.val();
// Añadimos el valor de la variable y la metemos en un texto
$('#nameValue' ).append('<p> ' + porcentajeactual.value + '</p>');

// Accedemos a la barra de progreso,y le decimos que coja el valor de la variable porcentajeactual.value
$( "#myProgress" ).attr( "value", porcentajeactual.value );

$("#myProgress").attr()
   if($(porcentajeactual.value)>50)
      alert("The number entered is greater than 5");
 



}, function (error) {
   console.log("Error: " + error.code);
});

// Fin recuperamos solo cierta info la de setData que nos da el valor actualizado del % aforo






