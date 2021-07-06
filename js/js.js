const fecha = new Date();


function guardarxd(){
    var hist = document.getElementById('principal');
    var nota = "";
    nota = document.getElementById('notas').value;

    
    var nota_1 = document.createElement("textarea");
    var fecha_coment = document.createElement("small");
 
    nota_1.classList.add("form-control");
    nota_1.classList.add("bg-info");
    nota_1.classList.add("text-white");
    nota_1.innerHTML = nota;
    fecha_coment.innerHTML = fecha.toLocaleDateString();
    fecha_coment.classList.add("offset-6");

    hist.append(nota_1);
    hist.append(fecha_coment);
    hist.append(salto_linea);
}