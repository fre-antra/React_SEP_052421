import './App.css'
import ClickRenderComponent from './components/RenderProps/ClickRenderComponent'
import HoverRenderComponent from './components/RenderProps/HoverRenderComponent'
// import ClickComponent from './components/HOC/ClickComponent'
// import HoverComponent from './components/HOC/HoverComponent'
import RenderComponent from './components/RenderProps/RenderComponent'

function App() {
  return (
    <div>
      {/* =====HIGHER ORDER COMPONENTS */}

      {/* <ClickComponent />
      <HoverComponent /> */}

      {/* =====RENDER PROPS */}
      <RenderComponent
        render={(count, handleIncrement) => (
          <ClickRenderComponent
            count={count}
            handleIncrement={handleIncrement}
          ></ClickRenderComponent>
        )}
      />
      <RenderComponent
        render={(count, handleIncrement) => (
          <HoverRenderComponent
            count={count}
            handleIncrement={handleIncrement}
          ></HoverRenderComponent>
        )}
      />
    </div>
  )
}

export default App
