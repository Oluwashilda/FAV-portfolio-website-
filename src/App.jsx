
import './index.css'

const nailDesigns = [
  {
    name: 'Fuchsia Chrome',
    category: 'CHROME / GEL',
    image:
      'src/images/ughhh.fav.jpg',
    className: 'photo-one',
  },
  {
    name: 'Dark Aesthetics',
    category: 'NAIL ART / GEL',
    image:
      'src/images/gliterry.dark.jpg',
    className: 'photo-two',
  },
  {
    name: 'Pretty in Pink',
    category: 'CUSTOM SET',
    image:
      'src/images/candycrush.jpg',
    className: 'photo-three',
  },
  {
    name: 'Burgundy Bliss',
    category: 'CUSTOM SET',
    image:
      'src/images/burgundy.jpg',
  },
  {
    name: 'Blush Hour',
    category: 'PINK / MINIMAL',
    image:
      'src/images/pretty.in.pink.jpg',
  },
  {
    name: 'The Clean Set',
    category: 'CLEAN GIRL / GEL',
    image:
      'src/images/fushia.elegance.jpg',
  },
  {
    name: 'Cherry On Top',
    category: 'NAIL ART',
    image:
      'src/images/frenchtipsy.jpg',
  },
  {
    name: 'Milky French Tips',
    category: 'GLOSS / CHROME',
    image:
      'src/images/french.tip.jpg',
  },
  {
    name: 'Pretty in Neutrals',
    category: 'NUDE / ELEGANT',
    image:
      'src/images/frenchtipsy.jpg',
  },
  {
    name: 'Main Character',
    category: 'SIGNATURE SET',
    image:
      'src/images/monochrome.star.jpg',
  },

]

function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="FAV home">
          FAV<span className="wordmark-dot">.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">THE NAIL EDIT</a>
          <a href="#about">THE ARTIST</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a className="header-book" href="#contact">
          BOOK YOUR SET <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            NAILS WITH A LITTLE EXTRA SOMETHING <span>✳</span>
          </p>

          <h1>
            Your <span>fave.</span>
            <br />
            Obviously.
          </h1>

          <p className="hero-description">
            Your favorite nail artist. Your next favourite set.
            Beautiful nails, thoughtful details, and a little
            main-character energy in every appointment.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Book your appointment <span>↗</span>
            </a>
            <a className="text-link" href="#work">
              Explore the nail edit ↓
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot" />
            MADE WITH LOVE. FINISHED WITH GLOSS.
          </div>
        </div>

        <div className="hero-art" aria-label="Featured nail designs">
          <div className="art-sticker sticker-top">FAVOURITE<br />BY NATURE ✳</div>

          <div className="hero-image hero-image-main">
            <img
              src={nailDesigns[0].image}
              alt="Pink manicure inspiration"
            />
          </div>

          <div className="hero-image hero-image-small">
            <img
              src={nailDesigns[1].image}
              alt="Elegant nail art inspiration"
            />
          </div>

          <div className="art-caption">
            <span>01 / THE SIGNATURE</span>
            <span>A set to remember.</span>
          </div>

          <div className="art-sticker sticker-bottom">GOOD<br />NAILS ONLY ♡</div>
        </div>

        <div className="hero-bottom">
          <span>NAIL ARTIST · CREATIVE SOUL</span>
          <span>LITTLE DETAILS. BIG FAVOURITE ENERGY.</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A LITTLE LOOK AT THE GOOD STUFF</p>
            <h2>The nail <span>edit.</span></h2>
          </div>
          <p className="section-intro">
            From clean-girl classics to extra-extra sets.
            Find the mood, then make it yours.
          </p>
        </div>

        
<div className="gallery">
  {nailDesigns.map((design, index) => (
    <article className="gallery-card" key={design.name}>
      <a
        className="gallery-image"
        href="#contact"
        aria-label={`Ask about ${design.name}`}
      >
        <img
          src={design.image}
          alt={design.name}
          loading="lazy"
        />
      </a>

      <div className="gallery-meta">
        <div>
          <h3>{design.name}</h3>
          <p>{design.category}</p>
        </div>
        <span className="gallery-number">
          ↗
        </span>
      </div>
    </article>
  ))}
</div>


        <div className="gallery-footer">
          <p>YOUR HANDS CALLED. THEY WANT A LITTLE TREAT.</p>
          <a className="text-link" href="#contact">
            Let's make a set ↗
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        
        <img
         className="about-mark" 
         src="src/images/fav.jpeg"
         alt="FAV, the nail artist"
        />
      
        <div className="about-copy">
          <p className="eyebrow">A NOTE FROM YOUR NAIL GIRL</p>
          <h2>It's not just a set. <span>It's a whole mood.</span></h2>
          <p>
            FAV is all about nails that feel like you — whether
            that means timeless and delicate or bold enough to
            start a conversation. Every set gets care, creativity,
            and the tiniest bit of extra love.
          </p>
          <a className="text-link" href="#contact">
            Come sit with me ♡
          </a>
        </div>
      </section>

      <section className="booking-section" id="contact">
        <p className="eyebrow">YOUR NEXT FAVOURITE SET STARTS HERE</p>
        <h2>Let's get you <span>booked.</span></h2>
        <p>
          Have a set in mind? Let's bring your nail mood board
          to life.
        </p>
        <div className="booking-actions">
          <a
            className="button button-primary"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
          >
            Book via WhatsApp ↗
          </a>
          <a className="button button-light" href="#work">
            Browse the portfolio
          </a>
        </div>
        <span className="booking-footnote">
          CUSTOM SETS · CUTE DETAILS · ALL THE GOOD GLOSS
        </span>
      </section>

      <footer className="site-footer">
        <a className="footer-logo" href="#home">FAV.</a>
        <p>Your favorite nail artist. Obviously. ♡</p>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© {new Date().getFullYear()} FAV NAILS</span>
      </footer>
    </main>
  )
}

export default App
