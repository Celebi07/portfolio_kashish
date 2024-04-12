import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left '>
          👋 Hi there! My name is Kashish Garg, and I'm currently a sophomore at IIIT Lucknow. I'm deeply passionate about the exciting realms of Artificial Intelligence, Machine Learning, and Natural Language Processing in the tech world.
          <br />
          🧠 My journey into the world of technology began with a burning curiosity to unravel the intricacies of Artificial Intelligence. From the very start, I've been captivated by the potential of AI and its ability to transform industries and solve complex problems.
          <br />
          🚀 Transitioning from theory to practice, I've delved deep into mastering the intricacies of Machine Learning and NLP. I've translated these concepts into practical applications, creating predictive models and diving into NLP projects that challenge and inspire me.
          <br />
          🛠️ Crafting innovative solutions is where I truly shine. Whether it's implementing machine learning algorithms or exploring the depths of NLP, I thrive on bringing ideas to life through hands-on projects that push the boundaries of what's possible.
          <br />
          🤝 I'm eager to connect with fellow tech enthusiasts and embark on this learning adventure together. Whether you're a coding maestro or just starting out, let's geek out over the fascinating world of AI, ML, and NLP!
          <br />
          🎮 Beyond the tech sphere, you'll often find me immersing myself in sci-fi universes, experimenting with culinary delights, or indulging in gaming escapades. And yes, memes are definitely a part of my life!
          Excited to share my AI journey at IIIT Lucknow and connect with like-minded individuals who are as passionate about technology as I am! 🚀🎓🌟
        </p>

        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About