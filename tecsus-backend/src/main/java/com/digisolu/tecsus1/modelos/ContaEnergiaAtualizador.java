package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.ContaEnergia;

public class ContaEnergiaAtualizador {
	
	private void atualizarDados(ContaEnergia contaEnergia, ContaEnergia atualizacao) {
		if(!(atualizacao.getConcessionaria()==null)) {
			contaEnergia.setConcessionaria(atualizacao.getConcessionaria());
		}
		if(!(atualizacao.getEndereco_concessionaria()==null)) {
			contaEnergia.setEndereco_concessionaria(atualizacao.getEndereco_concessionaria());
		}
		if(!(atualizacao.getCep_concessionaria()==null)) {
			contaEnergia.setCep_concessionaria(atualizacao.getCep_concessionaria());
		}
		if(!(atualizacao.getCnpj_concessionaria()==null)) {
			contaEnergia.setCnpj_concessionaria(atualizacao.getCnpj_concessionaria());
		}
		if(!(atualizacao.getNome_cliente()==null)) {
			contaEnergia.setNome_cliente(atualizacao.getNome_cliente());
		}
		if(!(atualizacao.getCpf_cnpj_consumo()==null)) {
			contaEnergia.setCpf_cnpj_consumo(atualizacao.getCpf_cnpj_consumo());
		}
		if(!(atualizacao.getEndereco_cliente()==null)) {
			contaEnergia.setEndereco_cliente(atualizacao.getEndereco_cliente());
		}
		if(!(atualizacao.getCep_cliente()==null)) {
			contaEnergia.setCep_cliente(atualizacao.getCep_cliente());
		}
		if(!(atualizacao.getNota_fiscal()==null)) {
			contaEnergia.setNota_fiscal(atualizacao.getNota_fiscal());
		}
		if(!(atualizacao.getValor_total()==0)) {
			contaEnergia.setValor_total(atualizacao.getValor_total());
		}
		if(!(atualizacao.getNumero_instalacao()==null)) {
			contaEnergia.setNumero_instalacao(atualizacao.getNumero_instalacao());
		}
		if(!(atualizacao.getData_vencimento()==null)) {
			contaEnergia.setData_vencimento(atualizacao.getData_vencimento());
		}
		if(!(atualizacao.getConta_mes()==null)) {
			contaEnergia.setConta_mes(atualizacao.getConta_mes());
		}
		if(!(atualizacao.getBandeira_tarifaria_vigente()==null)) {
			contaEnergia.setBandeira_tarifaria_vigente(atualizacao.getBandeira_tarifaria_vigente());
		}
		if(!(atualizacao.getBandeira_tarifaria()==null)) {
			contaEnergia.setBandeira_tarifaria(atualizacao.getBandeira_tarifaria());
		}
		if(!(atualizacao.getEmissao()==null)) {
			contaEnergia.setEmissao(atualizacao.getEmissao());
		}
		if(!(atualizacao.getNum_dias_faturamento()==0)) {
			contaEnergia.setNum_dias_faturamento(atualizacao.getNum_dias_faturamento());
		}
		if(!(atualizacao.getDescricao_consumo()==null)) {
			contaEnergia.setDescricao_consumo(atualizacao.getDescricao_consumo());
		}
		if(!(atualizacao.getNumero_medidor()==null)) {
			contaEnergia.setNumero_medidor(atualizacao.getNumero_medidor());
		}
		if(!(atualizacao.getConst_mult()==0)) {
			contaEnergia.setConst_mult(atualizacao.getConst_mult());
		}
		if(!(atualizacao.getQuantidade_kwh_mes()==0)) {
			contaEnergia.setQuantidade_kwh_mes(atualizacao.getQuantidade_kwh_mes());
		}
		if(!(atualizacao.getValor_total_tusd()==0)) {
			contaEnergia.setValor_total_tusd(atualizacao.getValor_total_tusd());
		}
		if(!(atualizacao.getValor_total_te()==0)) {
			contaEnergia.setValor_total_te(atualizacao.getValor_total_te());
		}
		if(!(atualizacao.getValor_multa()==0)) {
			contaEnergia.setValor_multa(atualizacao.getValor_multa());
		}
		if(!(atualizacao.getValor_cip_contrib_municipal()==0)) {
			contaEnergia.setValor_cip_contrib_municipal(atualizacao.getValor_cip_contrib_municipal());
		}	
		if(!(atualizacao.getValor_pis()==0)) {
			contaEnergia.setValor_pis(atualizacao.getValor_pis());
		}
		if(!(atualizacao.getValor_cofins()==0)) {
			contaEnergia.setValor_cofins(atualizacao.getValor_cofins());
		}
		
	}
	public void atualizar(ContaEnergia contaEnergia, ContaEnergia atualizacao) {
		atualizarDados(contaEnergia,atualizacao);
	}

}


