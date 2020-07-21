function handleSubmit (event) {
    event.preventDefault()
    const baseUrl = 'http://localhost:8081/sentiment'

    if (Client.validUrl(url)) {
      fetch(baseUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ url: url })
      })
        .then(res => res.json())
        .then(function (res) {
          document.getElementById('polarity').innerHTML = res.polarity
          document.getElementById('subjectivity').innerHTML = res.subjectivity
          document.getElementById('text').innerHTML = res.text
          document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence
          document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence
        })
    } else {
      console.log('Error: Not valid')
    }
  }

export { handleSubmit }
