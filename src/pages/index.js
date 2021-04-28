import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import whaleGIF from "../gifs/whales.gif"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>TOO CLOSE</h1>
    <p>SAN JUAN ISLAND WA</p>
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
        <img src={whaleGIF} alt="Picture of Whale from BBC America" />
    </div>
    <p>
      <Link to="https://brightrain.com"
        target="_blank"
        activeStyle={{ color: "#ff6600" }}>A BRIGHT RAIN JAM</Link> <br />
      <Link to="http://orcasound.org/"
        target="_blank"
        activeStyle={{ color: "darkgray" }}>ORCASOUND</Link>
    </p>
  </Layout>
)

export default IndexPage
