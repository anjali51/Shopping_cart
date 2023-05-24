import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Header({products:{cart}}) {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <div class="container-fluid">
                <ul class="navbar-nav">
                <li class="nav-item">
                   <Link class="nav-link" to="/todolist">TodoList</Link>
                </li>
                <li class="nav-item">
                     <Link class="nav-link" to="/counter">Counter</Link>
                </li>
                <li class="nav-item">
                     <Link class="nav-link" to="/products">Products</Link>
                </li>
                <li class="nav-item">
                     <Link class="nav-link" to="/countries">Countries</Link>
                </li>
                <li class="nav-item">
                     <Link class="nav-link" to="/cart">
                        <i class="bi bi-cart"></i>
                        <span class="badge bg-danger">{cart.length}</span>
                     </Link>
                </li>
                </ul>
             </div>
        </nav>
    </div>
  )
}

export default connect(store=>store)(Header)
