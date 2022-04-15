package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.entidades.CadastroUnidade;



@Component
public class CadastroUnidadeSelecionador {
	public CadastroUnidade selecionar(List<CadastroUnidade> cadastrosUnidade, Long id) {
		CadastroUnidade selecionado = null;
		for(CadastroUnidade cadastroUnidade : cadastrosUnidade) {
			if(cadastroUnidade.getId() == id) {
				selecionado = cadastroUnidade;
			}
		}
		return selecionado;
	}

}

