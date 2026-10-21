import Image from "next/image";

const clients = [
  { name: "Hospedaje Roma", src: "/images/clientes/cliente-hospedaje-roma.png", width: 300, height: 300 },
  { name: "N Condes EIRL", src: "/images/clientes/cliente-n-condes-eirl.png", width: 400, height: 282 },
  { name: "Chivian Cevichería", src: "/images/clientes/cliente-chivian-cevicheria.jpeg", width: 339, height: 339 },
  { name: "Paul Tunqui E.I.R.L.", src: "/images/clientes/cliente-paul-tunqui-eirl.png", width: 400, height: 172 },
  { name: "K-Namsan", src: "/images/clientes/cliente-k-namsan.png", width: 354, height: 217 },
  { name: "Casa Monarca", src: "/images/clientes/cliente-casa-monarca.png", width: 468, height: 312 },
  { name: "Vilodas", src: "/images/clientes/cliente-vilodas.png", width: 350, height: 348 },
  { name: "Pasta More by AX", src: "/images/clientes/cliente-pasta-more-by-ax.png", width: 153, height: 153 },
  { name: "Aikmabi 100% Baby Alpaca", src: "/images/clientes/cliente-aikmabi-baby-alpaca.jpeg", width: 277, height: 277 },
  { name: "Botica Peruana", src: "/images/clientes/cliente-botica-peruana.png", width: 351, height: 350 },
  { name: "Marin Capital Perú Inversiones", src: "/images/clientes/cliente-marin-capital-peru-inversiones.png", width: 356, height: 161 },
  { name: "Spartans Gym Tingo María", src: "/images/clientes/cliente-spartans-gym-tingo-maria.jpeg", width: 216, height: 216 },
  { name: "Inversiones La Aldea", src: "/images/clientes/cliente-inversiones-la-aldea.jpeg", width: 500, height: 500 },
  { name: "MediSalud Integral Andrea", src: "/images/clientes/cliente-medisalud-integral-andrea.jpeg", width: 467, height: 467 },
  { name: "Hensey SAC", src: "/images/clientes/cliente-hensey-sac.jpeg", width: 408, height: 408 },
  { name: "Romani Motors", src: "/images/clientes/cliente-romani-motors.jpeg", width: 1026, height: 432 },
  { name: "Grupo Corp TPC SAC", src: "/images/clientes/cliente-grupo-corp-tpc-sac.jpeg", width: 373, height: 355 },
  { name: "Mecánica Beto", src: "/images/clientes/cliente-mecanica-beto.jpeg", width: 500, height: 500 },
  { name: "Josman Corporation", src: "/images/clientes/cliente-josman-corporation.jpeg", width: 334, height: 301 },
  { name: "Cat Lens", src: "/images/clientes/cliente-cat-lens.png", width: 411, height: 176 },
  { name: "Chacra Andina Market", src: "/images/clientes/cliente-chacra-andina-market.jpeg", width: 1107, height: 181 },
  { name: "Corp. Michel", src: "/images/clientes/cliente-corp-michel.png", width: 346, height: 346 },
  { name: "Los Marrones Licorería", src: "/images/clientes/cliente-los-marrones-licoreria.jpeg", width: 231, height: 231 },
  { name: "Corp. Ventura Molino", src: "/images/clientes/cliente-corp-ventura-molino.png", width: 244, height: 244 },
  { name: "Minimarket Yahweh S&C", src: "/images/clientes/cliente-minimarket-yahweh-sc.jpeg", width: 425, height: 423 },
  { name: "Moto-Repuestos El Pato", src: "/images/clientes/cliente-moto-repuestos-el-pato.jpeg", width: 248, height: 248 },
  { name: "T Danielito Cargo", src: "/images/clientes/cliente-t-danielito-cargo.png", width: 418, height: 418 },
  { name: "RJ Grupo Internacional", src: "/images/clientes/cliente-rj-grupo-internacional.png", width: 374, height: 163 },
  { name: "La Sociedad Privada de Tingo María", src: "/images/clientes/cliente-la-sociedad-privada-tingo-maria.png", width: 386, height: 151 },
  { name: "Farma Medicamentos Molino E.I.R.L.", src: "/images/clientes/cliente-farma-medicamentos-molino-eirl.png", width: 349, height: 350 },
  { name: "Diraoka Mundo de Artefactos", src: "/images/clientes/cliente-diraoka-mundo-de-artefactos.png", width: 423, height: 423 },
  { name: "Irogas EIRL", src: "/images/clientes/cliente-irogas-eirl.png", width: 489, height: 210 },
  { name: "Turismo Tingo María Lima Express", src: "/images/clientes/cliente-turismo-tingo-maria-lima-express.jpeg", width: 367, height: 134 },
  { name: "El Hogar de Marujita Tingo María", src: "/images/clientes/cliente-hogar-de-marujita-tingo-maria.jpeg", width: 246, height: 246 },
  { name: "ROE Abogados", src: "/images/clientes/cliente-roe-abogados.png", width: 257, height: 219 },
  { name: "Dageva Corporation S.A.C.", src: "/images/clientes/cliente-dageva-corporation-sac.png", width: 250, height: 222 },
  { name: "Corporación Cecinas Tingo María", src: "/images/clientes/cliente-corporacion-cecinas-tingo-maria.png", width: 243, height: 243 },
  { name: "C&L Farma", src: "/images/clientes/cliente-c-y-l-farma.png", width: 200, height: 200 },
  { name: "Automotriz Amazonas", src: "/images/clientes/cliente-automotriz-amazonas.png", width: 261, height: 261 },
  { name: "Grupo Castañeda", src: "/images/clientes/cliente-grupo-castaneda.png", width: 211, height: 211 },
  { name: "JR Vidrios y Aluminios", src: "/images/clientes/cliente-jr-vidrios-y-aluminios.png", width: 500, height: 500 },
  { name: "MAF Minimarket", src: "/images/clientes/cliente-maf-minimarket.png", width: 500, height: 500 },
  { name: "Deseret Agronomía", src: "/images/clientes/cliente-deseret-agronomia.png", width: 216, height: 211 },
  { name: "LP3 Corporación", src: "/images/clientes/cliente-lp3-corporacion.png", width: 306, height: 306 },
] as const;

function ClientLogoList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={`clients-carousel__group ${duplicate ? "clients-carousel__duplicate" : ""}`}
      aria-hidden={duplicate ? "true" : undefined}
    >
      {clients.map((client) => (
        <li
          key={client.src}
          className="flex h-16 w-[132px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-3 sm:h-[84px] sm:w-44 sm:p-4"
        >
          <Image
            src={client.src}
            alt={duplicate ? "" : `${client.name}, cliente de BREICORP`}
            width={client.width}
            height={client.height}
            sizes="(max-width: 639px) 108px, 144px"
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientsCarousel() {
  return (
    <section
      className="border-b border-slate-200 bg-slate-50 py-12 sm:py-20"
      aria-labelledby="clients-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700">
            CLIENTES BREICORP
          </p>
          <h2
            id="clients-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            Empresas que trabajan con nosotros
          </h2>
          <p className="mt-4 leading-7 text-slate-600 sm:text-lg">
            Negocios de distintos sectores utilizan BREICORP para apoyar su gestión comercial,
            facturación y operación diaria.
          </p>
        </div>
      </div>

      <div
        className="clients-carousel__viewport mt-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 sm:mt-10"
        role="region"
        aria-label="Logotipos de clientes de BREICORP"
        tabIndex={0}
      >
        <div className="clients-carousel__track">
          <ClientLogoList />
          <ClientLogoList duplicate />
        </div>
      </div>
    </section>
  );
}
