import { Template } from 'meteor/templating';
import "./newhome.html"

var langSetting = function (){
  return Session.get('language')
}

var texts =  [
  {
    section: "maintitle",
    title: { en: "DISTRIBUTE YOUR MOVIES ON ITUNES",
        sp: "OPERAMOS EN LATINO AMÉRICA",
        pt: "COBRIMOS TODA A AMÉRICA LATINA"
    },
    content:{ en: "WE KNOW LATIN BETTER",
        sp: "DISTRIBUYA SUS FILMES EN ITUNES",
        pt: "DISTRIBUA SEUS FILMES NO ITUNES"
    }
  },
  section: "follow",
  title: { en: "FOLLOW THE MOVIEW",
      sp: "SIGA LAS PELÍCULAS",
      pt: "SIGA OS FILMES"
  },
  content:{ en: "WE KNOW LATIN BETTER",
      sp: "CONOCEMOS LATAM MEJOR",
      pt: "CONHECEMOS LATAM MELHOR"
  }
},
  {
    section: "contact",
    title: { en: "SUBMIT YOUR MOVIE",
        sp: "PRESENTAR SU PELÍCULA",
        pt: "MANDE UMA MENSAGEM"
    },
    content:{ en: "OR CALL US",
        sp: "O LLAMANOS",
        pt: "CONHECEMOS LATAM MELHOR"
    }
  },

  {
    section: "international",
    title: {
      en: "INTERNATIONAL ITUNES",
      sp: "ITUNES INTERNACIONAL",
      pt: "ITUNES INTERNACIONAL"
    },
    content:{
      en: "A PAN-REGION OPERATION SERVING 17 LATIN-AMERICAN COUNTRIES, BASED IN SAO PAULO, BRAZIL, AND DELAWARE, US. WITH A MULTI-LANGUAGE TEAM, SOFA ALSO SUPPORTS LATIN PRODUCERS TO HAVE THEIR MOVIES DISTRIBUTED ON ITUNES IN THE US, EUROPE AND ASIA.",
      sp: "OPERACIÓN PAN-REGIONAL CON ACTUACIÓN EN 17 PAÍSES DE LATINO AMÉRICA Y CUENTA CON OFICINAS EN SÃO PAULO, BRAZIL Y DELAWARE, US Y UN EQUIPO MULTI-LANGUAGE. SOFA TAMBIÉN TRABAJA CON PRODUCTORES LOCALES EN LA DISTRIBUCIÓN DE SU CONTENIDO EN US, EUROPA Y ASIA.",
      pt: "OPERAÇÃO PAN-REGIONAL COM ATUAÇÃO EM 17 PAÍSES DA AMÉRICA LATINA COM ESCRITÓRIO EM SÃO PAULO. A SOFA TAMBÉM TRABALHA COM PRODUTORES LATINOS QUE QUEIRAM DISTRIBUIR SEUS FILMES NO ITUNES US, EUROPA E ÁSIA."
    },
    image: "/images/icon-itunes-p.png"
  },
  {
    section: "other",
    title: {
      en: "OTHER PLATFORMS",
      sp: "OTRAS PLATAFORMAS",
      pt: "OUTRAS PLATAFORMAS"
    },
    content:{
      en: "SOFA CAN ALSO PROVIDE YOU WITH DISTRIBUTION ON OTHER VOD PLATFORMS. PLEASE GET IN TOUCH WITH US AND ENJOY THE SOFA.",
      sp: "SOFA TAMBIÉN OFRECE DISTRIBUCIÓN VOD EN OTRAS PLATAFORMAS DIGITALES. ENTRE EN CONTACTO Y CONOZCA NUESTROS SERVICIOS.",
      pt: "A SOFA TAMBÉM TRABALHA COM OUTRAS PLATAFORMAS VOD E PODE LHE AJUDAR A EXPANDIR SEU FILME. ENTRE EM CONTATO CONOSCO E CONHEÇA NOSSOS SERVIÇOS."
    },
    image: "/images/icon-itunes-p.png"
  },
  {
    section: "material",
    title: {
      en: "MATERIAL & DELIVERIES",
      sp: "MATERIAL & DELIVERIES",
      pt: "MATERIAL & DELIVERIES"
    },
    content:{
      en: "EXPERIENCED EXPERTS IN DIGITAL CONTENT TO MANAGE YOUR VIDEO FILES, MULTI-LANGUAGE VERSIONS, SUBTITLES, LOCALIZED METADATA, XML, ENCODING PREPARATION, KEYART ADAPTATION AND TRAILER LOCALIZATION.",
      sp: "CONTAMOS CON EXPERTOS EN MATERIAL DIGITAL INVOLUCRADOS EN EL MANEJO SUS PELÍCULAS, VERSIONES MULTI-LENGUA, SUBTÍTULOS, METADATOS LOCALIZADOS, XML, PREPARACIÓN DE ENCODING, ADAPTACIÓN DE KEY-ART Y LOCALIZACIÓN DEL TRAILER.",
      pt: "UM TIME MULTILÍNGUE EXPERIENTE E ESPECIALIZADO EM CONTEÚDO DIGITAL PARA GERENCIAR SEUS ARQUIVOS DE VÍDEO, VERSÕES DE ÁUDIO, LEGENDAS, METADATAS LOCALIZADAS, XML, PREPARAÇÃO DE ENCODING, ADAPTAÇÃO DE KEY-ART E LOCALIZAÇÃO DE TRAILERS."
    },
    image: "/images/icon-material-p.png"

  },
  {
    section: "pricing",
    title: {
      en: "PRICING & MARKETING",
      sp: "PRECIOS & MARKETING",
      pt: "MARKETING E PRECIFICAÇÃO"
    },
    content:{
      en: "SOFA WORKS PROACTIVELY TO PROVIDE THE BEST STRATEGIES FOR DIGITAL RELEASES, SUPPORTING YOU ON THE SELECTION OF BEST DATES, PRICING, ONLINE MARKETING AND PROMOTIONAL OPPORTUNITIES.",
      sp: "SOFA ACTÚA PROACTIVAMENTE EN LAS MEJORES ESTRATEGIAS DE ESTRENO DIGITAL PARA AYUDARTE A TENER LAS MEJORES FECHAS, PRECIO, MARKETING ONLINE Y OPORTUNIDADES DE PROMOCIÓN.",
      pt: "A SOFA TRABALHA INTENSAMENTE PARA DESENVOLVER AS MELHORES ESTRATÉGIAS DE LANÇAMENTOS DE FILMES, CALENDÁRIO DE ESTREIA, PRECIFICAÇÃO, MARKETING ONLINE E OPORTUNIDADES EM PROMOÇÕES ESPECIAIS."
    },
    image: "/images/icon-pricing-p.png"

  },
  {
    section: "currency",
    title: {
      en: "MULTI CURRENCY MANAGEMENT & PAYMENTS",
      sp: "PAGOS Y GESTION MULTI-MONEDAS",
      pt: "PAGAMENTOS E GESTÃO MULTI-MOEDAS"
    },
    content:{
      en: "WE CAN PROVIDE THE BEST COST/REVENUE/TAX STRUCTURE TO YOUR MOVIES. INTERNATIONAL MULTI- CURRENCY WIRE-TRANSFER WITH THE BEST EXCHANGE RATES.",
      sp: "OFRECEMOS LA MEJOR RELACIÓN DE COSTO/INGRESO/FEES PARA SUS FILMES. PAGOS ONLINE EN MONEDA LOCAL O INTERNACIONAL.",
      pt: "TRABALHAMOS COM A MELHOR RELAÇÃO DE CUSTOS/RECEITAS/TAXAS PARA OS SEUS FILMES. PAGAMENTOS ONLINE EM MOEDA LOCAL OU INTERNACIONAL."
    },
    image: "/images/icon-money-p.png"

  },
  {
    section: "reports",
    title: {
      en: "ONLINE REPORTS",
      sp: "REPORTOS ONLINE",
      pt: "RELATÓRIO ONLINE"
    },
    content:{
      en: "YOU CAN FOLLOW YOUR SALES IN REAL-TIME WITH DETAILED REVENUES, EXPENSES, TAXES, FEES AND UPDATED EXCHANGE RATES.",
      sp: "USTED PUEDE ACOMPAÑAR LAS VENTAS POR INTERNET CON DETALLES DE INGRESOS, COSTOS, IMPUESTOS, FEES Y EXCHANGE RATES ACTUALIZADOS.",
      pt: "VOCÊ PODE ACOMPANHAR SUAS VENDAS PELA INTERNET COM DETALHES DE RECEITA, CUSTOS, TAXAS E CONVERSÃO DE MOEDAS."
    },
    image: "/images/icon-reports-p.png"

  }

]


Template.newhome.helpers({
  text: function( section , component ){

    var language = langSetting()
    var useText = _.findWhere( texts , { section: section } )
    return useText[component][language]
  },
  listOfSections: function(){
    var filter = _.filter( texts, function(e){
      return !_.contains ( [ "maintitle","contact" ], e.section )
    });

    // console.log('filter', filter);
    return filter
  }
});

Template.newhome.events({
  "click .language": function(event, template){
    console.log(event.target.id);
      Session.set('language', event.target.id )
  }
});


Template.newhome.rendered = function(){
  Session.set("language", 'en')
}

Template.contact.helpers({
  text: function( section , component ){
    var language = langSetting()
    var useText = _.findWhere( texts , { section: section } )
    return useText[component][language]
  },
});
