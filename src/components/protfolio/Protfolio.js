import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Protfolio.css';

function Protfolio() {
  return (
    <div>
        <Header></Header>
        <section className='protfolio-section'>
            <h2 className='my-title'>
                Protfolio
            </h2>
            <div className='my-protfolio'>

            <div className='protfolio-card'>
                    <img src='https://www.interviewbit.com/blog/wp-content/uploads/2021/12/1-2-550x559.png' alt='Project Image' />
                    <div className='card-details'>
                        <h3>Cryptocurrency Application</h3>
                        <p>React</p>
                        <a href="https:facebook.com"><i className='fa fa-github'></i></a>
                    </div>
                </div>
           
                <div className='protfolio-card'>
                    <img src='https://www.interviewbit.com/blog/wp-content/uploads/2021/12/3-1-550x575.png' alt='Project Image' />
                    <div className='card-details'>
                        <h3>Notes Application</h3>
                        <p>React</p>
                        <a href="https:facebook.com"><i className='fa fa-github'></i></a>
                    </div>
                </div>
                <div className='protfolio-card'>
                    <img src='https://www.interviewbit.com/blog/wp-content/uploads/2021/12/5-2-550x651.png' alt='Project Image' />
                    <div className='card-details'>
                        <h3>Chat App</h3>
                        <p>React</p>
                        <a href="https:facebook.com"><i className='fa fa-github'></i></a>
                    </div>
                </div>

                <div className='protfolio-card'>
                    <img src='https://www.interviewbit.com/blog/wp-content/uploads/2021/12/Movie-Recommendation-Engine-550x550.png' alt='Project Image' />
                    <div className='card-details'>
                        <h3>React Movie Application</h3>
                        <p>Reactjs</p>
                        <a href="https:facebook.com"><i className='fa fa-github'></i></a>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
  );
}

export default Protfolio;
