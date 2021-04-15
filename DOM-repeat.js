const $root = document.getElementById('root')
const $first = document.createElement('div')
const $second = document.createElement('div')
const $third = document.createElement('div')

$root.append($first)
$root.append($second)
$root.append($third)

const width = 150
const height = 150

const $nodeElements = [$first, $second, $third]


$nodeElements.forEach(function ($div) {
    $first.style.width = width + 'px'
    $first.style.height = height + 'px'
})

$first.classList.add('bordered')
$first.classList.add('colored')

function getRandomColor() {
    const COLORS = ['red', 'blue', 'green', 'orange', 'black'];
    return
    COLORS[Math.floor(Math.random() * COLORS.length)];
}
setTimeout(function () {
    console.log('setTimeout callback')
}, 1000)
setInterval(function () {
    $first.classList.toggle('powered')
    // $nodeElements.forEach(function ($div) {
    //     $div.style.backgroundColor = getRandomColor();
}, 2000);

// $first.innerHTML=
// `<p></p>`;
// $second.innerHTML= 
// `<p></p>`
// $third.innerHTML= 
// `<p></p>`


console.log($root)