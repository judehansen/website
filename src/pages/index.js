import React from "react"
import { Helmet } from "react-helmet"
import Portfolio from '../components/portfolio'

export default () => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <title>Jude Hansen - Web Design &amp; Front-End Development</title>
      <meta name="description" content="Jude Hansen likes to develop compelling interactive experiences using prevailing web and mobile techniques." />
      <link href="https://fonts.googleapis.com/css?family=Mouse+Memoirs" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700" rel="stylesheet"></link>
      <link rel="manifest" href="manifest.webmanifest"></link>
    </Helmet>

    <section className="m-section s-hero">
        <div className="container">
            <h1>Jude Hansen</h1>
            <div className="tagline">Front-End Developer</div>
        </div>
    </section>

    <section className="m-section s-portfolio">
        <div className="container">
          <div id="portfolio">
            <Portfolio />
          </div>
        </div>
    </section>

    <section className="m-section s-footer">
        <div className="tagline">
            916-534-8086 &bull; <a href="mailto:judehansen@gmail.com">judehansen@gmail.com</a>
        </div>
    </section>

  </div>
)
