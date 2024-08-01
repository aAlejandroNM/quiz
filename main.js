// BASES DE DATOS
const DB_cursos =[
    {
        id : "1",
        nombre_curso : "Matematicas",
        descripcion : "esta es la descripcion"
    },
    {
        id : "2",
        nombre_curso : "Fisica",
        descripcion : "esta es la descripcion"
    },
    {
        id : "3",
        nombre_curso : "NodeJS",
        descripcion : "esta es la descripcion"
    }
]


//FUNCION CREAR CURSOS
const crearCurso = function(){
    let id = prompt("ingrese un id para el nuevo curso");
    let nombre_curso = prompt("Ingrese el nombre del nuevo Curso");
    let descripcion = prompt("ingrese la descripcion del curso");

    let curso = {}
    

    try {
        curso.id = id
        curso.nombre_curso =nombre_curso;
        curso.descripcion = descripcion;
    //     let cursos =`<tr >
    //     <td>${id} </td>
    //     <td>${nombre_curso} </td>
    //     <td>${descripcion} </td>
    //     <td>
    //         <div>
    //             <button id="editar" onclick="editarCurso()" type="submit"><a
    //                     href="editar.html"></a>Editar</a></button>
    //         </div>
    //     </td>
    //     <td>
    //         <div>

    //             <button id="eliminar" onclick="eliminarCurso()" type="submit">Eliminar</button>
    //         </div>
    //     </td>
    // </tr>`;
        
        DB_cursos.push(curso);
        //document.getElementById(`cursos`).innerHTML = cursos;
    } catch (error) {
        console.error(error)
    }
    alert(`Curso agregado con exito!!!!!`)
    console.log(`Los cursos actuales son:`,DB_cursos)
}

// FUNCION ELIMINAR CURSOS
const eliminarCurso = function(){
    
    let solicitud = prompt("Ingrese el id que desea eliminar:");
    let contador =0;
    for (const curso of DB_cursos) {
        contador++
        if (solicitud === curso.id){
            DB_cursos.splice(contador-1,1)
        }
    }
    alert("curso eliminado con exito!!!!!!")
}

// FUNCION MODIFICAR CURSOS
const editarCurso = function(){
    let solicitud = prompt("ingrese el id del curso que desea modificar");
    for (const curso of DB_cursos) {
        if(solicitud === curso.id){
            curso.nombre_curso = prompt("ingrese el nuevo nombre del curso");
            curso.descripcion = prompt("ingrese la nueva descripcion del curso ")
            alert("Curso actualizado con exito !!!!")
        }
    }
    console.log("esta es la lista de cursos actualizada", DB_cursos)
}



