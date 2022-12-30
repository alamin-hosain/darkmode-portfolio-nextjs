import Button from "../components/Button"

const Hero = () => {
    return (
        <section className="pt-20">
            <h1 className="text-7xl font-bold">Hi I'm <span className="dark:text-orange-500">Chonchol</span></h1>
            <h3 className="text-4xl my-3">I am a Frontend Developer</h3>
            <p className="text-gray-700 dark:text-white mb-8">Transforming designs into responsive and interactive websites for a better user experience.Bringing the web to life with HTML, CSS, Javascript, React Js and Next Js</p>
            <Button className='bg-orange-500 text-white px-6'>Hire Me!</Button>
        </section>
    )
}

export default Hero