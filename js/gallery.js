function gallery()
{
    gallery = /*html*/
    `
    <section>
        <div class="p-5 bg-light text-secondary rounded">
            
            <!--div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div-->    

            <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active text-center">
                        <h5 class="d-block w-100 text-dark">P é igual a NP? Existe vida após a morte? É possível viajar no tempo? A resposta está na pergunta.</h5>
                    </div>
                    <div class="carousel-item text-center">
                        <h5 class="d-block w-100 text-dark">Como o granizo nas nuvens antes de cair, os números saltam de um lugar ao outro antes de chegar ao 4, 2, 1...</h5>
                    </div>
                    <div class="carousel-item text-center">
                        <h5 class="d-block w-100 text-dark">Todo número par maior que 2 pode ser representado pela soma de dois números primos?</h5>
                    </div>
                </div>

                <!--button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button-->
            </div>
        </div>
    </section>  
    `;

    document.write(gallery);
}

gallery();
