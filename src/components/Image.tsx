interface IImageProps {
  src: string
  alt: string
}

export default function Image({alt, src}: IImageProps) {
  return (
    <div
      className="relative pb-[100%] w-full"
    >
      <img
        className="absolute z-10 block object-cover w-full h-full overflow-hidden rounded-md"
        loading="lazy"
        src={src}
        alt={alt}
      />
    </div>
  )
}