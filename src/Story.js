export default function Story (props){
    
    const usuarios = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario"> 
            {props.text}
            </div>
        </div>
    );
}


//{imagens.map(imagem => imagem)}