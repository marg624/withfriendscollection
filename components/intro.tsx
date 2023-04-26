import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        w/ friends
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A collection of things you can enjoy and share with friends.
      </h4>
    </section>
  )
}

export default Intro
