import React, { Component } from 'react'
import { RG, Wrapper } from './Layout.js'
import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './Sidebar.js'
import { InfoDisplay } from './Info.js'
class Main extends Component {
  render () {
    return (
      <BrowserRouter>
        <Wrapper>
          <RG.Row>
            <RG.Col span='12'>
              <Header />
            </RG.Col>
          </RG.Row>
          <RG.Row>
            <RG.Col span='4'>
              <Sidebar />
            </RG.Col>
            <RG.Col span='8'>
              <InfoDisplay />
            </RG.Col>
          </RG.Row>
          <RG.Row>
            <RG.Col span='12'>
              <Footer />
            </RG.Col>
          </RG.Row>
        </Wrapper>
      </BrowserRouter>
    )
  }
}

export default Main