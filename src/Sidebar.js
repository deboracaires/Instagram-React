import Sugestao from "./Sugestao"
import Usuario from "./Usuario";

export default function Sidebar(){
    const sugestoes = [
      {imgUsuario: "assets/img/bad.vibes.memes.svg", nomeUsuario: "bad.vibes.memes", razao: "Segue você"},
      {imgUsuario: "assets/img/chibirdart.svg", nomeUsuario: "chibirdart", razao: "Segue você"},
      {imgUsuario: "assets/img/razoesparaacreditar.svg", nomeUsuario: "razoesparaacreditar", razao: "Novo no Instagram"},
      {imgUsuario: "assets/img/adorable_animals.svg", nomeUsuario: "adorable_animals", razao: "Segue você"},
      {imgUsuario: "assets/img/smallcutecats.svg", nomeUsuario: "smallcutecats", razao: "Segue você"}
    ];
    const usuario = [{nick: "catanacomics", nome:"Catana", img: "assets/img/catanacomics.svg"}];
    return(
        <div class="sidebar">
          {usuario.map(user => <Usuario nick = {user.nick} nome= {user.nome} img = {user.img}/>)}

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => <Sugestao imgUsuario = {sugestao.imgUsuario} nomeUsuario = {sugestao.nomeUsuario} razao = {sugestao.razao} />)}
            
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}