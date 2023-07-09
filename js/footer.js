function footer()
{
    footer = /*html*/
    `
        <footer>
            <div class="mt-1 p-5 bg-light text-secondary rounded">
                <h6 class="text-center text-dark">Distribuído por <a style="color:#141414;" href="https://github.com/rontekhne" target="_Blank"><i class="fa fa-github"></i></a></h6>
                <h6 class="text-center text-dark link">Feito com <span onclick="transitionToPage('./love.html')"><i class="fa fa-heart"></i></span> por Ron</h6> 
            </div>
        </footer>
    `;

    document.write(footer);
}

footer();