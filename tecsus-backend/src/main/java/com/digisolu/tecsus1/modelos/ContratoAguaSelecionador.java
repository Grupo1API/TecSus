package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.stereotype.Component;
import com.digisolu.tecsus1.entidades.ContratoAgua;

@Component
public class ContratoAguaSelecionador {
	public ContratoAgua selecionar(List<ContratoAgua> contratosAgua, Long id) {
		ContratoAgua selecionado = null;
		for (ContratoAgua contratoAgua : contratosAgua) {
			if (contratoAgua.getId() == id) {
				selecionado = contratoAgua;
			}
		}
		return selecionado;
	}
}
	