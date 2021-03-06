import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'



export default function CoverImage({ title, src, slug, height, width }) {
  const handleSize = (image) =>  {
    console.log(`!`, image.offsetWidth, image.offsetHeight)
  }
  const image = (
    <Image
      ref={image => {
        console.log(`image`, )
        handleSize(image);
      }}

      onLoad={(image)=>handleSize(image)}

      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="intrinsic"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
