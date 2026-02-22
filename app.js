const jobs = [
  {
    id: 1,
    company: 'Mobile First Corp',
    position: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110,000 – $172,000',
    description: 'Build cross-platform mobile applications using React Native. Collaborate with product and design teams to ship high-quality features used by millions of users worldwide.',
    status: 'not-applied'
  },
  {
    id: 2,
    company: 'WebFlow Agency',
    position: 'Web Designer & Developer',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$80,000 – $95,000',
    description: 'Create stunning web experiences for high-profile clients. Requires a strong portfolio and hands-on experience with modern design trends, accessibility standards, and design systems.',
    status: 'not-applied'
  },
  {
    id: 3,
    company: 'DataViz Solutions',
    position: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$100,000 – $165,000',
    description: 'Transform complex datasets into compelling, interactive visualizations. Proficiency in D3.js and React is required. You will work closely with enterprise clients on data-driven strategy.',
    status: 'not-applied'
  },
  {
    id: 4,
    company: 'CloudFirst Inc',
    position: 'Backend Developer',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$140,000 – $180,000',
    description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps pipelines and cloud infrastructure to support millions of daily active users at scale.',
    status: 'not-applied'
  },
  {
    id: 5,
    company: 'Innovation Labs',
    position: 'UI/UX Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$120,000 – $150,000',
    description: 'Create beautiful, functional interfaces for our product suite. You bring both design sensibility and engineering precision. Figma expertise and a strong accessibility mindset are essential.',
    status: 'not-applied'
  },
  {
    id: 6,
    company: 'MegaCorp Solutions',
    position: 'JavaScript Developer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 – $170,000',
    description: 'Build enterprise-grade applications with JavaScript and modern frameworks. Enjoy competitive pay, comprehensive health benefits, and strong investment in your professional growth.',
    status: 'not-applied'
  },
  {
    id: 7,
    company: 'StartupXYZ',
    position: 'Full Stack Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$105,000 – $160,000',
    description: 'Join a fast-moving startup shaping the future of our platform. Node.js and React experience required. Early-stage equity, great benefits, and the chance to influence product direction.',
    status: 'not-applied'
  },
  {
    id: 8,
    company: 'TechCorp Industries',
    position: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$150,000 – $210,000',
    description: 'Build high-impact web applications with React and TypeScript alongside a world-class engineering team. You will lead frontend architecture decisions and mentor junior developers.',
    status: 'not-applied'
  }
];

let activeTab = 'all';

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

function badgeClass(s) {
  return s === 'interview' ? 'badge-interview'
    : s === 'rejected' ? 'badge-rejected'
      : 'badge-not-applied';
}
function badgeLabel(s) {
  return s === 'interview' ? 'Interview'
    : s === 'rejected' ? 'Rejected'
      : 'Not Applied';
}

function showToast(msg, color = '') {
  const t = document.getElementById('toast');
  const txt = document.getElementById('toast-msg');
  txt.textContent = msg;
  t.style.background = color || '#111827';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function render() {
  const container = document.getElementById('cards-container');
  const emptyEl = document.getElementById('empty-state');
  const countEl = document.getElementById('tab-count');
  const titleEl = document.getElementById('empty-title');
  const subEl = document.getElementById('empty-sub');

  const filtered = activeTab === 'all'
    ? [...jobs]
    : jobs.filter(j => j.status === activeTab);

  countEl.textContent = `${filtered.length} job${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyEl.classList.add('show');
    if (activeTab === 'interview') {
      titleEl.textContent = 'No interviews yet';
      subEl.textContent = 'Click "Interview" on a card to start tracking';
    } else if (activeTab === 'rejected') {
      titleEl.textContent = 'No rejections recorded';
      subEl.textContent = 'Click "Rejected" on a card to log a rejection';
    } else {
      titleEl.textContent = 'No jobs available';
      subEl.textContent = 'Check back soon for new job opportunities';
    }
    return;
  }

  emptyEl.classList.remove('show');

  container.innerHTML = filtered.map((job, i) => `
        <div class="job-card status-${job.status}" data-id="${job.id}" role="listitem"
             style="animation-delay:${i * 0.04}s">
          <div class="card-header">
            <div class="card-header-left">
              <div class="company-name">${job.company}</div>
              <div class="job-position">${job.position}</div>
            </div>
            <button class="delete-btn" data-action="delete" data-id="${job.id}"
                    title="Remove this job" aria-label="Delete ${job.company}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
              </svg>
            </button>
          </div>

          <div class="job-meta">
            <span class="meta-chip">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${job.location}
            </span>
            <span class="meta-dot"></span>
            <span class="meta-chip">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
              </svg>
              ${job.type}
            </span>
            <span class="meta-dot"></span>
            <span class="meta-chip">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
              </svg>
              ${job.salary}
            </span>
          </div>

          <span class="status-badge ${badgeClass(job.status)}">${badgeLabel(job.status)}</span>

          <p class="job-description">${job.description}</p>

          <div class="card-actions">
            <button class="action-btn btn-interview ${job.status === 'interview' ? 'active' : ''}"
                    data-action="interview" data-id="${job.id}" aria-pressed="${job.status === 'interview'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Interview
            </button>
            <button class="action-btn btn-rejected ${job.status === 'rejected' ? 'active' : ''}"
                    data-action="rejected" data-id="${job.id}" aria-pressed="${job.status === 'rejected'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Rejected
            </button>
          </div>
        </div>
      `).join('');
}

function updateCounts() {
  document.getElementById('count-total').textContent = jobs.length;
  document.getElementById('count-interview').textContent = jobs.filter(j => j.status === 'interview').length;
  document.getElementById('count-rejected').textContent = jobs.filter(j => j.status === 'rejected').length;
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    activeTab = btn.dataset.tab;
    render();
  });
});

document.getElementById('cards-container').addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const id = parseInt(btn.dataset.id);
  const action = btn.dataset.action;
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  if (action === 'delete') {
    jobs.splice(jobs.indexOf(job), 1);
    updateCounts();
    render();
    showToast(`Removed ${job.company}`, '#374151');
    return;
  }

  if (action === 'interview') {
    job.status = job.status === 'interview' ? 'not-applied' : 'interview';
  } else if (action === 'rejected') {
    job.status = job.status === 'rejected' ? 'not-applied' : 'rejected';
  }

  if (job.status === 'interview') {
    showToast(`${job.company} → Interview 🎉`, '#059669');
  } else if (job.status === 'rejected') {
    showToast(`${job.company} → Rejected`, '#dc2626');
  } else {
    showToast(`${job.company} status cleared`);
  }

  updateCounts();
  render();
});

updateCounts();
render();

