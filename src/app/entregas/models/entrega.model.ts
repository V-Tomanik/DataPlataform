export class entregaModel {
	/**
		* Modelo interno que representa uma entrega
		*
		* @param id: ID que identifica uma entrega
		* @param nome: Nome da entrega que o usuário vê
		* @param descrição: Descritivo básico da entrega
		* @param rota: rota interna para o formulário da entrega
		*
		*/
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
