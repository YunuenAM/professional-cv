import photo from '../img/photo.jpeg'
import nlp from '../img/nlp.webp'
import desk from '../img/desk.png'
const Card = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: nlp,
      title: ' Linguist',
      content: 'I am interested in the link between language and computational development, as well as conversational design in voice assistants and chatbots with artificial intelligence support'
    },

    {
      id: 2,
      imgSrc: photo,
      title: 'Frontend UI/UX | Linguist',
      content: "Hi 👋, I'm Yunuen Sarasuadi Acosta Meza from Hidalgo, MX. I'm a full stack developer and linguist focused on Frontend UI/UX. I really enjoy web design and create good communication solutions"
    },
    {
      id: 3,
      imgSrc: desk,
      title: 'JavaScript Dev',
      content: "My goal is develop software applying clean code principles. 🌱 I'm currently learning Python and .NET💬 Ask me about: MERN Stack, GitHub, Voice, technology and some applications"
    }

  ]
  return (

    <div className='row justify-content-center '>
      <h3 className='h3 text-md-center m-3  '>Yunuen Sarasuadi Acosta Meza</h3>
      <h2 className='h3 text-md-center '>She/Her</h2>
      {cardData.map((card) => (
        <div className='col-md-3' key={card.id}>
          <div className='card mx-auto ' style={{ width: '18rem', margin: '50px 65px', height: '90%' }}>
            <img src={card.imgSrc} className='card-img-top img-fluid  rounded-4  ' alt={card.title} />
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
