// import { useState } from 'react'
// import './App.css'
import { Container } from '@mantine/core'
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import RecipePage from './pages/RecipePage';

import AppShellLayout from './components/AppShellLayout';
import UpdatePage from './pages/UpdatePage';

function App() {

  return (
    <Container
      size="90%"
    >
      <Routes>
        <Route element={<AppShellLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/recipe/:id' element={<RecipePage />} /> {/* This is a Dynamic Route */}
          <Route path='/update/:id' element={<UpdatePage />} /> {/* This is a Dynamic Route */}
        </Route>
      </Routes>
    </Container>
  );
}

export default App
