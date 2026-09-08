(function () {
  'use strict';

  // 读取已保存主题，否则跟随系统偏好
  function getPreferredTheme() {
    var saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // 切换并持久化主题
  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  // 尽早应用主题，避免闪烁
  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);

    // 若首页存在文章列表容器，则根据 window.POSTS 渲染
    var list = document.getElementById('post-list');
    if (list && Array.isArray(window.POSTS)) {
      list.innerHTML = window.POSTS.map(function (p) {
        return (
          '<li class="post-card">' +
            '<h2><a href="' + p.url + '">' + p.title + '</a></h2>' +
            '<div class="post-meta">' + p.date + ' · ' + p.tags + '</div>' +
            '<p class="post-excerpt">' + p.excerpt + '</p>' +
          '</li>'
        );
      }).join('');
    }
  });
})();
