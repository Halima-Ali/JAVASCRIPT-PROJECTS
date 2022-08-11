const dragArea = document.querySelector('.wrapper');
const dragArea2 = document.querySelector('.container');


new Sortable(dragArea, {
 animation: 350,
 handle: ".handle"
});

new Sortable(dragArea2, {
 animation: 350,
});