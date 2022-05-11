package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.ContratoEnergia;

public class ContratoEnergiaAtualizador {
	private void atualizarDados(ContratoEnergia contratoEnergia, ContratoEnergia atualizacao) {
	
	if(!(atualizacao.getCodigo_identificador()==null)) {
		contratoEnergia.setCodigo_identificador(atualizacao.getCodigo_identificador());
	}
	if(!(atualizacao.getCodigo_fiscal_operacao()==null)) {
		contratoEnergia.setCodigo_fiscal_operacao(atualizacao.getCodigo_fiscal_operacao());
	}
	if(!(atualizacao.getGrupo_subgrupo()==null)) {
		contratoEnergia.setGrupo_subgrupo(atualizacao.getGrupo_subgrupo());
	}
	if(!(atualizacao.getClasse_subclasse()==null)) {
		contratoEnergia.setClasse_subclasse(atualizacao.getClasse_subclasse());
	}
	if(!(atualizacao.getTp_fornecimento()==null)) {
		contratoEnergia.setTp_fornecimento(atualizacao.getTp_fornecimento());
	}
	if(!(atualizacao.getModalidade_tarifaria()==null)) {
		contratoEnergia.setModalidade_tarifaria(atualizacao.getModalidade_tarifaria());
	}
	if(!(atualizacao.getTensao_nominal()==null)) {
		contratoEnergia.setTensao_nominal(atualizacao.getTensao_nominal());
	}
	if(!(atualizacao.getRoteiro_leitura()==null)) {
		contratoEnergia.setRoteiro_leitura(atualizacao.getRoteiro_leitura());
	}
	if(!(atualizacao.getNum_medidor()==null)) {
		contratoEnergia.setNum_medidor(atualizacao.getNum_medidor());
	}
	if(!(atualizacao.getValor_medio()==0)) {
		contratoEnergia.setValor_medio(atualizacao.getValor_medio());
	}
	if(!(atualizacao.getEndereco_eletrico()==null)) {
		contratoEnergia.setEndereco_eletrico(atualizacao.getEndereco_eletrico());
	}
	if(!(atualizacao.getCnpj_cpf_ci()==null)) {
		contratoEnergia.setCnpj_cpf_ci(atualizacao.getCnpj_cpf_ci());
	}
	if(!(atualizacao.getLocal_cep()==null)) {
		contratoEnergia.setLocal_cep(atualizacao.getLocal_cep());
	}
	if(!(atualizacao.getLocal_rua()==null)) {
		contratoEnergia.setLocal_rua(atualizacao.getLocal_rua());
	}
	if(!(atualizacao.getLocal_bairro()==null)) {
		contratoEnergia.setLocal_bairro(atualizacao.getLocal_bairro());
	}
	if(!(atualizacao.getLocal_cidade()==null)) {
		contratoEnergia.setLocal_cidade(atualizacao.getLocal_cidade());
	}
	if(!(atualizacao.getLocal_estado()==null)) {
		contratoEnergia.setLocal_estado(atualizacao.getLocal_estado());
	}
	if(!(atualizacao.getLocal_numero()==null)) {
		contratoEnergia.setLocal_numero(atualizacao.getLocal_numero());
	}
	
	}
	public void atualizar(ContratoEnergia contratoEnergia, ContratoEnergia atualizacao) {
		atualizarDados(contratoEnergia,atualizacao);
	}
	
}

	
