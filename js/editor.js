const title = document.querySelector('.title');
const publishedDate = document.querySelector('.published');
const category = document.querySelector('.category');
const level = document.querySelector('.level');
const time = document.querySelector('.time');
const article = document.querySelector('.article');
const publishBtn = document.querySelector('.publish-btn');
const previewContainer = document.querySelector('.preview-container');

article.addEventListener('input', () => {
  const markdownContent = article.value;
  const htmlContent = convertMarkdownToHTML(markdownContent);
  previewContainer.innerHTML = htmlContent;
});

publishBtn.addEventListener('click', () => {
  const markdownContent = article.value;
  const htmlContent = convertMarkdownToHTML(markdownContent);

  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString();

  const filename = `${slugify(title.value)}.html`;
  const formattedDate = `${day}/${month}/${year}`;
  const formattedCategory = getCategoryInPortuguese(category.value);
  const formattedLevel = getLevelInPortuguese(level.value);
  const formattedTime = `${time.value} minutos`;

  const htmlTemplate = `<!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <script src="./../../../js/post-head.js"></script>
      <title>RonTekhne | ${title.value}</title>
  </head>
  <body>
      <script src="./../../../js/post-navbar.js"></script>
      <!-- title -->
      <header>
          <div class="p-5 bg-light text-secondary rounded">
              <h1 class="text-center text-dark">${title.value}</h1>
              <p class="text-center"><small>Publicado: ${formattedDate}</small></p>
              <p class="text-center"><small>Categoria: ${formattedCategory}</small></p>
              <p class="text-center"><small>Nível: ${formattedLevel}</small></p>
              <p class="text-center"><small>Tempo: ${formattedTime}</small></p>
          </div>
      </header>

      <!-- main article -->
      <section>
          <div class="row p-3 mx-auto">
              <div class="col-sm-12 mt-2">
                  <div class="card h-100 bg-light text-dark">
                      <div class="card-body">
                          <div class="text-center">
                          </div>
                          ${htmlContent}
                      </div>
                  </div>
              </div>
          </div>
      <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
      <script src="./../../../js/script.js"></script>
      
      <script src="./../../../js/post-footer.js"></script>
      <script src="./../../../js/post-scroll.js"></script>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>`;

  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', `data:text/html;charset=utf-8,${encodeURIComponent(htmlTemplate)}`);
  downloadLink.setAttribute('download', filename);
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

function convertMarkdownToHTML(markdown) {
    // Strong emphasis
    markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
  
    // Emphasis
    markdown = markdown.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
  
    // Headings
    markdown = markdown.replace(/######\s*(.*)/g, '<h6>$1</h6>');
    markdown = markdown.replace(/#####\s*(.*)/g, '<h5>$1</h5>');
    markdown = markdown.replace(/####\s*(.*)/g, '<h4>$1</h4>');
    markdown = markdown.replace(/###\s*(.*)/g, '<h3>$1</h3>');
    markdown = markdown.replace(/##\s*(.*)/g, '<h2>$1</h2>');
    markdown = markdown.replace(/#\s*(.*)/g, '<h1>$1</h1>');
  
    // Unordered Lists
    markdown = markdown.replace(/^\s*-\s*(.*)$/gm, '<ul><li>$1</li></ul>');
  
    // Convert line breaks
    markdown = markdown.replace(/(\n+)/g, '<br>');
  
    return markdown;
  }

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '')
    .trim();
}

function getCategoryInPortuguese(value) {
  if (value === 'computing') {
    return 'Computação';
  } else if (value === 'games') {
    return 'Jogos';
  } else if (value === 'technology') {
    return 'Tecnologia';
  } else if (value === 'varieties') {
    return 'Variedades';
  }
  return value;
}

function getLevelInPortuguese(value) {
  if (value === 'basic') {
    return 'Básico';
  } else if (value === 'intermediate') {
    return 'Intermediário';
  } else if (value === 'advanced') {
    return 'Avançado';
  }
  return value;
}