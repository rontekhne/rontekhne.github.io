function showIndexPosts()
{
    let posts = 
    `
    <section>
        <article>
        <img class="post-card-img" src="https://raw.githubusercontent.com/rontekhne/OitoP/main/app/src/main/res/mipmap-hdpi/oitop.png" width="100" height="100" alt="8p logo">
            <h2>OITOP</h2>
            <p> 
                O quebra-cabeças de 8 peças, como o nome diz, possui 8 peças, 
                composta por uma base para 9 lugares. O objetivo do jogo é mudar 
                as peças numeradas de lugar até que forme o padrão sequencial de 
                1 até 8.
            </p>
            <a class="read" href="/post/02-01-2024_oitop.html">LER</a>
        </article>
        <article>
        <img class="post-card-img" src="https://raw.githubusercontent.com/rontekhne/Arx/main/app/src/main/res/mipmap-hdpi/arx_icon.png" width="100" height="100" alt="Arx logo">
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
        <img class="post-card-img" src="https://raw.githubusercontent.com/rontekhne/rontekhne.github.io/main/site/img/R.png" width="100" height="100" alt="RonTekhne logo">
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