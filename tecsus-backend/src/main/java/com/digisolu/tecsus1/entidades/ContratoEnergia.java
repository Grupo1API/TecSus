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
public class ContratoEnergia extends RepresentationModel<ContratoEnergia> {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long contrato_energia_id;
	
	@ManyToOne
	@JoinColumn(name = "contrato_concessionaria_id", referencedColumnName = "concessionaria_id")
	private CadastroConcessionaria contrato_concessionaria_id;

	@ManyToOne
	@JoinColumn(name = "contrato_unidade_id", referencedColumnName = "unidade_id")
	private CadastroUnidade contrato_unidade_id;
	
	@Column(name= "numero_instalacao")
	private String numeroInstalacao;
	@Column
	private String codigoIdentificador; 
	@Column
	private String codigo_fiscal_operacao;
	@Column
	private String grupo_subgrupo;
	@Column
	private String classe_subclasse;
	@Column
	private String tp_fornecimento;
	@Column
	private String modalidade_tarifaria;
	@Column
	private String tensao_nominal;
	@Column
	private String roteiro_leitura;
	@Column
	private String num_medidor;
	@Column
	private float valor_medio;
	@Column
	private float media_consumo_kwm;
	@Column
	private String endereco_eletrico;
	@Column
	private String cnpj_cpf_ci;
	@Column
	private String local_cep;
	@Column
	private String local_rua;
	@Column
	private String local_bairro;
	@Column
	private String local_cidade;
	@Column
	private String local_estado;
	@Column
	private String local_numero;
		
	public Long getContrato_energia_id() {
		return contrato_energia_id;
	}
	public void setContrato_energia_id(Long contrato_energia_id) {
		this.contrato_energia_id = contrato_energia_id;
	}
	public String getNumeroInstalacao() {
		return numeroInstalacao;
	}
	public void setNumeroInstalacao(String numeroInstalacao) {
		this.numeroInstalacao = numeroInstalacao;
	}
	public String getCodigoIdentificador() {
		return codigoIdentificador;
	}
	public void setCodigoIdentificador(String codigoIdentificador) {
		this.codigoIdentificador = codigoIdentificador;
	}
	public Long getId() {
		return contrato_energia_id;
	}
	public void setId(Long id) {
		this.contrato_energia_id = id;
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
	public String getNumero_instalacao() {
		return numeroInstalacao;
	}
	public void setNumero_instalacao(String numero_instalacao) {
		numeroInstalacao = numero_instalacao;
	}
	public String getCodigo_identificador() {
		return codigoIdentificador;
	}
	public void setCodigo_identificador(String codigo_identificador) {
		this.codigoIdentificador = codigo_identificador;
	}
	public String getCodigo_fiscal_operacao() {
		return codigo_fiscal_operacao;
	}
	public void setCodigo_fiscal_operacao(String codigo_fiscal_operacao) {
		this.codigo_fiscal_operacao = codigo_fiscal_operacao;
	}
	public String getGrupo_subgrupo() {
		return grupo_subgrupo;
	}
	public void setGrupo_subgrupo(String grupo_subgrupo) {
		this.grupo_subgrupo = grupo_subgrupo;
	}
	public String getClasse_subclasse() {
		return classe_subclasse;
	}
	public void setClasse_subclasse(String classe_subclasse) {
		this.classe_subclasse = classe_subclasse;
	}
	public String getTp_fornecimento() {
		return tp_fornecimento;
	}
	public void setTp_fornecimento(String tp_fornecimento) {
		this.tp_fornecimento = tp_fornecimento;
	}
	public String getModalidade_tarifaria() {
		return modalidade_tarifaria;
	}
	public void setModalidade_tarifaria(String modalidade_tarifaria) {
		this.modalidade_tarifaria = modalidade_tarifaria;
	}
	public String getTensao_nominal() {
		return tensao_nominal;
	}
	public void setTensao_nominal(String tensao_nominal) {
		this.tensao_nominal = tensao_nominal;
	}
	public String getRoteiro_leitura() {
		return roteiro_leitura;
	}
	public void setRoteiro_leitura(String roteiro_leitura) {
		this.roteiro_leitura = roteiro_leitura;
	}
	public String getNum_medidor() {
		return num_medidor;
	}
	public void setNum_medidor(String num_medidor) {
		this.num_medidor = num_medidor;
	}
	public float getValor_medio() {
		return valor_medio;
	}
	public void setValor_medio(float valor_medio) {
		this.valor_medio = valor_medio;
	}
	public float getMedia_consumo_kwm() {
		return media_consumo_kwm;
	}
	public void setMedia_consumo_kwm(float media_consumo_kwm) {
		this.media_consumo_kwm = media_consumo_kwm;
	}
	public String getEndereco_eletrico() {
		return endereco_eletrico;
	}
	public void setEndereco_eletrico(String endereco_eletrico) {
		this.endereco_eletrico = endereco_eletrico;
	}
	public String getCnpj_cpf_ci() {
		return cnpj_cpf_ci;
	}
	public void setCnpj_cpf_ci(String cnpj_cpf_ci) {
		this.cnpj_cpf_ci = cnpj_cpf_ci;
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
	public String getLocal_numero() {
		return local_numero;
	}
	public void setLocal_numero(String local_numero) {
		this.local_numero = local_numero;
	}

}
