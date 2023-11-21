const SchoolCard = () => {
  return (
    <>
      <h2 className='h2 text-center  m-3 '>School</h2>
      <div className='row m-5 '>
        <div className='col-sm-6 mb-3 mb-sm-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Visual Programming (2012) CETEC and Secretary of Labor and social Protection</h5>
              <p className='card-text'>Skills: Access, Visual Basic, Visual Fox Pro</p>
              <hr />
              <h5 className='card-title'>Master in Coding (2023) DEV.F</h5>
              <p className='card-text'>Skills: MERN Stack, Web and Mobile development, Object-oriented programming</p>

            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Linguistics Degree (2016) ENAH</h5>
              <p className='card-text'>Skills: voice identification,computational linguistics, phonology, languages </p>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default SchoolCard
