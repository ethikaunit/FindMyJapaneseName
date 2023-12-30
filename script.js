function NameGenerater(name){
    const username = name.toUpperCase();
let list = username.split("")
const len = username.length;
console.log("user name is :" +username);

for(j=len-len;j<=len;j++){
    for(i=j;i<=j;i++){
       
  switch (list[i]) {
  case 'A':
    list[i] = 'KA';
    break;
  case 'B':
    list[i] = 'ZU';
    break;
  case 'C':
    list[i] = 'MI';
    break;
  case 'D':
    list[i] = 'TE';
    break;
  case 'E':
    list[i] = 'MU';
    break;
  case 'F':
    list[i] = 'LI';
    break;
  case 'G':
    list[i] = 'JI';
    break;
  case 'H':
    list[i] = 'RI';
    break;
  case 'I':
    list[i] = 'KI';
    break;
  case 'J':
    list[i] = 'ZU';
    break;
  case 'K':
    list[i] = 'ME';
    break;
  case 'L':
    list[i] = 'TA';
    break;
  case 'M':
    list[i] = 'RIN';
    break;
  case 'N':
    list[i] = 'TO';
    break;
  case 'O':
    list[i] = 'MO';
    break;
  case 'P':
    list[i] = 'NO';
    break;
  case 'Q':
    list[i] = 'KE';
    break;
  case 'R':
    list[i] = 'SHI';
    break;
  case 'S':
    list[i] = 'ARI';
    break;
  case 'T':
    list[i] = 'CHI';
    break;
  case 'U':
    list[i] = 'DO';
    break;
  case 'V':
    list[i] = 'RU';
    break;
  case 'W':
    list[i] = 'MEI';
    break;
  case 'X':
    list[i] = 'NA';
    break;
  case 'Y':
    list[i] = 'FU';
    break;
  case 'Z':
    list[i] = 'ZI';
    break;
    
  default:
  
    break;
}
}
}
const genname = document.getElementById('genname');
genname.innerText = list.join('');



}

const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', function(){
const username = input.value;
NameGenerater(username);
    
});


