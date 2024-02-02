import logo from './logo.svg';
import monitor from './Monitor.svg';
import telefon from './Telefon.svg';
// import woman from '../src/rasmlar/womann.svg';
import woman from '../src/rasmlar/Kayla.webp';
import book from '../src/rasmlar/book.jpg';
import Quoetea11 from '../src/rasmlar/Quoetea11.png'

import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <span> WIX </span>
        <div className="box">
          <img src={monitor} alt="" />
          <img src={telefon} alt="" />
        </div>
        <span>Нажмите «Редактировать», чтобы создать свой сайт</span>
        <a href="#">Подробнее</a>
        <button>Редактировать </button>
      </header>
      <section>
        <div className="top">
          <div>
            <span> K.Griffith </span>
          </div>
          <div>
            <ul>
              <li> APPEARANCES </li>
              <li> BOOKS </li>
              <li> NEWS </li>
              <li> ABOUT </li>
              <li> CONTACT </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className='woman'>
          <img src={woman} alt="" />
          <div>
            <h1> Kayla Griffith </h1>
            <p> Award Winning Author</p>
          </div>
        </div>
      </section>
      <section className='middle'>
        <div className='boxcha'>
          <div className='chap'>
            <button className='topButton'> New Release </button>
            <h2 >The Swan Isle
              (2035)</h2>
            <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <h3> Order Now</h3>
            <div className='bottom'>
              <button className='knopka'> Amazon </button>
              <button className='knopka'> Google </button>
              <button className='knopka'> ibooks </button>
            </div>
          </div>
          <img className='book' src={book} alt="" />
        </div>
      </section>
      <section className='tekstUchta'>
        <h1 className='orta'>Praise & Reviews</h1>
        <div className="tekstUchta1">


          <div className="tekst1">
            <img src={Quoetea11} alt="" />
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <h5>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</h5>
            <hr></hr>
          </div>
          <div className="tekst1">
            <img src={Quoetea11} alt="" />
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <h5>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</h5>
            <hr></hr>
          </div>
          <div className="tekst1">
            <img src={Quoetea11} alt="" />
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <h5>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</h5>
            <hr></hr>
          </div></div>
      </section>
      <section className='blokchalar'>
        <h1 className='rangh1'>See Upcoming Appearances
        </h1>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
        <div className="blok">
          <div>
            <h3>January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST
            </h3><br />
            <button className='knopka1'>Join</button>
          </div>
        </div>
        <div className="blok">
          <div>
            <h3>January 31st 2035, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST
            </h3><br />
            <button className='knopka1'>Join</button>
          </div>
        </div>
        <div className="blok">
          <div>
            <h3>March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST
            </h3><br />
            <button className='knopka1'>Join</button>
          </div>
        </div>
      </section>
      <section className='oxirgiSection'>
        <div className="oxirgi">
          <img src={woman} alt="" className='oxirgi1' />
          <div className='oxirgi2'>
            <h1 className='rangh1'> About Kayla Griffith </h1>
            <p className='oxirgi3 '> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <button className='knopka1 boyi '> Read more </button>
          </div>
          </div>
      </section>
    </div>
  );
}

export default App;
