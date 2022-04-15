package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.controles.ContaEnergiaControle;
import com.digisolu.tecsus1.entidades.ContaEnergia;

@Component
public class AdicionadorLinkContaEnergia implements AdicionadorLink<ContaEnergia> {

	@Override
	public void adicionarLink(List<ContaEnergia> lista) {
		for (ContaEnergia contaEnergia : lista) {
			long id = contaEnergia.getId();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder
							.methodOn(ContaEnergiaControle.class)
							.obterEnergia(id))
					.withSelfRel();
			contaEnergia.add(linkProprio);
		}
	}
		
	@Override
	public void adicionarLink(ContaEnergia objeto) {
		Link linkProprio = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(ContaEnergiaControle.class)
						.obterEnergia())
				.withRel("Lista de Contas de Energia");
		objeto.add(linkProprio);
		
	}

}

