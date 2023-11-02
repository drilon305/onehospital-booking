import { faqs } from '../../assets/data/faqs'
import FaqItem from './FaqItem'


const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item, i) => <FaqItem item={item} key={i} />)}
    </ul>
  )
}

export default FaqList