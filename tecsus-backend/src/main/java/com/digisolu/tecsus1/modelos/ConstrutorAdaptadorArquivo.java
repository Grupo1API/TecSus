package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.adaptadores.AdaptadorArquivo;

public class ConstrutorAdaptadorArquivo implements Construtor<AdaptadorArquivo> {
	private AdaptadorArquivo adaptador;

	public ConstrutorAdaptadorArquivo() {
		adaptador = new AdaptadorArquivo();
	}

	public void setAdaptadorArquivo_id(Long adaptadorArquivo_id) {
		this.adaptador.setAdaptadorArquivo_id(adaptadorArquivo_id);
	}
	public void setNome(String nome) {
		this.adaptador.setNome(nome);
	}

	public void setTamanho(String tamanho) {
		this.adaptador.setTamanho(tamanho);
	}

	public void setTipo(String tipo) {
		this.adaptador.setTipo(tipo);
	}

	@Override
	public void reiniciarObjeto() {
		adaptador = new AdaptadorArquivo();
	}

	@Override
	public AdaptadorArquivo obterObjeto() {
		return this.adaptador;
	}



}