import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './Cards'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {

  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
      }
      setApod({
        
        "date": "2024-02-25",
          "explanation": "All of the other aurora watchers had gone home. By 3:30 am in Iceland, on a quiet September night, much of that night's auroras had died down. Suddenly, unexpectedly, a new burst of particles streamed down from space, lighting up the Earth's atmosphere once again. This time, surprisingly, pareidoliacally, the night lit up with an  amazing shape reminiscent of a giant phoenix. With camera equipment at the ready, two quick sky images were taken, followed immediately by a third of the land.  The mo...",
          "hdurl" : "https://apod.nasa.gov/apod/image/2402/PhoenixAurora_Helgason_3130.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "A Phoenix Aurora over Iceland",
          "url": "https://apod.nasa.gov/apod/image/2402/PhoenixAurora_Helgason_960.jpg",

  })
  }, [])
  if (!apod) return 'Fetching Photo of the day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )

}
export default App
