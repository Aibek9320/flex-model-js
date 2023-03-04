 const CREATE_FLEX_BTN = document.querySelector('#create-flex-model');
const BTNS_CONTAINER = document.createElement('div');
const BOX_CONTAINER = document.createElement('div');
const ADD_ITEMS = document.createElement('button');
ADD_ITEMS.textContent = 'Add items';
const DEL_ITEMS = document.createElement('button')
DEL_ITEMS.textContent = 'Delete items'

 const BTNS = ['display:flex', 'justify-content:center', 'justify-content:space-around', 'justify-content:space-between', 'align-items:center', 'align-items:flex-end' ];
 const BOX_ITEMS = ['box1', 'box2', 'box3', 'box4']

 const create_btns = () => {
    for(let i = 0; i < BTNS.length; i++ ){
        const btns = document.createElement('button')
        btns.textContent = BTNS[i]
        BTNS_CONTAINER.appendChild(btns)
        btns.addEventListener('click', () => {
            BOX_CONTAINER.classList.toggle(`${btns.textContent};`)
            BOX_CONTAINER.style = BOX_CONTAINER.classList
        })
    }
    document.body.appendChild(BTNS_CONTAINER)
    document.body.appendChild(ADD_ITEMS)
    document.body.appendChild(DEL_ITEMS)
    CREATE_FLEX_BTN.removeEventListener('click', create_btns)
 }

 CREATE_FLEX_BTN.addEventListener('click', create_btns)

 const add_items = () => {
    for(let i = 0; i < BOX_ITEMS.length; i++){
        const box = document.createElement('div')
        box.setAttribute('class', `box ${BOX_ITEMS[i]}`)
        BOX_CONTAINER.appendChild(box)
    }
    document.body.appendChild(BOX_CONTAINER);
 }
 ADD_ITEMS.addEventListener('click', add_items)
 
const del_items = () => {
    BOX_CONTAINER.removeChild(box)
}
DEL_ITEMS.addEventListener('click', del_items)
 