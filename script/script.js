//sns디자인
const sns_popup = document.querySelector('#sns_popup')
const sns_a = document.querySelectorAll('#project_design_sns_design a')
const sns_popup_img = document.querySelector('#sns_popup img')

sns_popup.style.display = 'none'

sns_a.forEach(function(t,i,a){
    console.log(t,i,a)
    t.addEventListener('click',function(e){
        e.preventDefault()
        sns_popup.style.display = 'block'
        sns_popup_img.src = `./images/design/sns/sns${i+1}.jpg`
    })
})

sns_popup.addEventListener('click',function(){
    sns_popup.style.display = 'none'
})