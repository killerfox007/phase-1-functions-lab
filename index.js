function distanceFromHqInBlocks(blocks) {
    if (blocks > 42){
        return (blocks - 42)
} else return (42 - blocks)
}

function distanceFromHqInFeet(x){
    return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(x, x2){
if (x > x2){
    return (x - x2)*264
}else if (x2 > x){
    return (x2 - x)*264
}}
function calculatesFarePrice(x, x2){
    let feet = distanceTravelledInFeet(x,x2)
    if (feet <= 400) {
    return 0
} else if (feet > 400 && feet <= 2000){
    return  (feet - 400)*.02
} else if (feet > 2000 && feet <= 2500){
    return 25
}else if (feet > 2500){
    return 'cannot travel that far'
}
}