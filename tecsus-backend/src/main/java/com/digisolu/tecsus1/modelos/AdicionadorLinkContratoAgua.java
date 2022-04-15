package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.controles.ContratoAguaControle;
import com.digisolu.tecsus1.entidades.ContratoAgua;

@Component
public class AdicionadorLinkContratoAgua implements AdicionadorLink<ContratoAgua> { 

	@Override
	public void adicionarLink(List<ContratoAgua> lista) {
		for (ContratoAgua contratoAgua : lista) {
			long id = contratoAgua.getId();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder
							.methodOn(ContratoAguaControle.class)
							.obterContratoAgua(id))
					.withSelfRel();
			contratoAgua.add(linkProprio);
		}
	}
		
	@Override
	public void adicionarLink(ContratoAgua objeto) {
		Link linkProprio = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(ContratoAguaControle.class)
						.obterContratoAgua())
				.withRel("Lista de Contratos de Fornecimento de Água");
		objeto.add(linkProprio);
	}

}
