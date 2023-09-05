export const formatDuration = (timeInSeconds: number) => {
    let formatedDuration = new Date(timeInSeconds * 1000)
    .toISOString()
    .slice(11, 19);
  
    // remove all unnecessary zeros
    for(let i = 0; i < formatedDuration.length - 3; i++) {
      if((formatedDuration[i] !== '0' && formatedDuration[i] !== ':') || i === (formatedDuration.length - 4)) {
        console.log(formatedDuration)
        formatedDuration = formatedDuration.slice(i)
        break
      }
    }

    return formatedDuration;
}