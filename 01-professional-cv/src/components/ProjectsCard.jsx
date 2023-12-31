import bakery from '../img/bakery.png'
import jolitify from '../img/jolitify.png'
import series from '../img/series.png'
import pinterest from '../img/pinterest.png'
import immune from '../img/immune.png'
import axolotl from '../img/axolotl.png'

const ProjectsCard = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: bakery,
      title: ' Bakery Ecommerce Website',
      about: 'This frontend project was in the top 10 JavaScript projects of the course taken with CoderHouse ',
      technologies: 'Technologies: JavaScript, HTML5, CSS3,  desktop version available',
      link: 'https://64c7cc5c7a450d0c24e256a4--superlative-licorice-3ab2ec.netlify.app/'

    },

    {
      id: 2,
      imgSrc: jolitify,
      title: 'Jolitify Ecommerce Website',
      about: 'This frontend project provides information about the products to the user from an API ',
      technologies: 'Technologies: Vite, React, Express,  desktop version available',
      link: 'https://deploy-test-01-ecommerce-pink-ecommerce.netlify.app/'
    },
    {
      id: 3,
      imgSrc: series,
      title: 'Series App',
      about: 'This frontend project helps the user search and find their favorite series',
      technologies: 'Technologies: Vite, React, Bootstrap, mobile and desktop version available',
      link: 'https://series-project.netlify.app/'
    },
    {
      id: 4,
      imgSrc: pinterest,
      title: 'Pinterest.es Clone',
      about: 'Web layout based on pinterest.es',
      technologies: 'Technologies: HTML5, CSS3, mobile and desktop version available ',
      link: 'https://6504bd6cdf5e46259f967496--lively-kleicha-b76ec7.netlify.app/'
    },
    {
      id: 5,
      imgSrc: immune,
      title: 'Immune Video Game',
      about: 'Co-created  a video game currently available in the Microsoft AppStore',
      technologies: 'Technologies: JavaScript, Unity, Inkscape, Gimp, desktop version available',
      link: 'https://www.microsoft.com/en-ms/p/immune/9wzdncrdr6x8?activetab=pivot:overviewtab'
    },
    {
      id: 6,
      imgSrc: axolotl,
      title: 'Save the Axolotl',
      about: 'This fullstack project simulates a fundraiser to help the Mexican axolotl',
      technologies: 'Technologies: MERN Stack, Sass, JTW, ESLint, Vite, Bootstrap, Gencraft, Axios, mobile and desktop version available',
      link: 'https://fundraising-project.netlify.app/'
    }

  ]
  return (

    <div className='row justify-content-center '>
      <h3 className='h3 text-md-center m-3  '>Yunuen Sarasuadi Acosta Meza</h3>
      <h2 className='h3 text-md-center '>She/Her</h2>
      {cardData.map((card) => (
        <div className='col-md-3' key={card.id}>
          <div className='card mx-auto ' style={{ width: '18rem', margin: '50px 65px', height: '90%' }}>
            <a href={card.link} target='_blank' rel='noopener noreferrer'>
              <img src={card.imgSrc} className='card-img-top img-fluid  rounded-4  ' alt={card.title} />
            </a>
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.about}</p>
              <p className='card-text'>{card.technologies}</p>
              <a href={card.link} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                Visit Here
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsCard
