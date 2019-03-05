import React, { useState } from 'react';

export default function Main(props) {
  // HSLa Colors
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(100)
  const [lightness, setLightness] = useState(1)
  const [alpha, setAlpha] = useState(1)

  //Save Button
  const [savedColorClicked, setSavedColorClicked] = useState([])

  //Saved Colors Array
  const savedColors = []

  const savedColorsArray = (hslaValue) => {
    savedColors.push(hslaValue)
  }

  //Display Saved Colors



  // cosnt [] = useState()
  // cosnt [] = useState()

  // updateHue = (event) => {
  //   this.setState({
  //     hue: Number(event.target.value)
  //   })
  // }
  // const saveColor = () => {
  //     this.setState({
  //       savedColors: this.state.savedColors.concat(`hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`)
  //     })
  //   }

  let selectText = event => {
    console.log(event.target.innerText)
    // event.target.innerText.select()
    // document.execCommand("copy")
    // ptag - onClick={selectText} 
  }

  return (
    <>
      <main>
        <section id="color-results" style={{ backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})` }}></section>

        <article>
          <p id="slider-results">HSLa ({hue}, {saturation}%, {lightness}%, {alpha})</p>
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

        </article>
      </main>
    </>)
}

/*



  <button style={{
    boxShadow: `.2px 1px .3px 6px hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha}) inset, .2px 1px 1px 3px hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
  }} onClick={
    setSavedColorClicked(savedColors.push(`hsla(${props.hue}, ${props.saturation}%, ${props.lightness}%, ${props.alpha})`))
  }>Store This Color</button>

  <section id="saved-section">
    <h2>Saved Colors</h2>
    <div>
      {this.state.savedColors.map((hsla, index) => {
        return (
          <ul key={index}>
            <li >{hsla} <span className="saved-color" style={{ backgroundColor: `${hsla}` }}></span>
            </li>
          </ul>
        )
      })}
    </div>
  </section>
</article>
<footer></footer>
</main >
</>
)}} }}

*/
