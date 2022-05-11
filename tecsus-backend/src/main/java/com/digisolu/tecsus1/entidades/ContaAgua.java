package com.digisolu.tecsus1.entidades;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.springframework.hateoas.RepresentationModel;

import com.digisolu.tecsus1.adaptadores.AdaptadorArquivo;

@Entity
public class ContaAgua extends RepresentationModel<ContaAgua>{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	

	@OneToOne 
	@JoinColumn (name = "conta_de_agua_arquivo_id",referencedColumnName = "adaptadorArquivo_id")
	private AdaptadorArquivo conta_de_agua_arquivo_id;
	
	@ManyToOne
	@JoinColumn(name = "contaagua_contrato_id", referencedColumnName = "contrato_agua_id")
	private ContratoAgua contaagua_contrato_id;
	
	@Column
	private String n_documento;
	@Column
	private LocalDate data_emissao;
	
	//dados cliente
	@Column
	private String nome_cliente;
	@Column
	private String cep;
	@Column
	private String endereco;
	@Column
	private String codigo_cliente;
	@Column
	private String pde_rgi;
	@Column
	private String hidrometro;
	
	//dados conta
	@Column 
	private String economia;	
	@Column
	private String tipo_ligacao;
	@Column
	private LocalDate data_apresentacao;
	@Column
	private LocalDate proxima_leitura;
	@Column
	private String condicao_leitura;
	@Column
	private float consumo_m3;
	@Column
	private int periodo;
	@Column
	private float media_consumo;
	@Column
	private float total_agua;
	@Column 
	private float total_esgoto;
	@Column
	private float valor_total;
	@Column
	private float multa;
	@Column
	private float at_monet;//valor tributo
	@Column
	private float juros_mora;
	@Column
	private float taxa_regulacao;
	@Column
	private LocalDate data_vencimento;
	
	
	public AdaptadorArquivo getConta_de_agua_arquivo_id() {
		return conta_de_agua_arquivo_id;
	}
	public void setConta_de_agua_arquivo_id(AdaptadorArquivo conta_de_agua_arquivo_id) {
		this.conta_de_agua_arquivo_id = conta_de_agua_arquivo_id;
	}
	
	
	public ContratoAgua getContaagua_contrato_id() {
		return contaagua_contrato_id;
	}
	public void setContaagua_contrato_id(ContratoAgua contaagua_contrato_id) {
		this.contaagua_contrato_id = contaagua_contrato_id;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getN_documento() {
		return n_documento;
	}
	public void setN_documento(String n_documento) {
		this.n_documento = n_documento;
	}
	public LocalDate getData_emissao() {
		return data_emissao;
	}
	public void setData_emissao(LocalDate data_emissao) {
		this.data_emissao = data_emissao;
	}
	
	public LocalDate getData_apresentacao() {
		return data_apresentacao;
	}
	public void setData_apresentacao(LocalDate data_apresentacao) {
		this.data_apresentacao = data_apresentacao;
	}
	public LocalDate getProxima_leitura() {
		return proxima_leitura;
	}
	public void setProxima_leitura(LocalDate proxima_leitura) {
		this.proxima_leitura = proxima_leitura;
	}
	public String getCondicao_leitura() {
		return condicao_leitura;
	}
	public void setCondicao_leitura(String condicao_leitura) {
		this.condicao_leitura = condicao_leitura;
	}
	public float getConsumo_m3() {
		return consumo_m3;
	}
	public void setConsumo_m3(float consumo_m3) {
		this.consumo_m3 = consumo_m3;
	}
	public int getPeriodo() {
		return periodo;
	}
	public void setPeriodo(int periodo) {
		this.periodo = periodo;
	}
	public float getMedia_consumo() {
		return media_consumo;
	}
	public void setMedia_consumo(float media_consumo) {
		this.media_consumo = media_consumo;
	}
	public float getTotal_agua() {
		return total_agua;
	}
	public void setTotal_agua(float total_agua) {
		this.total_agua = total_agua;
	}
	public float getTotal_esgoto() {
		return total_esgoto;
	}
	public void setTotal_esgoto(float total_esgoto) {
		this.total_esgoto = total_esgoto;
	}
	public float getValor_total() {
		return valor_total;
	}
	public void setValor_total(float valor_total) {
		this.valor_total = valor_total;
	}
	public float getMulta() {
		return multa;
	}
	public void setMulta(float multa) {
		this.multa = multa;
	}
	public float getAt_monet() {
		return at_monet;
	}
	public void setAt_monet(float at_monet) {
		this.at_monet = at_monet;
	}
	public float getJuros_mora() {
		return juros_mora;
	}
	public void setJuros_mora(float juros_mora) {
		this.juros_mora = juros_mora;
	}
	public float getTaxa_regulacao() {
		return taxa_regulacao;
	}
	public void setTaxa_regulacao(float taxa_regulacao) {
		this.taxa_regulacao = taxa_regulacao;
	}
	public LocalDate getData_vencimento() {
		return data_vencimento;
	}
	public void setData_vencimento(LocalDate data_vencimento) {
		this.data_vencimento = data_vencimento;
	}
		
}
