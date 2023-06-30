import React from "react"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"

const About = () => {
  return (
    <div>
      <section className="mx-auto mt-10 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <ContactFormSection />
      </section>
    </div>
  )
}

export default About