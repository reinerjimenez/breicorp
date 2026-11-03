import assert from "node:assert/strict";
import test from "node:test";
import { demoRedirect, seoRedirects } from "../src/config/seoRedirects.ts";

const demoLoginUrl = "https://demo.breicorp.pe/login";
const complaintsBookUrl = "https://breicorpperu.breicorp.pe/reclamos";

const expectedRedirects = new Map([
  ["/libro-reclamaciones", complaintsBookUrl],
  ["/plataforma", "/producto"],
  ["/modulos", "/producto"],
  ["/app-movil", "/producto#movilidad"],
  ["/planes", "/precios"],
  ["/clientes", "/casos-exito"],
  ["/rubros", "/software-empresas-peru"],
  ["/faq", "/#preguntas-frecuentes"],
  ["/facturacion-electronica-peru", "/facturacion-electronica"],
  ["/software-pos-peru", "/software-comercializadoras"],
  ["/facturacion-para-minimarket", "/software-comercializadoras"],
  ["/facturacion-para-tiendas", "/software-comercializadoras"],
  ["/facturacion-para-ferreterias", "/software-comercializadoras"],
  ["/facturacion-para-farmacias", "/software-comercializadoras"],
  ["/facturacion-para-zapaterias", "/software-comercializadoras"],
  ["/facturacion-para-opticas", "/software-comercializadoras"],
  ["/facturacion-para-transporte", "/software-distribuidoras"],
  ["/facturacion-para-restaurantes", "/software-empresas-peru"],
  ["/facturacion-para-clinicas", "/software-empresas-peru"],
  ["/facturacion-para-hoteles", "/software-empresas-peru"],
  ["/facturacion-para-colegios", "/software-empresas-peru"],
  ["/facturacion-para-constructoras", "/software-empresas-peru"],
  ["/facturacion-para-contables", "/software-empresas-peru"],
  ["/facturacion-para-juridicos", "/software-empresas-peru"],
  ["/facturacion-para-talleres", "/software-empresas-peru"],
  ["/facturacion-para-aviolas", "/software-empresas-peru"],
  ["/login", demoLoginUrl],
]);

test("the retired demo page redirects permanently and directly to the demo login", () => {
  assert.deepEqual(demoRedirect, {
    source: "/demo",
    destination: demoLoginUrl,
    permanent: true,
  });
});

test("the historical URL matrix maps directly to final semantic destinations", () => {
  assert.equal(seoRedirects.length, expectedRedirects.size);

  for (const redirect of seoRedirects) {
    assert.equal(redirect.permanent, true);
    assert.equal(redirect.destination, expectedRedirects.get(redirect.source));
  }
});

test("redirects are unique and cannot form internal chains", () => {
  const sources = seoRedirects.map(({ source }) => source);
  assert.equal(new Set(sources).size, sources.length);

  const sourceSet = new Set(sources);
  for (const { destination } of seoRedirects) {
    const destinationPath = destination.split("#", 1)[0];
    assert.equal(sourceSet.has(destinationPath), false, `${destination} starts a redirect chain`);
  }
});

test("all 27 historical redirects have an explicit treatment", () => {
  assert.equal(seoRedirects.length, 27);
  assert.equal(expectedRedirects.size, 27);
});
