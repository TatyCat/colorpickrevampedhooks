import React, { useState } from 'react';

export default function Main(props) {
  // HSLa Colors
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(100)
  const [lightness, setLightness] = useState(1)
  const [alpha, setAlpha] = useState(1)

  //Saved Colors
  const [savedColorClicked, setSavedColorClicked] = useState([])

  let selectText = event => {
    console.log(event.target.innerText)
    event.target.innerText.select()
    document.execCommand("copy")
  }

  const colorGenerator = () => {
    setHue(Math.floor(Math.random() * 240))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
    setAlpha(Math.random().toFixed(2))
  }

  return (
    <>
      <main>
        <section id="color-results" style={{ backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})` }}></section>

        <article>
          <p id="slider-results" onClick={selectText} >HSLa ({hue}, {saturation}%, {lightness}%, {alpha})</p>
          <p>Hue</p>
          <section className="slidecontainer">
            <input onChange={event => setHue(event.target.value)} step="1" type="range" min="0" max="360" value={hue} className="slider" id="hue" />
          </section>


          <p>Saturation</p>
          <section className="slidecontainer">
            <input onChange={event => setSaturation(event.target.value)} type="range" min="0" max="100" value={saturation} className="slider" id="saturation" />
          </section>

          <p>Lightness</p>
          <section className="slidecontainer">
            <input onChange={event => setLightness(event.target.value)} type="range" min="0" max="100" value={lightness} className="slider" id="lightness" />
          </section>

          <p>alpha</p>
          <section className="slidecontainer">
            <input onChange={event => setAlpha(event.target.value)} type="range" step=".1" min="0" max="1" value={alpha} className="slider" id="alpha" />
          </section>


          <button style={{
            boxShadow: `.2px 1px .3px 6px hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}) inset, .2px 1px 1px 3px hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
          }}
            onClick={(event) => setSavedColorClicked(savedColorClicked => savedColorClicked.concat(`hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`))}
          >Store This Color</button>


          <section id="saved-section">
            <h2>Saved Colors</h2>
            <div>
              {savedColorClicked.map((hsla, index) => {
                return (
                  <ul key={index}>
                    <li >{hsla} <div className="saved-color" style={{ backgroundColor: `${hsla}` }}></div>
                    </li>
                  </ul>
                )
              })}
            </div>
            <button onClick={colorGenerator} style={{ color: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})` }}>Give Me a Random Color</button>
          </section>
        </article>
        <footer></footer>
      </main>
    </>)
}
