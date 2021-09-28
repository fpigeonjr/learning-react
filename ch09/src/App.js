import SiteLayout from './SiteLayout'
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import ErrorScreen from './ErrorScreen'
import BreakThings from './BreakThings'

const Callout = ({ children }) => <div className="callout">{children}</div>

function App() {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary fallback={ErrorScreen}>
          <p> Site Layout Menu </p>
          <BreakThings />
        </ErrorBoundary>
      }
    >
      <>
        <Callout>Callout</Callout>
        <h1>Contents</h1>
        <p>This is the main part of the example layout</p>
      </>
    </SiteLayout>
  )
}

export default App
