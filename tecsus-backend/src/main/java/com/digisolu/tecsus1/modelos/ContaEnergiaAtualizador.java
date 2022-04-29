package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.ContaEnergia;

public class ContaEnergiaAtualizador {
	
	private void atualizarDados(ContaEnergia contaEnergia, ContaEnergia atualizacao) {
		if(!(atualizacao.getNota_fiscal()==null)) {
			contaEnergia.setNota_fiscal(atualizacao.getNota_fiscal());
		}
		if(!(atualizacao.getValor_total()==0)) {
			contaEnergia.setValor_total(atualizacao.getValor_total());
		}

		if(!(atualizacao.getConsumo_kwh_mes()==0)) {
			contaEnergia.setConsumo_kwh_mes(atualizacao.getConsumo_kwh_mes());
		}
		if(!(atualizacao.getData_vencimento()==null)) {
			contaEnergia.setData_vencimento(atualizacao.getData_vencimento());
		}
		if(!(atualizacao.getConta_mes()==null)) {
			contaEnergia.setConta_mes(atualizacao.getConta_mes());
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
		if(!(atualizacao.getQuantidade_kwh_tusd()==0)) {
			contaEnergia.setQuantidade_kwh_tusd(atualizacao.getQuantidade_kwh_tusd());
		}
		if(!(atualizacao.getTarifa_aplicada_tusd()==0)) {
			contaEnergia.setTarifa_aplicada_tusd(atualizacao.getTarifa_aplicada_tusd());
		}
		if(!(atualizacao.getValor_fornecimento_tusd()==0)) {
			contaEnergia.setValor_fornecimento_tusd(atualizacao.getValor_fornecimento_tusd());
		}
		if(!(atualizacao.getValor_total_tusd()==0)) {
			contaEnergia.setValor_total_tusd(atualizacao.getValor_total_tusd());
		}
		if(!(atualizacao.getQuantidade_kwh_te()==0)) {
			contaEnergia.setQuantidade_kwh_te(atualizacao.getQuantidade_kwh_te());
		}
		if(!(atualizacao.getTarifa_aplicada_te()==0)) {
			contaEnergia.setTarifa_aplicada_te(atualizacao.getTarifa_aplicada_te());
		}
		if(!(atualizacao.getValor_fornecimento_te()==0)) {
			contaEnergia.setValor_fornecimento_te(atualizacao.getValor_fornecimento_te());
		}
		if(!(atualizacao.getValor_total_te()==0)) {
			contaEnergia.setValor_total_te(atualizacao.getValor_total_te());
		}
		if(!(atualizacao.getQuantidade_kwh_abv()==0)) {
			contaEnergia.setQuantidade_kwh_abv(atualizacao.getQuantidade_kwh_abv());
		}
		if(!(atualizacao.getTarifa_aplicada_abv()==0)) {
			contaEnergia.setTarifa_aplicada_abv(atualizacao.getTarifa_aplicada_abv());
		}
		if(!(atualizacao.getValor_fornecimento_abv()==0)) {
			contaEnergia.setValor_fornecimento_abv(atualizacao.getValor_fornecimento_abv());
		}
		if(!(atualizacao.getValor_total_abv()==0)) {
			contaEnergia.setValor_total_abv(atualizacao.getValor_total_abv());
		}
		if(!(atualizacao.getBase_calculo_itens()==0)) {
			contaEnergia.setBase_calculo_itens(atualizacao.getBase_calculo_itens());
		}
		if(!(atualizacao.getValor_multa()==0)) {
			contaEnergia.setValor_multa(atualizacao.getValor_multa());
		}
		if(!(atualizacao.getValor_cip_contrib_municipal()==0)) {
			contaEnergia.setValor_cip_contrib_municipal(atualizacao.getValor_cip_contrib_municipal());
		}	
		if(!(atualizacao.getBase_calculo_pis()==0)) {
			contaEnergia.setBase_calculo_pis(atualizacao.getBase_calculo_pis());
		}
		if(!(atualizacao.getAliquota_pis()==0)) {
			contaEnergia.setAliquota_pis(atualizacao.getAliquota_pis());
		}
		if(!(atualizacao.getValor_pis()==0)) {
			contaEnergia.setValor_pis(atualizacao.getValor_pis());
		}
		if(!(atualizacao.getBase_calculo_cofins()==0)) {
			contaEnergia.setBase_calculo_cofins(atualizacao.getBase_calculo_cofins());
		}
		if(!(atualizacao.getAliquota_cofins()==0)) {
			contaEnergia.setAliquota_cofins(atualizacao.getAliquota_cofins());
		}
		if(!(atualizacao.getValor_cofins()==0)) {
			contaEnergia.setValor_cofins(atualizacao.getValor_cofins());
		}
		
	}
	public void atualizar(ContaEnergia contaEnergia, ContaEnergia atualizacao) {
		atualizarDados(contaEnergia,atualizacao);
	}

}


