import Star from './icons/Star'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    image: string
    title: string
    date: string
    favorite: boolean
}

const Card = ({ image, title, date, favorite }: CardProps) => {
    return (
        <div className='max-w-sm rounded overflow-hidden'>
            <img className='w-full' src={image} alt='Sunset in the mountains' />
            <div className='p-4'>
                <div className='font-bold  mb-2 line-clamp-1'>{title}</div>
                <div className='flex justify-between'>
                    <div className='text-lg mb-2'>{date}</div>
                    <div className='text-lg mb-2'>
                        {favorite ? <Star outline /> : <Star />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
