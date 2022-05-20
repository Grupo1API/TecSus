package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.ContaAgua;

public class ContaAguaAtualizador {
	
	private void atualizarDados(ContaAgua contaAgua, ContaAgua atualizacao) {
		
		if(!(atualizacao.getN_documento()==null)) {
			contaAgua.setN_documento(atualizacao.getN_documento());
		}
		if(!(atualizacao.getData_emissao()==null)) {
			contaAgua.setData_emissao(atualizacao.getData_emissao());
		}
		if(!(atualizacao.getData_apresentacao()==null)) {
			contaAgua.setData_apresentacao(atualizacao.getData_apresentacao());
		}
		if(!(atualizacao.getProxima_leitura()==null)) {
			contaAgua.setProxima_leitura(atualizacao.getProxima_leitura());
		}
		if(!(atualizacao.getCondicao_leitura()==null)) {
			contaAgua.setCondicao_leitura(atualizacao.getCondicao_leitura());
		}
		if(!(atualizacao.getConsumo_m3()==0)) {
			contaAgua.setConsumo_m3(atualizacao.getConsumo_m3());
		}
		if(!(atualizacao.getPeriodo()==0)) {
			contaAgua.setPeriodo(atualizacao.getPeriodo());
		}
		if(!(atualizacao.getMedia_consumo()==0)) {
			contaAgua.setMedia_consumo(atualizacao.getMedia_consumo());
		}
		if(!(atualizacao.getTotal_agua()==0)) {
			contaAgua.setTotal_agua(atualizacao.getTotal_agua());
		}
		if(!(atualizacao.getTotal_esgoto()==0)) {
			contaAgua.setTotal_esgoto(atualizacao.getTotal_esgoto());
		}
		if(!(atualizacao.getValor_total()==0)) {
			contaAgua.setValor_total(atualizacao.getValor_total());
		}
		if(!(atualizacao.getMulta()==0)) {
			contaAgua.setMulta(atualizacao.getMulta());
		}
		if(!(atualizacao.getAt_monet()==0)) {
			contaAgua.setAt_monet(atualizacao.getAt_monet());
		}
		if(!(atualizacao.getJuros_mora()==0)) {
			contaAgua.setJuros_mora(atualizacao.getJuros_mora());
		}
		if(!(atualizacao.getTaxa_regulacao()==0)) {
			contaAgua.setTaxa_regulacao(atualizacao.getTaxa_regulacao());
		}
		if(!(atualizacao.getData_vencimento()==null)) {
			contaAgua.setData_vencimento(atualizacao.getData_vencimento());
		}
	}
	public void atualizar(ContaAgua contaAgua, ContaAgua atualizacao) {
		atualizarDados(contaAgua,atualizacao);
	}

}
