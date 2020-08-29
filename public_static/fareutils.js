rate = {
    fixed: 50,
    minKm: 5,
    perKm: 10,
    freeMin: 15,
    perMin: 2
}
calcFare(km, min) {
    let fare = rate.fixed
    fare += (km > minKm) ? ((km - minKm) * rate.perKm) : 0
    fare += (min > freeMin) ? ((min - freeMin) * rate.perMin) : 0
}

exports = module.exports = {
    rate,
    calcFare
}