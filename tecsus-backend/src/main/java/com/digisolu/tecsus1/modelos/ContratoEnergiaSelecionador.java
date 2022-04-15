package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.stereotype.Component;
import com.digisolu.tecsus1.entidades.ContratoEnergia;

@Component
public class ContratoEnergiaSelecionador {
	public ContratoEnergia selecionar(List<ContratoEnergia> contratosEnergia, Long id) {
		ContratoEnergia selecionado = null;
		for (ContratoEnergia contratoEnergia : contratosEnergia) {
			if (contratoEnergia.getId() == id) {
				selecionado = contratoEnergia;
			}
		}
		return selecionado;
	}
}
	