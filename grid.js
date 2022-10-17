const controls = document.querySelector('#controls');
const buttons = document.querySelector('#buttons');
const gridContainer = document.querySelector('#gridContainer');
buttons.addEventListener('click',(e) => {
if (e.target.tagName !== 'BUTTON') return;
const {btn} = e.target.dataset;
switch(btn)
{
case 'addBtn':
const num = document.querySelectorAll('.grid-item').length + 1;
if(num < 7){
const newItem = document.createElement('div');
newItem.className = 'grid-item';
newItem.textContent = num;
gridContainer.append(newItem);
}
break;
case 'removeBtn':
const index = document.querySelectorAll('.grid-item').length - 1;
if(index > 0){
const itemToRemove = document.querySelectorAll('.grid-item')[index];
itemToRemove.remove();
}
break;
}
});

controls.addEventListener('change',(e)=>{
const prop = e.target.id;
const value = e.target.value;
if(e.target.parentElement.id === 'gridContainerProps'){
gridContainer.style[prop] = value;
}
else{
const selectedItem = document.querySelector('.selected');
selectedItem.style[prop] = value;
}
});

gridContainer.addEventListener('click',(e) => {
if(e.target.className !== 'grid-item'
|| e.target.classList.contains('selected'))
return;
if(document.querySelector('.selected') !== null)
document.querySelector('.selected').classList.remove('selected');
e.target.classList.add('selected');

const getStyle = (property, element = e.target) => getComputedStyle(element).getPropertyPriorityValue(property);
order.value = getStyle('order');
gridGrow.value = getStyle('grid-grow');
gridShrink.value = getStyle('grid-shrink');
alignSelf.value = getStyle('align-self');
});

