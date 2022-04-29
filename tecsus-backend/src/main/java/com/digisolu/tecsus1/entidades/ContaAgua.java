package com.digisolu.tecsus1.entidades;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.hateoas.RepresentationModel;

@Entity
public class ContaAgua extends RepresentationModel<ContaAgua>{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "contaagua_contrato_id", referencedColumnName = "contrato_agua_id")
	private ContratoAgua contaagua_contrato_id;
	
	@Column
	private String n_documento;
	@Column
	private LocalDate data_emissao;
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
	private float media_m3;
	@Column
	private float subtotal_agua;
	@Column 
	private float subtotal_esgoto;
	@Column
	private float valor_total;
	@Column
	private float multa;
	@Column
	private float at_monet;
	@Column
	private float juros_mora;
	@Column
	private float taxa_regulacao;
	@Column
	private LocalDate data_vencimento;
	
	
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
	public float getMedia_m3() {
		return media_m3;
	}
	public void setMedia_m3(float media_m3) {
		this.media_m3 = media_m3;
	}
	public float getSubtotal_agua() {
		return subtotal_agua;
	}
	public void setSubtotal_agua(float subtotal_agua) {
		this.subtotal_agua = subtotal_agua;
	}
	public float getSubtotal_esgoto() {
		return subtotal_esgoto;
	}
	public void setSubtotal_esgoto(float subtotal_esgoto) {
		this.subtotal_esgoto = subtotal_esgoto;
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
