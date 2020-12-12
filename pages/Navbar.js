import Link from 'next/link'
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Next Js</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <ul class="navbar-nav">
      <li class="nav-item nav-link">
      <Link href="/"><span>Home</span></Link>
      </li>
      <li class="nav-item nav-link">
      <Link href="/About"><span>About Us</span></Link>
      </li>
      <li class="nav-item nav-link">
      <Link href="/About/ContactUs"><span>Contact Us</span></Link>
      </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
