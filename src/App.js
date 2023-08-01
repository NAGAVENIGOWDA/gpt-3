import {Footer,Header,Possibility,WhatGPT3,Blog,Features} from "./containers"
import {Article,Navbar,CTA,Brand,Feature} from "./components"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  );
}

export default App;
