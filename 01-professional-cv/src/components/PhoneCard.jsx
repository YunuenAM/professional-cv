import whatsapp from '../img/whatsapp.png'

const PhoneCard = () => {
  const phone = '+52 5621 576 052'
  return (
    <>
      <div>
        <h2 className='h2 text-center  m-5 '>PHONE</h2>
        <p className='p text-center  text-primary h4  '>
          please contact me at:{' '}
          <a href={`phone:${phone}`}>{phone}</a>.
        </p>
        <div className='text-center m-5 '>
          <img className=' img-fluid ' src={whatsapp} alt='' style={{ maxWidth: '150px', maxHeight: '150px' }} />
        </div>

      </div>

    </>
  )
}
export default PhoneCard
