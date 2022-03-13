async function getproductos(){
    const request = await fetch('https://panelazo7.herokuapp.com/getproducto', {
        method: 'GET'
      });
      const productos = await request.json();
      cantidad=Object.keys(productos).length;
      console.log(productos)
      for( x of productos){
          document.getElementById('row').innerHTML+='<div class="box"><div class="card"><img src="'+x.imagen+'" class="u-full-width"><div class="info-card"><h4>'+x.nombre+'</h4><p>'+x.descripcion+'</p><p class="precio"><span class="u-pull-left">$'+x.precio+'</span></p><a href="#" class="u-full-width button-primary button input agregar-carrito">Agregar Al Carrito</a></div></div></div>'
      }
}