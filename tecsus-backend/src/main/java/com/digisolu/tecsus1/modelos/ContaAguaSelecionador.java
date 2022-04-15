package com.digisolu.tecsus1.modelos;

import java.util.List;
import org.springframework.stereotype.Component;
import com.digisolu.tecsus1.entidades.ContaAgua;

@Component
public class ContaAguaSelecionador {
	public ContaAgua selecionar(List<ContaAgua> contasAgua, Long id) {
		ContaAgua selecionado = null;
		for (ContaAgua contaAgua : contasAgua) {
			if (contaAgua.getId() == id) {
				selecionado = contaAgua;
			}
		}
		return selecionado;
	}
}
