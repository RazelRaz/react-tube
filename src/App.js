import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from "./components/Header.js"
import Feed from "./components/Feed.js"
import SearchResult from "./components/SearchResult.js"
import VideoDetails from "./components/VideoDetails.js"




import { AppContext } from "./context/contextApi"

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
          <div className='flex flex-col h-full'>
            <Header></Header>
            <Routes>
                <Route path="/" exact element={<Feed></Feed>} />
                <Route path="/searchResult/:searchQuery" element={<SearchResult></SearchResult>} />
                <Route path="/video/:id" element={<VideoDetails></VideoDetails>} />
            </Routes>
          </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
