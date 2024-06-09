import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">      
      <img src={logo} className="App-logo" alt="logo" />
      <section>
        <h2>About Me</h2>
        <p>I am an experienced technical writer who also codes.</p>
      </section>

      <section>
        <h2>My Skills</h2>
        <ul>
          <li>Technical Writing</li>
          <li>User Experience Design</li>
          <li>AI Application Development</li>
        </ul>
      </section>

      <section>
        <h2>My Work Samples</h2>
        <div>
          <div>
            <h3>Keel Meta Framework</h3>
            <iframe src="https://www.developer.com/java/keel-the-meta-framework/" width="50%" height="50%" style={{ border: '1px solid black', overflow: 'scroll', maxHeight: '60vh' }}></iframe>
          </div>

          <div>
            <h3>JFig</h3>
            <iframe src="https://www.developer.com/java/managing-your-configuration-with-jfig/" width="50%" height="50%" style={{ border: '1px solid black', overflow: 'scroll', maxHeight: '60vh' }}></iframe>
          </div>

          <div>
            <h3>Log4J</h3>
            <iframe src="https://www.developer.com/guides/logging-with-log4j-an-efficient-way-to-log-java-applications/" width="50%" height="50%" style={{ border: '1px solid black', overflow: 'scroll', maxHeight: '60vh' }}></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
