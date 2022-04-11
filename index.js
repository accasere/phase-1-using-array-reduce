const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function batteryAdd(total, element){
    return total + element
}

const totalBatteries = batteryBatches.reduce(batteryAdd,0)