import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
  gameUrl: string
}

const PostPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
  gameUrl
}: Props) => {
  if ('And more!' == title) {
    let myArray = ['https://www.tiktok.com/@margar_eat/video/6971604039930809605', 'https://www.tiktok.com/@margar_eat/video/6971678606284098822', 'https://www.tiktok.com/@margar_eat/video/6972610274708819205']
    gameUrl = myArray[Math.random() * myArray.length | 0]
  }
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={gameUrl}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview


