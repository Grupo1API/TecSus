package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.entidades.CadastroConcessionaria;

@Component
public class CadastroConcessionariaSelecionador {
	public CadastroConcessionaria selecionar(List<CadastroConcessionaria> cadastrosconcessionaria, Long id) {
		CadastroConcessionaria selecionado = null;
		for(CadastroConcessionaria cadastroConcessionaria : cadastrosconcessionaria) {
			if(cadastroConcessionaria.getId() == id) {
				selecionado = cadastroConcessionaria;
			}
		}
		return selecionado;
	}

}
