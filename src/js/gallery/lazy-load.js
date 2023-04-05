
export default function lazyload(lazyImg){ if("loading" in HTMLImageElement.prototype) {
    lazyImg.forEach(img => {
        img.src = img.dataset.src;
    });
    }else {
        const addScriptLibrary = document.createElement("script");
        addScriptLibrary.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
        document.body.appendChild(addScriptLibrary)
    }}