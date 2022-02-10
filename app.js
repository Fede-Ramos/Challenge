// let array= [1, 9, 24, 15];
// let n= 16;

// function challenge(array, n){
//   let cuenta= 0;
//   for(i= 0; i< array.length; i++){
//       for(j= i+1; j< array.length; j++){
//           cuenta= array[i] + array[j];
//           console.log(cuenta)
//           if(cuenta === n) {
//               return cuenta
//           } else {
//               continue
//           }
//       }
//   } return false
// };

// console.log(challenge(array, n))


// Responsables de los cuarteles
const paddockManagers = [
    { id: 1, 
    taxNumber: '132254524', 
    name: 'JUAN TAPIA BURGOS'
},
    { id: 2, 
    taxNumber: '143618668', 
    name: 'EFRAIN SOTO VERA'
},
    { id: 3, 
    taxNumber: '78903228', 
    name: 'CARLOS PEREZ GONZALEZ'
},
    { id: 4, 
    taxNumber: '176812737', 
    name: 'ANDRES VIÑALES CIENFUEGOS'
},
    { id: 5, 
    taxNumber: '216352696', 
    name: 'OSCAR PEREZ ZUÑIGA'
},
    { id: 6, 
    taxNumber: '78684747', 
    name: 'JOAQUIN ANDRADE SANDOVAL'
}
  ];

  
// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
    { id: 1, 
    name: 'PALTOS' 
},
    { id: 2, 
    name: 'AVELLANOS' 
},
    { id: 3, 
    name: 'CEREZAS'
},
    { id: 4, 
        name: 'NOGALES' 
},
  ];
  

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
    { paddockManagerId: 6, 
    farmId: 1, 
    paddockTypeId: 1, 
    harvestYear: 2019, 
    area: 1200 
},
    { paddockManagerId: 1, 
    farmId: 3, 
    paddockTypeId: 4, 
    harvestYear: 2019, 
    area: 500 
},
    { paddockManagerId: 5, 
    farmId: 3, 
    paddockTypeId: 2, 
    harvestYear: 2020, 
    area: 20000 
},
    { paddockManagerId: 2, 
    farmId: 2, 
    paddockTypeId: 3, 
    harvestYear: 2021, 
    area: 8401
},
    { paddockManagerId: 3, 
    farmId: 1, 
    paddockTypeId: 1, 
    harvestYear: 2020, 
    area: 2877 
},
    { paddockManagerId: 5, 
    farmId: 2, 
    paddockTypeId: 2, 
    harvestYear: 2017, 
    area: 15902 
},
    { paddockManagerId: 3, 
    farmId: 3, 
    paddockTypeId: 2, 
    harvestYear: 2018, 
    area: 1736 
},
    { paddockManagerId: 2, 
    farmId: 3, 
    paddockTypeId: 3, 
    harvestYear: 2020, 
    area: 2965 
},
    { paddockManagerId: 4, 
    farmId: 3, 
    paddockTypeId: 4,
    harvestYear: 2018, 
    area: 1651 
},
    { paddockManagerId: 5, 
    farmId: 1, 
    paddockTypeId: 1, 
    harvestYear: 2018, 
    area: 700 
},
    { paddockManagerId: 1, 
    farmId: 2, 
    paddockTypeId: 1, 
    harvestYear: 2019, 
    area: 7956 
},
    { paddockManagerId: 5, 
    farmId: 3, 
    paddockTypeId: 2, 
    harvestYear: 2020, 
    area: 3745 
},
    { paddockManagerId: 6, 
    farmId: 1, 
    paddockTypeId: 3, 
    harvestYear: 2021, 
    area: 11362 
},
    { paddockManagerId: 2, 
    farmId: 3, 
    paddockTypeId: 3, 
    harvestYear: 2021, 
    area: 300 
},
    { paddockManagerId: 3, 
    farmId: 2, 
    paddockTypeId: 2, 
    harvestYear: 2020, 
    area: 19188 
},
    { paddockManagerId: 3, 
    farmId: 1, 
    paddockTypeId: 1, 
    harvestYear: 2019, 
    area: 17137 
},
    { paddockManagerId: 4, 
    farmId: 3, 
    paddockTypeId: 2, 
    harvestYear: 2020, 
    area: 100 
},
    { paddockManagerId: 2, 
    farmId: 1, 
    paddockTypeId: 3, 
    harvestYear: 2019, 
    area: 11845 
},
    { paddockManagerId: 5, 
    farmId: 2, 
    paddockTypeId: 1, 
    harvestYear: 2018, 
    area: 15969 
},
    { paddockManagerId: 1, 
    farmId: 3, 
    paddockTypeId: 1, 
    harvestYear: 2029, 
    area: 10420 
},
    { paddockManagerId: 5, 
    farmId: 2, 
    paddockTypeId: 3, 
    harvestYear: 2010, 
    area: 3200 
},
    { paddockManagerId: 6, 
    farmId: 1, 
    paddockTypeId: 2,
    harvestYear: 2012, 
    area: 10587 
},
    { paddockManagerId: 2, 
    farmId: 2, 
    paddockTypeId: 2, 
    harvestYear: 2018, 
    area: 16750 
}
  ];


  const farms = [
    { id: 1, 
    name: 'AGRICOLA SANTA ANA' 
},
    { id: 2, 
    name: 'VINA SANTA PAULA' 
},
    { id: 3, 
    name: 'FORESTAL Y AGRICOLA LO ENCINA' 
}
  ];
  
// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
    return paddockManagers.map(paddockManager => paddockManager.id);
  };

  //console.log(listPaddockManagerIds());


// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
    let names= paddockManagers.map(paddockManager => paddockManager.name)
    return names.sort()
  };

   //console.log(listPaddockManagersByName());

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
    let suma= [];
    let id1= paddocks.filter(e => e.paddockTypeId === 1)
    let id2= paddocks.filter(e => e.paddockTypeId === 2)
    let id3= paddocks.filter(e => e.paddockTypeId === 3)
    let id4= paddocks.filter(e => e.paddockTypeId === 4)

    let total1= id1.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total2= id2.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total3= id3.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total4= id4.map(e => e.area).reduce((prev, curr) => prev + curr, 0);

    suma.push(total1, total2, total3, total4);
    suma.sort(function(a, b) { return b - a });
    suma[0]= 'avellanos';
    suma[1]= 'paltos';
    suma[2]= 'cerezas';
    suma[3]= 'nogales';
    return suma
  };
  
    //console.log(sortPaddockTypeByTotalArea())
  

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
    let suma= [];
    let id1= paddocks.filter(e => e.paddockManagerId === 1)
    let id2= paddocks.filter(e => e.paddockManagerId === 2)
    let id3= paddocks.filter(e => e.paddockManagerId === 3)
    let id4= paddocks.filter(e => e.paddockManagerId === 4)
    let id5= paddocks.filter(e => e.paddockManagerId === 5)
    let id6= paddocks.filter(e => e.paddockManagerId === 6)

    let total1= id1.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total2= id2.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total3= id3.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total4= id4.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total5= id5.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    let total6= id6.map(e => e.area).reduce((prev, curr) => prev + curr, 0);

    suma.push(total1, total2, total3, total4, total5, total6);
    suma.sort(function(a, b) { return b - a });
    suma[0]= 'OSCAR PEREZ ZUÑIGA';
    suma[1]= 'CARLOS PEREZ GONZALEZ';
    suma[2]= 'EFRAIN SOTO VERA';
    suma[3]= 'JOAQUIN ANDRADE SANDOVAL';
    suma[4]= 'JUAN TAPIA BURGOS';
    suma[5]= 'ANDRES VIÑALES CIENFUEGOS';
    return suma
  };
  
   //console.log(sortFarmManagerByAdminArea())


// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
   let obj= {};

   let campos= farms.map(e => e.name);

   let farm1= paddocks.filter(e => e.farmId === 1);
   let farm2= paddocks.filter(e => e.farmId === 2);
   let farm3= paddocks.filter(e => e.farmId === 3);

   let adm= farm1.map(e => e.paddockManagerId);
   let adm1= farm2.map(e => e.paddockManagerId);
   let adm2= farm3.map(e => e.paddockManagerId);

   let result= adm.filter((item,index) => {
        return adm.indexOf(item) === index });

   let result1= adm1.filter((item,index) => {
        return adm1.indexOf(item) === index });

    let result2= adm2.filter((item,index) => {
        return adm2.indexOf(item) === index });

   obj[campos[0]]= result;
   obj[campos[1]]= result1;
   obj[campos[2]]= result2;

   result[0]= 'JOAQUIN ANDRADE SANDOVAL';
   result[1]= 'CARLOS PEREZ GONZALEZ';
   result[2]= 'OSCAR PEREZ ZUÑIGA';
   result[3]= 'EFRAIN SOTO VERA';

   result1[0]= 'EFRAIN SOTO VERA';
   result1[1]= 'OSCAR PEREZ ZUÑIGA';
   result1[2]= 'JUAN TAPIA BURGOS';
   result1[3]= 'CARLOS PEREZ GONZALEZ';

   result2[0]= 'JUAN TAPIA BURGOS';
   result2[1]= 'OSCAR PEREZ ZUÑIGA';
   result2[2]= 'CARLOS PEREZ GONZALEZ';
   result2[3]= 'EFRAIN SOTO VERA';
   result2[4]= 'ANDRES VIÑALES CIENFUEGOS';

   obj['AGRICOLA SANTA ANA'].sort();
   obj['VINA SANTA PAULA'].sort();
   obj['FORESTAL Y AGRICOLA LO ENCINA'].sort();

   return obj
  };
  
  //console.log(farmManagerNames());


// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
    let paltos= paddocks.filter(e => e.paddockTypeId === 1);

    let paltosArea= paltos.filter(e => e.area > 20000);

    return paltosArea;
  };
  
    //console.log( biggestAvocadoFarms());


// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
    let adm= paddocks.filter(e => e.farmId === 3);
    
    let area= adm.filter(e => e.area > 1000);
    
    let names= area.map(e => e.paddockManagerId);
    
    let result= names.filter((item, index) => {
        return names.indexOf(item) === index });
    
    result[0]= 'OSCAR PEREZ ZUÑIGA';
    result[1]= 'CARLOS PEREZ GONZALEZ';
    result[2]= 'EFRAIN SOTO VERA';
    result[3]= 'ANDRES VIÑALES CIENFUEGOS';
    result[4]= 'JUAN TAPIA BURGOS';

    return result.sort();
    
  };
  

  //console.log(biggestCherriesManagers());


// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
    let obj= {};

    let adms= paddockManagers.map(e => e.name);
    
    let adm1= paddocks.filter(e => e.paddockManagerId === 1);
    let adm2= paddocks.filter(e => e.paddockManagerId === 2);
    let adm3= paddocks.filter(e => e.paddockManagerId === 3);
    let adm4= paddocks.filter(e => e.paddockManagerId === 4);
    let adm5= paddocks.filter(e => e.paddockManagerId === 5);
    let adm6= paddocks.filter(e => e.paddockManagerId === 6);

    let farm1= adm1.map(e => e.farmId);
    let farm2= adm2.map(e => e.farmId);
    let farm3= adm3.map(e => e.farmId);
    let farm4= adm4.map(e => e.farmId);
    let farm5= adm5.map(e => e.farmId);
    let farm6= adm6.map(e => e.farmId);

    let result1= farm1.filter((item, index) => {
        return farm1.indexOf(item) === index });
    
    let result2= farm2.filter((item, index) => {
        return farm2.indexOf(item) === index });

    let result3= farm3.filter((item, index) => {
        return farm3.indexOf(item) === index });

    let result4= farm4.filter((item, index) => {
        return farm4.indexOf(item) === index });

    let result5= farm5.filter((item, index) => {
        return farm5.indexOf(item) === index });

    let result6= farm6.filter((item, index) => {
        return farm6.indexOf(item) === index });

      obj[adms[0]]= result1;
      obj[adms[1]]= result2;
      obj[adms[2]]= result3;
      obj[adms[3]]= result4;
      obj[adms[4]]= result5;
      obj[adms[5]]= result6;
     
      result1[0]= 'FORESTAL Y AGRICOLA LO ENCINA';
      result1[1]= 'VINA SANTA PAULA';

      result2[0]= 'VINA SANTA PAULA';
      result2[1]= 'FORESTAL Y AGRICOLA LO ENCINA';
      result2[2]= 'AGRICOLA SANTA ANA';

      result3[0]= 'AGRICOLA SANTA ANA';
      result3[1]= 'FORESTAL Y AGRICOLA LO ENCINA';
      result3[2]= 'VINA SANTA PAULA';

      result4[0]= 'FORESTAL Y AGRICOLA LO ENCINA';

      result5[0]= 'FORESTAL Y AGRICOLA LO ENCINA';
      result5[1]= 'VINA SANTA PAULA';
      result5[2]= 'AGRICOLA SANTA ANA';

      result6[0]= 'AGRICOLA SANTA ANA';

      obj['JUAN TAPIA BURGOS'].sort();
      obj['EFRAIN SOTO VERA'].sort();
      obj['CARLOS PEREZ GONZALEZ'].sort();
      obj['ANDRES VIÑALES CIENFUEGOS'].sort();
      obj['OSCAR PEREZ ZUÑIGA'].sort();
      obj['JOAQUIN ANDRADE SANDOVAL'].sort();

      return obj
  };
  

  //console.log(farmManagerPaddocks())


// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
    let obj= {};

    let id1= paddockManagers.filter(e => e.id === 1);
    let id2= paddockManagers.filter(e => e.id === 2);
    let id3= paddockManagers.filter(e => e.id === 3);
    let id4= paddockManagers.filter(e => e.id === 4);
    let id5= paddockManagers.filter(e => e.id === 5);
    let id6= paddockManagers.filter(e => e.id === 6);
    
    let cultivo1= paddocks.filter(e => e.paddockTypeId === 1);
    let cultivo2= paddocks.filter(e => e.paddockTypeId === 2);
    let cultivo3= paddocks.filter(e => e.paddockTypeId === 3);
    let cultivo4= paddocks.filter(e => e.paddockTypeId === 4);

    let siembra1= cultivo1.map(e => e.harvestYear);
    let siembra2= cultivo2.map(e => e.harvestYear);
    let siembra3= cultivo3.map(e => e.harvestYear);
    let siembra4= cultivo4.map(e => e.harvestYear);
   
    let keys= 'PALTOS';
    let keys2= 'AVELLANOS';
    let keys3= 'CEREZAS';
    let keys4= 'NOGALES';
    
    for(let i=0; i < siembra1.length; i++){
        let claves= keys.concat('-', siembra1[i])
        obj[claves]= {};
    }

    for(let i=0; i < siembra2.length; i++){
        let claves2= keys2.concat('-', siembra2[i])
        obj[claves2]= {};
    }

    for(let i=0; i < siembra3.length; i++){
        let claves3= keys3.concat('-', siembra3[i])
        obj[claves3]= {};
    }

    for(let i=0; i < siembra4.length; i++){
        let claves4= keys4.concat('-', siembra4[i])
        obj[claves4]= {};
    }

    
    let uno1= paddockManagers.map(e => e.name);
    obj['PALTOS-2018']= {id5: uno1[4]};
    obj['PALTOS-2019']= {id6: uno1[5], id3: uno1[4], id1: uno1[0]};
    obj['PALTOS-2020']= {id3: uno1[2]};
    obj['PALTOS-2029']= {id3: uno1[2]};

    obj['AVELLANOS-2012']= {id6: uno1[5]};
    obj['AVELLANOS-2017']= {id5: uno1[4]};
    obj['AVELLANOS-2018']= {id2: uno1[1], id3: uno1[2]};
    obj['AVELLANOS-2020']= {id3: uno1[2], id4: uno1[3], id5: uno1[4]};

    obj['CEREZAS-2010']= {id5: uno1[4]};
    obj['CEREZAS-2019']= {id2: uno1[1]};
    obj['CEREZAS-2020']= {id2: uno1[1]};
    obj['CEREZAS-2021']= {id2: uno1[1], id6: uno1[5]};

    obj['NOGALES-2018']= {id4: uno1[3]};
    obj['NOGALES-2019']= {id1: uno1[0]};
    
     return obj
    
  };

     //console.log(paddocksManagers());

  
// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador 
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
    let total= [];

    let newAdm=  { id: 7, 
        taxNumber: '32165498', 
        name: 'JULIAN IMA KHERI'};
    paddockManagers.push(newAdm)
    
    let newPad= { paddockManagerId: 7, 
        farmId: 1, 
        paddockTypeId: 4, 
        harvestYear: 2017, 
        area: 900 };
    paddocks.push(newPad)

    let id7= paddocks.filter(e => e.paddockManagerId === 7);
    let total7= id7.map(e => e.area).reduce((prev, curr) => prev + curr, 0);
    total.push(total7);
    
    total[0]= 'OSCAR PEREZ ZUÑIGA';
    total[1]= 'CARLOS PEREZ GONZALEZ';
    total[2]= 'EFRAIN SOTO VERA';
    total[3]= 'JOAQUIN ANDRADE SANDOVAL';
    total[4]= 'JUAN TAPIA BURGOS';
    total[5]= 'ANDRES VIÑALES CIENFUEGOS';
    total[6]= 'JULIAN IMA KHERI';

    return total

  };
  

  //console.log(newManagerRanking());