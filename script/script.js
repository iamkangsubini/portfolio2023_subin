//1. 디자인 팝업
//상세페이지 팝업
const detail_a = document.querySelectorAll('#project_design_detailed_page a')
const detail_popup = document.querySelector('#detail_popup')
const detail_popup_img = document.querySelector('#detail_popup img')
detail_a.forEach(function(t,i,a){
    console.log(t,i,a)
    t.addEventListener('click',function(e){
        e.preventDefault();
        detail_popup.style.display = 'block'
        detail_popup_img.src = `./images/design/detailed_page/detail${i+1}_js.jpg`
    })
})

detail_popup.addEventListener('click',function(){
    detail_popup.style.display = 'none'
})

//카드뉴스 팝업
const card_a = document.querySelectorAll('#project_design_card_news a')
const card_popup = document.querySelector('#card_popup') //css에서 미리 숨겨둠 
const card_popup_img = document.querySelector('#card_popup img')
card_a[0].addEventListener('click',function(e){
    e.preventDefault();
    card_popup.style.display = 'block'
    card_popup_img.src=`./images/design/card_news/view.jpg`
})

card_popup.addEventListener('click',function(){
    card_popup.style.display = 'none'
})

//sns디자인 팝업
const sns_popup = document.querySelector('#sns_popup')
const sns_a = document.querySelectorAll('#project_design_sns_design a')
const sns_popup_img = document.querySelector('#sns_popup img')

sns_a.forEach(function(t,i,a){
    console.log(t,i,a)
    t.addEventListener('click',function(e){
        e.preventDefault();
        sns_popup.style.display = 'block'
        sns_popup_img.src = `./images/design/sns/sns${i+1}.jpg`
    })
})

sns_popup.addEventListener('click',function(){
    sns_popup.style.display = 'none'
})

//배너디자인 팝업
const banner_a = document.querySelectorAll('#project_design_banner_design a')
const banner_popup = document.querySelector('#banner_popup')
const banner_popup_img = document.querySelector('#banner_popup img')
banner_a.forEach(function(t,i,a){
    console.log(t,i,a)
    t.addEventListener('click',function(e){
        e.preventDefault();
        banner_popup.style.display = 'block'
        banner_popup_img.src = `./images/design/banner/banner${i+1}.jpg`
    })
})  

banner_popup.addEventListener('click',function(){
    banner_popup.style.display = 'none'
})

//2. 취미아이콘 팝업
//다이어리 팝업
const diary_popup = document.querySelector('#diary_popup')
const diary_a = document.querySelector('.hobby_img .diary')
const diary_img = document.querySelector('#diary_popup img')

diary_a.addEventListener('mouseover',function(e){
    e.preventDefault();
    diary_popup.style.display = 'block'
    diary_img.src = './images/mydiary.png'
})

diary_popup.addEventListener('click',function(){
    diary_popup.style.display = 'none'
})

//3. 마우스
const mouse_img = document.querySelector('#mouse')
console.log(mouse_img)
window.addEventListener('mousemove',function(e){
    // console.log(e)
    mouse_img.style.left = `${e.clientX}px` //~벤틱기호
    mouse_img.style.top = `${e.clientY}px` //~벤틱기호
})