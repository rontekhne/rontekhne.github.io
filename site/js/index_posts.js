function showIndexPosts()
{
    let posts = 
    `
    <section>
        <article>
            <h2>TUPI</h2>
            <p>
                Há alguns meses iniciei um projeto para o processamento 
                de linguagem Tupi, uma língua indígena morta brasileira. 
                Neste artigo documentarei todo o processo. 
            </p>
            <a class="read" href="/post/27-12-2023_tupix.html">LER</a>
        </article>
        <article>
            <h2>ARX ARCADE 2D</h2>
            <p> 
                Os arxes roubaram as almas da galáxia. Você como 
                único sobrevivente, terá como missão de recuperá-las. 
                Colete almas e garanta um lugar no placar. Disponível 
                para Android.
            </p>
            <a class="read" href="/post/23-09-2023_arx.html">LER</a>
        </article>
        <article>
            <h2>RONTEKHNE PARA ANDROID</h2>
            <p>
                O blog está no Android. Oba! Leve o  RonTekhne 
                no seu bolso (esqueceram o navegador no churrasco). 
                Mas vamos fingir que você só possa abrir o RonTkhne 
                no smartphone pelo App?
            </p>
            <a class="read" href="/post/11-09-2023_rontekhne_para_android.html">LER</a>
        </article>
    </section>
    `;
    document.write(posts);
}

showIndexPosts();