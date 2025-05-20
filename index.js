var catalog = document.querySelector('.page6-catalog');

let data = [
    { src: "./assets/Catalog/pexels-brian-lazo-92810756-9404536 1.svg" },
    { src: "./assets/Catalog/pexels-mohammed-abdul-bari-991356-3733685 1.svg" },
    { src: "./assets/Catalog/pexels-matreding-9381050 1.svg" },
    { src: "./assets/Catalog/pexels-rachel-claire-7263785 1.svg" },
     { src: "./assets/Catalog/pexels-brian-lazo-92810756-9404536 1.svg" },
    { src: "./assets/Catalog/pexels-mohammed-abdul-bari-991356-3733685 1.svg" },
    { src: "./assets/Catalog/pexels-matreding-9381050 1.svg" },
    { src: "./assets/Catalog/pexels-rachel-claire-7263785 1.svg" },
];

catalog.innerHTML = data.map(item => `
  <div class="page6-insidecatalog">
    <img src="${item.src}" alt=""/>
  </div>
`).join('');
