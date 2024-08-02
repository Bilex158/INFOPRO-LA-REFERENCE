document.addEventListener("DOMContentLoaded", () => {
    const params=new URLSearchParams(window.location.search)
    const id= params.get("idParent")
    const idEnfant= params.get("idEnfant")
    
    if (!idEnfant) {
        const imageElement = document.getElementById("p");
        imageElement.src = data[id].image; 
        
        const montitre = document.getElementById('1');
        montitre.textContent = `\n ${data[id].titre}.\n `;
        const monParagraphe = document.getElementById('a');
        monParagraphe.textContent = `\n ${data[id].Description}.\n `;
    }else{
        console.log(data[id].filières[idEnfant])
        const imageElement = document.getElementById("p");
        imageElement.src = data[id].filières[idEnfant].image; 
        
        const montitre = document.getElementById('1');
        montitre.textContent = `\n ${data[id].filières[idEnfant].titre}.\n `;
        const monParagraphe = document.getElementById('a');
        monParagraphe.textContent = `\n ${data[id].filières[idEnfant].Description}.\n `;
    }
    
    
    // Obtenez une référence à l'élément parent où vous souhaitez ajouter les divs
    const parentElement = document.getElementById('filiere');

    // Créez un nouvel élément div avec les mêmes attributs et contenu
    data[id].filières.map((item, index)=> {
        if (idEnfant && index != idEnfant) {
            const newDiv = document.createElement('div');
            newDiv.className = 'mx-5 d-flex gy-5 container-fluid d-flex border border-1 mb-2 shadow-sm p-3 rounded pb-3';
            newDiv.style.height = '185px';
            newDiv.style.width = '500px';

            newDiv.innerHTML = `
                <img class="d-flex border border-1 rounded" src="${data[id].filières[index].image}" alt="" id="o"
                    style="height: 150px; width: 200px;">
                <div  style="overflow: hidden"  class="mx-2">
                    <a href="${window.location.href.split('&')[0]}&idEnfant=${index}">
                        <h6 style="color: #1a4b; width: 235px;" id="20">${data[id].filières[index].titre}</h6>
                    </a>
                    <p id="21">${data[id].filières[index].Description}</p>
                </div>
            `;
            // Ajoutez le nouvel élément div à l'élément parent
            parentElement.appendChild(newDiv);
        }
        if (!idEnfant) {
            const newDiv = document.createElement('div');
            newDiv.className = 'mx-5 d-flex gy-5 container-fluid d-flex border border-1 mb-2 shadow-sm p-3 rounded pb-3';
            newDiv.style.height = '185px';
            newDiv.style.width = '500px';

            newDiv.innerHTML = `
                <img class="d-flex border border-1 rounded" src="${data[id].filières[index].image}" alt="" id="o"
                    style="height: 150px; width: 200px;">
                <div  style="overflow: hidden"  class="mx-2">
                    <a href="${window.location.href.split('&')[0]}&idEnfant=${index}">
                        <h6 style="color: #1a4b; width: 235px;" id="20">${data[id].filières[index].titre}</h6>
                    </a>
                    <p id="21">${data[id].filières[index].Description}</p>
                </div>
            `;
            // Ajoutez le nouvel élément div à l'élément parent
            parentElement.appendChild(newDiv);
        }
    })


})


// Exemple de données JSON
//const donnees = {
    //nom: "John Doe",
   // age: 30
  //};
  
  // Afficher les données dans un élément HTML
  //document.getElementById('myElement').innerHTML = `
   // <p><b>Nom</b>: ${donnees.nom}</p>
   // <p><b>Âge</b>: ${donnees.age}</p>
 // `;
  