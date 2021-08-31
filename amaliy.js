let box = document.getElementsByTagName('div');

// for(let i=0; i<box.length; i++){
//     setTimeout(()=>{
//         box[i].style.opacity = '1';
//     },(i+1)*3000)
// };

function count(){
    let i=0;
 setInterval(()=>{
    if(i==box.length){
        i=0;
        for(el of box){
            el.style.opacity='0';
        }
    }
    box[i].style.opacity='1';
    i++;
  console.log(i, box.length);
},3000);
};

count();
