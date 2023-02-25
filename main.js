let x = false;
document.querySelector('.btn').onclick = function(){
  let item1 = document.querySelector('.item1');
  let item2 = document.querySelector('.item2');
  let item3 = document.querySelector('.item3');
  let item5 = document.querySelector('.item4');
  let item4 = document.querySelector('.item5');
  if (x===false){
    item1.style.display = 'none';
    item2.style.display = 'none';
    item3.style.display = 'none';
    item4.style.transform = 'rotate(45deg)';
    item5.style.transform = 'rotate(-45deg)';
    x = true;
  }
  else{
    item4.style.transform = 'rotate(0deg)';
    item5.style.transform = 'rotate(0deg)';
    item1.style.display = 'block';
    item2.style.display = 'block';
    item3.style.display = 'block';
    x = false;
  }
}