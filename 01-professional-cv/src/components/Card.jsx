import photo from '../img/yunuen.jpeg'
import design from '../img/design.jpg'
import desk from '../img/desk.png'
const Card = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: design,
      title: '  UX/UI Developer',
      content: "My fascination with this field lies in the unique ability to merge creativity and functionality to improve users' digital experience. I am motivated by the idea of ​​creating products that are not only visually appealing, but will also provide effective and meaningful solutions to user challenges"
    },

    {
      id: 2,
      imgSrc: photo,
      title: 'Frontend',
      content: "Hi 👋, I am Yunuen Sarasuadi Acosta Meza from Hidalgo, MX. I'm a full stack developer. I am focused on Frontend UX/UI. I really enjoy web design and creating good communication solutions"
    },
    {
      id: 3,
      imgSrc: desk,
      title: 'React Dev',
      content: "My goal is to develop software while applying clean code principles. 🌱 I'm currently learning Typescript💬 Ask me about: JavaScript, React.js, Responsive Design and UX/UI development"
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
