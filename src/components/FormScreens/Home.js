import React from 'react'

const Home = () => {
  return (
    <div className='banner'>
      <div className='wrapper'>
        <nav class='navbar' id='main-menu'>
          <ul>
            <li>
              <a href='/home'></a>HOME
            </li>
            <li>
              <a href='/bed'></a>BEDROOM
            </li>
            <li>
              <a href='/app'></a>DINING
            </li>
            <li>
              <a href='/app'></a>KITCHEN
            </li>
            <li>
              <a href='/app'></a>BACKYARD
            </li>
          </ul>
        </nav>
        <input type='checkbox' id='hamburger-input' class='burger-shower' />
        <label id='hamburger-menu' for='hamburger-input'>
          <nav id='sidebar-menu'>
            <h3>Menu</h3>
            <ul>
              <li>
                <a href='/home'></a>HOME
              </li>
              <li>
                <a href='/bed'></a>BEDROOM
              </li>
              <li>
                <a href='/app'></a>DINING
              </li>
              <li>
                <a href='/app'></a>KITCHEN
              </li>
              <li>
                <a href='/app'></a>BACKYARD
              </li>
            </ul>
          </nav>
        </label>
      </div>
    </div>
  )
}

export default Home
