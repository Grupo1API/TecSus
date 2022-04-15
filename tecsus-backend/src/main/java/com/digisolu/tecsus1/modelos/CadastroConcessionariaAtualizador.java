package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.CadastroConcessionaria;

public class CadastroConcessionariaAtualizador{

	private void atualizarDados(CadastroConcessionaria cadastroConcessionaria, CadastroConcessionaria atualizacao) {
		
		if(!(atualizacao.getCnpj()==null)) {
			cadastroConcessionaria.setCnpj(atualizacao.getCnpj());
		}
		if(!(atualizacao.getNome()==null)) {
			cadastroConcessionaria.setNome(atualizacao.getNome());
		}
		if(!(atualizacao.getSegmento()==null)) {
			cadastroConcessionaria.setSegmento(atualizacao.getSegmento());
		}
		if(!(atualizacao.getCep()==null)) {
			cadastroConcessionaria.setCep(atualizacao.getCep());
		}
		if(!(atualizacao.getRua()==null)) {
			cadastroConcessionaria.setRua(atualizacao.getRua());
		}
		if(!(atualizacao.getBairro()==null)) {
			cadastroConcessionaria.setBairro(atualizacao.getBairro());
		}
		if(!(atualizacao.getCidade()==null)) {
			cadastroConcessionaria.setCidade(atualizacao.getCidade());
		}
		if(!(atualizacao.getUf()==null)) {
			cadastroConcessionaria.setUf(atualizacao.getUf());
		}
		if(!(atualizacao.getNumero()==null)) {
			cadastroConcessionaria.setNumero(atualizacao.getNumero());
		}
		if(!(atualizacao.getTelefone()==null)) {
			cadastroConcessionaria.setTelefone(atualizacao.getTelefone());
		}
		if(!(atualizacao.getInscricao_estadual()==null)) {
			cadastroConcessionaria.setInscricao_estadual(atualizacao.getInscricao_estadual());
		}
		if(!(atualizacao.getInscricao_especial()==null)) {
			cadastroConcessionaria.setInscricao_especial(atualizacao.getInscricao_especial());
		}
	}

public void atualizar(CadastroConcessionaria cadastroConcessionaria, CadastroConcessionaria atualizacao) {
	atualizarDados(cadastroConcessionaria,atualizacao);
}

}