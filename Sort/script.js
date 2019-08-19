const btn1 = document.getElementById('button1');
 btn2 = document.getElementById('button2'),
 array = [2, 4, 1, 3],
 num1 = document.getElementById("numberBox1"),
 num2 = document.getElementById("numberBox2"),
 num3 = document.getElementById("numberBox3"),
 num4 = document.getElementById("numberBox4");
document.getElementById("numberBox1").innerHTML = array[0];
document.getElementById("numberBox2").innerHTML = array[1];
document.getElementById("numberBox3").innerHTML = array[2];
document.getElementById("numberBox4").innerHTML = array[3];
btn1.addEventListener('click',sortAsc = () => {
  array.sort((a,b) => a-b);
  num1.innerHTML = array[0];
  num2.innerHTML = array[1];
  num3.innerHTML = array[2];
  num4.innerHTML = array[3];
  document.getElementById('button1').classList.add('hide');
  document.getElementById('button2').classList.remove('hide');
});
btn2.addEventListener('click',sortDesc = () => {
  array.sort((a,b) => b-a);
  num1.innerHTML = array[0];
  num2.innerHTML = array[1];
  num3.innerHTML = array[2];
  num4.innerHTML = array[3];
  document.getElementById('button2').classList.add('hide');
  document.getElementById('button1').classList.remove('hide');
});
