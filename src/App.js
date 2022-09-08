import React from 'react'
import Article from './Article'
import data from './data'

const getStorageTheme = () => {
  let theme = 'white-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const App = () => {
  const [theme, setTheme] = React.useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === 'white-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('white-theme')
    }
  }
  // document.documentElement.className it will get class
  React.useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <main>
      <nav className="nav-center">
        <h1>Dark&white</h1>
        <button className="btn" onClick={toggleTheme}>
          Toggle
        </button>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
