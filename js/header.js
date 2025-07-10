const templateHeader = document.createElement('template');

templateHeader.innerHTML =
    `
      <header id="header">
        <nav class="navbar-desktop">
          <a class="a-logo-topnav" href="/"><img alt="Unterschrift Laura Britt" class="logo-topnav" src="/media/Unterschrift%20Laura%20Britt%20V1.png"></a>
          <ul class="nav-list-desktop">
            <li class="list-item"><a href="/">Start</a></li>
            <li class="list-item"><a href="/preise">Preise</a></li>
            <li class="list-item"><a href="/kontakt">Kontakt</a></li>
          </ul>
          <div class="menu" id="toggle-button">
            <div class="burger-menu-line"></div>
            <div class="burger-menu-line"></div>
            <div class="burger-menu-line"></div>
          </div>
        </nav>
        <nav class="navbar-mobil" id="toggle-navbar-mobil">
          <ul class="nav-list-mobil" id="list-mobil">
            <li class="list-item"><a href="/">Start</a></li>
            <li class="list-item"><a href="/preise">Preise</a></li>
            <li class="list-item"><a href="/kontakt">Kontakt</a></li>
          </ul>
        </nav>
      </header>
    `

document.body.appendChild(templateHeader.content);
