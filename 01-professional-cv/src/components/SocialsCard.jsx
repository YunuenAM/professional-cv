import linkedin from '../img/linkedin.png'
import gihub from '../img/github.png'

const SocialsCard = () => {
  const linkedinCard = 'https://www.linkedin.com/in/yunuen-sarasuadi-developer/'
  const githubCard = 'https://github.com/YunuenAM'
  return (
    <>
      <div>
        <h2 className='h2 text-center  m-5 '>SOCIALS</h2>
        <p className='p text-center  text-primary h4  '>
          please contact me at:{' '}
          <a href={`linkedin:${linkedinCard}`}>{linkedinCard}</a>.
        </p>
        <div className='text-center m-5 '>
          <img className=' img-fluid ' src={linkedin} alt='' style={{ maxWidth: '150px', maxHeight: '150px' }} />
        </div>

      </div>

      <div>
        <p className='p text-center  text-primary h4  '>
          please contact me at:{' '}
          <a href={`github:${githubCard}`}>{githubCard}</a>.
        </p>
        <div className='text-center m-5 '>
          <img className=' img-fluid ' src={gihub} alt='' style={{ maxWidth: '150px', maxHeight: '150px' }} />
        </div>

      </div>

    </>
  )
}
export default SocialsCard
