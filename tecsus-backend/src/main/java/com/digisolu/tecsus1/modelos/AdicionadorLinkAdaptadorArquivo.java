package com.digisolu.tecsus1.modelos;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.adaptadores.AdaptadorArquivo;
import com.digisolu.tecsus1.controles.ArquivoControle;



@Component
public class AdicionadorLinkAdaptadorArquivo implements AdicionadorLink<AdaptadorArquivo> {
	@Override
	public void adicionarLink(List<AdaptadorArquivo> lista) {
		for (AdaptadorArquivo adaptadorArquivo : lista) {
			long id = adaptadorArquivo.getAdaptadorArquivo_id();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder
							.methodOn(ArquivoControle.class)
							.obterAdaptadorArquivo(id))
					.withSelfRel();
			adaptadorArquivo.add(linkProprio);
		}
	}

	@Override
	public void adicionarLink(AdaptadorArquivo adaptadorArquivo) {
		Link linkLista = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(ArquivoControle.class)
						.obterAdaptadorArquivos())
				.withRel("Lista de Arquivos");
		adaptadorArquivo.add(linkLista);
	}
}