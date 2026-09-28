/**
 * ფისოპედია (Cat Breeds Encyclopedia)
 * Core Application Logic, Data & Interactivity
 */

// --- Cat Breeds Comprehensive Database (in Georgian) ---
const CAT_BREEDS = [
  {
    id: "british-shorthair",
    nameGeo: "ბრიტანული მოკლებეწვიანი",
    nameEng: "British Shorthair",
    category: "short",
    temperament: "calm",
    origin: "დიდი ბრიტანეთი",
    originFlag: "🇬🇧",
    lifeSpan: "12 - 17 წელი",
    weight: "4 - 8 კგ",
    coatType: "მოკლე, ხავერდოვანი და ხშირი",
    hypoallergenic: false,
    popularity: 98,
    activityLevel: 3,
    affectionLevel: 4,
    intelligence: 4,
    groomingNeed: 2,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=80",
    tags: ["მოკლებეწვიანი", "მშვიდი", "ოჯახური", "ხავერდოვანი"],
    summary: "არისტოკრატიული იერის, მრგვალსახიანი და საოცრად გაწონასწორებული ხასიათის ინგლისური ჯიში.",
    description: "ბრიტანული მოკლებეწვიანი მსოფლიოში ერთ-ერთი უძველესი და ყველაზე პოპულარული ჯიშია. ცნობილია თავისი მრგვალი თავით, მსხვილი ლოყებით, ხავერდოვანი „პლიუშის“ მსგავსი ბეწვითა და ექსპრესიული თვალებით. სწორედ ეს ჯიში გახდა ლუის კეროლის ჩეშირის კატის პროტოტიპი.",
    character: "გაწონასწორებული, თავდაჭერილი და მშვიდი. არ უყვარს ხელში აყვანა დიდი ხნით, თუმცა ძალიან სიამოვნებს პატრონის გვერდით ყოფნა. იდეალურია ბინაში საცხოვრებლად და დაკავებული ადამიანებისთვის, რადგან მარტოობასაც უმტკივნეულოდ ეგუება.",
    careAndHealth: "მოვლა შედარებით მარტივია: კვირაში 1-2-ჯერ დავარცხნა სრულიად საკმარისია. მიდრეკილება აქვთ წონის მატებისკენ, ამიტომ კვების რაციონს და ზომიერ თამაშს კონტროლი სჭირდება.",
    funFact: "ბრიტანული მოკლებეწვიანის წინაპრები რომის იმპერიის ლეგიონერებს შემოჰყავდათ ბრიტანეთის კუნძულებზე მარცვლეულის მღრღნელებისგან დასაცავად."
  },
  {
    id: "maine-coon",
    nameGeo: "მეინ-კუნი",
    nameEng: "Maine Coon",
    category: "long",
    temperament: "calm",
    origin: "აშშ (მეინი)",
    originFlag: "🇺🇸",
    lifeSpan: "12 - 15 წელი",
    weight: "6 - 11 კგ",
    coatType: "გრძელი, წყალგამძლე და ხშირი",
    hypoallergenic: false,
    popularity: 99,
    activityLevel: 4,
    affectionLevel: 5,
    intelligence: 5,
    groomingNeed: 4,
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=80",
    tags: ["გრძელბეწვიანი", "გიგანტი", "ალერსიანი", "ჭკვიანი"],
    summary: "შინაური კატების გიგანტი — „კეთილი გოლიათი“ ფუმფულა კუდითა და მეგობრული ბუნებით.",
    description: "მეინ-კუნი შინაური კატების ყველაზე დიდი ჯიშია მსოფლიოში. გამოირჩევა ძლიერი აღნაგობით, ყურებზე ფოცხვერისებრი ფუნჯებით, გრძელი აბრეშუმისებრი ბეწვითა და შთამბეჭდავი ზომით. სრულ ზრდასრულობას 3-4 წლის ასაკში აღწევს.",
    character: "მიუხედავად გიგანტური ზომისა, უჩვეულოდ ნაზი, მოსიყვარულე და მომთმენია. ხშირად უწოდებენ „კატა-ძაღლს“, რადგან პატრონს ოთახიდან ოთახში დაჰყვება და უყვარს ნივთების მოტანით თამაში. განსაკუთრებულად უყვარს წყალთან თამაში.",
    careAndHealth: "მდიდარი ბეწვი კვირაში მინიმუმ 2-3-ჯერ რეგულარულ ვარცხნას მოითხოვს. საჭიროებს მაღალხარისხიან ცილოვან საკვებსა და მყარ, გამძლე საფხაჭნელებს.",
    funFact: "გინესის რეკორდების წიგნში მსოფლიოში ყველაზე გრძელი კატა სწორედ მეინ-კუნია, რომლის სიგრძეც ცხვირიდან კუდის ბოლომდე 123 სანტიმეტრს აღემატებოდა!"
  },
  {
    id: "siamese",
    nameGeo: "სიამური კატა",
    nameEng: "Siamese",
    category: "short",
    temperament: "playful",
    origin: "ტაილანდი (სიამი)",
    originFlag: "🇹🇭",
    lifeSpan: "15 - 20 წელი",
    weight: "3 - 5 კგ",
    coatType: "ძალიან მოკლე, წმინდა და მბზინავი",
    hypoallergenic: true,
    popularity: 92,
    activityLevel: 5,
    affectionLevel: 5,
    intelligence: 5,
    groomingNeed: 1,
    image: "https://images.unsplash.com/photo-1513360309081-36f20ca48f2d?auto=format&fit=crop&w=900&q=80",
    tags: ["მოკლებეწვიანი", "აქტიური", "მოლაპარაკე", "ჰიპოალერგიული"],
    summary: "მოლურჯო-საფირონისფერი თვალებითა და უნიკალური „მოლაპარაკე“ ხასიათით განთქმული აღმოსავლური მზეთუნახავი.",
    description: "სიამური კატა ერთ-ერთი ყველაზე ცნობადი ჯიშია: მისი მოხდენილი, ათლეტური სხეული, გრძელი კიდურები, მუქი ლაქები სახეზე, ყურებსა და თათებზე (point coloring) და კაშკაშა ცისფერი თვალები დაუვიწყარ შთაბეჭდილებას ტოვებს.",
    character: "საოცრად ექსტრავერტული, ცნობისმოყვარე და კომუნიკაბელური. სიამური კატა თავის პატრონს „ელაპარაკება“ განსაკუთრებული ტონალობის კნავილით. ვერ იტანს მარტოობას და მუდმივ ყურადღებასა და ჩართულობას ითხოვს.",
    careAndHealth: "მოკლე ბეწვის მოვლა მარტივია და თითქმის არ ცვივა. მნიშვნელოვანია მასთან ბევრი ურთიერთობა, ინტელექტუალური თამაშები და სითბოს უზრუნველყოფა.",
    funFact: "სიამური კნუტები იბადებიან სრულიად თეთრები! მათი დამახასიათებელი მუქი ლაქები (ტემპერატურაზე მგრძნობიარე გენის წყალობით) მხოლოდ ცხოვრების პირველ კვირებში ჩნდება სხეულის ყველაზე გრილ ნაწილებში."
  },
  {
    id: "persian",
    nameGeo: "სპარსული კატა",
    nameEng: "Persian",
    category: "long",
    temperament: "calm",
    origin: "ირანი (სპარსეთი)",
    originFlag: "🇮🇷",
    lifeSpan: "12 - 16 წელი",
    weight: "3.5 - 7 კგ",
    coatType: "გრძელი, უხვი და აბრეშუმისებრი",
    hypoallergenic: false,
    popularity: 90,
    activityLevel: 2,
    affectionLevel: 5,
    intelligence: 3,
    groomingNeed: 5,
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=900&q=80",
    tags: ["გრძელბეწვიანი", "მშვიდი", "ფუფუნება", "სამეფო"],
    summary: "სამეფო ფუფუნება, აბრეშუმისებრი ბეწვი და საოცრად მშვიდი, არისტოკრატიული ბუნება.",
    description: "სპარსული კატა საუკუნეების მანძილზე სამეფო კარისა და არისტოკრატების რჩეული იყო. გამოირჩევა შედარებით ბრტყელი სახით, დიდი მრგვალი თვალებით და სხეულის მთელ სიგრძეზე დაფენილი გრძელი, უხვი ბეწვით.",
    character: "ძალიან მშვიდი, წყნარი და გაწონასწორებული. არ უყვარს ხმაურიანი გარემო და სიმაღლეებზე ხტომა. უპირატესობას ანიჭებს რბილ დივანზე წოლას და მოფერებით ტკბობას.",
    careAndHealth: "მოითხოვს ყოველდღიურ დავარცხნას, რათა ბეწვი არ აიბურდოს. სახის სპეციფიკური აგებულების გამო აუცილებელია თვალების რეგულარული გაწმენდა სპეციალური ლოსიონით.",
    funFact: "სპარსული კატა პირველად ევროპაში მე-17 საუკუნეში იტალიელმა მოგზაურმა პიეტრო დელა ვალემ შემოიყვანა და მყისიერად მოხიბლა ფრანგი და ბრიტანელი დიდებულები."
  },
  {
    id: "bengal",
    nameGeo: "ბენგალური კატა",
    nameEng: "Bengal",
    category: "short",
    temperament: "playful",
    origin: "აშშ",
    originFlag: "🇺🇸",
    lifeSpan: "12 - 16 წელი",
    weight: "4.5 - 8 კგ",
    coatType: "მოკლე, მკვრივი, ლაქებიანი (ლეოპარდისებრი)",
    hypoallergenic: true,
    popularity: 94,
    activityLevel: 5,
    affectionLevel: 4,
    intelligence: 5,
    groomingNeed: 1,
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
    tags: ["მოკლებეწვიანი", "აქტიური", "ეგზოტიკური", "ლეოპარდი"],
    summary: "მინიატურული სახლის ლეოპარდი — ველური სილამაზე და ამოუწურავი ენერგია ერთ არსებაში.",
    description: "ბენგალური კატა აზიური ველური ლეოპარდის კატისა (ALC) და შინაური კატის შეჯვარებით მიიღეს. მას აქვს გასაოცარი ლაქებიანი ან მარმარილოსებრი შეფერილობა ოქროსფერი ნაპერწკლებით (glitter effect) და ძლიერი, მუსკულატურული სხეული.",
    character: "ჰიპერაქტიური, ათლეტური და წარმოუდგენლად ინტელექტუალური. უყვარს სიმაღლეებზე ძრომა, თამაში და წყალში ჭყუმპალაობა — ხშირად შხაპშიც კი მიჰყვება პატრონს!",
    careAndHealth: "მინიმალური ბეწვის ცვენა აქვს და ადვილად მოსავლელია. სჭირდება ბევრი ფიზიკური და მენტალური აქტივობა, თორემ მოწყენილობისგან შეიძლება სახლში ცელქობა დაიწყოს.",
    funFact: "ბენგალურ კატებს აქვთ ბუნებრივი სიყვარული წყლისადმი — მათ შეუძლიათ საათობით უყურონ ონკანიდან მომდინარე წყალს ან აუზშიც კი შეცურონ."
  },
  {
    id: "sphynx",
    nameGeo: "კანადური სფინქსი",
    nameEng: "Sphynx",
    category: "hairless",
    temperament: "playful",
    origin: "კანადა",
    originFlag: "🇨🇦",
    lifeSpan: "12 - 15 წელი",
    weight: "3 - 6 კგ",
    coatType: "უმბეწვო, თბილი ატმისებრი ღინღლით",
    hypoallergenic: true,
    popularity: 91,
    activityLevel: 5,
    affectionLevel: 5,
    intelligence: 5,
    groomingNeed: 4,
    image: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=900&q=80",
    tags: ["უმბეწვო", "ჰიპოალერგიული", "თბილი", "ალერსიანი"],
    summary: "უცხოპლანეტური მომხიბვლელობა, ცხელი სხეული და უსაზღვროდ თბილი, ალერსიანი გული.",
    description: "სფინქსი ბუნებრივი გენეტიკური მუტაციის შედეგად გაჩენილი უმბეწვო ჯიშია. მისი კანი შეხებისას თბილ ზამშს ან ატამს ჰგავს. აქვს დიდი ყურები, ნაოჭიანი შუბლი და გამჭოლი, ექსპრესიული თვალები.",
    character: "სრულიად ემოციური და მიჯაჭვული. სფინქსს უყვარს ჩახუტება, პატრონის საბნის ქვეშ ძილი და მუდმივი კონტაქტი. შესანიშნავად ეწყობა ბავშვებსა და სხვა ცხოველებს.",
    careAndHealth: "რადგან ბეწვი არ აქვს, კანზე ბუნებრივი ცხიმის გამონაყოფი გროვდება, ამიტომ კვირაში ან ორ კვირაში ერთხელ თბილ წყალში დაბანა ან სველი ხელსახოცით გაწმენდა სჭირდება. ზამთარში სჭირდება თბილი ტანსაცმელი.",
    funFact: "სფინქსის სხეულის ტემპერატურა ჩვეულებრივ კატებზე დაახლოებით 1 გრადუსით მაღალია (დაახლოებით 38.5 - 39°C), რის გამოც შეხებისას პატარა თბილ გამათბობელს ჰგავს."
  },
  {
    id: "scottish-fold",
    nameGeo: "შოტლანდიური ყურყურშა (ფოლდი)",
    nameEng: "Scottish Fold",
    category: "short",
    temperament: "calm",
    origin: "შოტლანდია",
    originFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    lifeSpan: "11 - 14 წელი",
    weight: "3 - 6 კგ",
    coatType: "მოკლე და ხშირი (არსებობს გრძელბეწვიანიც)",
    hypoallergenic: false,
    popularity: 96,
    activityLevel: 3,
    affectionLevel: 5,
    intelligence: 4,
    groomingNeed: 2,
    image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=900&q=80",
    tags: ["მოკლებეწვიანი", "მშვიდი", "საყვარელი", "მრგვალთავა"],
    summary: "ბუს მსგავსი მომხიბვლელი სახე, წინ გადახრილი ყურები და კომიკური „ბუდას“ პოზები.",
    description: "შოტლანდიური ფოლდის მთავარი განმასხვავებელი ნიშანია წინ და ქვევით დაკეცილი პატარა ყურები, რაც მის თავს იდეალურად მრგვალ და ბუს მსგავს ფორმას ანიჭებს. უყვართ უკანა თათებზე დგომა სურიკატის მსგავსად.",
    character: "ძალიან მშვიდი, დამჯერი და კომფორტული ხასიათი აქვს. იშვიათად კნავის, ხმა აქვს ძალიან დაბალი და რბილი. შესანიშნავია მშვიდი ოჯახური ცხოვრებისთვის.",
    careAndHealth: "რეგულარული დავარცხნა და ყურების ფრთხილი ჰიგიენა. ყურის გენის გამო საჭიროებს ვეტერინარის მეთვალყურეობას სახსრებისა და ხრტილების ჯანმრთელობაზე.",
    funFact: "ყველა შოტლანდიური ფოლდის წინაპარია ერთი თეთრი ფერმის კატა, სახელად სიუზი (Susie), რომელიც 1961 წელს შოტლანდიაში, პერთშირში აღმოაჩინეს."
  },
  {
    id: "ragdoll",
    nameGeo: "რაგდოლი",
    nameEng: "Ragdoll",
    category: "long",
    temperament: "calm",
    origin: "აშშ (კალიფორნია)",
    originFlag: "🇺🇸",
    lifeSpan: "12 - 17 წელი",
    weight: "5 - 9 კგ",
    coatType: "ნახევრად გრძელი, აბრეშუმისებრი, არ იბურდება",
    hypoallergenic: false,
    popularity: 97,
    activityLevel: 2,
    affectionLevel: 5,
    intelligence: 4,
    groomingNeed: 3,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
    tags: ["გრძელბეწვიანი", "მშვიდი", "ალერსიანი", "ცისფერთვალება"],
    summary: "„ნაჭრის თოჯინა“ — ხელში აყვანისას სრულად დუნდება, საოცრად თბილი და ცისფერთვალებაა.",
    description: "სახელი „Ragdoll“ (ნაჭრის თოჯინა) ამ ჯიშს იმიტომ დაერქვა, რომ როდესაც ადამიანის ხელში ხვდება, მთელ სხეულს სრულად ადუნებს. გამოირჩევა დიდი აღნაგობით, რბილი აბრეშუმის ბეწვითა და ღრმა ცისფერი თვალებით.",
    character: "უდიდესი მოსიყვარულე და ალერსიანი არსება. აგრესია თითქმის სრულიად არ გააჩნია. ბავშვებთან და ძაღლებთან ურთიერთობაში შეუდარებელია.",
    careAndHealth: "მიუხედავად გრძელი ბეწვისა, მას ქვედა ბეწვის (подшерсток) ფენა თითქმის არ აქვს, ამიტომ ბეწვი იშვიათად იბურდება. კვირაში 2-ჯერ ვარცხნა საკმარისია.",
    funFact: "რაგდოლები იმდენად ენდობიან ადამიანებს, რომ ქუჩაში მარტო გადარჩენა უჭირთ — ამიტომ ისინი მხოლოდ შიდა სივრცეში (ბინაში) საცხოვრებლად არიან რეკომენდებული."
  },
  {
    id: "russian-blue",
    nameGeo: "რუსული ცისფერი",
    nameEng: "Russian Blue",
    category: "short",
    temperament: "calm",
    origin: "რუსეთი (არხანგელსკი)",
    originFlag: "🌐",
    lifeSpan: "15 - 20 წელი",
    weight: "3.5 - 6 კგ",
    coatType: "მოკლე, მკვრივი, ორმაგი, ვერცხლისფერი ბზინვარებით",
    hypoallergenic: true,
    popularity: 89,
    activityLevel: 3,
    affectionLevel: 4,
    intelligence: 5,
    groomingNeed: 2,
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=900&q=80",
    tags: ["მოკლებეწვიანი", "ჰიპოალერგიული", "ზურმუხტისფერთვალება", "მშვიდი"],
    summary: "ვერცხლისფრად მოელვარე ცისფერი ბეწვი, ზურმუხტისფერი მზერა და ინტელიგენტური ბუნება.",
    description: "რუსული ცისფერი ბუნებრივი ჯიშია. მისი მთავარი სიამაყეა მოკლე, საოცრად ხშირი ორმაგი ბეწვი ვერცხლისფერი დაბოლოებით, რაც სინათლეზე ცისფერ ელვარებას ქმნის, და ნათელი ზურმუხტისფერი თვალები.",
    character: "თავდაჭერილი, გონიერი და თავაზიანი. უცხოებთან თავშეკავებულია, მაგრამ ოჯახის წევრებთან ღრმა ემოციურ კავშირს ამყარებს. ძალიან უყვარს წესრიგი და მშვიდი გარემო.",
    careAndHealth: "ბეწვი ძალიან ცოტა ცვივა და ნაკლებად გამოყოფს ალერგენ ცილას (Fel d 1), ამიტომ ხშირად რეკომენდებულია ალერგიული ადამიანებისთვის.",
    funFact: "ლეგენდის თანახმად, რუსული ცისფერი კატები რუსეთის მეფეთა სასახლეებში ცხოვრობდნენ და სჯეროდათ, რომ მათ სახლში ბედნიერება და მშვიდობა შემოჰქონდათ."
  },
  {
    id: "norwegian-forest",
    nameGeo: "ნორვეგიული ტყის კატა",
    nameEng: "Norwegian Forest Cat",
    category: "long",
    temperament: "playful",
    origin: "ნორვეგია",
    originFlag: "🇳🇴",
    lifeSpan: "14 - 16 წელი",
    weight: "5 - 9 კგ",
    coatType: "ორმაგი, წყალგაუმტარი და სქელი ზამთრის ქურქი",
    hypoallergenic: false,
    popularity: 88,
    activityLevel: 4,
    affectionLevel: 4,
    intelligence: 5,
    groomingNeed: 4,
    image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=900&q=80",
    tags: ["გრძელბეწვიანი", "ვიკინგები", "ძალიერი", "მამაცი"],
    summary: "ვიკინგების ლეგენდარული კატა — მამაცი, ძლიერი, წყალგაუმტარი თბილი ქურქით.",
    description: "სკანდინავიური ზღაპრებისა და მითების გმირი. ეს კატები ცივ ჩრდილოეთში საუკუნეების განმავლობაში ბუნებრივი გადარჩევით ჩამოყალიბდნენ. აქვთ სამკუთხა თავი, ძლიერი კლანჭები და საოცრად ხშირი ბეწვი.",
    character: "თვითმყოფადი, მამაცი, მაგრამ ამავე დროს ძალიან თბილი და ოჯახის მოყვარული. უყვარს სიმაღლეებზე ხოცვა — შეუძლია ხეებიდან თავით ქვევით ჩამოცოცდეს!",
    careAndHealth: "გაზაფხულზე ბეწვის ცვენის დროს ყოველდღიურ ვარცხნას საჭიროებს, სხვა დროს კვირაში 1-2-ჯერ საკმარისია. ძალიან ჯანმრთელი და გამძლე ჯიშია.",
    funFact: "ნორვეგიულ მითოლოგიაში ნაყოფიერებისა და სიყვარულის ქალღმერთ ფრეიას ეტლში სწორედ ორი გიგანტური ნორვეგიული ტყის კატა ჰყავდა შებმული."
  },
  {
    id: "abyssinian",
    nameGeo: "აბისინიური კატა",
    nameEng: "Abyssinian",
    category: "short",
    temperament: "playful",
    origin: "ეთიოპია (აბისინია)",
    originFlag: "🇪🇹",
    lifeSpan: "12 - 15 წელი",
    weight: "3 - 5 კგ",
    coatType: "მოკლე, აბრეშუმისებრი, ტიკირებული შეფერილობა",
    hypoallergenic: false,
    popularity: 87,
    activityLevel: 5,
    affectionLevel: 4,
    intelligence: 5,
    groomingNeed: 1,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
    tags: ["მოკლებეწვიანი", "ათლეტი", "ძველი ეგვიპტე", "აქტიური"],
    summary: "ძველი ეგვიპტური ფრესკების ცოცხალი განსახიერება — მოქნილი, ელეგანტური და ცნობისმოყვარე.",
    description: "აბისინიური კატა თავისი მოხდენილი აღნაგობითა და თბილი, მზეზე მოელვარე ტიკირებული (თითოეულ ბეწვზე რამდენიმე ფერის მონაცვლეობა) ბეწვით პატარა პუმას ან ველურ კატას მოგვაგონებს.",
    character: "არასოდეს ზის ერთ ადგილზე! მუდმივად მოძრაობაშია, იკვლევს კარადებს, თაროებს და პატრონის ყოველ ნაბიჯს აკვირდება. უსაზღვროდ ინტელექტუალური და მხიარულია.",
    careAndHealth: "ბეწვი მინიმალურ მოვლას საჭიროებს. სჭირდება ბევრი სათამაშო, მთამსვლელის კომპლექსები და სივრცე ენერგიის დასახარჯად.",
    funFact: "აბისინიური კატები საოცრად გვანან ძველი ეგვიპტის ტაძრებსა და სამარხებში გამოსახულ წმინდა კატებს."
  },
  {
    id: "siberian",
    nameGeo: "ციმბირული კატა",
    nameEng: "Siberian",
    category: "long",
    temperament: "calm",
    origin: "რუსეთი (ციმბირი)",
    originFlag: "❄️",
    lifeSpan: "13 - 18 წელი",
    weight: "4.5 - 9 კგ",
    coatType: "სამმაგი, ძალიან მკვრივი და წყალგაუმტარი ქურქი",
    hypoallergenic: true,
    popularity: 93,
    activityLevel: 4,
    affectionLevel: 5,
    intelligence: 5,
    groomingNeed: 3,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?auto=format&fit=crop&w=900&q=80",
    tags: ["გრძელბეწვიანი", "ჰიპოალერგიული", "მოსიყვარულე", "გამძლე"],
    summary: "ციმბირული ყინვების შვილი — ბუნებრივი ჰიპოალერგიულობა, ძლიერი სხეული და თბილი გული.",
    description: "ციმბირული კატა ერთ-ერთი უძველესი ბუნებრივი ჯიშია ციმბირის მკაცრი კლიმატიდან. აქვს სამმაგი, წყალგაუმტარი ქურქი, დიდი მრგვალი თვალები და ძლიერი, მძიმე აღნაგობა.",
    character: "ძალიან მოსიყვარულე, მომთმენი და ერთგულია. უყვარს ოჯახის ყველა წევრი, განსაკუთრებით ბავშვები. აქვს საოცარი ინტუიცია და პატრონის ემოციურ მდგომარეობას ზუსტად გრძნობს.",
    careAndHealth: "მიუხედავად უხვი ბეწვისა, ციმბირული კატა ბუნებრივად გამოიმუშავებს გაცილებით ნაკლებ Fel d 1 ცილას, ამიტომ ალერგიის მქონე ადამიანთა უმრავლესობასთან პრობლემას არ ქმნის.",
    funFact: "ციმბირული კატები შესანიშნავი მხტომელები არიან — ძლიერი უკანა თათების წყალობით მათ შეუძლიათ ერთი ნახტომით წარმოუდგენელ სიმაღლეზე ახტომა."
  }
];

// --- Cat Trivia / Fun Facts Database ---
const FUN_FACTS = [
  "კატები დღე-ღამის დაახლოებით 70%-ს ძილში ატარებენ, რაც ნიშნავს, რომ 9 წლის კატას მხოლოდ 3 წელი აქვს გატარებული ფხიზლად!",
  "თითოეული კატის ცხვირის ანაბეჭდი ისევე უნიკალურია, როგორც ადამიანის თითის ანაბეჭდი.",
  "კატებს შეუძლიათ 100-ზე მეტი სხვადასხვა ბგერა გამოსცენ, მაშინ როცა ძაღლებს მხოლოდ 10-მდე ბგერის გამოცემა შეუძლიათ.",
  "კატის კრუტუნი (Purring) არა მხოლოდ სიამოვნების ნიშანია, არამედ მის ვიბრაციას (20-140 ჰერცი) ძვლებისა და კუნთების რეგენერაციის სამკურნალო ეფექტიც აქვს.",
  "კატებს შეუძლიათ საკუთარი სიმაღლის 6-ჯერ მეტ მანძილზე ახტომა ერთი მოქნილი მოძრაობით.",
  "კატების სმენა ადამიანისაზე და ძაღლისაზე გაცილებით მახვილია — მათ შეუძლიათ 64 000 ჰერცამდე ულტრაბგერების გაგონება!"
];

// --- State Management ---
let currentFilter = "all";
let currentSearch = "";
let currentSort = "popular";
let favorites = JSON.parse(localStorage.getItem("pawsopedia_favs") || "[]");

// --- Quiz Questions ---
const QUIZ_QUESTIONS = [
  {
    question: "რამდენად ხშირად ხართ სახლში და რამდენი თავისუფალი დრო გაქვთ?",
    options: [
      { text: "მთელი დღე სამსახურში ვარ, მჭირდება დამოუკიდებელი კატა", matchTrait: "independent" },
      { text: "სახლიდან ვმუშაობ, მინდა მუდმივი ჩახუტება და ყურადღება", matchTrait: "superAffectionate" },
      { text: "ჩვეულებრივი გრაფიკი მაქვს, ზომიერი ურთიერთობა მირჩევნია", matchTrait: "balanced" }
    ]
  },
  {
    question: "როგორი აქტივობის დონე მოგწონთ შინაურ ცხოველში?",
    options: [
      { text: "მშვიდი, დივანზე წოლა და რელაქსი", matchTrait: "chill" },
      { text: "ენერგიული, მოთამაშე, თითქოს პატარა ლეოპარდი მყავდეს", matchTrait: "active" },
      { text: "დიდი და ჭკვიანი, რომელსაც ნივთების მოტანასაც ვასწავლი", matchTrait: "giantPlayful" }
    ]
  },
  {
    question: "ბეწვის მოვლა და ალერგია რამდენად გაწუხებთ?",
    options: [
      { text: "ალერგიული ვარ, მჭირდება ჰიპოალერგიული ან უმბეწვო ჯიში", matchTrait: "hypo" },
      { text: "მიყვარს გრძელი, ფუმფულა ბეწვი და სიამოვნებით დავვარცხნი", matchTrait: "fluffy" },
      { text: "მირჩევნია მოკლე ბეწვი, რომელიც მინიმალურ მოვლას მოითხოვს", matchTrait: "lowMaintenance" }
    ]
  },
  {
    question: "რა არის თქვენთვის კატაში ყველაზე მიმზიდველი თვისება?",
    options: [
      { text: "არისტოკრატიული სიმშვიდე და თავაზიანობა", matchTrait: "aristocrat" },
      { text: "ცნობისმოყვარეობა, ხმით ურთიერთობა და ინტელექტი", matchTrait: "vocal" },
      { text: "ბავშვებთან და ოჯახთან საოცარი სინაზე", matchTrait: "familySweet" }
    ]
  }
];

let quizAnswers = [];
let quizCurrentIndex = 0;

// --- DOM Elements ---
const breedsGrid = document.getElementById("breedsGrid");
const breedSearchInput = document.getElementById("breedSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const filterPillsContainer = document.getElementById("filterPillsContainer");
const sortSelect = document.getElementById("sortSelect");
const matchCount = document.getElementById("matchCount");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const noResultsState = document.getElementById("noResultsState");
const emptyResetBtn = document.getElementById("emptyResetBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const favCountBadge = document.getElementById("favCountBadge");
const favoritesOpenBtn = document.getElementById("favoritesOpenBtn");
const favoritesDrawer = document.getElementById("favoritesDrawer");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const favoritesListContainer = document.getElementById("favoritesListContainer");
const drawerCount = document.getElementById("drawerCount");
const randomBreedBtn = document.getElementById("randomBreedBtn");
const detailModal = document.getElementById("detailModal");
const closeDetailBtn = document.getElementById("closeDetailBtn");
const detailModalBody = document.getElementById("detailModalBody");
const funFactText = document.getElementById("funFactText");
const nextFactBtn = document.getElementById("nextFactBtn");
const quizOpenBtn = document.getElementById("quizOpenBtn");
const quizModal = document.getElementById("quizModal");
const closeQuizBtn = document.getElementById("closeQuizBtn");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizIntroState = document.getElementById("quizIntroState");
const quizQuestionsState = document.getElementById("quizQuestionsState");
const quizResultState = document.getElementById("quizResultState");
const quizProgressBar = document.getElementById("quizProgressBar");
const quizCurrentStep = document.getElementById("quizCurrentStep");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptionsContainer = document.getElementById("quizOptionsContainer");
const quizResultCard = document.getElementById("quizResultCard");
const retakeQuizBtn = document.getElementById("retakeQuizBtn");
const viewQuizResultDetailsBtn = document.getElementById("viewQuizResultDetailsBtn");
const toastContainer = document.getElementById("toastContainer");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateFavoritesBadge();
  renderBreeds();
  initEventListeners();
});

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem("pawsopedia_theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("pawsopedia_theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`გააქტიურდა ${newTheme === "dark" ? "მუქი" : "ნათელი"} თემა`, "palette");
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === "dark" 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
}

// --- Render Stars Rating Helper ---
function renderStars(rating) {
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    } else {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
  }
  return starsHtml;
}

// --- Render Breeds Cards ---
function renderBreeds() {
  const filtered = getFilteredBreeds();
  matchCount.textContent = filtered.length;

  if (filtered.length === 0) {
    breedsGrid.innerHTML = "";
    noResultsState.classList.remove("hidden");
    return;
  }

  noResultsState.classList.add("hidden");

  breedsGrid.innerHTML = filtered.map(breed => {
    const isFav = favorites.includes(breed.id);
    return `
      <article class="breed-card" data-id="${breed.id}">
        <div class="card-image-wrap">
          <img 
            src="${breed.image}" 
            alt="${breed.nameGeo}" 
            class="card-image" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80';"
          >
          <span class="origin-badge">
            <span>${breed.originFlag}</span> ${breed.origin}
          </span>
          <button 
            class="fav-btn ${isFav ? 'favorited' : ''}" 
            onclick="toggleFavorite('${breed.id}', event)"
            aria-label="რჩეულებში დამატება"
            title="${isFav ? 'რჩეულებიდან ამოშლა' : 'რჩეულებში დამატება'}"
          >
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>

        <div class="card-body">
          <div class="card-header">
            <div class="breed-names">
              <h2 class="breed-geo-name">${breed.nameGeo}</h2>
              <span class="breed-eng-name">${breed.nameEng}</span>
            </div>
          </div>

          <div class="breed-tags">
            ${breed.tags.map(t => `<span class="tag-badge">#${t}</span>`).join("")}
          </div>

          <p class="breed-summary">${breed.summary}</p>

          <div class="card-traits">
            <div class="trait-item">
              <span class="trait-label">აქტიურობა</span>
              <div class="rating-stars">${renderStars(breed.activityLevel)}</div>
            </div>
            <div class="trait-item">
              <span class="trait-label">ალერსიანობა</span>
              <div class="rating-stars">${renderStars(breed.affectionLevel)}</div>
            </div>
            <div class="trait-item">
              <span class="trait-label">ინტელექტი</span>
              <div class="rating-stars">${renderStars(breed.intelligence)}</div>
            </div>
            <div class="trait-item">
              <span class="trait-label">მოვლის სირთულე</span>
              <div class="rating-stars">${renderStars(breed.groomingNeed)}</div>
            </div>
          </div>

          <div class="card-footer">
            <button class="detail-btn" onclick="openBreedModal('${breed.id}')">
              <span>დაწვრილებით</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// --- Filter and Sort Logic ---
function getFilteredBreeds() {
  return CAT_BREEDS.filter(breed => {
    // Filter Category
    if (currentFilter === "short" && breed.category !== "short") return false;
    if (currentFilter === "long" && breed.category !== "long") return false;
    if (currentFilter === "hairless" && breed.category !== "hairless") return false;
    if (currentFilter === "calm" && breed.temperament !== "calm") return false;
    if (currentFilter === "playful" && breed.temperament !== "playful") return false;

    // Search Query (Geo, Eng, Origin, Tags)
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      const matchGeo = breed.nameGeo.toLowerCase().includes(q);
      const matchEng = breed.nameEng.toLowerCase().includes(q);
      const matchOrigin = breed.origin.toLowerCase().includes(q);
      const matchTags = breed.tags.some(t => t.toLowerCase().includes(q));
      const matchSummary = breed.summary.toLowerCase().includes(q);
      if (!matchGeo && !matchEng && !matchOrigin && !matchTags && !matchSummary) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    if (currentSort === "popular") return b.popularity - a.popularity;
    if (currentSort === "nameAsc") return a.nameGeo.localeCompare(b.nameGeo, "ka");
    if (currentSort === "activityDesc") return b.activityLevel - a.activityLevel;
    if (currentSort === "affectionDesc") return b.affectionLevel - a.affectionLevel;
    return 0;
  });
}

// --- Detail Modal ---
function openBreedModal(breedId) {
  const breed = CAT_BREEDS.find(b => b.id === breedId);
  if (!breed) return;

  const isFav = favorites.includes(breed.id);

  detailModalBody.innerHTML = `
    <div class="detail-header">
      <img 
        src="${breed.image}" 
        alt="${breed.nameGeo}" 
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80';"
      >
      <div class="detail-header-overlay">
        <h2 class="detail-geo-title" id="detailBreedTitle">${breed.nameGeo}</h2>
        <span class="detail-eng-title">${breed.nameEng} &bull; ${breed.originFlag} ${breed.origin}</span>
      </div>
    </div>

    <div class="detail-quick-specs">
      <div class="spec-box">
        <div class="spec-icon"><i class="fa-solid fa-hourglass-half"></i></div>
        <div class="spec-name">სიცოცხლე</div>
        <div class="spec-value">${breed.lifeSpan}</div>
      </div>
      <div class="spec-box">
        <div class="spec-icon"><i class="fa-solid fa-weight-hanging"></i></div>
        <div class="spec-name">საშუალო წონა</div>
        <div class="spec-value">${breed.weight}</div>
      </div>
      <div class="spec-box">
        <div class="spec-icon"><i class="fa-solid fa-shield-cat"></i></div>
        <div class="spec-name">ჰიპოალერგიული</div>
        <div class="spec-value">${breed.hypoallergenic ? "კი ✨" : "არა"}</div>
      </div>
      <div class="spec-box">
        <div class="spec-icon"><i class="fa-solid fa-spa"></i></div>
        <div class="spec-name">ბეწვის ტიპი</div>
        <div class="spec-value" style="font-size: 0.8rem;">${breed.coatType}</div>
      </div>
    </div>

    <div class="detail-section">
      <h4><i class="fa-solid fa-book-open"></i> ჯიშის ისტორია და მიმოხილვა</h4>
      <p>${breed.description}</p>
    </div>

    <div class="detail-section">
      <h4><i class="fa-solid fa-heart-pulse"></i> ხასიათი და ქცევა</h4>
      <p>${breed.character}</p>
    </div>

    <div class="detail-section">
      <h4><i class="fa-solid fa-hand-holding-medical"></i> მოვლა და ჯანმრთელობა</h4>
      <p>${breed.careAndHealth}</p>
    </div>

    <div class="fact-highlight">
      <strong><i class="fa-solid fa-lightbulb"></i> საინტერესო ფაქტი:</strong> ${breed.funFact}
    </div>

    <div style="display: flex; gap: 12px; margin-top: 10px;">
      <button 
        class="btn btn-primary" 
        style="flex: 1;" 
        onclick="toggleFavorite('${breed.id}', event); updateModalFavBtn(this, '${breed.id}');"
      >
        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
        <span>${isFav ? "რჩეულებიდან ამოშლა" : "რჩეულებში დამატება"}</span>
      </button>
      <button class="btn btn-secondary" onclick="closeModals()">
        დახურვა
      </button>
    </div>
  `;

  detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function updateModalFavBtn(btn, breedId) {
  const isFav = favorites.includes(breedId);
  btn.innerHTML = `
    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
    <span>${isFav ? "რჩეულებიდან ამოშლა" : "რჩეულებში დამატება"}</span>
  `;
}

// --- Favorites Drawer & Management ---
function toggleFavorite(breedId, event) {
  if (event) event.stopPropagation();
  const index = favorites.indexOf(breedId);
  const breed = CAT_BREEDS.find(b => b.id === breedId);
  const name = breed ? breed.nameGeo : "ჯიში";

  if (index > -1) {
    favorites.splice(index, 1);
    showToast(`"${name}" ამოიშალა რჩეულებიდან`, "heart-crack");
  } else {
    favorites.push(breedId);
    showToast(`"${name}" დაემატა რჩეულებში ❤️`, "heart");
  }

  localStorage.setItem("pawsopedia_favs", JSON.stringify(favorites));
  updateFavoritesBadge();
  renderBreeds();
  renderFavoritesDrawer();
}

function updateFavoritesBadge() {
  const count = favorites.length;
  if (favCountBadge) favCountBadge.textContent = count;
  if (drawerCount) drawerCount.textContent = count;
}

function renderFavoritesDrawer() {
  updateFavoritesBadge();
  if (favorites.length === 0) {
    favoritesListContainer.innerHTML = `
      <div class="empty-favorites">
        <i class="fa-regular fa-heart"></i>
        <p>რჩეულების სია ცარიელია</p>
        <small style="display:block; margin-top:6px; color: var(--text-muted);">
          დააჭირეთ გულის ღილაკს ნებისმიერ ბარათზე მის შესანახად!
        </small>
      </div>
    `;
    return;
  }

  const favBreeds = CAT_BREEDS.filter(b => favorites.includes(b.id));
  favoritesListContainer.innerHTML = favBreeds.map(b => `
    <div class="fav-item">
      <img src="${b.image}" alt="${b.nameGeo}" class="fav-thumb" onerror="this.src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150&q=80';">
      <div class="fav-info" onclick="openBreedModal('${b.id}'); closeModals();" style="cursor: pointer;">
        <div class="fav-title">${b.nameGeo}</div>
        <div class="fav-sub">${b.nameEng}</div>
      </div>
      <button class="fav-remove-btn" onclick="toggleFavorite('${b.id}', event)" title="ამოშლა">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");
}

// --- Interactive Quiz Matcher ---
function openQuiz() {
  quizAnswers = [];
  quizCurrentIndex = 0;
  quizIntroState.classList.remove("hidden");
  quizQuestionsState.classList.add("hidden");
  quizResultState.classList.add("hidden");
  quizModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function startQuiz() {
  quizIntroState.classList.add("hidden");
  quizQuestionsState.classList.remove("hidden");
  showNextQuestion();
}

function showNextQuestion() {
  if (quizCurrentIndex >= QUIZ_QUESTIONS.length) {
    calculateQuizResult();
    return;
  }

  const q = QUIZ_QUESTIONS[quizCurrentIndex];
  quizCurrentStep.textContent = quizCurrentIndex + 1;
  quizProgressBar.style.width = `${((quizCurrentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;
  quizQuestionText.textContent = q.question;

  quizOptionsContainer.innerHTML = q.options.map(opt => `
    <button class="quiz-option-btn" onclick="selectQuizAnswer('${opt.matchTrait}')">
      <span class="quiz-option-icon"><i class="fa-solid fa-paw"></i></span>
      <span>${opt.text}</span>
    </button>
  `).join("");
}

function selectQuizAnswer(trait) {
  quizAnswers.push(trait);
  quizCurrentIndex++;
  showNextQuestion();
}

function calculateQuizResult() {
  quizQuestionsState.classList.add("hidden");
  quizResultState.classList.remove("hidden");

  let matchedBreedId = "british-shorthair";

  // Matchmaking rules
  if (quizAnswers.includes("hypo")) {
    matchedBreedId = quizAnswers.includes("chill") ? "russian-blue" : "sphynx";
  } else if (quizAnswers.includes("active") || quizAnswers.includes("vocal")) {
    matchedBreedId = quizAnswers.includes("vocal") ? "siamese" : "bengal";
  } else if (quizAnswers.includes("fluffy") || quizAnswers.includes("giantPlayful")) {
    matchedBreedId = quizAnswers.includes("familySweet") ? "ragdoll" : "maine-coon";
  } else if (quizAnswers.includes("aristocrat") || quizAnswers.includes("chill")) {
    matchedBreedId = quizAnswers.includes("independent") ? "british-shorthair" : "scottish-fold";
  } else if (quizAnswers.includes("familySweet")) {
    matchedBreedId = "ragdoll";
  }

  const resultBreed = CAT_BREEDS.find(b => b.id === matchedBreedId) || CAT_BREEDS[0];

  quizResultCard.innerHTML = `
    <div class="glass-card" style="padding: 20px; display: flex; align-items: center; gap: 20px; text-align: left;">
      <img src="${resultBreed.image}" alt="${resultBreed.nameGeo}" style="width: 110px; height: 110px; border-radius: 14px; object-fit: cover;">
      <div>
        <h3 style="font-size: 1.4rem; color: var(--accent-orange); margin-bottom: 4px;">${resultBreed.nameGeo}</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">${resultBreed.nameEng} &bull; ${resultBreed.origin}</p>
        <p style="font-size: 0.92rem; line-height: 1.4;">${resultBreed.summary}</p>
      </div>
    </div>
  `;

  viewQuizResultDetailsBtn.onclick = () => {
    closeModals();
    openBreedModal(resultBreed.id);
  };
}

// --- Random Breed Action ---
function openRandomBreed() {
  const randomIndex = Math.floor(Math.random() * CAT_BREEDS.length);
  const randomBreed = CAT_BREEDS[randomIndex];
  openBreedModal(randomBreed.id);
  showToast(`შემთხვევითი ჯიში: ${randomBreed.nameGeo}! 🎲`, "shuffle");
}

// --- Fun Facts Rotator ---
function rotateFunFact() {
  const currentText = funFactText.textContent;
  const otherFacts = FUN_FACTS.filter(f => f !== currentText);
  const newFact = otherFacts[Math.floor(Math.random() * otherFacts.length)];
  funFactText.style.opacity = 0;
  setTimeout(() => {
    funFactText.textContent = newFact;
    funFactText.style.opacity = 1;
  }, 200);
}

// --- Toast System ---
function showToast(message, icon = "info") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-${icon}"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- Close Modals Helper ---
function closeModals() {
  detailModal.classList.add("hidden");
  quizModal.classList.add("hidden");
  favoritesDrawer.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// --- Event Listeners Setup ---
function initEventListeners() {
  // Theme toggle
  themeToggleBtn.addEventListener("click", toggleTheme);

  // Search input
  breedSearchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    clearSearchBtn.classList.toggle("hidden", currentSearch.length === 0);
    resetFiltersBtn.classList.toggle("hidden", currentSearch.length === 0 && currentFilter === "all");
    renderBreeds();
  });

  clearSearchBtn.addEventListener("click", () => {
    breedSearchInput.value = "";
    currentSearch = "";
    clearSearchBtn.classList.add("hidden");
    resetFiltersBtn.classList.toggle("hidden", currentFilter === "all");
    renderBreeds();
  });

  // Filter pills
  filterPillsContainer.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;

    filterPillsContainer.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    currentFilter = pill.dataset.filter;
    resetFiltersBtn.classList.toggle("hidden", currentFilter === "all" && currentSearch.length === 0);
    renderBreeds();
  });

  // Sort dropdown
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderBreeds();
  });

  // Reset filters
  const resetAll = () => {
    currentFilter = "all";
    currentSearch = "";
    breedSearchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    resetFiltersBtn.classList.add("hidden");
    filterPillsContainer.querySelectorAll(".pill").forEach((p, idx) => {
      p.classList.toggle("active", idx === 0);
    });
    renderBreeds();
    showToast("ფილტრები გასუფთავდა", "rotate-left");
  };

  resetFiltersBtn.addEventListener("click", resetAll);
  emptyResetBtn.addEventListener("click", resetAll);

  // Favorites Drawer
  favoritesOpenBtn.addEventListener("click", () => {
    renderFavoritesDrawer();
    favoritesDrawer.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  closeDrawerBtn.addEventListener("click", closeModals);
  favoritesDrawer.addEventListener("click", (e) => {
    if (e.target === favoritesDrawer) closeModals();
  });

  // Modals close buttons
  closeDetailBtn.addEventListener("click", closeModals);
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) closeModals();
  });

  closeQuizBtn.addEventListener("click", closeModals);
  quizModal.addEventListener("click", (e) => {
    if (e.target === quizModal) closeModals();
  });

  // Keyboard Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });

  // Random Breed Button
  randomBreedBtn.addEventListener("click", openRandomBreed);

  // Fun Facts Button
  nextFactBtn.addEventListener("click", rotateFunFact);

  // Quiz Trigger Buttons
  quizOpenBtn.addEventListener("click", openQuiz);
  startQuizBtn.addEventListener("click", startQuiz);
  retakeQuizBtn.addEventListener("click", startQuiz);
}

// Global exposure for inline HTML attributes
window.openBreedModal = openBreedModal;
window.toggleFavorite = toggleFavorite;
window.updateModalFavBtn = updateModalFavBtn;
window.closeModals = closeModals;
window.selectQuizAnswer = selectQuizAnswer;
