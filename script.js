
//prune problem part 1
//week 1
const totPlant1 = 20;
let totPlant2 = 40;
let totPlant3 = 80;

if (totPlant1 > 80) {
    console.log("Prune!")
    
} else if (totPlant2 > 40 && totPlant2 < 80) {
    console.log("Monitor!")
    
} else 
{
    console.log("Plant!")
}
////
// week 2 results

if (totPlant2 < 40) {
    console.log("Plant!")
    
} else if (totPlant2 > 80) {
    console.log("Prune!")
    
} else 
{
    console.log("Monitor!")
}

//////////////// week 3 results 
if (totPlant3 < 40) {
    console.log("Plant!")
    
} else if (totPlant3 < 80) {
    console.log("Monitor!")
    
} else
{
    console.log("Prune!")
}

