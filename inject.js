// Get URL
let url = window.location.pathname
const paths = url.split("/")
const quizlet_id = paths[1]

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function overrideLink(el, path) {
  console.log(el)
  if (el != null) {
    el.onclick = () => {
      const redir = `https://quizlet.com/${quizlet_id}/${path}/embed/`
      window.open(redir)
    }
  }
}

// Create deferred part of program
function deferred() {
  console.log("Message recieved")
  
  // Override Links
  const flashcardsButton = getElementByXpath("//a[text()='Flashcards']").parentElement.parentElement.parentElement.parentElement
  console.log(flashcardsButton)
  overrideLink(flashcardsButton, "flashcards")

  const learnButton = getElementByXpath("//a[text()='Learn']").parentElement.parentElement.parentElement.parentElement
  console.log(learnButton)
  overrideLink(learnButton, "learn")

  const testButton = getElementByXpath("//a[text()='Test']").parentElement.parentElement.parentElement.parentElement
  console.log(testButton)
  overrideLink(testButton, "test")
  
  const matchButton = getElementByXpath("//a[text()='Match']").parentElement.parentElement.parentElement.parentElement
  console.log(matchButton)
  overrideLink(matchButton, "match")

  // Get rid of annoying popup
  const signInPlease = getElementByXpath("//p[text()='Boost your grades with unlimited access to millions of flashcards, games and more.']").parentElement.parentElement
  console.log(signInPlease)
  signInPlease.style.display = "none"
}

const run = () => {
  if (paths[3] != "embed") {
    deferred()
  }
}

setTimeout(run, 1000)