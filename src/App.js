import './App.css';
import backgroundImg from './image/background.webp';

const mainWrapperStyle = {
  minHeight: '100vh',
  height: '100%',
  backgroundColor: 'rgba(38, 138, 255, 1.0)',
  display: 'flex',
  flexDirection: 'column'
}

const wrapperStyle = {
  display: 'flex',
}

const rightPanelStyle = {
  flexBasis: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const leftPanelStyle = {
  flexBasis: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5em'
}

const iconImg = {
  width: '70%',
}

const heading1 = {
  color: 'white',
  fontSize: '3em',
  fontWeight: '600'
}

const heading2 = {
  color: 'white',
  fontSize: '1.5em',
  fontWeight: '100',
  marginTop: '1em'
}

const buttonWrapper = {
  display: 'flex',
  alignItems: 'center',
  padding: '4em 4em 4em 0'
}

const button1 = {
  padding: '1em 1.5em',
  fontSize: '1em',
  background: 'white',
  borderRadius: '0.25em',
  marginRight: '1em',
  border: '0'
}

const button2 = {
  padding: '1em 1.5em',
  fontSize: '1em',
  background: '#0aaaff',
  borderRadius: '0.25em',
  color: 'white',
  border: '0'
}

const buttonSpan = { 
  fontWeigth: 'bold'
}

const footer = {
  padding: '5em'
}

const footerText = {
  color: '#aedfff'
}

const footerTextHighlight = {
  fontWeight: 'bold'
}

function App() {
  return (
    <div style={mainWrapperStyle}>
      <div style={wrapperStyle}>
        <div style={leftPanelStyle}>
          <div style={heading1}>All-In-One Test Automation Platform</div>
          <div style={heading2}>Get started in no time, scale up with no limit, for any team, at any level.</div>
          <div style={buttonWrapper}>
            <button style={button1}>
              <span style={buttonSpan}>Get Started</span>
            </button>
            <button style={button2}>
              <span style={buttonSpan}>View Demo</span>
            </button>
          </div>
        </div>
        <div style={rightPanelStyle}>
          <img style={iconImg} alt={'katalon icon'} src={backgroundImg} />
        </div>
      </div>
      <div style={footer}>
        <div style={footerText}>
          Be a part of the <span style={footerTextHighlight}>100,000+</span> companies using our Katalon Solution
        </div>
      </div>
    </div>
  );
}

export default App;
