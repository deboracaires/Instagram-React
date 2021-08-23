import Post from "./Post"

export default function Posts(){
    
    const posts = [
        {imgUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", conteudoImg: "assets/img/gato-telefone.svg", curtidasImg: "assets/img/adorable_animals.svg", curtidoPor: "adorable_animals", qtdPessoas: "99.159"},
        {imgUsuario: "assets/img/barked.svg", nomeUsuario: "barked", conteudoImg: "assets/img/dog.svg", curtidasImg: "assets/img/adorable_animals.svg", curtidoPor: "adorable_animals", qtdPessoas: "99.159"},
        {imgUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", conteudoImg: "assets/img/gato-telefone.svg", curtidasImg: "assets/img/adorable_animals.svg", curtidoPor: "adorable_animals", qtdPessoas: "99.159"},
        {imgUsuario: "assets/img/barked.svg", nomeUsuario: "barked", conteudoImg: "assets/img/dog.svg", curtidasImg: "assets/img/adorable_animals.svg", curtidoPor: "adorable_animals", qtdPessoas: "99.159"}
    ];
    return(
        <div class="posts">
            {posts.map(post => <Post imgUsuario = {post.imgUsuario} nomeUsuario = {post.nomeUsuario} conteudoImg = {post.conteudoImg} curtidasImg = {post.curtidasImg} curtidoPor = {post.curtidoPor} qtdPessoas = {post.qtdPessoas}/>)} 
        </div>
    );
}