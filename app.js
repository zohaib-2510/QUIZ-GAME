var a = document.querySelector('#mainbtn')
var p1 = document.querySelector('#p1').style.display='none'
var p2 = document.querySelector('#p2').style.display='none'
var ques = document.querySelector('#ques').style.display='none'
var qbtn1 = document.querySelector('#qbtn1').style.display='none'
var qbtn2 = document.querySelector('#qbtn2').style.display='none'
var bg = document.querySelector('.bg').style.display='none'
a.addEventListener('click',function(){
    a = document.querySelector('#mainbtn').style.display='none'
    
 p1 = document.querySelector('#p1').style.display='flex'
 p2 = document.querySelector('#p2').style.display='flex'
 ques = document.querySelector('#ques').style.display='flex'
 qbtn1 = document.querySelector('#qbtn1').style.display='flex'
 qbtn2 = document.querySelector('#qbtn2').style.display='flex'


})
lo = document.querySelector('#p1')
loi = document.querySelector('#p2')
ko = document.querySelector('.ko')
ko.addEventListener('click',function(){
 

     lo.innerHTML="POINTS: 1;"
     loi.innerHTML="MARK: 10;"
    
 bg = document.querySelector('.bg').style.display='flex'
    
})

bg.addEventListener('click',function(){
 
ques.innerHTML="What is the most common surname in the United States?"
qbtn1.innerHTML="JHON"
qbtn2.innerHTML="SMITH"
    
    console.log(ques);
})
