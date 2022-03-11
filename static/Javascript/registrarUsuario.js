async function obtenerdatos(){
datos={};
datos.nombre=document.getElementById('nombre').value;
datos.apellido=document.getElementById('apellido').value;
datos.telefono=document.getElementById('telefono').value;
datos.email=document.getElementById('correo').value;
datos.direccion=document.getElementById('direccion').value;
datos.contraseña=document.getElementById('password').value;

const request = await fetch('https://panelazo7.herokuapp.com/registrarUser', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos)
}).then(res=>{console.log(res)}).catch(error=>{console.log(error)});


}

