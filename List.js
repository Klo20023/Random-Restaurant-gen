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

const degradation = ["Are you sure about that?", "Do they have Salads?", "Did you put on some weight?", "Again?", "Your ancestors are watching"]


function randomRestaurant(){
    const number = Math.floor(Math.random() * restaurauntList.length)
    return restaurauntList[number].restaurant
}

function randomInsult(){
    const number = Math.floor(Math.random() * degradation.length)
    return degradation[number]
}

const form = document.querySelector('.randomize')
const namePlacement = document.querySelector('.restaurantName')


// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     const Listed = document.querySelector('.Restaurant')
//     const restaurantPicked = restaurauntList[randomNumber()]
//     const newDiv = document.createElement('DIV')
//     if (Listed){
//         Listed.remove()
//     }
//     newDiv.append(restaurantPicked.restaurant)
//     newDiv.classList.add("Restaurant")
//     namePlacement.append(newDiv)
    
// })

form.addEventListener('submit',function(e){
    e.preventDefault()
    const Listed = document.querySelector('.result')
    const resultDIV = document.createElement('DIV')
    const insultDIV = document.createElement('DIV')
    if (Listed){
        Listed.remove()
    }
    // create's Result Container and append's result
    resultDIV.classList.add('result')
    resultDIV.append(randomRestaurant())
    namePlacement.append(resultDIV)
    // creates class insult and appends to resultDIV
    insultDIV.classList.add('insult')
    insultDIV.append(randomInsult())
    resultDIV.append(insultDIV)
    
})