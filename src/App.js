import React, { Component } from 'react'
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom'
import Layout from './pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from '@/components/AuthRoute'
import './App.css'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'
import { history } from '@/utils/history'

export default class App extends Component {
  render() {
    return (
      <HistoryRouter history={history}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <AuthRoute>
                  <Layout />
                </AuthRoute>
              }
            >
              <Route index element={<Home />}></Route>
              <Route path="article" element={<Article />}></Route>
              <Route path="publish" element={<Publish />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </HistoryRouter>
    )
  }
}
