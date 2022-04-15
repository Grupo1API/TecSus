package com.digisolu.tecsus1.modelos;

import java.util.List;
import org.springframework.stereotype.Component;
import com.digisolu.tecsus1.entidades.ContaEnergia;

@Component
public class ContaEnergiaSelecionador {
	public ContaEnergia selecionar(List<ContaEnergia> contasEnergia, Long id) {
		ContaEnergia selecionado = null;
		for (ContaEnergia contaEnergia : contasEnergia) {
			if (contaEnergia.getId() == id) {
				selecionado = contaEnergia;
			}
		}
		return selecionado;
	}
}
