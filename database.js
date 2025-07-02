const triggerData = [
  {
    keywords: ['dostaw', 'czas', 'kurier', 'wysyłk'],
    required_count: 1,
    response: 'Dostawa jest realizowana zazwyczaj w ciągu 1-3 dni roboczych. Wysyłamy zamówienia kurierem na wskazany adres.'
  },
  {
    keywords: ['płatność', 'platnosc', 'zapłac', 'przelew', 'blik', 'kart'],
    required_count: 1,
    question: "Jak wygląda płatność za zamówienie?",
    response: 'Za zamówienie możesz zapłacić przelewem, BLIKiem lub kartą płatniczą. Szczegóły znajdziesz w podsumowaniu zamówienia.'
  },
  {
    keywords: ['zwrot', 'zwróc', 'zwrocic', 'odda', 'reklamacj'],
    required_count: 1,
    question: "Jakie pawilony macie w ofercie?",
    response: 'Masz 14 dni na zwrot towaru bez podania przyczyny. W przypadku reklamacji skontaktuj się z nami mailowo lub telefonicznie.'
  },
  {
    keywords: ['kontakt', 'mail', 'telefon', 'adres', 'napisa'],
    required_count: 1,
    response: 'Skontaktuj się z nami: sklep@halowin.pl lub tel. +48 123 456 789. Odpowiadamy w dni robocze 8:00-16:00.'
  },
  {
    keywords: ['godzin', 'otwarci', 'czynn', 'pracuj', 'kiedy'],
    required_count: 1,
    question: "Jakie są godziny otwarcia?",
    response: 'Nasze biuro obsługi klienta jest czynne od poniedziałku do piątku w godz. 8:00-16:00. Sklep internetowy działa 24/7.'
  },
  {
    keywords: ['pawilon', 'ofert', 'oferty', 'macie'],
    required_count: 2,
    question: "Jakie pawilony macie w ofercie?",
    response: 'W naszej ofercie znajdziesz pawilony handlowe, gastronomiczne, biurowe oraz modułowe budynki na zamówienie. Dopasowujemy projekt do Twoich potrzeb!'
  },
  {
    keywords: ['produkcj'],
    required_count: 1,
    question: "Jaki jest czas produkcji?",
    response: 'Standardowy czas produkcji pawilonu to zazwyczaj 6-8 tygodni od momentu podpisania umowy. W przypadku większych zamówień termin ustalamy indywidualnie.'
  },
  {
    keywords: ['transport'],
    required_count: 1,
    question: "Jak wygląda sprawa związana z transportem?",
    response: 'Zapewniamy transport pawilonu na wskazany adres. Na miejscu organizujemy również rozładunek HDS i pomagamy w ustawieniu obiektu.'
  },
  {
    keywords: ['wycen', 'cen', 'koszt'],
    required_count: 1,
    response: 'Aby otrzymać darmową wycenę, skontaktuj się z nami mailowo lub telefonicznie. Przygotujemy indywidualną ofertę na podstawie Twoich potrzeb i oczekiwań.'
  },
  {
    //pierwszy trigger
    keywords: ['miejsc', 'teren', 'uwarunkowani', 'podloz', 'lokalizacj', 'ustawieni'],
    required_count: 1,
    response: 'Podłoże musi być wypoziomowane oraz utwardzone. Można pokusić się o zrobienie wylewki lub ułożyć kostkę. Można również w miejscu posadowienia wysypać kruszywo zagęścić taki teren i ułożyć bloczki betonowe / płyty chodnikowe na zasadzie szachownicy'
  },
  {
    keywords: ['siec', 'wodn', 'kanalizacyjn', 'wod-kan', 'podloz'],
    required_count: 1,
    response: 'Podłoże musi być wypoziomowane oraz utwardzone. Można pokusić się o zrobienie wylewki lub ułożyć kostkę. Można również w miejscu posadowienia wysypać kruszywo zagęścić taki teren i ułożyć bloczki betonowe / płyty chodnikowe na zasadzie szachownicy'
  },
  {
    keywords: ['leasing', 'finansowania', 'kredyt', 'pozyczk', 'rat'],
    required_count: 1,
    response: 'Oferujemy leasing przy współpracy z firmą  EFL grupa Agricole. W sprawie finansowania proszę o kontakt z Panem Tomaszem Barłowskim tel. 601-784-123, e-mail: tobar@poczta.efl.com.pl'
  },
  {
    keywords: ['wag', 'wytrzymuj', 'podlog', 'nacisk' ],
    required_count: 1,
    response: 'Podłoga wytrzymuje wagę 150 kg / 1m².'
  },
  {
    keywords: ['ogrzewani', 'zim', 'jesien', 'okres', 'jesienno', 'zimow', 'temperatur', 'grzejnik', 'ciepl'],
    required_count: 1,
    response: 'Oferta może uwzględniać: grzejnik elektryczny (500 W, 1000 W, 2000 W), klimatyzację firmy GREE LOMO 3.5 KW z opcją grzania, typ: Split w ilości – 1sz. jednostka zew. 1sz. jednostka wew.'
  },
  {
    keywords: ['wymiar', 'szerokosc', '3.0', '3', 'wiecej', 'niestandardow', 'wlasn', 'transport' ],
    required_count: 1,
    response: 'Z uwagi na ograniczenia transportowe nasz produkcja opiera się w oparciu o moduły; do 3.0m szerokości (jednostka zew.), maksymalna długość to 9.5m.  Możemy natomiast łączyć moduły ze sobą np. dwa moduły o wym. zew. 6.0m x 3.0m po złożeniu będą stanowić całość,  pawilon o wym. 6.0m x 6.0m.'
  },
  {
    keywords: ['rozladunek'],
    required_count: 1,
    response: 'Rozładunek odbywa się przy użyciu auta typu HDS lub dźwigu. Rozładunek jest w gestii zamawiającego. Liny / łańcuchy użyte do rozładunku powinny mieć przynajmniej 5m długości.'
  },
  {
    keywords: ['drzwi', 'stolark', 'okna'],
    required_count: 1,
    response: 'W standardzie  oferujemy okna PCV II-szybowe typu FIX lub R/U, drzwi aluminiowe (profil ciepły). Jeśli inwestycja jest realizowana pod projekt budowlany stosujemy okna PCV III-szybowe typu FIX lub R/U, drzwi aluminiowe (profil ciepły). Na życzenie Klienta możemy pokusić się o wycenę stolarki w całości aluminiowej.'
  },
  {
    keywords: ['widoczn', 'transparentnosc', 'w srodku', 'widac', 'zewnatrz'],
    required_count: 1,
    response: 'Konstrukcję pawilonu stanowi rama klatkowa (profile 80/80 R3MM). Konstrukcja malowana farbą 2-składnikową. W skład ramy wchodzą cztery nakrętki z uchem, umożliwiające szybki rozładunek lub przeniesienia pawilonu w inne miejsce. Konstrukcja pawilonu jest widoczna w środku.'
  },
  {
    keywords: ['wykończeni', 'ścian', 'zrobion', 'materiał'],
    required_count: 1,
    response: 'Ściany wykonujemy w oparciu o płytę warstwową, której wewnętrzne wykończenie stanowi gładka blacha, standardowo w białym kolorze (patrz. zdjęcie). Producent dostarcza atest higieniczny oraz certyfikat dla płyty. Powierzchnia jest łatwa w utrzymaniu, co sprawia, że doskonale nadaje się do zachowania wysokich standardów czystości i higieny. W przypadku, gdy standardowe wykończenie płyty nie spełnia wymagań klienta, istnieje możliwość zastosowania płyt gipsowo-kartonowych (GK) we własnym zakresie.'
  },
{
    keywords: ["elewacj", "pawilon", "opcj", "material", "fasad", "personalizacj", "zewnętrzn", "dekoracj", "styl", "okładzin"],
    response: "Pawilony Mozal oferują różne opcje wykończenia elewacji, takie jak płyty warstwowe, okładziny drewniane, metalowe lub inne materiały, z możliwością personalizacji kolorystyki i stylu. Szczegóły ustalamy indywidualnie. Prosimy o kontakt pod [e-mail] lub numerem [numer], aby omówić szczegóły.",
    required_count: 1
  },
  // Pytanie 13
  {
    keywords: ["zgod", "pozwoleni", "postawieni", "budow", "formalnośc", "zezwoleni", "praw", "administracj", "lokalizacj"],
    response: "Ze względu na wymogi urzędowe pawilon powyżej 35m2 musi dostać pozwolenie na budowę i spełniać w projekcie wymagania techniczne jako budynek: Pawilon musi zostać wykonany z płyt warstwowych o następujących parametrach: 1) Dach PIR 16cm grubości, 2) Ściana PiR 12cm grubości Polecamy indywidualnie kontaktować się z gminą, bądź starostwem w sprawach zezwolenia. ",
    required_count: 1
  },
  // Pytanie 15
  {
    keywords: ["skład", "konstrukcj", "element", "budow", "szkielet", "płyt", "ram", "komponent"],
    response: "Odpowiedź na pytanie dostępne pod adresem: [Sprawdź tutaj](https://mozal.pl/pytania-i-odpowiedzi/#:~:text=15.%20Z%20czego%20składa%20się%20pawilon?)",
    required_count: 1
  },
  // Pytanie 16
  {
    keywords: ["przenikaln", "ciepln", "warstwow", "izolacj", "PIR", "termiczn", "współczynnik", "ciepł"],
    response: "Odpowiedź na pytanie dostępne pod adresem: (https://mozal.pl/pytania-i-odpowiedzi/#:~:text=16.%20Jakie%20są%20przenikalności%20cieplne%20płyt%20warstwowych?)",
    required_count: 1
  }
];

module.exports = triggerData;