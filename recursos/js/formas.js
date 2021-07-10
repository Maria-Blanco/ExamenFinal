//FETCH API

let triaTable = document.getElementById('triaCuadro');
let indice1lista = document.querySelector('#triaCuadro section ul');
let cirTable = document.getElementById('cirCuadro');
let indice2lista = document.querySelector('#cirCuadro section ul');
let cuadTable = document.getElementById('cuadCuadro');
let indice3lista = document.querySelector('#cuadCuadro section ul');
let APIURL = 'https://my-json-server.typicode.com/Maria-Blanco/fetchAPIForma/db'

fetch (APIURL,
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 
        let tablasInfo = data;

        //TABLA TRIANGULOS
        let tabla1Info = tablasInfo.tabla1;
        
        tabla1Info.forEach(elementTable1 => {
            
            //LINKS DE PERSONAJES
            let list1Items = document.createElement("li");
            let item1links = document.createElement("a");

            item1links.innerHTML = elementTable1.link;
            item1links.setAttribute("href", "#triangulo");
            item1links.setAttribute("onclick", "ver('" + elementTable1.id + "', '" + elementTable1.linkId + "')");
            list1Items.setAttribute("class", "opcionT1");
            list1Items.setAttribute("id", elementTable1.linkId);

            indice1lista.appendChild(list1Items);
            list1Items.appendChild(item1links);

            //INFO DE PERSONAJES
            let table1InfoContainers = document.createElement("div");
            let table1Tittle = document.createElement("h4");
            let table1ImgContainer = document.createElement("section");
            let table1Img = document.createElement("img");
            let table1Info = document.createElement("p");
            let spaceBreak1 = document.createElement("br");
            let spaceBreak2 = document.createElement("br");
            let spaceBreak3 = document.createElement("br");

            table1InfoContainers.setAttribute("id", elementTable1.id);
            table1InfoContainers.setAttribute("class", "tabla1");

            table1Tittle.innerHTML = elementTable1.titulo;

            table1ImgContainer.setAttribute("class", "imagen");

            table1Img.setAttribute("src", "recursos/Imagenes/Formas/" + elementTable1.img);
            table1Img.setAttribute("alt", elementTable1.titulo);
            table1Img.setAttribute("width", "25%");
            
            table1Info.innerHTML = elementTable1.desc;

            triaTable.appendChild(table1InfoContainers);
            table1InfoContainers.appendChild(table1Tittle);
            table1InfoContainers.appendChild(spaceBreak1);
            table1InfoContainers.appendChild(table1ImgContainer);
            table1ImgContainer.appendChild(table1Img)
            table1InfoContainers.appendChild(spaceBreak2);
            table1InfoContainers.appendChild(table1Info);
            table1InfoContainers.appendChild(spaceBreak3);

        });

        //TABLA CIRCULOS
        let tabla2Info = tablasInfo.tabla2;
        
        tabla2Info.forEach(elementTable2 => {
            
            //LINKS DE PERSONAJES
            let list2Items = document.createElement("li");
            let item2links = document.createElement("a");

            item2links.innerHTML = elementTable2.link;
            item2links.setAttribute("href", "#circulo");
            item2links.setAttribute("onclick", "ver2('" + elementTable2.id + "', '" + elementTable2.linkId + "')");
            list2Items.setAttribute("class", "opcionT2");
            list2Items.setAttribute("id", elementTable2.linkId);

            indice2lista.appendChild(list2Items);
            list2Items.appendChild(item2links);

            //INFO DE PERSONAJES
            let table2InfoContainers = document.createElement("div");
            let table2Tittle = document.createElement("h4");
            let table2ImgContainer = document.createElement("section");
            let table2Img = document.createElement("img");
            let table2Info = document.createElement("p");
            let space2Break1 = document.createElement("br");
            let space2Break2 = document.createElement("br");
            let space2Break3 = document.createElement("br");

            table2InfoContainers.setAttribute("id", elementTable2.id);
            table2InfoContainers.setAttribute("class", "tabla2");

            table2Tittle.innerHTML = elementTable2.titulo;

            table2ImgContainer.setAttribute("class", "imagen");

            table2Img.setAttribute("src", "recursos/Imagenes/Formas/" + elementTable2.img);
            table2Img.setAttribute("alt", elementTable2.titulo);
            table2Img.setAttribute("width", "25%");
            
            table2Info.innerHTML = elementTable2.desc;

            cirTable.appendChild(table2InfoContainers);
            table2InfoContainers.appendChild(table2Tittle);
            table2InfoContainers.appendChild(space2Break1);
            table2InfoContainers.appendChild(table2ImgContainer);
            table2ImgContainer.appendChild(table2Img)
            table2InfoContainers.appendChild(space2Break2);
            table2InfoContainers.appendChild(table2Info);
            table2InfoContainers.appendChild(space2Break3);

        });

        //TABLA CUADRADOS
        let tabla3Info = tablasInfo.tabla3;
        
        tabla3Info.forEach(elementTable3 => {
            
            //LINKS DE PERSONAJES
            let list3Items = document.createElement("li");
            let item3links = document.createElement("a");

            item3links.innerHTML = elementTable3.link;
            item3links.setAttribute("href", "#cuadrado");
            item3links.setAttribute("onclick", "ver3('" + elementTable3.id + "', '" + elementTable3.linkId + "')");
            list3Items.setAttribute("class", "opcionT3");
            list3Items.setAttribute("id", elementTable3.linkId);

            indice3lista.appendChild(list3Items);
            list3Items.appendChild(item3links);

            //INFO DE PERSONAJES
            let table3InfoContainers = document.createElement("div");
            let table3Tittle = document.createElement("h4");
            let table3ImgContainer = document.createElement("section");
            let table3Img = document.createElement("img");
            let table3Info = document.createElement("p");
            let space3Break1 = document.createElement("br");
            let space3Break2 = document.createElement("br");
            let space3Break3 = document.createElement("br");

            table3InfoContainers.setAttribute("id", elementTable3.id);
            table3InfoContainers.setAttribute("class", "tabla3");

            table3Tittle.innerHTML = elementTable3.titulo;

            table3ImgContainer.setAttribute("class", "imagen");

            table3Img.setAttribute("src", "recursos/Imagenes/Formas/" + elementTable3.img);
            table3Img.setAttribute("alt", elementTable3.titulo);
            table3Img.setAttribute("width", "25%");
            
            table3Info.innerHTML = elementTable3.desc;

            cuadTable.appendChild(table3InfoContainers);
            table3InfoContainers.appendChild(table3Tittle);
            table3InfoContainers.appendChild(space3Break1);
            table3InfoContainers.appendChild(table3ImgContainer);
            table3ImgContainer.appendChild(table3Img)
            table3InfoContainers.appendChild(space3Break2);
            table3InfoContainers.appendChild(table3Info);
            table3InfoContainers.appendChild(space3Break3);

        });

        
});

//FUCION PARA MOSTRAR DIVS

function ver(objeto, seleccion) {
    var lista = document.getElementsByClassName('tabla1');
    var enlaces = document.getElementsByClassName('opcionT1');
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id === objeto) {
            lista[i].style.display = 'inline-block';
            if (enlaces[i].id === seleccion){
                enlaces[i].style.backgroundColor = 'steelblue';
            }
        } else {
            lista[i].style.display = 'none';
            enlaces[i].style.backgroundColor = '#6f879bbd';
        }
    }
};

function ver2(objeto, seleccion) {
    var lista = document.getElementsByClassName('tabla2');
    var enlaces = document.getElementsByClassName('opcionT2');
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id === objeto) {
            lista[i].style.display = 'inline-block';
            if (enlaces[i].id === seleccion){
                enlaces[i].style.backgroundColor = 'steelblue';
            }
        } else {
            lista[i].style.display = 'none';
            enlaces[i].style.backgroundColor = '#6f879bbd';
        }
    }
};

function ver3(objeto, seleccion) {
    var lista = document.getElementsByClassName('tabla3');
    var enlaces = document.getElementsByClassName('opcionT3');
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id === objeto) {
            lista[i].style.display = 'inline-block';
            if (enlaces[i].id === seleccion){
                enlaces[i].style.backgroundColor = 'steelblue';
            }
        } else {
            lista[i].style.display = 'none';
            enlaces[i].style.backgroundColor = '#6f879bbd';
        }
    }
};