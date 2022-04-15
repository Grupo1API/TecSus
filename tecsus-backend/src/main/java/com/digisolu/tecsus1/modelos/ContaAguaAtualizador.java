package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.ContaAgua;

public class ContaAguaAtualizador {
	
	private void atualizarDados(ContaAgua contaAgua, ContaAgua atualizacao) {
		if(!(atualizacao.getConcessionaria()==null)) {
			contaAgua.setConcessionaria(atualizacao.getConcessionaria());
		}
		if(!(atualizacao.getCnpj()==null)) {
			contaAgua.setCnpj(atualizacao.getCnpj());
		}
		if(!(atualizacao.getSegmento()==null)) {
			contaAgua.setSegmento(atualizacao.getSegmento());
		}
		if(!(atualizacao.getN_fornecimento()==null)) {
			contaAgua.setN_fornecimento(atualizacao.getN_fornecimento());
		}
		if(!(atualizacao.getN_documento()==null)) {
			contaAgua.setN_documento(atualizacao.getN_documento());
		}
		if(!(atualizacao.getData_emissao()==null)) {
			contaAgua.setData_emissao(atualizacao.getData_emissao());
		}
		if(!(atualizacao.getNome_cliente()==null)) {
			contaAgua.setNome_cliente(atualizacao.getNome_cliente());
		}
		if(!(atualizacao.getCep()==null)) {
			contaAgua.setCep(atualizacao.getCep());
		}
		if(!(atualizacao.getEndereco()==null)) {
			contaAgua.setEndereco(atualizacao.getEndereco());
		}
		if(!(atualizacao.getCodigo_cliente()==null)) {
			contaAgua.setCodigo_cliente(atualizacao.getCodigo_cliente());
		}
		if(!(atualizacao.getPde_rgi()==null)) {
			contaAgua.setPde_rgi(atualizacao.getPde_rgi());
		}
		if(!(atualizacao.getHidrometro()==null)) {
			contaAgua.setHidrometro(atualizacao.getHidrometro());
		}
		if(!(atualizacao.getEconomia()==null)) {
			contaAgua.setEconomia(atualizacao.getEconomia());
		}
		if(!(atualizacao.getTipo_ligacao()==null)) {
			contaAgua.setTipo_ligacao(atualizacao.getTipo_ligacao());
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
		if(!(atualizacao.getMedia_m3()==0)) {
			contaAgua.setMedia_m3(atualizacao.getMedia_m3());
		}
		if(!(atualizacao.getSubtotal_agua()==0)) {
			contaAgua.setSubtotal_agua(atualizacao.getSubtotal_agua());
		}
		if(!(atualizacao.getSubtotal_esgoto()==0)) {
			contaAgua.setSubtotal_esgoto(atualizacao.getSubtotal_esgoto());
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
