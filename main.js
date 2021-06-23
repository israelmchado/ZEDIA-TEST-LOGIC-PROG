function loading(){
  const placeItem = document.getElementById('text-box')
  for(i = 1; i < 101; i++){
      let toAdd = document.createElement('li')
      if ((i % 3 == 0) && (i % 5 == 0)){
          toAdd.setAttribute('id',`item${i}`)
          toAdd.innerHTML = `UNIVERSO`
      } else {
          if (i % 3 == 0) { 
              toAdd.setAttribute('id',`item${i}`)
              toAdd.innerHTML = `UNI`
          } else if (i % 5 == 0) {
              toAdd.setAttribute('id',`item${i}`)
              toAdd.innerHTML = `VERSO`
          } else {
              toAdd.setAttribute('id',`item${i}`)
              toAdd.innerHTML = `${i}`
          }
      }
      placeItem.appendChild(toAdd)
  }
}