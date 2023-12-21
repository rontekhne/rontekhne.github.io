function showHeader()
{
    let header = 
    `
    <header>
        <nav>
            <a href="https://rontekhne.github.io"><img src="/site/img/R.png" alt="logo R"></a>
            <ul>
                <li><a href="/site/src/about.html">SOBRE</a></li>
                <li><a href="/post/posts.html">POSTAGENS</a></li>
            </ul>
        </nav>
    </header>
    `;
    document.write(header);
}

showHeader();