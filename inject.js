// Get URL
let url = window.location.pathname
const paths = url.split("/")
const quizlet_id = paths[1]

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function overrideLink(element, path) {
  element.onclick = () => {
    const redir = `https://quizlet.com/${quizlet_id}/${path}/embed/`
    window.open(redir)
  }
}

// Create deferred part of program
function deferred() {
  console.log("Message recieved")
  
  // Override Links
  const flashcardsButton = getElementByXpath("//html/body/div[4]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div[2]/div[2]/nav/section/ul/li[1]")
  console.log(flashcardsButton)
  overrideLink(flashcardsButton, "flashcards")

  const learnButton = getElementByXpath("//html/body/div[4]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div[2]/div[2]/nav/section/ul/li[2]")
  console.log(learnButton)
  overrideLink(learnButton, "learn")

  const testButton = getElementByXpath("//html/body/div[4]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div[2]/div[2]/nav/section/ul/li[3]")
  console.log(testButton)
  overrideLink(testButton, "test")
  
  const matchButton = getElementByXpath("//html/body/div[4]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div[2]/div[2]/nav/section/ul/li[4]")
  console.log(matchButton)
  overrideLink(matchButton, "match")

  // Get rid of other annoying things
  const youreLoggedOut = getElementByXpath("//html/body/div[4]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[2]/div/div[2]/div/div/section/div/section/div[2]")
  console.log(youreLoggedOut)
  youreLoggedOut.style.display = "none"
}

const run = () => {
  if (paths[3] != "embed") {
    deferred()
  }
}

setTimeout(run, 1000)