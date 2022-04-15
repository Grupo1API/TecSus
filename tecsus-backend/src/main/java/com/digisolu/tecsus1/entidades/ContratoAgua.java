package com.digisolu.tecsus1.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.hateoas.RepresentationModel;

@Entity
public class ContratoAgua extends RepresentationModel<ContratoAgua>{
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String concessionaria;
	@Column
	private String concessionaria_cnpj;
	@Column
	private String unidade_nome;
	@Column 
	private String unidade_cnpj;
	@Column
	private String codigo_cliente;
	@Column
	private String pde_rgi;
	@Column 
	private String hidrometro;
	@Column
	private String tipo_ligacao;
	@Column
	private String tipo_fornecimento;
	@Column
	private String n_fornecimento;
	@Column
	private float valor_medio;
	@Column
	private String local_nome;
	@Column
	private String local_cnpj;
	@Column
	private String local_cep;
	@Column
	private String local_rua;
	@Column
	private String local_numero;
	@Column
	private String local_bairro;
	@Column
	private String local_cidade;
	@Column
	private String local_estado;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getConcessionaria() {
		return concessionaria;
	}
	public void setConcessionaria(String concessionaria) {
		this.concessionaria = concessionaria;
	}
	public String getConcessionaria_cnpj() {
		return concessionaria_cnpj;
	}
	public void setConcessionaria_cnpj(String concessionaria_cnpj) {
		this.concessionaria_cnpj = concessionaria_cnpj;
	}
	public String getUnidade_nome() {
		return unidade_nome;
	}
	public void setUnidade_nome(String unidade_nome) {
		this.unidade_nome = unidade_nome;
	}
	public String getUnidade_cnpj() {
		return unidade_cnpj;
	}
	public void setUnidade_cnpj(String unidade_cnpj) {
		this.unidade_cnpj = unidade_cnpj;
	}
	public String getCodigo_cliente() {
		return codigo_cliente;
	}
	public void setCodigo_cliente(String codigo_cliente) {
		this.codigo_cliente = codigo_cliente;
	}
	public String getPde_rgi() {
		return pde_rgi;
	}
	public void setPde_rgi(String pde_rgi) {
		this.pde_rgi = pde_rgi;
	}
	public String getHidrometro() {
		return hidrometro;
	}
	public void setHidrometro(String hidrometro) {
		this.hidrometro = hidrometro;
	}
	public String getTipo_ligacao() {
		return tipo_ligacao;
	}
	public void setTipo_ligacao(String tipo_ligacao) {
		this.tipo_ligacao = tipo_ligacao;
	}
	public String getTipo_fornecimento() {
		return tipo_fornecimento;
	}
	public void setTipo_fornecimento(String tipo_fornecimento) {
		this.tipo_fornecimento = tipo_fornecimento;
	}
	public String getN_fornecimento() {
		return n_fornecimento;
	}
	public void setN_fornecimento(String n_fornecimento) {
		this.n_fornecimento = n_fornecimento;
	}
	public float getValor_medio() {
		return valor_medio;
	}
	public void setValor_medio(float valor_medio) {
		this.valor_medio = valor_medio;
	}
	public String getLocal_nome() {
		return local_nome;
	}
	public void setLocal_nome(String local_nome) {
		this.local_nome = local_nome;
	}
	public String getLocal_cnpj() {
		return local_cnpj;
	}
	public void setLocal_cnpj(String local_cnpj) {
		this.local_cnpj = local_cnpj;
	}
	public String getLocal_cep() {
		return local_cep;
	}
	public void setLocal_cep(String local_cep) {
		this.local_cep = local_cep;
	}
	public String getLocal_rua() {
		return local_rua;
	}
	public void setLocal_rua(String local_rua) {
		this.local_rua = local_rua;
	}
	public String getLocal_numero() {
		return local_numero;
	}
	public void setLocal_numero(String local_numero) {
		this.local_numero = local_numero;
	}
	public String getLocal_bairro() {
		return local_bairro;
	}
	public void setLocal_bairro(String local_bairro) {
		this.local_bairro = local_bairro;
	}
	public String getLocal_cidade() {
		return local_cidade;
	}
	public void setLocal_cidade(String local_cidade) {
		this.local_cidade = local_cidade;
	}
	public String getLocal_estado() {
		return local_estado;
	}
	public void setLocal_estado(String local_estado) {
		this.local_estado = local_estado;
	}

}
