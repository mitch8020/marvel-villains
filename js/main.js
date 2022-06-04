document.querySelector('button').addEventListener('click',getVillain)

async function getVillain() {
  const villainName = document.querySelector('#villain-name').value
  try {
    const res = await fetch(`https://marvel-villains.herokuapp.com/villains/${villainName}`)
    const data = await res.json()
    console.log(data)

    document.querySelector('.name').innerText = data.name
    document.querySelector('.alias').innerText = data.alias
    document.querySelector('.media').innerText = data.media
    document.querySelector('.powers').innerText = data.powers
    document.querySelector('.trivia').innerText = data.trivia
    document.querySelector('.quote').innerText = data.quote
    document.querySelector('.image').innerText = data.image
    document.querySelector('.wikiLink').innerText = data.wikiLink

    document.querySelector('#sample-img').src = data.image
  }
  catch (error) {
    console.log(error)
  }
}