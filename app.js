let array= [1, 9, 24, 15];
let n= 16;

function challenge(array, n){
  let cuenta= 0;
  for(i= 0; i< array.length; i++){
      for(j= i+1; j< array.length; j++){
          cuenta= array[i] + array[j];
          console.log(cuenta)
          if(cuenta === n) {
              return cuenta
          } else {
              continue
          }
      }
  } return false
};

console.log(challenge(array, n))