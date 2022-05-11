package com.digisolu.tecsus1.populador;

import java.util.ArrayList;
import java.util.List;

import com.digisolu.tecsus1.adaptadores.AdaptadorArquivo;

import com.digisolu.tecsus1.modelos.ConstrutorAdaptadorArquivo;



public class PopuladorAdaptadorArquivo{
	private List<AdaptadorArquivo> adaptadorArquivos;

	public PopuladorAdaptadorArquivo(List<AdaptadorArquivo> adaptadorArquivos) {
		this.adaptadorArquivos = adaptadorArquivos;
	}
	
	public List<AdaptadorArquivo> adaptadores(){
		List<AdaptadorArquivo> adaptadores = new ArrayList<AdaptadorArquivo>();
		ConstrutorAdaptadorArquivo construtor = new ConstrutorAdaptadorArquivo();
		for (AdaptadorArquivo adaptadorArquivo : adaptadorArquivos) {
			construtor.reiniciarObjeto();
			construtor.setAdaptadorArquivo_id(adaptadorArquivo.getAdaptadorArquivo_id());
			construtor.setNome(adaptadorArquivo.getNome());
			construtor.setTamanho(adaptadorArquivo.getTamanho());
			construtor.setTipo(adaptadorArquivo.getTipo());
			adaptadores.add(construtor.obterObjeto());
		}
		return adaptadores;
	}
}