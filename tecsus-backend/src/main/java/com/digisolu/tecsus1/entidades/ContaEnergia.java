package com.digisolu.tecsus1.entidades;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import org.springframework.hateoas.RepresentationModel;


@Entity
public class ContaEnergia extends RepresentationModel<ContaEnergia> {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	

	@Column
	private String concessionaria;
	@Column
	private String cnpj_concessionaria;
	@Column
	private String cep_concessionaria; 
	@Column
	private String endereco_concessionaria;

	//dados cliente
	
	@Column
	private String cpf_cnpj_consumo;
	@Column
	private String nome_cliente;
	@Column
	private String cep_cliente;
	@Column
	private String endereco_cliente;
	
	@ManyToOne
	@JoinColumn(name = "contaenergia_contrato_id", referencedColumnName = "contrato_energia_id")
	private ContratoEnergia contaenergia_contrato_id;



	
	
	//Dados conta
	
	@Column
	private String nota_fiscal;
	@Column
	private float valor_total;
	@Column
	private String numero_instalacao;
	@Column
	private LocalDate data_vencimento;
	@Column
	private String conta_mes;
	@Column
	private String bandeira_tarifaria_vigente;	
	@Column
	private LocalDate emissao;
	@Column
	private int num_dias_faturamento;


	//Descrição de Consumo
	@Column
	private String descricao_consumo;
	@Column
	private String numero_medidor;
	@Column
	private float const_mult; 
	@Column
	private float quantidade_kwh_mes;
	@Column
	private float valor_total_tusd;
	@Column
	private float valor_total_te;
	@Column
	private String bandeira_tarifaria;
		
	//Itens Financeiros
	@Column
	private float valor_multa;
	@Column
	private float valor_cip_contrib_municipal;
	
	
	//tributos
	@Column
	private float valor_pis;
	@Column
	private float valor_cofins;
	

	@Lob
	@Column
	private byte[] arquivo;
	
	public byte[] getArquivo() {
		return arquivo;
	}
	public void setArquivo(byte[] arquivo) {
		this.arquivo = arquivo;
	}
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
	public String getEndereco_concessionaria() {
		return endereco_concessionaria;
	}
	public void setEndereco_concessionaria(String endereco_concessionaria) {
		this.endereco_concessionaria = endereco_concessionaria;
	}
	public String getBandeira_tarifaria_vigente() {
		return bandeira_tarifaria_vigente;
	}
	public void setBandeira_tarifaria_vigente(String bandeira_tarifaria_vigente) {
		this.bandeira_tarifaria_vigente = bandeira_tarifaria_vigente;
	}
	public String getCep_concessionaria() {
		return cep_concessionaria;
	}
	public void setCep_concessionaria(String cep_concessionaria) {
		this.cep_concessionaria = cep_concessionaria;
	}
	public String getCnpj_concessionaria() {
		return cnpj_concessionaria;
	}
	public void setCnpj_concessionaria(String cnpj_concessionaria) {
		this.cnpj_concessionaria = cnpj_concessionaria;
	}
	public String getNome_cliente() {
		return nome_cliente;
	}
	public void setNome_cliente(String nome_cliente) {
		this.nome_cliente = nome_cliente;
	}
	public String getCpf_cnpj_consumo() {
		return cpf_cnpj_consumo;
	}
	public void setCpf_cnpj_consumo(String cpf_cnpj_consumo) {
		this.cpf_cnpj_consumo = cpf_cnpj_consumo;
	}
	public String getEndereco_cliente() {
		return endereco_cliente;
	}
	public ContratoEnergia getContaenergia_contrato_id() {
		return contaenergia_contrato_id;
	}
	public void setContaenergia_contrato_id(ContratoEnergia contaenergia_contrato_id) {
		this.contaenergia_contrato_id = contaenergia_contrato_id;
	}
	public String getNota_fiscal() {
		return nota_fiscal;
	}
	public void setNota_fiscal(String nota_fiscal) {
		this.nota_fiscal = nota_fiscal;
	}
	public float getValor_total() {
		return valor_total;
	}
	public void setValor_total(float valor_total) {
		this.valor_total = valor_total;
	}
	public String getNumero_instalacao() {
		return numero_instalacao;
	}
	public void setNumero_instalacao(String numero_instalacao) {
		this.numero_instalacao = numero_instalacao;
	}
	public LocalDate getData_vencimento() {
		return data_vencimento;
	}
	public void setData_vencimento(LocalDate data_vencimento) {
		this.data_vencimento = data_vencimento;
	}
	public String getConta_mes() {
		return conta_mes;
	}
	public void setConta_mes(String conta_mes) {
		this.conta_mes = conta_mes;
	}
	public String getBandeira_tarifaria() {
		return bandeira_tarifaria;
	}
	public void setBandeira_tarifaria(String bandeira_tarifaria) {
		this.bandeira_tarifaria = bandeira_tarifaria;
	}
	public LocalDate getEmissao() {
		return emissao;
	}
	public void setEmissao(LocalDate emissao) {
		this.emissao = emissao;
	}
	public int getNum_dias_faturamento() {
		return num_dias_faturamento;
	}
	public void setNum_dias_faturamento(int num_dias_faturamento) {
		this.num_dias_faturamento = num_dias_faturamento;
	}
	public String getDescricao_consumo() {
		return descricao_consumo;
	}
	public void setDescricao_consumo(String descricao_consumo) {
		this.descricao_consumo = descricao_consumo;
	}
	public String getNumero_medidor() {
		return numero_medidor;
	}
	public void setNumero_medidor(String numero_medidor) {
		this.numero_medidor = numero_medidor;
	}
	public float getConst_mult() {
		return const_mult;
	}
	public void setConst_mult(float const_mult) {
		this.const_mult = const_mult;
	}
	public float getQuantidade_kwh_mes() {
		return quantidade_kwh_mes;
	}
	public void setQuantidade_kwh_mes(float quantidade_kwh_mes) {
		this.quantidade_kwh_mes = quantidade_kwh_mes;
	}
	
	public float getValor_total_tusd() {
		return valor_total_tusd;
	}
	public void setValor_total_tusd(float valor_total_tusd) {
		this.valor_total_tusd = valor_total_tusd;
	}
	
	public float getValor_total_te() {
		return valor_total_te;
	}
	public void setValor_total_te(float valor_total_te) {
		this.valor_total_te = valor_total_te;
	}
	
	public float getValor_multa() {
		return valor_multa;
	}
	public void setValor_multa(float valor_multa) {
		this.valor_multa = valor_multa;
	}
	public float getValor_cip_contrib_municipal() {
		return valor_cip_contrib_municipal;
	}
	public void setValor_cip_contrib_municipal(float valor_cip_contrib_municipal) {
		this.valor_cip_contrib_municipal = valor_cip_contrib_municipal;
	}
	public float getValor_pis() {
		return valor_pis;
	}
	public void setValor_pis(float valor_pis) {
		this.valor_pis = valor_pis;
	}
	public float getValor_cofins() {
		return valor_cofins;
	}
	public void setValor_cofins(float valor_cofins) {
		this.valor_cofins = valor_cofins;
	}
	
	
}

