console.log("quizlet.js running")

const injectFile = browser.runtime.getURL("inject.js")
console.log(injectFile)

const inject = document.createElement("script")
inject.src = injectFile
document.onreadystatechange = document.body.appendChild(inject)

// Create Styling
const style = document.createElement("style")
style.innerText = `.ReactModalPortal { display: none; }
body { overflow-y: scroll !important; }`
document.body.appendChild(style)