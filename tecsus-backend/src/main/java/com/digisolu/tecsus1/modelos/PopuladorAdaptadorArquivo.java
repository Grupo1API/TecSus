package com.digisolu.tecsus1.modelos;

import java.util.ArrayList;
import java.util.List;

import com.digisolu.tecsus1.entidades.ContaAgua;
import com.digisolu.tecsus1.modelos.construtor.ConstrutorAdaptadorArquivo;

public class PopuladorAdaptadorArquivo{
	private List<ContaAgua> arquivos;

	public PopuladorAdaptadorArquivo(List<ContaAgua> arquivos) {
		this.arquivos = arquivos;
	}
	
	public List<ContaAgua> adaptadores(){
		List<ContaAgua> adaptadores = new ArrayList<ContaAgua>();
		ConstrutorAdaptadorArquivo construtor = new ConstrutorAdaptadorArquivo();
		for (ContaAgua arquivo : arquivos) {
			construtor.reiniciarObjeto();
			construtor.setId(arquivo.getId());
			construtor.setTamanho(arquivo.getTamanho());
			construtor.setTipo(arquivo.getTipo());
			adaptadores.add(construtor.obterObjeto());
		}
		return adaptadores;
	}
}