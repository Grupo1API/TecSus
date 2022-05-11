package com.digisolu.tecsus1.adaptadores;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.springframework.hateoas.RepresentationModel;


@Entity
public class AdaptadorArquivo extends RepresentationModel<AdaptadorArquivo> {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long adaptadorArquivo_id;
	
	
	@Column
	private String nome;
	@Column
	private String tamanho;
	@Column
	private String tipo;
	
	@Lob
	@Column
	private byte[] bytes;

	
	
	
	public Long getAdaptadorArquivo_id() {
		return adaptadorArquivo_id;
	}
	public void setAdaptadorArquivo_id(Long adaptadorArquivo_id) {
		this.adaptadorArquivo_id = adaptadorArquivo_id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTamanho() {
		return tamanho;
	}
	public void setTamanho(String tamanho) {
		this.tamanho = tamanho;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public byte[] getBytes() {
		return bytes;
	}
	public void setBytes(byte[] bytes) {
		this.bytes = bytes;
	}
	
	
}