
//prune problem part 1

let totPlant = 20;

if (totPlant < 40) {
    console.log("Plant!")
    totPlant++;
} else if (totPlant > 40 && totPlant < 80) {
    console.log("Monitor!")
    totPlant++;
} else (totPlant > 80)
 {
    console.log("Prune!")
    totPlant--;
}
