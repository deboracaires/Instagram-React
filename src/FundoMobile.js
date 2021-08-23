export default function FundoMobile(){
    const nomesIconesMobile = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    
    return (
        <div class="fundo-mobile">
            {
                nomesIconesMobile.map(nome => <ion-icon name={nome}></ion-icon>)
            }
        </div>
    );
}