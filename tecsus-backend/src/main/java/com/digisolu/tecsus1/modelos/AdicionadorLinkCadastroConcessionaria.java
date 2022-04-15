package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.controles.CadastroConcessionariaControle;
import com.digisolu.tecsus1.entidades.CadastroConcessionaria;

@Component
public class AdicionadorLinkCadastroConcessionaria implements AdicionadorLink<CadastroConcessionaria> {
	
	@Override
	public void adicionarLink(List<CadastroConcessionaria> lista) {
		for(CadastroConcessionaria cadastroConcessionaria : lista) {
			long id = cadastroConcessionaria.getId();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder
							.methodOn(CadastroConcessionariaControle.class)
							.obterCadastroConcessionaria(id))
					.withSelfRel();
			cadastroConcessionaria.add(linkProprio);
		}
	}
	
	@Override
	public void adicionarLink(CadastroConcessionaria objeto) {
		Link linkProprio = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(CadastroConcessionariaControle.class)
						.obterCadastroConcessionaria())
				.withRel("Lista de Concessionarias");
		objeto.add(linkProprio);
	}
 
}
