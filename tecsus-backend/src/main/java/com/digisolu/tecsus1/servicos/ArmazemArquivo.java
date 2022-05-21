package com.digisolu.tecsus1.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import com.digisolu.tecsus1.entidades.ContaAgua;
import com.digisolu.tecsus1.repositorios.ContaAguaRepositorio;


@Service
public class ArmazemArquivo {
	@Autowired
	private ContaAguaRepositorio repositorio;
	
	public void armazenarArquivo(ContaAgua contaAgua) {
		this.repositorio.save(contaAgua);
	}
	
	public List<ContaAgua> obterArquivos(){
		return this.repositorio.findAll();
	}
	
	public Resource obterArquivoComoRecurso(Long id) {
		ContaAgua contaAgua = this.repositorio.getById(id);
		Resource recurso = new ByteArrayResource(contaAgua.getBytes());
		return recurso;
	}
	
	public ContaAgua obterArquivo(Long id) {
		ContaAgua contaAgua = this.repositorio.getById(id);
		return contaAgua;
	}
	
	public void excluirArquivo(ContaAgua contaAgua) {
		this.repositorio.delete(contaAgua);
	}
}