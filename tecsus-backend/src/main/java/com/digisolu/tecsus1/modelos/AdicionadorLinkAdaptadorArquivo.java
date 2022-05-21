//package com.digisolu.tecsus1.modelos;
//
//import java.util.List;
//
//import org.springframework.hateoas.Link;
//import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
//import org.springframework.stereotype.Component;
//
//import com.digisolu.tecsus1.controles.ContaAguaControle;
//import com.digisolu.tecsus1.entidades.ContaAgua;
//
//
//@Component
//public class AdicionadorLinkAdaptadorArquivo implements AdicionadorLink<ContaAgua> {
//	@Override
//	public void adicionarLink(List<ContaAgua> lista) {
//		for (ContaAgua contaAgua : lista) {
//			long id = contaAgua.getId();
//			Link linkProprio = WebMvcLinkBuilder
//					.linkTo(WebMvcLinkBuilder
//							.methodOn(ContaAguaControle.class)
//							.obterArquivo(id))
//					.withSelfRel();
//			contaAgua.add(linkProprio);
//		}
//	}
//
//	@Override
//	public void adicionarLink(ContaAgua contaAgua) {
//		Link linkLista = WebMvcLinkBuilder
//				.linkTo(WebMvcLinkBuilder
//						.methodOn(ContaAguaControle.class)
//						.obterArquivos())
//				.withRel("Lista de Arquivos");
//		contaAgua.add(linkLista);
//	}
//}