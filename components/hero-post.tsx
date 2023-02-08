import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

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
