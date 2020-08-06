export default class Placar {
    nome: string
    Placar(n: string){
        this.nome=n
    }

    public mudaNome(nome:string): string {
         const n: string= `123-${nome}`
         return n
    }
}