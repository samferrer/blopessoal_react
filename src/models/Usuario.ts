import type Postagem from "./Postagem"

export default interface Usuario {
    //seguir modelo do swagger
    id: number
    nome: string
    usuario: string
    foto: string
    senha: string
    postagem?: Postagem[] | null;

}