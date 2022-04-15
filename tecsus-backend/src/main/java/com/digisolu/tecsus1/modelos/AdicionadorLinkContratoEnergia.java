package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.controles.ContratoEnergiaControle;
import com.digisolu.tecsus1.entidades.ContratoEnergia;

@Component
public class AdicionadorLinkContratoEnergia implements AdicionadorLink<ContratoEnergia> { 

	@Override
	public void adicionarLink(List<ContratoEnergia> lista) {
		for (ContratoEnergia contratoEnergia : lista) {
			long id = contratoEnergia.getId();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder
							.methodOn(ContratoEnergiaControle.class)
							.obterContrato_energia(id))
					.withSelfRel();
			contratoEnergia.add(linkProprio);
		}
	}
		
	@Override
	public void adicionarLink(ContratoEnergia objeto) {
		Link linkProprio = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(ContratoEnergiaControle.class)
						.obterContrato_energia())
				.withRel("Lista de Contratos de Energia");
		objeto.add(linkProprio);
	}

}
