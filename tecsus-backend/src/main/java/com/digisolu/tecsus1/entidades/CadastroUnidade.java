package com.digisolu.tecsus1.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.hateoas.RepresentationModel;

@Entity
public class CadastroUnidade extends RepresentationModel<CadastroUnidade> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String nome;
	@Column
	private String cpf_cnpj;
	@Column
	private String telefone;
	@Column
	private String email;
	@Column
	private String end_cep;
	@Column
	private String end_rua;
	@Column
	private String end_bairro;
	@Column
	private String end_uf;
	@Column
	private String end_cidade;
	@Column
	private String end_numero;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf_cnpj() {
		return cpf_cnpj;
	}
	public void setCpf_cnpj(String cpf_cnpj) {
		this.cpf_cnpj = cpf_cnpj;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEnd_cep() {
		return end_cep;
	}
	public void setEnd_cep(String end_cep) {
		this.end_cep = end_cep;
	}
	public String getEnd_rua() {
		return end_rua;
	}
	public void setEnd_rua(String end_rua) {
		this.end_rua = end_rua;
	}
	public String getEnd_bairro() {
		return end_bairro;
	}
	public void setEnd_bairro(String end_bairro) {
		this.end_bairro = end_bairro;
	}
	public String getEnd_uf() {
		return end_uf;
	}
	public void setEnd_uf(String end_uf) {
		this.end_uf = end_uf;
	}
	public String getEnd_cidade() {
		return end_cidade;
	}
	public void setEnd_cidade(String end_cidade) {
		this.end_cidade = end_cidade;
	}
	public String getEnd_numero() {
		return end_numero;
	}
	public void setEnd_numero(String end_numero) {
		this.end_numero = end_numero;
	}
	
	
}
