simplyCountdown('#cuenta', {
    year: 2022, // required
    month: 11, // required
    day: 18, // required
    hours: 15, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Dia', plural: 'Dias' },
        hours: { singular: 'Hora', plural: 'Horas' },
        minutes: { singular: 'Min.', plural: 'Min.' },
        seconds: { singular: 'Seg.', plural: 'Seg.' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    onEnd: function() { 
        alert('Finalizo')
        return; 
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

const sectionClass = document.getElementsByClassName('simply-section')
for(let x of sectionClass) {
    x.classList.add('border-2', 'border-dorado', 'min-w-50px', 'min-h-50px', 'rounded-lg', 'bg-back', 'w-12', 'h-12')
    x.firstChild.classList.add('flex', 'flex-col', 'items-center')
}

const wordClass = document.getElementsByClassName('simply-word')
for(let x of wordClass) {
    x.classList.add('text-sm')
}

const wuBtn = document.getElementById('wu')
const zelleBtn = document.getElementById('zelle')
const wuData = document.getElementById('wu-datos')
const zelleData = document.getElementById('zelle-datos')

wuBtn.addEventListener('click', e => {
    wuData.classList.remove('hidden')
    wuData.classList.add('flex')
    zelleData.classList.remove('flex')
    zelleData.classList.add('hidden')
    wuData.classList.add('animate__backInLeft')
})
zelleBtn.addEventListener('click', e => {
    zelleData.classList.remove('hidden')
    zelleData.classList.add('flex')
    wuData.classList.remove('flex')
    wuData.classList.add('hidden')
    zelleData.classList.add('animate__backInRight')
})

