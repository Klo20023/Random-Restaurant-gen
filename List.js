const restaurauntList = [
{restaurant : 'Cowami'},
{restaurant :  'Pollo loco'}, 
{restaurant : 'Norms'} ,
{restaurant : 'Panera'} ,
{restaurant : 'Mexican restaurant on Azusa'},
{restaurant : "pepe's"},
{restaurant : 'farmer boys'}, 
{restaurant : 'hat'},
{restaurant : 'karas'},
{restaurant : 'old wold deli'} ,
{restaurant : 'Marie callenders'},
{restaurant : 'Mongolian BBQ '},
{restaurant : 'El torito'} ,
{restaurant : 'islands'} ,
{restaurant : 'habit'} ,
{restaurant : 'in-N-Out'} ,
{restaurant : 'baby Bros'} ,
{restaurant : 'the boat'},
{restaurant : 'lazy dog'} ,
{restaurant : 'Red Robin'},
{restaurant : 'Applbee'},
{restaurant : 'Hawaiian BBQ'},
{restaurant : 'barbecue'},
{restaurant : 'sizzler'} ,
{restaurant : 'pho'},
{restaurant : 'bj'},
{restaurant : 'chiles'},
{restaurant : 'Freddys'},
{restaurant : 'jimtsy  Mexican restaurant'} ,
{restaurant : 'town sen china'} ,
{restaurant : 'cj fresh food'} ,
{restaurant : 'bun (by the West Covina theater)'},
{restaurant : 'canyon City BBQ'} ,
{restaurant : 'Dennys'} ,
{restaurant : 'flows'} ,
{restaurant : 'chopsticks San dimas.' },
{restaurant : 'lolas'},
{restaurant : 'chubby Curry'} ,
{restaurant : 'perry joint (with Eleanor'},
{restaurant : 'pho place by glendora shell'},
{restaurant : 'steakhouse outback' },
{restaurant : 'Pinnacle peaks.'}
]
function randomNumber(){
    const number = Math.random() * restaurauntList.length
    return Math.round(number)
}

const form = document.querySelector('.randomize')
const namePlacement = document.querySelector('.restaurantName')



form.addEventListener('submit', function(e){
    e.preventDefault()
    const Listed = document.querySelector('.Restaurant')
    const restaurantPicked = restaurauntList[randomNumber()]
    const newDiv = document.createElement('DIV')
    if (Listed){
        Listed.remove()
    }
    newDiv.append(restaurantPicked.restaurant)
    newDiv.classList.add("Restaurant")
    namePlacement.append(newDiv)
    
})