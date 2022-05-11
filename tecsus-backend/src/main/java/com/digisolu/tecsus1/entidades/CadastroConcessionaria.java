package com.digisolu.tecsus1.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.hateoas.RepresentationModel;

@Entity
public class CadastroConcessionaria extends RepresentationModel<CadastroConcessionaria> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long concessionaria_id;
	@Column(name="cnpj")
	private String cnpj;
	@Column
	private String nome;
	@Column
	private String segmento;
	@Column
	private String cep;
	@Column
	private String rua;
	@Column
	private String bairro;
	@Column
	private String cidade;
	@Column
	private String uf;
	@Column
	private String numero;
	@Column
	private String telefone;
	@Column
	private String inscricao_estadual;
	@Column
	private String inscricao_especial;
	
	public Long getId() {
		return concessionaria_id;
	}
	public void setId(Long id) {
		this.concessionaria_id = id;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSegmento() {
		return segmento;
	}
	public void setSegmento(String segmento) {
		this.segmento = segmento;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getRua() {
		return rua;
	}
	public void setRua(String rua) {
		this.rua = rua;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getInscricao_estadual() {
		return inscricao_estadual;
	}
	public void setInscricao_estadual(String inscricao_estadual) {
		this.inscricao_estadual = inscricao_estadual;
	}
	public String getInscricao_especial() {
		return inscricao_especial;
	}
	public void setInscricao_especial(String inscricao_especial) {
		this.inscricao_especial = inscricao_especial;
	}
	
	
}