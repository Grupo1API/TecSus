package com.digisolu.tecsus1.modelos;

import com.digisolu.tecsus1.entidades.CadastroUnidade;

public class CadastroUnidadeAtualizador {

	private void atualizarDados(CadastroUnidade CadastroUnidade, CadastroUnidade atualizacao) {
		
		if(!(atualizacao.getNome()==null)) {
			CadastroUnidade.setNome(atualizacao.getNome());
		}
		if(!(atualizacao.getCpf_cnpj()==null)) {
			CadastroUnidade.setCpf_cnpj(atualizacao.getCpf_cnpj());
		}
		if(!(atualizacao.getTelefone()==null)) {
			CadastroUnidade.setTelefone(atualizacao.getTelefone());
		}
		if(!(atualizacao.getEmail()==null)) {
			CadastroUnidade.setEmail(atualizacao.getEmail());
		}
		if(!(atualizacao.getEnd_cep()==null)) {
			CadastroUnidade.setEnd_cep(atualizacao.getEnd_cep());
		}
		if(!(atualizacao.getEnd_rua()==null)) {
			CadastroUnidade.setEnd_rua(atualizacao.getEnd_rua());
		}
		if(!(atualizacao.getEnd_bairro()==null)) {
			CadastroUnidade.setEnd_bairro(atualizacao.getEnd_bairro());
		}
		if(!(atualizacao.getEnd_uf()==null)) {
			CadastroUnidade.setEnd_uf(atualizacao.getEnd_uf());
		}
		if(!(atualizacao.getEnd_cidade()==null)) {
			CadastroUnidade.setEnd_cidade(atualizacao.getEnd_cidade());
		}
		if(!(atualizacao.getEnd_numero()==null)) {
			CadastroUnidade.setEnd_numero(atualizacao.getEnd_numero());
		}
	}

public void atualizar(CadastroUnidade CadastroUnidade, CadastroUnidade atualizacao) {
	atualizarDados(CadastroUnidade,atualizacao);
}

}


