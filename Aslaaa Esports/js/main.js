// Minimal helper qs function from lib/util.js is used here.
(function(){
  const $ = window.$;
  const data = window.AE_DATA;

  // Mobile nav toggle
  const toggle = $.qs('.nav-toggle');
  const mobileNav = $.qs('#mobile-nav');
  if (toggle && mobileNav){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.hidden = expanded;
    });
  }

  // Render year
  const year = $.qs('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Render teams
  const teamGrid = $.qs('#teams-grid');
  if (teamGrid){
    teamGrid.innerHTML = data.teams.map(team => `
      <article class="card">
        <span class="badge">${team.ach}</span>
        <h3>${team.name}</h3>
        <p class="muted">${team.tagline}</p>
        <a class="btn btn-ghost" href="#${team.name.toLowerCase()}">Explore</a>
      </article>
    `).join('');
  }

  // Render matches
  const tbody = $.qs('#matches-body');
  if (tbody){
    tbody.innerHTML = data.matches.map(m => `
      <tr>
        <td>${m.game}</td>
        <td>${m.teamA}</td>
        <td>${m.teamB}</td>
        <td>${m.date}</td>
        <td>${m.time}</td>
        <td><span class="badge">${m.status}</span></td>
      </tr>
    `).join('');
  }

  // Render news
  const newsList = $.qs('#news-list');
  if (newsList){
    newsList.innerHTML = data.news.map(n => `
      <article class="news-item">
        <div>
          <strong>${n.title}</strong><br />
          <small class="badge">${n.tag}</small>
        </div>
        <small>${n.minutes} min</small>
      </article>
    `).join('');
  }

  // Render partners
  const partnersRow = $.qs('#partners-row');
  if (partnersRow){
    partnersRow.innerHTML = data.partners.map((p,i) => `
      <div class="partner" title="${p}">
        <img src="assets/images/partner-${(i%4)+1}.svg" alt="${p} logo" />
      </div>
    `).join('');
  }

  // Newsletter (demo only)
  const newsletter = $.qs('.newsletter');
  if (newsletter){
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletter.querySelector('input[type="email"]')?.value || "";
      alert('Subscribed: ' + email);
      newsletter.reset();
    });
  }
})();
