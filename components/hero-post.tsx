import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  coverImage: string
}

const HeroPost = ({
  coverImage
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage src={coverImage}/>
      </div>
    </section>
  )
}

export default HeroPost
