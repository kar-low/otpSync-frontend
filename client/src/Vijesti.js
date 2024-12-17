import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ShowMoreText from "react-show-more-text";


const Vijesti = () => {

  const styleSheet = document.styleSheets[0];
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login", { replace: true }); 
      window.location.reload();
      return; 
    };
  });

  styleSheet.insertRule(`
    .profil-container {
      padding: 20px;
      max-width: 450px;
      margin: 0 auto;
      margin-top: 10%;
      border: 1px solid #007a33;
      border-radius: 8px;
      background-color: #f4f4f4;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .title {
  visibility: hidden;
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@media (max-width: 768px) {
      .profil-container {
       width: 80%;
       margin-top: 20%;
   }

  .item {
       display: block;
       margin-bottom: 15px;
       
   }

  .item p {
       margin-right: 20px;
       text-align: left;
  }

  .item input {
      width: 200px;
      margin-left: 10px;
    
   }
  .title {
    visibility: visible;
    z-index: 5000;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: lightgray;
  }
}
`, styleSheet.cssRules.length);

  return (
    <>
    <div className="title">
          <div style={{backgroundColor: '#A0F3A7', padding: '10px 20px 10px 30px', borderRadius: '5px', height: '100%', marginLeft: '-10px', userSelect: 'none', fontWeight: 'bold', fontFamily: 'sans-serif'}}>VIJESTI</div>
     
      </div>
    <div
      style={{
        overflow:"scroll",
        marginBottom: '90px'
      }}
         >
    <div className="profil-container">
    <h3>OTP banka dobitnica nagrade Volonterski Oskar 2024. u kategoriji poslovnog sektora</h3>
    <hr style={{borderColor: 'lightgrey'}}/>
    <ShowMoreText
    lines={3}
    more={<span style={{fontWeight:"bold"}}>Prikaži više</span>}
    less={<span style={{fontWeight:"bold"}}><br></br>Prikaži manje</span>}
    width={350}
    truncatedEndingComponent={"...."}
    >
      <a>
        <p style={{textAlign: 'justify'}}>U Zagrebu je 5. prosinca 2024. godine održana svečana dodjela šesnaestog po redu Volonterskog Oskara, kojom su proglašeni ovogodišnji pobjednici. "<em>U kategoriji poslovnog sektora, priznanje je osvojila OTP banka, koja se već godinama ističe inovativnim i kontinuiranim volonterskim inicijativama, postavši primjer društveno odgovornog poslovanja.", </em>riječi su Volonterskog centra Zagreb kojima su našu banku proglasili dobitnicom ovog vrijednog priznanja.</p>
         <p style={{textAlign: 'justify'}}>Priopćenje Volonterskog centra Zagreb prenosimo u cijelosti:</p>
         <p style={{textAlign: 'justify'}}>Volonterski Oskar, godišnja nagrada za istaknute volontere i volonterke Grada Zagreba, ponovno je okupio pojedince i organizacije čiji je doprinos zajednici neprocjenjiv. Osim što su svojim radom podržali potrebite, ovogodišnji dobitnici su svojim primjerom inspirirali mnoge da se uključe u volontiranje i prepoznaju njegovu vrijednost, ne samo za zajednicu nego i za osobni razvoj.</p>
         <p style={{textAlign: 'justify'}}>Nagrada Volonterski Oskar tradicionalno se dodjeljuje za individualni doprinos, a posljednje tri godine nagrade se dodjeljuju i školskom te poslovnom sektoru, čime se dodatno ističe važnost suradnje u rješavanju društvenih izazova u Zagrebu.</p>
         <p style={{textAlign: 'justify'}}><strong>Dobitnici nagrade Volonterski Oskar 2024.</strong></p>
         <p style={{textAlign: 'justify'}}>Za titulu volontera/volonterke godine, kandidati su morali ispuniti stroge uvjete, uključujući najmanje 80 sati volonterskog angažmana u razdoblju od prvih deset mjeseci 2024. godine. Prednost su imali oni s višegodišnjim iskustvom volontiranja.</p>
         <p style={{textAlign: 'justify'}}><strong>Nagrada za volonterku godine pripala je Renati Bačanek iz</strong> Udruge žena oboljelih i liječenih od raka <strong>„Nismo same“</strong>. Renata je članica udruge od 2019. godine i od tada je aktivno uključena u sve ključne projekte organizacije. Posebno se istaknula pokretanjem Book cluba, jedinstvenog kluba za onkološke pacijentice, koji je od 2022. godine postao važan izvor podrške i zajedništva za brojne žene. Osim što vodi Book club, Renata organizira gostovanja autora, radionice te sudjeluje u humanitarnim i edukativnim projektima udruge. Sve to donijelo joj je laskavu titulu najvolonterke Grada Zagreba za 2024. godinu.</p>
         <p style={{textAlign: 'justify'}}><strong>Nagrada za životno djelo dodijeljena je Snježani Živčić iz Udruge umirovljenika Novi Zagreb</strong>, podružnice Seniori Studentskog grada. Snježanin dugogodišnji volonterski rad i nesebična predanost zajednici ostavili su dubok trag, čineći je uzorom i inspiracijom za sve generacije.</p>
         <p style={{textAlign: 'justify'}}><strong>U kategoriji „Volontiranje u školskom sektoru“ nagrada je pripala Školi za cestovni promet</strong>, čiji su učenici i djelatnici svojim akcijama pokazali iznimnu solidarnost i organiziranost.</p>
         <p style={{textAlign: 'justify'}}><strong>U kategoriji poslovnog sektora, priznanje je osvojila OTP banka</strong>, koja se već godinama ističe inovativnim i kontinuiranim volonterskim inicijativama, postavši primjer društveno odgovornog poslovanja.</p>
         <p style={{textAlign: 'justify'}}>Čestitamo svim dobitnicima i zahvaljujemo svim volonterima na njihovom nesebičnom doprinosu!</p>
      </a>
      
    </ShowMoreText>
    </div>


    <div className="profil-container">
    <h3>Zaklada Marin Čilić i OTP banka dodijelili 6.000 eura za obnovu laboratorija u Gimnaziji Vukovar</h3>
    <hr style={{borderColor: 'lightgrey'}}/>
    <ShowMoreText
    lines={3}
    more={<span style={{fontWeight:"bold"}}>Prikaži više</span>}
    less={<span style={{fontWeight:"bold"}}><br></br>Prikaži manje</span>}
    width={350}
    truncatedEndingComponent={"...."}
    >
      <a>
        <p style={{textAlign: 'justify'}}>Zaklada Marin Čilić u suradnji s OTP bankom dodijelila je donaciju u iznosu od 6.000,00 eura za adaptaciju i opremanje laboratorija za fiziku u Gimnaziji Vukovar. Ova značajna donacija omogućit će poboljšanje uvjeta za izvođenje nastave i provođenje znanstvenih istraživanja, što će doprinijeti kvalitetnijem obrazovanju u STEM području.</p>
        <p style={{textAlign: 'justify'}}>OTP banka sa Zakladom Marin Čilić surađuje od 2023. godine kada su podržali Humanitarni teniski turnir Gem Set Hrvatska, odnosno njegovo treće izdanje održano u Zadru. Tada je za obnovu multifunkcionalnog sportskog igrališta OŠ Petar Zoranić u Stankovcima prikupljeno više od 230 tisuća eura. Također, OTP banka podržava i druge projekte Zaklade poput dodjele sportskih stipendija, a sada i donacije za obnovu i opremanja školskih laboratorija.</p>
        <p style={{textAlign: 'justify'}}>Predsjednik Uprave OTP banke Balázs Békeffy&nbsp;je istaknuo: „<em>U svim sredinama gdje poslujemo nastojimo doprinijeti stvaranju pozitivnih promjena. Zato smo prošle godine i započeli suradnju s Marinovom zakladom koja dijeli s OTP bankom cilj za stvaranje što boljih uvjeta obrazovanja učenicima i studentima u Hrvatskoj. Čestitam Gimnaziji Vukovar na odličnom projektu i veseli me što smo gimnazijalcima Vukovara omogućili stjecanje praktičnog znanja u novom laboratoriju.</em>“</p>
        <p style={{textAlign: 'justify'}}>Kroz svoje projekte, Zaklada Marin Čilić do sada je dodijelila 129 stipendija mladim sportašima i glazbenicima, izgradila četiri multifunkcionalna sportska igrališta, a Gimnazija Vukovar sedma je škola čiji će laboratorij obnovljen.</p>
        <p style={{textAlign: 'justify'}}><em>„Iznimno smo ponosni što smo ove godine, uz podršku mladim glazbenicima i sportašima kroz individualne stipendije, bili u prilici pružiti i donaciju Gimnaziji Vukovar za obnovu laboratorija iz fizike. Vjerujem da će ova donacija poboljšati uvjete nastave, ali i omogućiti učenicima da steknu praktična znanja i iskustva koja će im biti ključna za bolje razumijevanje nastavnog sadržaja te buduće uspjehe. U Zakladi ćemo uvijek isticati obrazovanje kao temelj razvoja zajednice i budućnosti, a posebne zahvale upućujemo svima iz obrazovnog sustava koji svoje znanje prenose na buduće naraštaje, kao i OTP banci koja je prepoznala vrijednost i ovog projekta.“</em><strong><em>, </em></strong>izjavio je prilikom dodjele donacije Marin Čilić.</p>
        <p style={{textAlign: 'justify'}}>Voditeljica projekta obnove laboratorija fizike u Gimnaziji Vukovar je profesorica Karolina Dvojković, koja je zajedno s ravnateljicom škole Gianom Marović Zeko primila donaciju, a škola će, u suradnji s Fakultetom agrobiotehničkih znanosti Sveučilišta u Osijeku, provoditi aktivnosti koje obuhvaćaju terensko istraživanje, teorijsko istraživanje reakcije biljke na promjene temperature sa stajališta biologije, fizike i kemije i upoznavanje s metodama te etapama znanstvenog istraživanja kroz edukaciju o fiziologiji bilja. Također, učenici će moći raditi u školskom laboratoriju i provoditi analitičke metode prema protokolu uz uporabu specijalizirane opreme i programa, obrađivati rezultate mjerenja i njihovu usporedbu s drugim relevantnim rezultatima sličnih istraživanja te diseminaciju provedbe projektnih aktivnosti.</p>
        <p style={{textAlign: 'justify'}}>Zaklada Marin Čilić osnovana je 2016. godine s vizijom svijeta u kojemu svako dijete ima jednake mogućnosti da ostvari svoj puni potencijal. Tako Zaklada svojim projektima, raznim stipendijama, donacijama te dobrotvornim sportskim turnirima daje svoj doprinos ostvarenju sna svakog djeteta. OTP banka jasno i značajno podržava društveno odgovorne projekte, a mnoge i sama provodi, poput projekta OTP Zaokruži, donacijskog projekta i dodjele stipendija studentima. Ovom donacijom, a i budućim i jedni i drugi žele doprinijeti kvaliteti obrazovanja u Republici Hrvatskoj i djeci dati bolje i nove mogućnosti za učenje i razvijanje vještina.</p>
    
      </a>
      
    </ShowMoreText>
    </div>


    <div className="profil-container">
    <h3>Poslovnica Šibenik trajno mijenja radno vrijeme</h3>
    <hr style={{borderColor: 'lightgrey'}}/>
      <a>
      <p>Od ponedjeljka, 16. prosinca 2024. poslovnica Šibenik poslovat će s klijentima po novom radnom vremenu. </p>
      <p>Radno vrijeme poslovnice bit će ponedjeljkom, srijedom, četvrtkom i petkom od 8:00 do 15:00 i utorkom od 12:00 do 19.00 sati.</p>
      </a>

    </div>

    <div className="profil-container">
    <h3>Obavijest o zatvaranju poslovnice Biograd Riva</h3>
    <hr style={{borderColor: 'lightgrey'}}/>

      <a>
      <p>Poslovnica Biograd Riva, na adresi Trg kralja Tomislava 2, prestaje s radom 10. siječnja 2025. godine. </p>
      <p> Posljednjeg radnog dana u petak, 10. siječnja 2025. poslovnica će raditi do 15 sati. </p>
      </a>
    </div>

    </div>

    </>
  );
};

export default Vijesti;
