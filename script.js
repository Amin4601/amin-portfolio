const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const selected = button.dataset.filter;
  cards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    card.classList.toggle('is-hidden', selected !== 'all' && !categories.includes(selected));
  });
}));

const projectData = {
  football: {
    label: 'PROJECT / 01 · SPORTS ANALYTICS',
    title: 'Football Analysis & Player Rating Prediction',
    description: 'This project combines a four-page Power BI report with a Python machine learning notebook. The dashboard pages are Overview, Leagues, Matches, and Players. The notebook prepares player-level data, handles missing values, encodes match results, and trains a Random Forest Regressor to estimate player ratings.',
    bullets: ['Power BI report: Overview, Leagues, Matches, and Players pages.', 'Python workflow: data cleaning, missing-value handling, feature selection, and train/test split.', 'RandomForestRegressor with 100 estimators.', 'Evaluation metrics included in the notebook: R², MAE, and RMSE.'],
    github: 'https://github.com/Amin4601/Football-Analysis-Project',
    files: [['Download Power BI report','assets/Football-Analysis-Dashboard.pbix'],['View Python notebook','assets/Football-Player-Rating-Model.ipynb']]
  },
  adventure: {
    label: 'PROJECT / 02 · BUSINESS INTELLIGENCE',
    title: 'Adventure Works Sales Analysis',
    description: 'A multi-page Power BI dashboard designed to explore sales performance, customer segments, and product performance. The project includes data extraction, cleaning, transformation, relational modeling, and DAX-based KPI calculations.',
    bullets: ['Power Query for data preparation and transformation.', 'Data model relationships across multiple tables.', 'DAX measures for Total Sales, Total Profit, Total Orders, Total Customers, and Return Rate.', 'Interactive filters for multidimensional analysis of business performance.'],
    github: 'https://github.com/Amin4601/adventure_works_analysis',
    files: []
  },
  tennis: {
    label: 'PROJECT / 03 · STATISTICAL ANALYSIS',
    title: 'Tennis Data Analysis',
    description: 'An exploratory and statistical study of tennis player and match datasets. The analysis investigates relationships between player height and world rankings, compares player and match performance, and communicates findings through visualizations.',
    bullets: ['Exploratory data analysis of player and match datasets.', 'Pearson and Spearman correlation analysis, including gender-based comparisons.', 'Analysis of wins, aces, double faults, break points, and match duration.', 'Aggregation and comparison of player statistics and prize distributions.'],
    github: 'https://github.com/Amin4601/Tennis_Analysis',
    files: []
  }
};
const dialog = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
document.querySelectorAll('.project-detail').forEach(button => button.addEventListener('click', () => {
  const project = projectData[button.dataset.project];
  modalContent.innerHTML = `<div class="project-kicker">${project.label}</div><h2>${project.title}</h2><p>${project.description}</p><ul>${project.bullets.map(item => `<li>${item}</li>`).join('')}</ul><div class="modal-actions"><a href="${project.github}" target="_blank" rel="noopener">OPEN GITHUB ↗</a>${project.files.map(file => `<a href="${file[1]}" download>${file[0].toUpperCase()} ↓</a>`).join('')}</div>`;
  dialog.showModal();
}));
document.querySelector('.modal-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, {threshold: 0.12});
document.querySelectorAll('.reveal, .section-index, .skill-card, .project-card, .education-row, .contact-inner').forEach(el => {
  el.classList.add('reveal'); observer.observe(el);
});
