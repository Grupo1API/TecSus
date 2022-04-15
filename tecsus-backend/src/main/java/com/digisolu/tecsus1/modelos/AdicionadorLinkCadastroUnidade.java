package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.controles.CadastroUnidadeControle;
import com.digisolu.tecsus1.entidades.CadastroUnidade;


@Component
public class AdicionadorLinkCadastroUnidade implements AdicionadorLink<CadastroUnidade> {
	@Override
	public void adicionarLink(List<CadastroUnidade> lista) {
		for(CadastroUnidade cadastroUnidade : lista) {
			long id = cadastroUnidade.getId();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder
							.methodOn(CadastroUnidadeControle.class)
							.obterCadastroUnidade(id))
					.withSelfRel();
			cadastroUnidade.add(linkProprio);
		}
	}
	
	@Override
	public void adicionarLink(CadastroUnidade objeto) {
		Link linkProprio = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(CadastroUnidadeControle.class)
						.obterCadastroUnidade())
				.withRel("Lista de Unidades Cadastradas");
		objeto.add(linkProprio);
	}
 
}
