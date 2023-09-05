//bai 1
    let a = document.getElementById('st1')
    let b = document.getElementById('st2')
    let c = document.getElementById('st3')

    let sapXep = document.getElementById('sapXep')
    sapXep.addEventListener('click',() => {
        let arr = [+a.value,+b.value,+c.value]
        arr.sort((a,b) => {
            return a-b
        })
        console.log(arr)
        document.getElementById("result1").innerText = `Các số sau khi sắp xếp tăng dần: ${arr.join(', ')} `
    })







// bai 2


let start = document.getElementById('startChat')
let member = ['bố','nhật','mẹ','anh','chị',"ông",'bà','yến','thảo','hiếu','em','cô','chú','bác','mentor','thắng','dũng','xuân','chi','phong']
let send = document.getElementById('send')
// click to start
start.addEventListener('click',function(){
    let start = document.querySelector('.start')
    let overLay = document.querySelector('.overLay')
    start.classList.add('disappear')
    overLay.classList.add("disappear")
    let ask = document.querySelector(".ask")
    ask.classList.remove('disappear')
    let ask_content = document.getElementById('ask__content')
    ask_content.classList.add('disappear')
    setTimeout(() => {
        let waiting = document.querySelector('.ask__content__first .waitting').style.display = 'none'
        ask_content.classList.remove('disappear')
    }, 1000);
})

// click to send mess
send.addEventListener('click',function(){
    let count = 0
    let form = document.querySelector('form')
    let input = document.getElementById('input').value;
    let inputArr = input.split(' ');
    member.forEach(function(member){
       let result =  inputArr.find(function(person) {
            return person.toLowerCase() == member
        })
        if(result != undefined){
            document.getElementById('anwser__content__last').innerText = `Chào ${result}`
        }
        else{
           count++
        }
    })      
    
    if(count == member.length){
        document.getElementById('anwser__content__last').innerText = `Toi ko hieu`
    }
    
    document.querySelector(".answer p").innerHTML = input
    document.querySelector(".answer").classList.remove("disappear")
    form.reset()
    document.getElementById('anwser__content__last').classList.add('disappear')
    setTimeout(() => {
        document.querySelector(".answer__last").classList.remove('disappear')
        setTimeout(() => {
            let waiting =  document.querySelector('.answer__last .waitting')
            waiting.style.display ='none'
            document.getElementById('anwser__content__last').classList.remove('disappear')
        },1000);
    }, 1000);
    form.reset()
    })


// bai 3
  let st1 = document.getElementById('st1b3')
  let st2 = document.getElementById('st2b3')
  let st3 = document.getElementById('st3b3')
  let count = document.getElementById('count')
  let odd = 0, even = 0

  count.addEventListener('click',() => {
    let arr = [+st1.value,+st2.value,+st3.value]
    arr.forEach(function(ele){
        if(ele % 2 ==0){
            even++
        }
        else{
            odd++
        }
    })
    document.getElementById('result3').innerText = `Có ${odd} số lẻ và ${even} số chẵn`
  })

// bai 4



let tamGiac = document.getElementById('tamGiac')
tamGiac.addEventListener('click',function(){
    let result = ''
    let t1 = +document.getElementById('t1').value
    let t2 = +document.getElementById('t2').value
    let t3 = +document.getElementById('t3').value

    if(t1 == t2 && t1 != t3){
        result = 'tam giác cân '
    }
    if(t1 == t2 && t1 == t3){
        result = 'tam giác đều'
    }
    if(Math.pow(t1,2) + Math.pow(t2,2) == Math.pow(t3,2)){
        result = "tam giác vuông"
    }
    if(Math.pow(t1,2) + Math.pow(t2,2) == Math.pow(t3,2) && t1 == t2){
        result = "tam giác vuông cân"
    }

    document.getElementById('result4').innerText = `Đây là ${result}`
})

