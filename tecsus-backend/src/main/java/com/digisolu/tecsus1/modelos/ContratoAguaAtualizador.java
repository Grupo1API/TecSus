package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.ContratoAgua;

public class ContratoAguaAtualizador {
	private void atualizarDados(ContratoAgua contratoAgua, ContratoAgua atualizacao) {
	
	if(!(atualizacao.getCodigo_cliente()==null)) {
		contratoAgua.setCodigo_cliente(atualizacao.getCodigo_cliente());
	}
	if(!(atualizacao.getPde_rgi()==null)) {
		contratoAgua.setPde_rgi(atualizacao.getPde_rgi());
	}
	if(!(atualizacao.getHidrometro()==null)) {
		contratoAgua.setHidrometro(atualizacao.getHidrometro());
	}
	if(!(atualizacao.getTipo_ligacao()==null)) {
		contratoAgua.setTipo_ligacao(atualizacao.getTipo_ligacao());
	}
	if(!(atualizacao.getTipo_fornecimento()==null)) {
		contratoAgua.setTipo_fornecimento(atualizacao.getTipo_fornecimento());
	}
	if(!(atualizacao.getN_fornecimento()==null)) {
		contratoAgua.setN_fornecimento(atualizacao.getN_fornecimento());
	}
	if(!(atualizacao.getValor_medio()==0)) {
		contratoAgua.setValor_medio(atualizacao.getValor_medio());
	}
	if(!(atualizacao.getLocal_nome()==null)) {
		contratoAgua.setLocal_nome(atualizacao.getLocal_nome());
	}
	if(!(atualizacao.getLocal_cnpj()==null)) {
		contratoAgua.setLocal_cnpj(atualizacao.getLocal_cnpj());
	}
	if(!(atualizacao.getLocal_cep()==null)) {
		contratoAgua.setLocal_cep(atualizacao.getLocal_cep());
	}
	if(!(atualizacao.getLocal_rua()==null)) {
		contratoAgua.setLocal_rua(atualizacao.getLocal_rua());
	}
	if(!(atualizacao.getLocal_numero()==null)) {
		contratoAgua.setLocal_numero(atualizacao.getLocal_numero());
	}
	if(!(atualizacao.getLocal_bairro()==null)) {
		contratoAgua.setLocal_bairro(atualizacao.getLocal_bairro());
	}
	if(!(atualizacao.getLocal_cidade()==null)) {
		contratoAgua.setLocal_cidade(atualizacao.getLocal_cidade());
	}
	if(!(atualizacao.getLocal_estado()==null)) {
		contratoAgua.setLocal_estado(atualizacao.getLocal_estado());
	}
	
	
	}
	public void atualizar(ContratoAgua contratoAgua, ContratoAgua atualizacao) {
		atualizarDados(contratoAgua,atualizacao);
	}
	
}
