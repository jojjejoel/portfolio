(function () {
  'use strict';

  var isSubpage = window.location.pathname.indexOf('/pages/') !== -1;
  var BASE = isSubpage ? '../' : '';

  // ── SVG Icons ─────────────────────────────────────────────────────────────

  var ICONS = {
    email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>',
    spotify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.586 14.424a.623.623 0 0 1-.857.208c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.624.624 0 0 1 .207.856zm1.223-2.72a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.781.781 0 0 1 .52-.973c3.632-1.102 8.147-.568 11.233 1.329a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.376 8.775 6.227 9.71a.937.937 0 1 1-.543-1.79c3.632-1.102 9.68-.89 13.498 1.313a.937.937 0 0 1-.268 1.836z"/></svg>',
    arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>',
    videoPlaceholder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><polygon points="10 8 16 12 10 16 10 8"/></svg>'
  };

  // ── Helpers ───────────────────────────────────────────────────────────────

  function socialIcon(label, href, svgKey) {
    return '<a href="' + href + '" class="social-icon" target="' + (href.startsWith('mailto') ? '_self' : '_blank') + '" rel="noopener" aria-label="' + label + '">' + ICONS[svgKey] + '</a>';
  }

  function socialIconsHtml() {
    return socialIcon('Email', 'mailto:' + PORTFOLIO.social.email, 'email') +
      socialIcon('LinkedIn', PORTFOLIO.social.linkedin, 'linkedin') +
      socialIcon('GitHub', PORTFOLIO.social.github, 'github') +
      socialIcon('Spotify', PORTFOLIO.social.spotify, 'spotify');
  }

  function videoEmbed(youtubeId) {
    if (!youtubeId) {
      return '<div class="video-wrapper"><div class="video-placeholder">' + ICONS.videoPlaceholder + '<span>Video coming soon</span></div></div>';
    }
    return '<div class="video-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/' + youtubeId + '?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="YouTube video"></iframe></div>';
  }

  function paragraphsHtml(arr) {
    if (!arr || !arr.length) return '';
    return arr.map(function (p) { return '<p>' + p + '</p>'; }).join('');
  }

  function bulletsHtml(arr) {
    if (!arr || !arr.length) return '';
    return '<ul class="card-bullets">' + arr.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>';
  }

  function navLink(hash) {
    return BASE + 'index.html' + hash;
  }

  // ── Nav ───────────────────────────────────────────────────────────────────

  function renderNav() {
    var nav = document.getElementById('nav');
    if (!nav) return;

    nav.innerHTML =
      '<a href="' + (isSubpage ? BASE + 'index.html' : '#home') + '" class="nav-logo">Joel Schultz<span class="nav-logo-sub"> | Technical Audio Designer</span></a>' +
      '<button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '<div class="nav-right" id="nav-right">' +
        '<nav class="nav-links">' +
          '<a href="' + navLink('#shipped-games') + '">Shipped Games</a>' +
          '<a href="' + navLink('#sound-redesigns') + '">Sound Redesigns</a>' +
          '<a href="' + navLink('#personal-projects') + '">Personal Projects</a>' +
          '<a href="' + navLink('#about') + '">About</a>' +
        '</nav>' +
        '<div class="nav-social">' + socialIconsHtml() + '</div>' +
        '<a href="' + BASE + PORTFOLIO.about.resumeUrl + '" target="_blank" rel="noopener" class="btn-resume">Resume</a>' +
      '</div>';

    nav.querySelector('.nav-toggle').addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      document.getElementById('nav-right').classList.toggle('open', !expanded);
    });

    // Close mobile nav on link click
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.getElementById('nav-right').classList.remove('open');
        nav.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Hero ──────────────────────────────────────────────────────────────────

  function renderHero() {
    var heroVideo = document.getElementById('hero-video');
    var heroSocial = document.getElementById('hero-social');
    if (heroVideo) heroVideo.innerHTML = videoEmbed(PORTFOLIO.heroYoutubeId);
    if (heroSocial) heroSocial.innerHTML = socialIconsHtml();
  }

  // ── Project Card ─────────────────────────────────────────────────────────

  function renderProjectCard(project, flip) {
    var hasVideo = Boolean(project.youtubeId !== undefined);
    var actions = '';

    if (project.detailPage) {
      actions += '<a href="' + BASE + project.detailPage + '" class="btn-accent">' + (project.detailLabel || 'Read more') + '</a>';
    }
    if (project.downloadUrl) {
      actions += '<a href="' + project.downloadUrl + '" class="btn-accent">Download application</a>';
    }

    var actionsHtml = actions ? '<div class="card-actions">' + actions + '</div>' : '';

    var textCol =
      '<div class="card-text">' +
        '<h3 class="card-title">' + project.title + '</h3>' +
        '<div class="card-body">' +
          paragraphsHtml(project.paragraphs) +
          bulletsHtml(project.bullets) +
        '</div>' +
        actionsHtml +
      '</div>';

    var videoCol = '<div class="card-video">' + videoEmbed(project.youtubeId) + '</div>';

    var cardClass = 'project-card' + (flip ? ' card-flip' : '');
    return '<div class="' + cardClass + '">' + textCol + videoCol + '</div>';
  }

  function renderSection(projects, containerId, flip) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = projects.filter(function (p) {
      return !p.hidden;
    }).map(function (p) {
      return renderProjectCard(p, flip || false);
    }).join('');
  }

  // ── About ─────────────────────────────────────────────────────────────────

  function renderAbout() {
    var container = document.getElementById('about-content');
    if (!container) return;

    var photoHtml = PORTFOLIO.about.photo
      ? '<img src="' + PORTFOLIO.about.photo + '" alt="Joel Schultz" class="about-photo">'
      : '<div class="about-photo-placeholder">Add joel-photo.jpg to the assets/ folder</div>';

    var soundcloudEmbed =
      '<div class="soundcloud-wrap">' +
        '<iframe width="100%" height="83" scrolling="no" frameborder="no" allow="autoplay" ' +
          'src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1141784041&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">' +
        '</iframe>' +
      '</div>';

    container.innerHTML =
      '<div class="about-photo-wrap">' + photoHtml + '</div>' +
      '<div class="about-text">' +
        '<h2>Hello there,</h2>' +
        paragraphsHtml(PORTFOLIO.about.paragraphs) +
        '<div class="about-actions">' +
          '<div class="about-actions-left">' +
            '<a href="' + PORTFOLIO.about.resumeUrl + '" target="_blank" rel="noopener" class="btn-accent">Resume</a>' +
            '<div class="about-social">' + socialIconsHtml() + '</div>' +
          '</div>' +
          soundcloudEmbed +
        '</div>' +
      '</div>';
  }

  // ── Init ──────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    renderNav();

    if (document.getElementById('hero-video')) {
      renderHero();
      renderSection(PORTFOLIO.shippedGames, 'shipped-games-list', false);
      renderSection(PORTFOLIO.soundRedesigns, 'sound-redesigns-list', true);
      renderSection(PORTFOLIO.personalProjects, 'personal-projects-list', false);
      renderAbout();
    }
  });

}());
