
function recentPosts()
{
    recentPosts = /*html*/ 
    `
    <section>
        <div class="row p-3 mx-auto">

            <div class="col-sm-3 mt-2">
                <div class="card h-100 bg-light text-dark reveal">
                    <div class="card-title text-center mt-3"><h3>Lorem Ipsum</h3></div>
                    <div class="card-body">
                        <p>
                        <p class="text-center"><small>Categoria: String</small></p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div class="text-center p-3 mt-3">
                        <button type="button link" class="btn" onclick="transitionToPage('./../posts/2023/m8/template.html')">Leia mais...</button>
                    </div>
                </div>
            </div>
            
        </div> 
    </section>  
    `;

    document.write(recentPosts);
}

recentPosts();
