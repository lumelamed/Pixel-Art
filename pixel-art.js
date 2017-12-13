var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//ANIMACIONES PARA MOSTRAR LOS TITULOS
$(document).ready(function(){
  $("h1").hide().slideDown(2000);
  $("h3").hide().fadeIn(2000);
});

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  actualizarIndicador(colorActual);
  colorSeleccionado=colorActual;
  pintarGrilla();
});
//SE GENERA LA PALETA
var $paleta = $("#paleta"); //variable que guarda al elemento paleta

function generarPaleta(){
	for(var i = 0; i < nombreColores.length; i++){
		$paleta.append('<div>', {"class": 'color-paleta'});
	}

	$paleta.find("div").each(function(j){
		$(this).css("background-color", nombreColores[j]);
  })
}
generarPaleta();
//ACTUALIZAR INIDICADOR DE COLORES
function actualizarIndicador(color){
  $("#indicador-de-color").css("background-color", color);
  $("#indicador-de-color-mensaje").text("Pincel: " + color);
}
//SE GENERA LA GRILLA DE PIXELES
var $grillaPixeles = $("#grilla-pixeles"); //vaiable que guarda al elemento grilla

var grillaSize = 1749;
function generarGrilladePixeles(){
  for (var k = 0; k < grillaSize; k++) {
    $grillaPixeles.append('<div>');
  }
}
generarGrilladePixeles();
//CAMBIAR EL INDICADOR DE COLOR CUANDO SE CLICKEA SOBRE EL COLOR DESEADO
var colorSeleccionado = ""; //variable que utilizaré en otras funciones
$paleta.find("div").each(function(j){
  $(this).click(function(){
    actualizarIndicador(nombreColores[j]);
    colorSeleccionado = nombreColores[j];
  });
})
//SE PINTA EL PIXEL EN LA GRILLA
function pintarGrilla(){
  $grillaPixeles.click(function(){
    $(event.target).css("background-color", colorSeleccionado);
  });
}
pintarGrilla();
//VER SI EL MOUSE ESTÁ APRETADO
var mouseApretado = false; //variable para identificar si está apretado el mouse
$grillaPixeles.find("div").mousedown(function(){
  console.log("mouse apretado");
  mouseApretado = true;
});
$grillaPixeles.find("div").mouseup(function(){
  console.log("mouse NO apretado");
  mouseApretado = false;
});
//PINTAR EN MOVIMIENTO
function pintarEnMovimiento(){
  $pixelesGrilla.each(function(){
    if(mouseApretado==true){
      $(event.target).css("background-color", colorSeleccionado);
    }
  });
}
$grillaPixeles.mousemove(function(){
  pintarEnMovimiento();
});
//BORRAR TODO
var $pixelesGrilla = $("#grilla-pixeles div");
$("#borrar").click(function(){ //decía algo de encadenar funciones, ver desp
  $pixelesGrilla.each(function(){
    $(this).animate({"background-color": "White"}, 1000);
  });
});
//CARGAR SUPERHEROES
$("#batman").click(function(){
  cargarSuperheroe(batman);
});
$("#wonder").click(function(){
  cargarSuperheroe(wonder);
});
$("#flash").click(function(){
  cargarSuperheroe(flash);
});
$("#invisible").click(function(){
  cargarSuperheroe(invisible);
});
//GUARDAR EL PIXEL ART:)
$("#guardar").click(function(){
  guardarPixelArt();
});
