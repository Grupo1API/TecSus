package com.digisolu.tecsus1.adaptadores.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import com.digisolu.tecsus1.adaptadores.AdaptadorArquivo;

import com.digisolu.tecsus1.repositorios.RepositorioArquivo;



@Service
public class ArmazemArquivo {
	@Autowired
	private RepositorioArquivo repositorio;
	
	public void armazenarAdaptadorArquivo(AdaptadorArquivo adaptadorArquivo) {
		this.repositorio.save(adaptadorArquivo);
	}
	
	public List<AdaptadorArquivo> obterAdaptadorArquivos(){
		return this.repositorio.findAll();
	}
	
	public Resource obterAdaptadorArquivoComoRecurso(Long id) {
		AdaptadorArquivo adaptadorArquivo = this.repositorio.getById(id);
		Resource recurso = new ByteArrayResource(adaptadorArquivo.getBytes());
		return recurso;
	}
	
	public AdaptadorArquivo obterAdaptadorArquivo(Long id) {
		AdaptadorArquivo adaptadorArquivo = this.repositorio.getById(id);
		return adaptadorArquivo;
	}
	
	public void excluirAdaptadorArquivo(AdaptadorArquivo adaptadorArquivo) {
		this.repositorio.delete(adaptadorArquivo);
	}
}