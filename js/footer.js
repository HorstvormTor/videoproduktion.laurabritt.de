const templateFooter = document.createElement('template');

templateFooter.innerHTML =
    `
      <div class="footer">
          <ul class="nav-list-footer">
            <li class="list-item"><a href="/">Start</a></li>
            <li class="list-item"><a href="/preise">Preise</a></li>
            <li class="list-item"><a href="/kontakt">Kontakt & Impressum</a></li>
            <li class="list-item"><a href="/datenschutz">Datenschutz</a></li>
          </ul>
      </div>
    `

document.body.appendChild(templateFooter.content);
