const text = document.querySelector('#item-to-list')
const btn = document.querySelector('#add-to-list')
const list = document.querySelector('#list-items')


btn.addEventListener('click', () => {
    if(text.value === '' ) return 

    let li = document.createElement('li')
    li.textContent = text.value
    list.appendChild(li)

})

const observer = new MutationObserver(mutations => {
    console.log(mutations)
})

observer.observe(list, {childList:true})