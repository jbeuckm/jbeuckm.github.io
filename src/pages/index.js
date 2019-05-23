import React from "react"
import "../hexagons/index.css"
import App from "../hexagons/App"
import * as serviceWorker from "../hexagons/serviceWorker"

export default () => <App />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
