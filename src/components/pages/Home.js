import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3em', color: 'rgb(37, 150, 190)' }}>Welcome</h1>
        <p style={{ fontSize: '1.5em', color: '#2596be' }}>
          Lorem ipsum dolor sit.
        </p>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ flex: '1', padding: '20px' }}>
          <h2 style={{ color: 'rgb(37, 150, 190)' }}>Lorem ipsum dolor sit</h2>
          <p style={{ color: '#2596be', fontSize: '1.2em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum quam euismod justo laoreet, nec vehicula metus tincidunt. 
            Proin bibendum arcu et ligula tincidunt, at maximus nisl malesuada. Curabitur tincidunt odio vitae augue tristique, id cursus purus auctor.
          </p>
        </div>

        <div style={{ flex: '1', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '8px' }}>
          <h2 style={{ color: 'rgb(37, 150, 190)' }}>Lorem ipsum dolor sit</h2>
          <p style={{ color: '#2596be', fontSize: '1.2em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a viverra odio. Integer ut magna felis. Fusce fringilla, nulla vel vehicula auctor,
            enim libero fermentum nulla, eu convallis elit erat nec lorem.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#583ad4', color: 'white', padding: '40px', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2em' }}>Lorem ipsum dolor sit</h2>
        <p style={{ fontSize: '1.5em', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula lacinia velit, ut vulputate libero auctor id. Etiam auctor convallis eros, 
          vitae euismod nisi malesuada et. Nulla facilisi. Vestibulum euismod eros turpis, eu laoreet nulla tincidunt vel.
        </p>
      </section>
      
      <footer style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2em', color: '#2596be' }}>
        <p>&copy; 2020</p>
      </footer>
    </div>
  );
};

export default Home;
