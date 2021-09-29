import SiteLayout from './SiteLayout'
import './App.css'
import ErrorBoundary from './ErrorBoundary'

const Callout = ({ children }) => <div className="callout">{children}</div>
const BreakThings = () => {
  throw new Error('gremlins')
}

function App() {
  return (
    <SiteLayout
      menu={
        <>
          <ErrorBoundary>
            <p> Site Layout Menu </p>
            <BreakThings />
          </ErrorBoundary>
        </>
      }
    >
      <>
        <Callout>Callout</Callout>

        <ErrorBoundary>
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
          <BreakThings />
        </ErrorBoundary>
      </>
    </SiteLayout>
  )
}

export default App
