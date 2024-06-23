var cargarPropiedades = function (list, cantidad, selector) {
  const divLista = document.getElementById(selector);

  let html = "";

  for (var i = 0; i < cantidad; i++) {
    let propiedad = list[i];

    // Determinar el ícono y el texto para fumadores
    let iconoFumadores = "";
    let textoFumadores = "";
    let claseTextoFumadores = "";
    let iconoMascotas = "";
    let textoMascotas = "";
    let claseTextoMascotas = "";

    //determinar estilos y textos para caso de permitir o negar fumadores
    if (propiedad.smoke) {
      iconoFumadores = '<i class="fas fa-smoking" aria-hidden="true"></i>';
      textoFumadores = "Se permite fumar";
      claseTextoFumadores = "text-success";
    } else {
      iconoFumadores = '<i class="fas fa-smoking-ban" aria-hidden="true"></i>';
      textoFumadores = "No se permite fumar";
      claseTextoFumadores = "text-danger";
    }

   //determinar estilos y textos para caso de permitir o negar mascotas
    if (propiedad.pets) {
        iconoMascotas='<i class="fas fa-paw" aria-hidden="true"></i>';
        textoMascotas='Se permiten mascotas';
        claseTextoMascotas='text-success';
    } else {
        iconoMascotas='<i class="fa-solid fa-ban" aria-hidden="true"></i>';
        textoMascotas='No se permiten mascotas';
        claseTextoMascotas='text-danger';
    }

    html += ` <div class="col">
      <div class="card">
          <img src="${propiedad.src}" height='300px'
              class="card-img-top" alt="Imagen del departamento">
          <div class="card-body">
              <h5 class="card-title">
              ${propiedad.nombre}
              </h5>
              <p class="card-text">
              ${propiedad.descripcion}
              </p>
              <p>
                  <i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${propiedad.ubicacion}
              </p>
              <p>
                  <i class="fas fa-bed" aria-hidden="true"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath" aria-hidden="true"></i> ${propiedad.baños} Baños
              </p>
              <p><i class="fas fa-dollar-sign" aria-hidden="true"></i>${propiedad.costo} </p>
                 <p class="${claseTextoFumadores}">
                  ${iconoFumadores} ${textoFumadores}
              </p>
              <p class="${claseTextoMascotas}">
                  ${iconoMascotas} ${textoMascotas}
              </p>
          </div>
      </div>
  </div>`;
  }

  divLista.innerHTML = html;
};
