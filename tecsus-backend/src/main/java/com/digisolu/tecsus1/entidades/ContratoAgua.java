package com.digisolu.tecsus1.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.hateoas.RepresentationModel;

@Entity
public class ContratoAgua extends RepresentationModel<ContratoAgua>{
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long contrato_agua_id;
	
	@ManyToOne
	@JoinColumn(name = "contrato_concessionaria_id", referencedColumnName = "concessionaria_id")
	private CadastroConcessionaria contrato_concessionaria_id;
	
	@ManyToOne
	@JoinColumn(name = "contrato_unidade_id", referencedColumnName = "unidade_id")
	private CadastroUnidade contrato_unidade_id;
	
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
	@Column(name ="n_fornecimento")
	private String numeroFornecimento;
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
		return contrato_agua_id;
	}
	public void setId(Long id) {
		this.contrato_agua_id = id;
	}
	
	public CadastroConcessionaria getContrato_concessionaria_id() {
		return contrato_concessionaria_id;
	}
	public void setContrato_concessionaria_id(CadastroConcessionaria contrato_concessionaria_id) {
		this.contrato_concessionaria_id = contrato_concessionaria_id;
	}
	public CadastroUnidade getContrato_unidade_id() {
		return contrato_unidade_id;
	}
	public void setContrato_unidade_id(CadastroUnidade contrato_unidade_id) {
		this.contrato_unidade_id = contrato_unidade_id;
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
		return numeroFornecimento;
	}
	public void setN_fornecimento(String n_fornecimento) {
		this.numeroFornecimento = n_fornecimento;
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
