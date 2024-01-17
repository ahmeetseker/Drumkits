const kits = [ "crash","kick","snare","tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit)=>{
    const btnEl =document.createElement("button");
    containerEl.appendChild(btnEl);
    btnEl.classList.add("btn")
    containerEl.appendChild(btnEl);
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)"
    const audioEl = document.createElement("audio");
    containerEl.appendChild(audioEl)
    audioEl.src = "ses/" + kit + ".wav"
    btnEl.addEventListener("click", ()=>{
    
        audioEl.play()
        
    })
    
});