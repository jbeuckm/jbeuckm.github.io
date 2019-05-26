import React from "react"
import TorusTiledWithHexagonImages from "../hexagons/App"
import { Helmet } from "react-helmet"
import "../hexagons/index.css"

export default () => (
  <div>
    <Helmet>
      <title>Joes Web Page</title>
      <link rel="apple-touch-icon" href="/homescreen_icon.png" />
      <link rel="icon" sizes="192x192" href="/android_icon.png" />
    </Helmet>

    <TorusTiledWithHexagonImages />
  </div>
)
