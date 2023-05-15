import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'About Us!',
  description: 'Here\'s some stuff about this great API!',

}

const About = async () => {
  return (
    <main>
      <h1>About</h1>
      <p>Some text about this great API!</p>
    </main>
  )
}

export default About;