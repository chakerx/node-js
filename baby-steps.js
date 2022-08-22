
    let sum =process.argv.filter((el,id)=>id > 1).reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue),0)
    console.log(sum)


