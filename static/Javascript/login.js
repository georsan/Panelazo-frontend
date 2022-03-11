async function login(){
    datos={};
    datos.email=document.getElementById('email').value;
    datos.contraseña=document.getElementById('contraseña').value;

    const request = await fetch('https://panelazo7.herokuapp.com/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });
    const respuesta = await request.text();
    
    if(respuesta==""){
      alert("Revise si sus datos o registrese")
    }
    else{
      window.location.href = 'user.html' 
       localStorage.datos=respuesta;
    }
    }
function cargardatos(){
  datos=localStorage.datos;
  dato=JSON.parse(datos)
  //localStorage.clear();
  document.getElementById("nombrep").value=dato.nombre;
  document.getElementById("apellidop").value=dato.apellido;
  document.getElementById("telefonop").value=dato.telefono;
  document.getElementById("emailp").value=dato.email;
  document.getElementById("direccionp").value=dato.direccion;
  document.getElementById("contraseñap").value=dato.contraseña;

  

}