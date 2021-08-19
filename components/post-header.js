import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import React from 'react'

export default function PostHeader({ title, coverImage, date, author }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    // Update the document title using the browser API
    console.log(`ref!`, ref.current)

  }, [ref]);


  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-8 md:mb-16 sm:mx-0 flex justify-center">
        <CoverImage ref={ref} title={title} src={coverImage} height={552} width={994} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
