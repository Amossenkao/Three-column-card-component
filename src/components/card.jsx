import pageData from '../data/data';

export default function Card() {
  return (
    <div className='container flex'>
      {
        pageData.map((item) => {
          return (
      <section className={`section flex ${item.name}`} key={item.name}>
        <div className="icon">
          <img src={item.icon} alt="" />
        </div>
        <div className="name">
          <p>{item.name}</p>
        </div>
        <div className="info">
          <p>{item.info}</p>
        </div>
        <div className="button">
          <button>Learn More</button>
        </div>
      </section>
          )
        })
      }
    </div>
  )
}