
function recentPosts()
{
    recentPosts = /*html*/ 
    `
    <section>
        <div class="row p-3 mx-auto">

            <div class="col-sm-3 mt-2">
                <div class="card h-100 bg-light text-dark reveal">
                    <div class="card-title text-center mt-3"><h3>Arx</h3></div>
                    <div class="card-body">
                        <p>
                        <p class="text-center"><small>Categoria: Jogos</small></p>
                        <p>
                            No jogo, o jogador assume o controle de Arx, uma bolha alva, e participa 
                            de uma batalha espacial contra bolhas Arxes coloridas. O objetivo principal 
                            é estourar as bolhas Arxes e coletar suas almas. Quanto mais almas forem 
                            coletadas e mais Arxes forem derrotados, maiores serão as chances de alcançar 
                            uma posição de destaque no placar dos melhores jogadores.
                        </p>
                    </div>
                    <div class="text-center p-3 mt-3">
                        <button type="button link" class="btn" onclick="transitionToPage('./../categories/games/arx/arx.html')">Leia mais...</button>
                    </div>
                </div>
            </div>

            <div class="col-sm-3 mt-2">
                <div class="card h-100 bg-light text-dark reveal">
                    <div class="card-title text-center mt-3"><h3>O Sentido do Sentido</h3></div>
                    <div class="card-body">
                        <p>
                        <p class="text-center"><small>Categoria: Variedades</small></p>
                        <p>
                            Em algum momento da nossa vida nos deparamos com a dúvida
                            sobre o sentido das coisas. Algumas pessoas buscam sentido
                            em religiões, atividades, coleções, profissões. A ideia 
                            principal do sentido é que o sentido como um todo é uma 
                            construção social e é absorvida pela subjetividade humana...
                        </p>
                    </div>
                    <div class="text-center p-3 mt-3">
                        <button type="button link" class="btn" onclick="transitionToPage('./../posts/2023/m8/o_sentido_do_sentido.html')">Leia mais...</button>
                    </div>
                </div>
            </div>
            
        </div> 
    </section>  
    `;

    document.write(recentPosts);
}

recentPosts();
