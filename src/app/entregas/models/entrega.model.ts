export class entregaModel {

	public id:string;
	public nome:string;
	public descricao:string;
	public rota:string;
	
	constructor(id:string, nome:string, descricao:string, rota:string){
		this.id=id
		this.nome=nome
		this.descricao=descricao
		this.rota=rota
	}
}
