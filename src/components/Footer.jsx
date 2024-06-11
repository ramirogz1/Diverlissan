import React from 'react'

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light mt-5">
    <div className="container text-center">
        <h5 className="text-muted">Ramiro Gonzalez</h5>
      <span className="text-muted">© {new Date().getFullYear()} Diverlissan</span>
    </div>
  </footer>
  )
}

export default Footer