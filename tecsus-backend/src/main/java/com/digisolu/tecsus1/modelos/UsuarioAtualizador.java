package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.Usuarios;

public class UsuarioAtualizador {
	public void atualizarDados(Usuarios Usuarios, Usuarios atualizacao) {
		
		if(!(atualizacao.getUsername()==null)) {
			Usuarios.setUsername(atualizacao.getUsername());
		}
		
		if(!(atualizacao.getEmail()==null)) {
			Usuarios.setEmail(atualizacao.getEmail());
		}
		
		if(!(atualizacao.getSenha()==null)) {
			Usuarios.setSenha(atualizacao.getSenha());
		}
		
		if(!(atualizacao.getAcesso()<1 && atualizacao.getAcesso()>3)) {
			Usuarios.setAcesso(atualizacao.getAcesso());
		}
	}

	public void atualizar(Usuarios Usuarios, Usuarios atualizacao) {
		atualizarDados(Usuarios,atualizacao);
	}
}
