import ImageFlipMeme from "@/types/image-flip-memes"
import Meme from "@/types/meme"
import React, { useEffect, useState } from "react"

export default function Main() {
  const [memeList, setMemeList] = useState<Array<ImageFlipMeme>>([])
  const [meme, setMeme] = useState<Meme>({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imageUrl: 'http://i.imgflip.com/1bij.jpg'
  })

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget
    setMeme(prevMeme => ({ ...prevMeme, [name]: value }))
  }

  function getNewImage() {
    const index = Math.floor(Math.random() * memeList.length - 1)
    setMeme(prevMeme => ({ ...prevMeme, imageUrl: memeList[index].url }))
  }

  useEffect(() => {
    async function startFetching() {
      const response = await fetch('/api/image-flip')
      const data = await response.json()

      setMemeList(data.data)
    }

    startFetching()
  }, [])

  return (
    <main>
      <div className="form">
        <label>Top Text
          <input
            type="text"
            placeholder="One does not simply"
            value={meme.topText}
            name="topText"
            onChange={handleOnChange}
          />
        </label>

        <label>Bottom Text
          <input
            type="text"
            placeholder="learn React"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleOnChange}
          />
        </label>
        <button onClick={getNewImage}>Get a new meme image </button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl}/>
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  )
}
