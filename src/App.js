import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from '@/pages/Login'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    )
  }
}
