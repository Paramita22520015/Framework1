import './App.css';
import kartun from './sponge.jpg';

function App() {
  return (
    <div className="App">
      <header>
      <header/>
        <h1>Paramita Berseri-seri Sepanjang Hari</h1>
      </header>

      <section>
        <nav>
          <ul>Link Favorit Aku ;
            <li><a href="https://youtube.com">Buka Youtube</a></li>
            <li><a href="https://facebook.com">Buka Fesbuk</a></li>
          </ul>
        </nav>
        
        <article>
          <h1>Tugas Framework</h1>
          <p>Ini Kartun Kesukaan.</p>
          <img src={kartun} alt="Spongebob" />;
          <p>Ini Film Favorit</p>
          <iframe src='https://www.youtube.com/embed/KB1Y3Sl_Lrw'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
        />
          
        </article>
      </section>

      <footer>
        <p>Made With Luph ❤ Paramita</p>
      </footer>
  
    </div>
  );
}

export default App;
