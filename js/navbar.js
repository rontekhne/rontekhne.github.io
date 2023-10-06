function navbar()
{
    navbar = /*html*/
    `
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
        <span onclick="transitionToPage('./index.html')">
            <h1 class="logo link">R</h1>
        </span>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-dark" href="./categories/computing.html">Computação</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="./categories/games.html">Jogos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="./categories/varieties.html">Variedades</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="./categories/solve_et_coagula.html">Solve et Coagula</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="./about.html">Sobre</a>
            </li>
            </ul>
        </div>
        </div>
    </nav> 
    `;

    document.write(navbar);
}

navbar();