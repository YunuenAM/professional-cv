import emailLogo from '../img/emailLogo.png'

const CardEmail = () => {
  const email = 'yunameza@outlook.com'
  return (
    <>
      <div>
        <h2 className='h2 text-center  m-5 '>EMAIL</h2>
        <p className='p text-center  text-primary h4  '>
          please send me an email at:{' '}
          <a href={`mailto:${email}`}>{email}</a>.
        </p>
        <div className='text-center m-5'>
          <img className=' img-fluid ' src={emailLogo} alt='' style={{ maxWidth: '150px', maxHeight: '150px' }} />
        </div>

      </div>

    </>
  )
}
export default CardEmail
