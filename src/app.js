import React from "react";
import { createRoot } from "react-dom/client";
// styles
import "./style.css";

function QuoteGenerator() {
  return (
    <div id="main">
      <header id="title">
        <h1>Vikram Sarabhai</h1>
      </header>
      <h4 className="subtitle">The Father of Indian Space Programme</h4>

      <div id="img-div">
        <figure id="img-div">
          <img
            id="image"
            src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/131080-wnlgmxcfuk-1573978420.jpg"
            alt="VIKRAM SARABHAI's photo"
            loading="lazy"
          />
          <figcaption id="img-caption">
            Vikram Sarabhai and Jawaharlal Nehru at the inauguration of the
            first building on the campus of the Physical Research Laboratory,
            recognised as the cradle of the Indian space programme
          </figcaption>
        </figure>
      </div>

      <div id="tribute-info">
        {" "}
        <h2>Journey from ISRO to space :</h2>
        <ul>
          <li>
            <b>1919 - </b> Born on August 12, Ahemdabad,India.
          </li>
          <li>
            <b>1940 - </b> Shifted to the University of Cambridge, England,
            where he took his tripos in natural sciences.
          </li>
          <li>
            <b>1947 - </b> Wrote a thesis, “Cosmic Ray Investigations in
            Tropical Latitudes”.
          </li>
          <li>
            <b>1947 - </b> Sarabhai founded the Ahmedabad Textile Industry’s
            Research Association.{" "}
          </li>
          <li>
            <b>1962 - </b> Instrumental in setting up the Indian Institute of
            Management in Ahmadabad.
          </li>
          <li>
            <b>1962 - </b> Establishing the Indian National Committee for Space
            Research. which was later renamed the Indian Space Research
            Organization (ISRO).
          </li>
          <li>
            <b>1962 - </b> Got Shanti Swarup Bhatnagar Award.
          </li>
          <li>
            <b>1966 - </b> After the death of physicist Homi Bhabha in 1966,
            Sarabhai was appointed chairman of the Atomic Energy Commission of
            India
          </li>
          <li>
            <b>1966 - </b> Got Padma Bhushan Award.
          </li>
          <li>
            <b>1971 - </b> Died December 30, Kovalam, Kerala.
          </li>
          <li>
            <b>1972 - </b> Got Padma Vibhushan, posthumous (after-death) .
          </li>
          <li>
            <b>1974 - </b> The International Astronomical Union at Sydney
            decided that a Moon Crater BESSEL in the Sea of Serenity will be
            known as the Sarabhai Crater..
          </li>
          <li>
            <b>1975 - </b> As a result of Dr. Sarabhai's dialogue with NASA in
            1966, the Satellite Instructional Television Experiment (SITE) was
            launched during July 1975 - July 1976 (when Dr.Sarabhai was no
            more).
          </li>
          <li>
            <b>1975 - </b> As a result, the first Indian satellite, Aryabhata,
            was put in orbit from a Russian Cosmodrome.
          </li>
        </ul>
        <h2 className="my-2">His views on importance of space programmes -</h2>
        <p className="quote my-2">
          "There are some who question the relevance of space activities in a
          developing nation. To us, there is no ambiguity of purpose. We do not
          have the fantasy of competing with the economically advanced nations
          in the exploration of the moon or the planets or manned space-flight.
          But we are convinced that if we are to play a meaningful role
          nationally, and in the community of nations, we must be second to none
          in the application of advanced technologies to the real problems of
          man and society." --<b>Sarabhai</b>
        </p>
      </div>

      <p className="tribute-link">
        If you are curious to know more about Vikram Sarabhai please do visit{" "}
        <a
          target="_blank"
          id="tribute-link"
          href="https://www.vssc.gov.in/VSSC/index.php"
        >
          {" "}
          vikram sarabhai space center
        </a>{" "}
        official site
      </p>
    </div>
  );
}

let renderer = createRoot(document.getElementById("root"));
renderer.render(<QuoteGenerator />);
