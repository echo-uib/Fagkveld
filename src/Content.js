export const meta = {
  name: "Fagkveld",
  date: "29. mars kl. 17.00 | Media City Bergen",
  info:
    "Velkommen til fagkveld 2019 for IT-studenter i Bergen! echo – Fagutvalget for informatikk, Fagutvalget Infomedia og Root Linjeforening inviterer til en kveld fullstappet med foredrag, workshops, 🍕og 🍻! 12 forskjellige bedrifter har bidratt med sine beste foredragsholdere for å gi oss et innblikk i problemene og teknologiene de jobber med til daglig. Det vil bli parallelle spor med foredrag og workshops, så det skal være mulig å finne noe for alle, uansett nivå. Husk at det er begrenset antall plasser, så meld deg på nå!",
  madeBy:
    "Laget av Ragnhild Aalvik og Kristian Rosland, oppdatert av Sondre Nilsen",
  registration: {
    uib: {
      text: "Påmelding informatikk",
      link: "https://forms.gle/GQFkoYWKZ4td8UnE8"
    },
    hvl: {
      text: "Påmelding HVL",
      link: " https://goo.gl/forms/fCYFFtt23DUsLE223"
    },
    fim: {
      text: "Påmelding InfoMedia",
      link: "https://goo.gl/forms/KjpsKkuHRvWqj4Sx1"
    }
  }
};

export const companies = [
  {
    name: "Netlight",
    logo: "assets/netlight.svg",
    link: "https://www.netlight.com/"
  },
  {
    name: "Kantega",
    logo: "assets/kantega.svg",
    link: "https://www.kantega.no/"
  },
  {
    name: "Atea",
    logo: "assets/atea.svg",
    link: "https://www.atea.no/"
  },
  {
    name: "Knowit",
    logo: "assets/knowit.svg",
    link: "https://www.knowit.no/"
  },
  {
    name: "Scout Gaming Group",
    logo: "assets/scoutgaming.svg",
    link: "https://scoutgaminggroup.com/"
  },
  {
    name: "Computas",
    logo: "assets/computas.svg",
    link: "https://computas.com/"
  },
  {
    name: "Tieto",
    logo: "assets/tieto.svg",
    link: "https://www.tieto.com/no/"
  },
  {
    name: "Vimond",
    logo: "assets/vimond.svg",
    link: "https://vimond.com/"
  },
  {
    name: "Mnemonic",
    logo: "assets/mnemonic.svg",
    link: "https://www.mnemonic.no/"
  },
  {
    name: "Ambita",
    logo: "assets/ambita.svg",
    link: "https://www.ambita.com/"
  },
  {
    name: "Bouvet",
    logo: "assets/bouvet.svg",
    link: "https://www.bouvet.no/"
  },
  {
    name: "Høgskulen på Vestlandet",
    logo: "assets/hvl.svg",
    link: "https://hvl.no/"
  }
];

export const workshops = [
  {
    title: "Pause med mat og drikke",
    speakers: "",
    info: "",
    time: "19.00 - 19.30"
  },
  {
    title: "CV-Workshop",
    speakers: "Adrian Moksness & Margrethe Johnsen, Netlight",
    info:
      "Hvordan bygger man en god CV for å få spennende muligheter etter studiet? Adrian og Margrethe i Netlight gir et innblikk i karrieremulighetene i Netlight, hva vi anser som en «god CV» og hvordan en kan jobbe med å bygge CVen sin gjennom erfaringer underveis i studietiden.",
    time: "17.15 - 18.45"
    // link: "#"
  },
  {
    title: "Hololens Workshop",
    speakers: "Gry Nagel, Bouvet",
    info:
      "This workshop will give a hands-on introduction for developing application for HoloLens (Mixed Reality) in Unity. We will set up a Unity project for Mixed Reality and learn how to utilize the Mixed Reality Toolkit to create an application. REQUIREMENTS: A developer laptop with pre-installed tools: Updated Windows 10 with developer mode turned on, Visual Studio, Unity, Windows 10 SDK, HoloLens emulator",
    time: "17.15 - 18.45"
    // link: "#"
  },
  {
    title: "Visualisering av data i kart med Leaflet",
    speakers: "Anders Linge Olsvik Breilid, Kantega",
    info:
      "I denne workshopen vil deltakerne lære å bruke biblioteket Leaflet for kartvisning i HTML med Javascript, samt lære hvordan man kan hente data fra et åpent API og visualisere dataene i kartet. Det vil være fokus på å bruke dokumentasjon aktivt for å forstå hvordan biblioteket og API-et fungerer.",
    time: "19.30 - 21.00"
    // link: "#"
  },
  {
    title: "Docker 101",
    speakers: "Knowit",
    info:
      "Introduksjon til Docker. Her lærer en å bygge og drifte containere med Docker. Anbefales for studenten som vil ta sine applikasjoner til det neste nivå med støtte for skyen. Et VirtualBox diskbilde med alt en trenger for å gjennomføre workshoppen vil bli delt ut. Enkel navigering og bruk av kommandolinje/bash anses som forhåndskunnskaper. Alle som deltar bør ha installert VirtualBox på forhånd.",
    time: "19.30 - 21.00"
    // link: "#"
  },
  {
    title: "Mingling",
    speakers: "",
    info: "",
    time: "21.00 - 23.00"
  }
];

export const talks = [
  {
    title: "Pause med mat og drikke",
    speakers: "",
    info: "",
    time: "19.00 - 19.30"
  },
  {
    title: "Velkommen",
    speakers: "",
    info: "",
    time: "17.00 - 17.10"
  },
  {
    title: "Moderne teknikker for språkanalyse",
    speakers: "Alexander Lundervold, HVL",
    info:
      "De fleste vet at deep learning har revolusjonert en rekke områder knyttet til «kunstig intelligens» i løpet av de siste åtte år. Selvkjørende biler, Alpha Zero, AlphaStar, OpenAI Five–alle basert på deep learning–har fått stor oppmerksomhet. Mindre kjent er hvordan deep learning i fjor skapte en revolusjon innen naturlig språkanalyse: hvordan datamaskiner kan forstå og prosessere menneske-språk. En revolusjon som fortsatt pågår. I dette foredraget skal vi angripe et medisinsk tekst-analyse-problem ved å bygge et state-of-the-art deep learning system.",
    time: "17.10 - 17.40"
  },
  {
    title:
      "How we built the Netflix of sports and laid the groundwork to serve Tomorrow’s traffic",
    speakers: "Thelo Gaultier, Vimond",
    info:
      "Kayo Sport is an Australian service streaming all kinds of Live and On-demand sport events, from international football games to light sabre competitions - they got them all. In this talk, we will go through what it takes to build a platform handling millions of concurrent users and keep it up and running through the storm.",
    time: "17.40 - 18.00"
  },
  {
    title: "Global Oil & Gas Software Deliveries",
    speakers: "Carolina Sola og Andreas Kleiven, Tieto",
    info:
      "Tieto Oil & Gas is the globally leading provider of logistics management software designed to accommodate the diverse needs of the international oil and gas industry. Tieto developed the worlds first ever oil & gas industry logistics hub/collaborative tool in 2001, called DaWinci, and has since expanded to support business operations for our customers in more than 25 countries around the world.",
    time: "18.00 - 18.20"
  },
  {
    title: "Git 201",
    speakers: "Thomas Wingsternes, Ambita",
    info:
      "Hvordan fungerer git? Hva er egentlig en 'commit', og hva er en 'branch'? Vi ser nærmere på hvordan enkelte git-kommandoer påvirker commit-historikken til et repository. Foredraget egner seg for folk som allerede bruker git, men som ikke har peiling på hva de holder på med",
    time: "18.20 - 18.40"
  },
  // {
  //   title: "Åpen",
  //   speakers: "",
  //   info: "",
  //   time: "19.30 - 19.50"
  // },
  {
    title: "Clean Code",
    speakers: "Monika Køller, Computas",
    info: `Å skrive bra kode er en kunst, og det er noe som tar både tid og krefter. I denne presentasjonen skal vi ta for oss noen sitater fra boken Clean Code - A Handbook of Agile Software Craftsmanship av Robert C. "Uncle Bob" Matrin, deretter se på noen konkrete tiltak for å skrive bedre kode. Det vil bli vist noen små eksempler i java, men det blir på et nivå som passer utviklere i andre språk også.`,
    time: "18.40 - 19.00"
  },
  {
    title: "Vil du jobbe med data?",
    speakers: "Didrik Finnøy, Atea",
    info:
      "Data er den nye elektrisiteten, den nye oljen, og kanskje den mest spennende karriereretningen man kan velge i disse dager. Foredraget gir innsikt i hvordan det er å jobbe med data i Bergen / Norge, og  hvordan man skiller seg ut når man søker data - relaterte jobber. Du får høre litt om hva slags arbeid som venter deg, og hva som kreves for å lykkes. Didrik Finnøy, Data Scientist hos Atea, studerte 'feil' fag på universitetet, og har kjempet seg inn i data bransjen gjennom kurs, bøker, og personlige prosjekter. I dag jobber han som konsulent, og hjelper Atea sine kunder med å utvinne verdi fra dataen de forvalter.",
    time: "19.30 - 19.50"
  },
  {
    title: "Hvordan ta i bruk web plattformen for bedre kodedeling?",
    speakers: "Øystein Østebø Olsen og Torbjørn Angeltveit, Scout Gaming",
    info:
      "Custom elements er en web standard som endelig beskriver hvordan rammeverk kan snakke sammen og en viktig primitiv for å endelig kunne fokusere på å lage gode UI elementer. En introduksjon til hva det er og hvordan det hjelper rammeverk å snakke samme språk.",
    time: "19.50 - 20.10"
  },
  {
    title: "Don’t Push The Red Button",
    speakers: "Martin B. Nordby, mnemonic",
    info:
      "Avanserte trusselaktører kan bruke lang tid på å planlegge et angrep. Hva skjer når en ansatt trykker en tilsynelatende uskyldig lenke i en epost skreddersydd av angripere for å se troverdig ut? Vi følger et målrettet angrep, steg for steg. En ekte thriller!",
    time: "20.10 - 20.50"
  },
  {
    title: "Mingling",
    speakers: "",
    info: "",
    time: "21.00 - 23.00"
  }
];
