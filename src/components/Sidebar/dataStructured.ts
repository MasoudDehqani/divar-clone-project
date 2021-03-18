import HouseOutlined from "@material-ui/icons/HouseOutlined"
import Car from "@material-ui/icons/DriveEtaOutlined"
import SmartPhone from "@material-ui/icons/SmartphoneOutlined"
import Furniture from "@material-ui/icons/WeekendOutlined"
import Build from "@material-ui/icons/BuildOutlined"
import Watch from "@material-ui/icons/WatchOutlined"
import Dice from "@material-ui/icons/CasinoOutlined"
import People from "@material-ui/icons/People"
import Work from "@material-ui/icons/WorkOutline"
import Business from "@material-ui/icons/BusinessCenter"

// const allRoutes = {
  
// }

enum TopLevelPersianTexts {
  "real-estate" = "املاک",
  "vehicles" = "وسایل نقلیه",
  "electronic-devices" = "لوازم الکترونیکی",
  "home-and-kitchen" = "مربوط به خانه",
  "services" = "خدمات",
  "personal-goods" = "وسایل شخصی",
  "entertainment" = "سرگرمی و فراغت",
  "social-services" = "اجتماعی",
  "businesses" = "برای کسب و کار",
  "jobs" = "استخدام و کاریابی"
}

enum level2PersianTexts {
  "buy-residential" = "فروش مسکونی",
  "rent-residential" = "اجاره مسکونی",
  "buy-commercial-property" = "فروش اداری و تجاری",
  "rent-commercial-property" = "اجاره اداری و تجاری", 
  "rent-temporary" = "اجاره کوتاه مدت", 
  "real-estate-services" = "پروژه‌های ساخت و ساز",

  "auto" = "خودرو", 
  "car-accessories" = "قطعات یدکی و لوازم جانبی خودرو", 
  "motorcycles" = "موتورسیکلت و لوازم جانبی", 
  "boat" = "قایق و لوازم جانبی",

  "mobile-tablet" = "موبایل و تبلت", 
  "computers" = "رایانه", 
  "game-consoles" = "کنسول، بازی ویدئویی و آنلاین", 
  "video-audio-device" = "صوتی و تصویری", 
  "telephone" = "تلفن رومیزی",

  "home-decor-furniture" = "وسایل و تزئینات خانه", 
  "kitchen-appliances" = "وسایل آشپزخانه", 
  "home-appliances" = "ابزار", 
  "building-garden" = "ساختمان و حیاط",

  "vehicles-services" = "موتور و ماشین", 
  "catering-services" = "پذیرایی/مراسم", 
  "technology-services" = "خدمات رایانه‌ای و موبایل", 
  "financial-services" = "مالی/حسابداری/بیمه", 
  "transport-logistic-services" = "حمل و نقل", 
  "craft-skill-services" = "پیشه و مهارت", 
  "beauty-services" = "آرایشگری و زیبایی", 
  "entertaining-services" = "سرگرمی", 
  "cleaning-services" = "نظافت", 
  "gardening-services" = "باغبانی و درختکاری", 
  "teaching-services" = "آموزشی",

  "apparel" = "کیف، کفش و لباس", 
  "accessories" = "تزئینی", 
  "beauty-and-personal-care" = "آرایشی، بهداشتی و درمانی", 
  "child-apparel" = "کفش و لباس بچه", 
  "child-products" = "وسایل بچه و اسباب بازی", 
  "stationery" = "لوازم التحریر",

  "ticket" = "بلیط", 
  "tours" = "تور و چارتر", 
  "publication" = "کتاب و مجله", 
  "bike-skate-scooter" = "دوچرخه/اسکیت/اسکوتر", 
  "pets-animals" = "حیوانات", 
  "collecting" = "کلکسیون و سرگرمی", 
  "musical-instruments" = "آلات موسیقی", 
  "sport-entertainment" = "ورزش و تناسب اندام", 
  "game-and-toys" = "اسباب بازی",

  "event" = "رویداد", 
  "voluntary" = "داوطلبانه", 
  "missing" = "گم شده‌ها",

  "business-equipment" = "تجهیزات و ماشین‌آلات", 
  "wholesale" = "عمده فروشی",

  "administrative-jobs" = "اداری و مدیریت", 
  "janitorial-jobs" = "سرایداری و نظافت", 
  "architect-jobs" = "معماری، عمران و ساختمانی", 
  "service-jobs" = "خدمات فروشگاه و رستوران", 
  "it-computer-jobs" = "رایانه و فناوری اطلاعات", 
  "finance-legal-jobs" = "مالی و حسابداری و حقوقی", 
  "marketing-jobs" = "بازاریابی و فروش", 
  "technical-jobs" = "صنعتی و فنی و مهندسی", 
  "teaching-jobs" = "آموزشی", 
  "transport-delivery-jobs" = "حمل و نقل", 
  "health-beauty-jobs" = "درمانی و زیبایی و بهداشتی", 
  "art-media-jobs" = "هنری و رسانه"
}

export enum Level3PersianTexts {
  "buy-apartment" = "آپارتمان",
  "buy-villa" = "خانه و ویلا",
  "buy-old-house" = "زمین و کلنگی",

  "rent-apartment" = "آپارتمان",
  "rent-villa" = "خانه و ویلا",

  "buy-office" = "دفتر کار، اتاق اداری و مطب",
  "buy-store" = "مغازه و غرفه",
  "buy-industrial-agricultural-property" = "صنعتی، کشاورزی و تجاری",

  "rent-office" = "دفتر کار، اتاق اداری و مطب",
  "rent-store" = "مغازه و غرفه",
  "rent-industrial-agricultural-property" = "صنعتی، کشاورزی و تجاری",

  "rent-temporary-suite-apartment" = "آپارتمان و سوئیت",
  "rent-temporary-villa" = "ویلا و باغ",
  "rent-temporary-workspace" = "دفتر کار و فضای آموزشی",

  "contribution-construction" = "مشارکت در ساخت",
  "pre-sell-home" = "پیش فروش",

  "car" = "سواری",
  "classic-car" = "کلاسیک",
  "rental-car" = "اجاره‌ای",
  "heavy-car" = "سنگین",

  "mobile-phones" = "گوشی موبایل",
  "tablet" = "تبلت",
  "mobile-tablet-accessories" = "لوازم جانبی موبایل و تبلت",
  "sim-card" = "سیم کارت",

  "laptop-notebook-macbook" = "رایانه همراه",
  "desktop-computers" = "رایانه رومیزی",
  "computer-parts-accessories" = "قطعات و لوازم جانبی",
  "modem-network-equipments" = "مودم و تجهیزات شبکه",
  "printer-scanner-fax" = "پرینتر/اسکنر/کپی/فکس",

  "film-music" = "فیلم و موسیقی",
  "camera" = "دوربین عکاسی و فیلمبرداری",
  "headphone-speaker-microphone" = "پخش کننده همراه",
  "home-audio-system" = "سیستم صوتی خانگی",
  "dvd-bluray-player" = "ویدئو و پخش کننده DVD",
  "tv-projector" = "تلویزیون و پروژکتور",
  "cctv" = "دوربین مداربسته",

  "art-decorative" = "تزئینی و آثار هنری",
  "lighting" = "لوازم روشنایی",
  "table-desk-chair" = "میز و صندلی",
  "carpets" = "فرش و گلیم",
  "closet-storage" = "کمد و بوفه",
  "curtain-tablecloth" = "پرده و رومیزی",
  "bedroom-accessories" = "تخت و اتاق خواب",
  "sofa-armchair" = "مبلمان و صندلی راحتی",
  "tv-stand" = "میز تلویزیون و وسایل سیستم پخش",

  "dishwasher" = "ماشین ظرفشویی", 
  "refrigerator-freezer" = "یخچال و فریزر", 
  "kitchen-accessories" = "وسایل آشپزی و غذاخوری", 
  "microwave-stove" = "مایکروویو و گاز", 
  "washing-machine" = "ماشین لباسشویی و خشک کننده",
        
  "vacuum-cleaner-sewing-machine-iron" = "نظافت و خیاطی و اتو",
  "power-and-hand-tools" = "تعمیرات",
  
  "bathroom-fixtures" = "سرویس بهداشتی و سونا",
  "heating-cooling-systems" = "سیستم گرمایشی سرمایشی و گاز",
  "kitchen-equipments" = "آشپزخانه",
  "patio-balcony" = "حیاط و ایوان",
  "garden-tools" = "ابزار باغبانی",    
       
  "domain-services" = "فروش دامنه و سایت",
  "website-services" = "میزبانی و طراحی سایت",
  "internet-services" = "خدمات پهنای باند اینترنت",
  "computer-services" = "خدمات نرم افزار و سخت افزار کامپیوتر",
  "mobile-services" = "تعمیرات نرم‌افزار و سخت‌افزار گوشی موبایل",
 
  "foreign-language" = "زبان خارجی",
  "educational-teaching" = "دروس مدرسه و دانشگاه",
  "software-teaching" = "نرم افزار",
  "art-teaching" = "هنری",
  "sports-teaching" = "ورزشی",
  "educational-consulting" = "مشاوره تحصیلی",

  "bag-shoes-belt" = "کیف/کفش/کمربند",
  "clothing" = "لباس",

  "watches" = "ساعت",
  "jewellery" = "جواهرات",
  "trinket" = "بدلیجات",

  "child-toys" = "اسباب بازی",
  "stroller" = "کالسکه و لوازم جانبی",
  "child-furniture" = "صندلی بچه",
  "child-stuff" = "اسباب و اثاث بچه",

  "concert-ticket" = "کنسرت",
  "theatre-cinema-ticket" = "تئاتر و سینما",
  "discount-gift-card" = "کارت هدیه و تخفیف",
  "match-sport-ticket" = "اماکن و مسابقات ورزشی",
  "sport-ticket" = "ورزشی",
  "travel-ticket" = "اتوبوس، مترو و قطار",

  "educational-book" = "آموزشی",
  "literary-book" = "ادبی",
  "historical-book" = "تاریخی",
  "religious-book" = "مذهبی",
  "magazine" = "مجلات",

  "cats" = "گربه",
  "rodents" = "موش و خرگوش",
  "reptiles" = "خزنده",
  "birds" = "پرنده",
  "fishes" = "ماهی",
  "pet-supplies" = "لوازم جانبی",
  "farm-animals" = "حیوانات مزرعه",
  "dogs" = "سگ",

  "stamp-coin-collecting" = "سکه، تمبر و اسکناس",
  "antique-objects" = "اشیای عتیقه",

  "guitars" = "گیتار، بیس و امپلیفایر",
  "wind-instrument" = "سازهای بادی",
  "organ-piano-accordion" = "پیانو/کیبورد/آکاردئون",
  "iranian-instruments" = "سنتی",
  "percussion-instruments" = "درام و پرکاشن",
  "violins" = "ویولن",

  "ball-sports" = "ورزش‌های توپی",
  "mountaineering-camping" = "کوهنوردی و کمپینگ",
  "water-sports" = "غواصی و ورزش‌های آبی",
  "fishing" = "ماهیگیری",
  "sport-equipment" = "تجهیزات ورزشی",
  "winter-sports" = "ورزش‌های زمستانی",
  "horse-riding" = "اسب و تجهیزات اسب سواری",

  "auction" = "حراج",
  "seminars-conference" = "گردهمایی و همایش",
  "events-sports" = "ورزشی",

  "education-research-partner" = "تحقیقاتی",
 
  "lost-animals" = "حیوانات",
  "lost-objects" = "اشیا",

  "store-equipment" = "فروشگاه و مغازه",
  "barber-shop-equipment" = "آرایشگاه و سالن‌های زیبایی",
  "office-equipment" = "دفتر کار",
  "industrial-equipment" = "صنعتی",
  "restaurant-equipment" = "کافی شاپ و رستوران",
  "medical-equipment" = "پزشکی",
}

const { "real-estate": realEstate, vehicles, "electronic-devices": electronicDevices, "home-and-kitchen": homeAndKitchen, services, "personal-goods": personalGoods, entertainment, "social-services": socialServices, businesses, jobs } = TopLevelPersianTexts

export const level3SubCategories = [
  { 
    route: "buy-residential",
    subcategories: 
      [
        { subcategoryRoute: "buy-apartment", subcategoryText: Level3PersianTexts["buy-apartment"] },
        { subcategoryRoute: "buy-villa", subcategoryText: Level3PersianTexts["buy-villa"] },
        { subcategoryRoute: "buy-old-house", subcategoryText: Level3PersianTexts["buy-old-house"] }
      ]
  },
  { 
    route: "rent-residential",
    subcategories: 
      [
        { subcategoryRoute: "rent-apartment", subcategoryText: Level3PersianTexts["rent-apartment"] },
        { subcategoryRoute: "rent-villa", subcategoryText: Level3PersianTexts["rent-villa"] },
      ]    
  },
  { 
    route: "buy-commercial-property",
    subcategories: 
      [
        { subcategoryRoute: "buy-office", subcategoryText: Level3PersianTexts["buy-office"] },
        { subcategoryRoute: "buy-store", subcategoryText: Level3PersianTexts["buy-store"] },
        { subcategoryRoute: "buy-industrial-agricultural-property", subcategoryText: Level3PersianTexts["buy-industrial-agricultural-property"] }
      ] 
  },
  { 
    route: "rent-commercial-property",
    subcategories: 
      [
        { subcategoryRoute: "rent-office", subcategoryText: Level3PersianTexts["rent-office"] },
        { subcategoryRoute: "rent-store", subcategoryText: Level3PersianTexts["rent-store"] },
        { subcategoryRoute: "rent-industrial-agricultural-property", subcategoryText: Level3PersianTexts["rent-industrial-agricultural-property"] }
      ]    
  },
  { 
    route: "rent-temporary",
    subcategories: 
      [
        { subcategoryRoute: "rent-temporary-suite-apartment", subcategoryText: Level3PersianTexts["rent-temporary-suite-apartment"] },
        { subcategoryRoute: "rent-temporary-villa", subcategoryText: Level3PersianTexts["rent-temporary-villa"] },
        { subcategoryRoute: "rent-temporary-workspace", subcategoryText: Level3PersianTexts["rent-temporary-workspace"] }
      ] 
  },
  { 
    route: "real-estate-services",
    subcategories: 
      [
        { subcategoryRoute: "contribution-construction", subcategoryText: Level3PersianTexts["contribution-construction"] },
        { subcategoryRoute: "pre-sell-home", subcategoryText: Level3PersianTexts["pre-sell-home"] },
      ]   
  },


  { 
    route: "auto",
    subcategories: 
      [
        { subcategoryRoute: "car", subcategoryText: Level3PersianTexts.car },
        { subcategoryRoute: "classic-car", subcategoryText: Level3PersianTexts["classic-car"] },
        { subcategoryRoute: "rental-car", subcategoryText: Level3PersianTexts["rental-car"] },
        { subcategoryRoute: "heavy-car", subcategoryText: Level3PersianTexts["heavy-car"] }
      ]
  },
  { 
    route: "car-accessories",
    subcategories: []
  },
  { 
    route: "motorcycles",
    subcategories: []
  },
  { 
    route: "boat",
    subcategories: []
  },


  { 
    route: "mobile-tablet",
    subcategories: 
      [
        { subcategoryRoute: "mobile-phones", subcategoryText: Level3PersianTexts["mobile-phones"] },
        { subcategoryRoute: "tablet", subcategoryText: Level3PersianTexts.tablet },
        { subcategoryRoute: "mobile-tablet-accessories", subcategoryText: Level3PersianTexts["mobile-tablet-accessories"] },
        { subcategoryRoute: "sim-card", subcategoryText: Level3PersianTexts["sim-card"] }
      ]
  },
  { 
    route: "computers",
    subcategories: 
      [
        { subcategoryRoute: "laptop-notebook-macbook", subcategoryText: Level3PersianTexts["laptop-notebook-macbook"] },
        { subcategoryRoute: "desktop-computers", subcategoryText: Level3PersianTexts["desktop-computers"] },
        { subcategoryRoute: "computer-parts-accessories", subcategoryText: Level3PersianTexts["computer-parts-accessories"] },
        { subcategoryRoute: "modem-network-equipments", subcategoryText: Level3PersianTexts["modem-network-equipments"] },
        { subcategoryRoute: "printer-scanner-fax", subcategoryText: Level3PersianTexts["printer-scanner-fax"] }
      ]
  },
  { 
    route: "game-consoles",
    subcategories: []
  },
  { 
    route: "video-audio-device",
    subcategories: 
      [
        { subcategoryRoute: "film-music", subcategoryText: Level3PersianTexts["film-music"] },
        { subcategoryRoute: "camera", subcategoryText: Level3PersianTexts.camera },
        { subcategoryRoute: "headphone-speaker-microphone", subcategoryText: Level3PersianTexts["headphone-speaker-microphone"] },
        { subcategoryRoute: "home-audio-system", subcategoryText: Level3PersianTexts["home-audio-system"] },
        { subcategoryRoute: "dvd-bluray-player", subcategoryText: Level3PersianTexts["dvd-bluray-player"] },
        { subcategoryRoute: "tv-projector", subcategoryText: Level3PersianTexts["tv-projector"] },
        { subcategoryRoute: "cctv", subcategoryText: Level3PersianTexts.cctv },
      ]
  },
  { 
    route: "telephone",
    subcategories: []
  },
  { 
    route: "home-decor-furniture",
    subcategories: 
      [
        { subcategoryRoute: "art-decorative", subcategoryText: Level3PersianTexts["art-decorative"] },
        { subcategoryRoute: "lighting", subcategoryText: Level3PersianTexts.lighting },
        { subcategoryRoute: "table-desk-chair", subcategoryText: Level3PersianTexts["table-desk-chair"] },
        { subcategoryRoute: "carpets", subcategoryText: Level3PersianTexts.carpets },
        { subcategoryRoute: "closet-storage", subcategoryText: Level3PersianTexts["closet-storage"] },
        { subcategoryRoute: "curtain-tablecloth", subcategoryText: Level3PersianTexts["curtain-tablecloth"] },
        { subcategoryRoute: "bedroom-accessories", subcategoryText: Level3PersianTexts["bedroom-accessories"] },
        { subcategoryRoute: "sofa-armchair", subcategoryText: Level3PersianTexts["sofa-armchair"] },
        { subcategoryRoute: "tv-stand", subcategoryText: Level3PersianTexts["tv-stand"] },
      ]
  },
  { 
    route: "kitchen-appliances",
    subcategories: 
      [
        { subcategoryRoute: "dishwasher", subcategoryText: Level3PersianTexts.dishwasher },
        { subcategoryRoute: "refrigerator-freezer", subcategoryText: Level3PersianTexts["refrigerator-freezer"] },
        { subcategoryRoute: "kitchen-accessories", subcategoryText: Level3PersianTexts["kitchen-accessories"] },
        { subcategoryRoute: "microwave-stove", subcategoryText: Level3PersianTexts["microwave-stove"] },
        { subcategoryRoute: "washing-machine", subcategoryText: Level3PersianTexts["washing-machine"] },
      ]
  },
  { 
    route: "home-appliances",
    subcategories: 
      [
        { subcategoryRoute: "vacuum-cleaner-sewing-machine-iron", subcategoryText: Level3PersianTexts["vacuum-cleaner-sewing-machine-iron"] },
        { subcategoryRoute: "power-and-hand-tools", subcategoryText: Level3PersianTexts["power-and-hand-tools"] },
      ]
  },
  { 
    route: "building-garden",
    subcategories: 
      [
        { subcategoryRoute: "bathroom-fixtures", subcategoryText: Level3PersianTexts["bathroom-fixtures"] },
        { subcategoryRoute: "heating-cooling-systems", subcategoryText: Level3PersianTexts["heating-cooling-systems"] },
        { subcategoryRoute: "kitchen-equipments", subcategoryText: Level3PersianTexts["kitchen-equipments"] },
        { subcategoryRoute: "patio-balcony", subcategoryText: Level3PersianTexts["patio-balcony"] },
        { subcategoryRoute: "garden-tools", subcategoryText: Level3PersianTexts["garden-tools"] },
      ]
  },


  { 
    route: "vehicles-services",
    subcategories: []
  },
  { 
    route: "catering-services",
    subcategories: []
  },
  { 
    route: "technology-services",
    subcategories: 
      [
        { subcategoryRoute: "domain-services", subcategoryText: Level3PersianTexts["domain-services"] },
        { subcategoryRoute: "website-services", subcategoryText: Level3PersianTexts["website-services"] },
        { subcategoryRoute: "internet-services", subcategoryText: Level3PersianTexts["internet-services"] },
        { subcategoryRoute: "computer-services", subcategoryText: Level3PersianTexts["computer-services"] },
        { subcategoryRoute: "mobile-services", subcategoryText: Level3PersianTexts["mobile-services"] },
      ]
  },
  { 
    route: "financial-services",
    subcategories: []
  },
  { 
    route: "transport-logistic-services",
    subcategories: []
  },
  { 
    route: "craft-skill-services",
    subcategories: []
  },
  { 
    route: "beauty-services",
    subcategories: []
  },
  { 
    route: "entertaining-services",
    subcategories: []
  },
  { 
    route: "cleaning-services",
    subcategories: []
  },
  { 
    route: "gardening-services",
    subcategories: []
  },
  { 
    route: "teaching-services",
    subcategories: 
      [
        { subcategoryRoute: "foreign-language", subcategoryText: Level3PersianTexts["foreign-language"] },
        { subcategoryRoute: "educational-teaching", subcategoryText: Level3PersianTexts["educational-teaching"] },
        { subcategoryRoute: "software-teaching", subcategoryText: Level3PersianTexts["software-teaching"] },
        { subcategoryRoute: "art-teaching", subcategoryText: Level3PersianTexts["art-teaching"] },
        { subcategoryRoute: "sports-teaching", subcategoryText: Level3PersianTexts["sports-teaching"] },
        { subcategoryRoute: "educational-consulting", subcategoryText: Level3PersianTexts["educational-consulting"] },
      ]
  },



  { 
    route: "apparel",
    subcategories: 
      [
        { subcategoryRoute: "bag-shoes-belt", subcategoryText: Level3PersianTexts["bag-shoes-belt"] },
        { subcategoryRoute: "clothing", subcategoryText: Level3PersianTexts.clothing },
      ]
  },
  { 
    route: "accessories",
    subcategories: 
      [
        { subcategoryRoute: "watches", subcategoryText: Level3PersianTexts.watches },
        { subcategoryRoute: "jewellery", subcategoryText: Level3PersianTexts.jewellery },
        { subcategoryRoute: "trinket", subcategoryText: Level3PersianTexts.trinket },
      ]
  },
  { 
    route: "beauty-and-personal-care",
    subcategories: []
  },
  { 
    route: "child-apparel",
    subcategories: []
  },
  { 
    route: "child-products",
    subcategories: 
      [
        { subcategoryRoute: "child-toys", subcategoryText: Level3PersianTexts["child-toys"] },
        { subcategoryRoute: "stroller", subcategoryText: Level3PersianTexts.stroller },
        { subcategoryRoute: "child-furniture", subcategoryText: Level3PersianTexts["child-furniture"] },
        { subcategoryRoute: "child-stuff", subcategoryText: Level3PersianTexts["child-stuff"] },
      ]
  },
  { 
    route: "stationery",
    subcategories: []
  },



  { 
    route: "ticket",
    subcategories: 
      [
        { subcategoryRoute: "concert-ticket", subcategoryText: Level3PersianTexts["concert-ticket"] },
        { subcategoryRoute: "theatre-cinema-ticket", subcategoryText: Level3PersianTexts["theatre-cinema-ticket"] },
        { subcategoryRoute: "discount-gift-card", subcategoryText: Level3PersianTexts["discount-gift-card"] },
        { subcategoryRoute: "match-sport-ticket", subcategoryText: Level3PersianTexts["match-sport-ticket"] },
        { subcategoryRoute: "sport-ticket", subcategoryText: Level3PersianTexts["sport-ticket"] },
        { subcategoryRoute: "travel-ticket", subcategoryText: Level3PersianTexts["travel-ticket"] },
      ]
  },
  { 
    route: "tours",
    subcategories: []
  },
  { 
    route: "publication",
    subcategories: 
      [
        { subcategoryRoute: "educational-book", subcategoryText: Level3PersianTexts["educational-book"] },
        { subcategoryRoute: "literary-book", subcategoryText: Level3PersianTexts["literary-book"] },
        { subcategoryRoute: "historical-book", subcategoryText: Level3PersianTexts["historical-book"] },
        { subcategoryRoute: "religious-book", subcategoryText: Level3PersianTexts["religious-book"] },
        { subcategoryRoute: "magazine", subcategoryText: Level3PersianTexts.magazine },
      ]
  },
  { 
    route: "bike-skate-scooter",
    subcategories: []
  },
  { 
    route: "pets-animals",
    subcategories: 
      [
        { subcategoryRoute: "cats", subcategoryText: Level3PersianTexts.cats },
        { subcategoryRoute: "rodents", subcategoryText: Level3PersianTexts.rodents },
        { subcategoryRoute: "reptiles", subcategoryText: Level3PersianTexts.reptiles },
        { subcategoryRoute: "birds", subcategoryText: Level3PersianTexts.birds },
        { subcategoryRoute: "fishes", subcategoryText: Level3PersianTexts.fishes },
        { subcategoryRoute: "pet-supplies", subcategoryText: Level3PersianTexts["pet-supplies"] },
        { subcategoryRoute: "farm-animals", subcategoryText: Level3PersianTexts["farm-animals"] },
        { subcategoryRoute: "dogs", subcategoryText: Level3PersianTexts.dogs },
      ]
  },
  { 
    route: "collecting",
    subcategories: 
      [
        { subcategoryRoute: "stamp-coin-collecting", subcategoryText: Level3PersianTexts["stamp-coin-collecting"] },
        { subcategoryRoute: "antique-objects", subcategoryText: Level3PersianTexts["antique-objects"] },
      ]
  },
  { 
    route: "musical-instruments",
    subcategories: 
      [
        { subcategoryRoute: "guitars", subcategoryText: Level3PersianTexts.guitars },
        { subcategoryRoute: "wind-instrument", subcategoryText: Level3PersianTexts["wind-instrument"] },
        { subcategoryRoute: "organ-piano-accordion", subcategoryText: Level3PersianTexts["organ-piano-accordion"] },
        { subcategoryRoute: "iranian-instruments", subcategoryText: Level3PersianTexts["iranian-instruments"] },
        { subcategoryRoute: "percussion-instruments", subcategoryText: Level3PersianTexts["percussion-instruments"] },
        { subcategoryRoute: "violins", subcategoryText: Level3PersianTexts.violins },
      ]
  },
  { 
    route: "sport-entertainment",
    subcategories: 
      [
        { subcategoryRoute: "ball-sports", subcategoryText: Level3PersianTexts["ball-sports"] },
        { subcategoryRoute: "mountaineering-camping", subcategoryText: Level3PersianTexts["mountaineering-camping"] },
        { subcategoryRoute: "water-sports", subcategoryText: Level3PersianTexts["water-sports"] },
        { subcategoryRoute: "fishing", subcategoryText: Level3PersianTexts.fishing },
        { subcategoryRoute: "sport-equipment", subcategoryText: Level3PersianTexts["sport-equipment"] },
        { subcategoryRoute: "winter-sports", subcategoryText: Level3PersianTexts["winter-sports"] },
        { subcategoryRoute: "horse-riding", subcategoryText: Level3PersianTexts["horse-riding"] },
      ]
  },
  { 
    route: "game-and-toys",
    subcategories: []
  },


  { 
    route: "event",
    subcategories: 
      [
        { subcategoryRoute: "auction", subcategoryText: Level3PersianTexts.auction },
        { subcategoryRoute: "seminars-conference", subcategoryText: Level3PersianTexts["seminars-conference"] },
        { subcategoryRoute: "events-sports", subcategoryText: Level3PersianTexts["events-sports"] },
      ]
  },
  { 
    route: "voluntary",
    subcategories: 
      [
        { subcategoryRoute: "education-research-partner", subcategoryText: Level3PersianTexts["education-research-partner"] },
      ]
  },
  { 
    route: "missing",
    subcategories: 
      [
        { subcategoryRoute: "lost-animals", subcategoryText: Level3PersianTexts["lost-animals"] },
        { subcategoryRoute: "lost-objects", subcategoryText: Level3PersianTexts["lost-objects"] },
      ]
  },



  { 
    route: "business-equipment",
    subcategories: 
      [
        { subcategoryRoute: "store-equipment", subcategoryText: Level3PersianTexts["store-equipment"] },
        { subcategoryRoute: "barber-shop-equipment", subcategoryText: Level3PersianTexts["barber-shop-equipment"] },
        { subcategoryRoute: "office-equipment", subcategoryText: Level3PersianTexts["office-equipment"] },
        { subcategoryRoute: "industrial-equipment", subcategoryText: Level3PersianTexts["industrial-equipment"] },
        { subcategoryRoute: "restaurant-equipment", subcategoryText: Level3PersianTexts["restaurant-equipment"] },
        { subcategoryRoute: "medical-equipment", subcategoryText: Level3PersianTexts["medical-equipment"] },
      ]
  },
  { 
    route: "wholesale",
    subcategories: []
  },



  { 
    route: "administrative-jobs",
    subcategories: []
  },
  { 
    route: "janitorial-jobs",
    subcategories: []
  },
  { 
    route: "architect-jobs",
    subcategories: []
  },
  { 
    route: "service-jobs",
    subcategories: []
  },
  { 
    route: "it-computer-jobs",
    subcategories: []
  },
  { 
    route: "finance-legal-jobs",
    subcategories: []
  },
  { 
    route: "marketing-jobs",
    subcategories: []
  },
  { 
    route: "technical-jobs",
    subcategories: []
  },
  { 
    route: "teaching-jobs",
    subcategories: []
  },
  { 
    route: "transport-delivery-jobs",
    subcategories: []
  },
  { 
    route: "health-beauty-jobs",
    subcategories: []
  },
  { 
    route: "art-media-jobs",
    subcategories: []
  },
]

export const level2SubCategories = [
  { route: "real-estate", 
    subCategories: 
      [
        { subCategoryRoute: "buy-residential", subCategoryText: level2PersianTexts["buy-residential"], level3Subcategories: level3SubCategories[0].subcategories },
        { subCategoryRoute: "rent-residential", subCategoryText: level2PersianTexts["rent-residential"], level3Subcategories: level3SubCategories[1].subcategories },
        { subCategoryRoute: "buy-commercial-property", subCategoryText: level2PersianTexts["buy-commercial-property"], level3Subcategories: level3SubCategories[2].subcategories },
        { subCategoryRoute: "rent-commercial-property", subCategoryText: level2PersianTexts["rent-commercial-property"], level3Subcategories: level3SubCategories[3].subcategories },
        { subCategoryRoute: "rent-temporary", subCategoryText: level2PersianTexts["rent-temporary"], level3Subcategories: level3SubCategories[4].subcategories },
        { subCategoryRoute: "real-estate-services", subCategoryText: level2PersianTexts["real-estate-services"], level3Subcategories: level3SubCategories[5].subcategories },
      ]
  },
  {
    route: "vehicles",
    subCategories: 
      [
        { subCategoryRoute: "auto", subCategoryText: level2PersianTexts.auto, level3Subcategories: level3SubCategories[6].subcategories },
        { subCategoryRoute: "car-accessories", subCategoryText: level2PersianTexts["car-accessories"], level3Subcategories: level3SubCategories[7].subcategories },
        { subCategoryRoute: "motorcycles", subCategoryText: level2PersianTexts.motorcycles, level3Subcategories: level3SubCategories[8].subcategories },
        { subCategoryRoute: "boat", subCategoryText: level2PersianTexts.boat, level3Subcategories: level3SubCategories[9].subcategories },
      ]
  },
  {
    route: "electronic-devices",
    subCategories: 
    [
      { subCategoryRoute: "mobile-tablet", subCategoryText: level2PersianTexts["mobile-tablet"], level3Subcategories: level3SubCategories[10].subcategories },
      { subCategoryRoute: "computers", subCategoryText: level2PersianTexts.computers, level3Subcategories: level3SubCategories[11].subcategories },
      { subCategoryRoute: "game-consoles", subCategoryText: level2PersianTexts["game-consoles"], level3Subcategories: level3SubCategories[12].subcategories },
      { subCategoryRoute: "video-audio-device", subCategoryText: level2PersianTexts["video-audio-device"], level3Subcategories: level3SubCategories[13].subcategories },
      { subCategoryRoute: "telephone", subCategoryText: level2PersianTexts.telephone, level3Subcategories: level3SubCategories[14].subcategories },
    ]
  },
  {
    route: "home-and-kitchen",
    subCategories: 
    [
      { subCategoryRoute: "home-decor-furniture", subCategoryText: level2PersianTexts["home-decor-furniture"], level3Subcategories: level3SubCategories[15].subcategories },
      { subCategoryRoute: "kitchen-appliances", subCategoryText: level2PersianTexts["kitchen-appliances"], level3Subcategories: level3SubCategories[16].subcategories },
      { subCategoryRoute: "home-appliances", subCategoryText: level2PersianTexts["home-appliances"], level3Subcategories: level3SubCategories[17].subcategories },
      { subCategoryRoute: "building-garden", subCategoryText: level2PersianTexts["building-garden"], level3Subcategories: level3SubCategories[18].subcategories },
    ]
  },
  {
    route: "services",
    subCategories: 
    [
      { subCategoryRoute: "vehicles-services", subCategoryText: level2PersianTexts["vehicles-services"], level3Subcategories: level3SubCategories[19].subcategories },
      { subCategoryRoute: "catering-services", subCategoryText: level2PersianTexts["catering-services"], level3Subcategories: level3SubCategories[20].subcategories },
      { subCategoryRoute: "technology-services", subCategoryText: level2PersianTexts["technology-services"], level3Subcategories: level3SubCategories[21].subcategories },
      { subCategoryRoute: "financial-services", subCategoryText: level2PersianTexts["financial-services"], level3Subcategories: level3SubCategories[22].subcategories },
      { subCategoryRoute: "transport-logistic-services", subCategoryText: level2PersianTexts["transport-logistic-services"], level3Subcategories: level3SubCategories[23].subcategories },
      { subCategoryRoute: "craft-skill-services", subCategoryText: level2PersianTexts["craft-skill-services"], level3Subcategories: level3SubCategories[24].subcategories },
      { subCategoryRoute: "beauty-services", subCategoryText: level2PersianTexts["beauty-services"], level3Subcategories: level3SubCategories[25].subcategories },
      { subCategoryRoute: "entertaining-services", subCategoryText: level2PersianTexts["entertaining-services"], level3Subcategories: level3SubCategories[26].subcategories },
      { subCategoryRoute: "cleaning-services", subCategoryText: level2PersianTexts["cleaning-services"], level3Subcategories: level3SubCategories[27].subcategories },
      { subCategoryRoute: "gardening-services", subCategoryText: level2PersianTexts["gardening-services"], level3Subcategories: level3SubCategories[28].subcategories },
      { subCategoryRoute: "teaching-services", subCategoryText: level2PersianTexts["teaching-services"], level3Subcategories: level3SubCategories[29].subcategories },
    ]
  },
  {
    route: "personal-goods",
    subCategories: 
    [
      { subCategoryRoute: "apparel", subCategoryText: level2PersianTexts.apparel, level3Subcategories: level3SubCategories[30].subcategories },
      { subCategoryRoute: "accessories", subCategoryText: level2PersianTexts.accessories, level3Subcategories: level3SubCategories[31].subcategories },
      { subCategoryRoute: "beauty-and-personal-care", subCategoryText: level2PersianTexts["beauty-and-personal-care"], level3Subcategories: level3SubCategories[32].subcategories },
      { subCategoryRoute: "child-apparel", subCategoryText: level2PersianTexts["child-apparel"], level3Subcategories: level3SubCategories[33].subcategories },
      { subCategoryRoute: "child-products", subCategoryText: level2PersianTexts["child-products"], level3Subcategories: level3SubCategories[34].subcategories },
      { subCategoryRoute: "stationery", subCategoryText: level2PersianTexts.stationery, level3Subcategories: level3SubCategories[35].subcategories },
    ]
  },
  {
    route: "entertainment",
    subCategories: 
    [
      { subCategoryRoute: "ticket", subCategoryText: level2PersianTexts.ticket, level3Subcategories: level3SubCategories[36].subcategories },
      { subCategoryRoute: "tours", subCategoryText: level2PersianTexts.tours, level3Subcategories: level3SubCategories[37].subcategories },
      { subCategoryRoute: "publication", subCategoryText: level2PersianTexts.publication, level3Subcategories: level3SubCategories[38].subcategories },
      { subCategoryRoute: "bike-skate-scooter", subCategoryText: level2PersianTexts["bike-skate-scooter"], level3Subcategories: level3SubCategories[39].subcategories },
      { subCategoryRoute: "pets-animals", subCategoryText: level2PersianTexts["pets-animals"], level3Subcategories: level3SubCategories[40].subcategories },
      { subCategoryRoute: "collecting", subCategoryText: level2PersianTexts.collecting },
      { subCategoryRoute: "musical-instruments", subCategoryText: level2PersianTexts["musical-instruments"], level3Subcategories: level3SubCategories[41].subcategories },
      { subCategoryRoute: "sport-entertainment", subCategoryText: level2PersianTexts["sport-entertainment"], level3Subcategories: level3SubCategories[42].subcategories },
      { subCategoryRoute: "game-and-toys", subCategoryText: level2PersianTexts["game-and-toys"], level3Subcategories: level3SubCategories[43].subcategories },
    ]
  },
  {
    route: "social-services",
    subCategories:
      [
        { subCategoryRoute: "event", subCategoryText: level2PersianTexts.event, level3Subcategories: level3SubCategories[44].subcategories },
        { subCategoryRoute: "voluntary", subCategoryText: level2PersianTexts.voluntary, level3Subcategories: level3SubCategories[45].subcategories },
        { subCategoryRoute: "missing", subCategoryText: level2PersianTexts.missing, level3Subcategories: level3SubCategories[46].subcategories },
      ]
  },
  {
    route: "businesses",
    subCategories: 
      [
        { subCategoryRoute: "business-equipment", subCategoryText: level2PersianTexts["business-equipment"], level3Subcategories: level3SubCategories[47].subcategories },
        { subCategoryRoute: "wholesale", subCategoryText: level2PersianTexts.wholesale, level3Subcategories: level3SubCategories[48].subcategories },
      ]
  },
  {
    route: "jobs",
    subCategories: 
      [
        { subCategoryRoute: "administrative-jobs", subCategoryText: level2PersianTexts["administrative-jobs"], level3Subcategories: level3SubCategories[49].subcategories },
        { subCategoryRoute: "janitorial-jobs", subCategoryText: level2PersianTexts["janitorial-jobs"], level3Subcategories: level3SubCategories[50].subcategories },
        { subCategoryRoute: "architect-jobs", subCategoryText: level2PersianTexts["architect-jobs"], level3Subcategories: level3SubCategories[51].subcategories },
        { subCategoryRoute: "service-jobs", subCategoryText: level2PersianTexts["service-jobs"], level3Subcategories: level3SubCategories[52].subcategories },
        { subCategoryRoute: "it-computer-jobs", subCategoryText: level2PersianTexts["it-computer-jobs"], level3Subcategories: level3SubCategories[53].subcategories },
        { subCategoryRoute: "finance-legal-jobs", subCategoryText: level2PersianTexts["finance-legal-jobs"], level3Subcategories: level3SubCategories[54].subcategories },
        { subCategoryRoute: "marketing-jobs", subCategoryText: level2PersianTexts["marketing-jobs"], level3Subcategories: level3SubCategories[55].subcategories },
        { subCategoryRoute: "technical-jobs", subCategoryText: level2PersianTexts["technical-jobs"], level3Subcategories: level3SubCategories[56].subcategories },
        { subCategoryRoute: "teaching-jobs", subCategoryText: level2PersianTexts["teaching-jobs"], level3Subcategories: level3SubCategories[57].subcategories },
        { subCategoryRoute: "transport-delivery-jobs", subCategoryText: level2PersianTexts["transport-delivery-jobs"], level3Subcategories: level3SubCategories[58].subcategories },
        { subCategoryRoute: "health-beauty-jobs", subCategoryText: level2PersianTexts["health-beauty-jobs"], level3Subcategories: level3SubCategories[59].subcategories },
        { subCategoryRoute: "art-media-jobs", subCategoryText: level2PersianTexts["art-media-jobs"], level3Subcategories: level3SubCategories[60].subcategories },
      ]
  },
]

export const topLevelRoutesTitlesIcons = [
  { 
    route: "real-estate", text: realEstate, icon: HouseOutlined,
    subCategories: 
    [
      { subCategoryRoute: "buy-residential", subCategoryText: level2PersianTexts["buy-residential"], level2SubCategories: level3SubCategories[0].subcategories },
      { subCategoryRoute: "rent-residential", subCategoryText: level2PersianTexts["rent-residential"], level2SubCategories: level3SubCategories[1].subcategories },
      { subCategoryRoute: "buy-commercial-property", subCategoryText: level2PersianTexts["buy-commercial-property"], level2SubCategories: level3SubCategories[2].subcategories },
      { subCategoryRoute: "rent-commercial-property", subCategoryText: level2PersianTexts["rent-commercial-property"], level2SubCategories: level3SubCategories[3].subcategories },
      { subCategoryRoute: "rent-temporary", subCategoryText: level2PersianTexts["rent-temporary"], level2SubCategories: level3SubCategories[4].subcategories },
      { subCategoryRoute: "real-estate-services", subCategoryText: level2PersianTexts["real-estate-services"], level2SubCategories: level3SubCategories[5].subcategories },
    ]  
  },
  { route: "vehicles", text: vehicles, icon: Car,
  subCategories: 
  [
    { subCategoryRoute: "auto", subCategoryText: level2PersianTexts.auto, level2SubCategories: level3SubCategories[6].subcategories },
    { subCategoryRoute: "car-accessories", subCategoryText: level2PersianTexts["car-accessories"], level2SubCategories: level3SubCategories[7].subcategories },
    { subCategoryRoute: "motorcycles", subCategoryText: level2PersianTexts.motorcycles, level2SubCategories: level3SubCategories[8].subcategories },
    { subCategoryRoute: "boat", subCategoryText: level2PersianTexts.boat, level2SubCategories: level3SubCategories[9].subcategories },
  ]  },
  { route: "electronic-devices", text: electronicDevices, icon: SmartPhone,
  subCategories: 
  [
    { subCategoryRoute: "mobile-tablet", subCategoryText: level2PersianTexts["mobile-tablet"], level2SubCategories: level3SubCategories[10].subcategories },
    { subCategoryRoute: "computers", subCategoryText: level2PersianTexts.computers, level2SubCategories: level3SubCategories[11].subcategories },
    { subCategoryRoute: "game-consoles", subCategoryText: level2PersianTexts["game-consoles"], level2SubCategories: level3SubCategories[12].subcategories },
    { subCategoryRoute: "video-audio-device", subCategoryText: level2PersianTexts["video-audio-device"], level2SubCategories: level3SubCategories[13].subcategories },
    { subCategoryRoute: "telephone", subCategoryText: level2PersianTexts.telephone, level2SubCategories: level3SubCategories[14].subcategories },
  ]  },
  { route: "home-and-kitchen", text: homeAndKitchen, icon: Furniture,
  subCategories: 
  [
    { subCategoryRoute: "home-decor-furniture", subCategoryText: level2PersianTexts["home-decor-furniture"], level2SubCategories: level3SubCategories[15].subcategories },
    { subCategoryRoute: "kitchen-appliances", subCategoryText: level2PersianTexts["kitchen-appliances"], level2SubCategories: level3SubCategories[16].subcategories },
    { subCategoryRoute: "home-appliances", subCategoryText: level2PersianTexts["home-appliances"], level2SubCategories: level3SubCategories[17].subcategories },
    { subCategoryRoute: "building-garden", subCategoryText: level2PersianTexts["building-garden"], level2SubCategories: level3SubCategories[18].subcategories },
  ]  },
  { route: "services", text: services, icon: Build,
  subCategories: 
  [
    { subCategoryRoute: "vehicles-services", subCategoryText: level2PersianTexts["vehicles-services"], level2SubCategories: level3SubCategories[19].subcategories },
    { subCategoryRoute: "catering-services", subCategoryText: level2PersianTexts["catering-services"], level2SubCategories: level3SubCategories[20].subcategories },
    { subCategoryRoute: "technology-services", subCategoryText: level2PersianTexts["technology-services"], level2SubCategories: level3SubCategories[21].subcategories },
    { subCategoryRoute: "financial-services", subCategoryText: level2PersianTexts["financial-services"], level2SubCategories: level3SubCategories[22].subcategories },
    { subCategoryRoute: "transport-logistic-services", subCategoryText: level2PersianTexts["transport-logistic-services"], level2SubCategories: level3SubCategories[23].subcategories },
    { subCategoryRoute: "craft-skill-services", subCategoryText: level2PersianTexts["craft-skill-services"], level2SubCategories: level3SubCategories[24].subcategories },
    { subCategoryRoute: "beauty-services", subCategoryText: level2PersianTexts["beauty-services"], level2SubCategories: level3SubCategories[25].subcategories },
    { subCategoryRoute: "entertaining-services", subCategoryText: level2PersianTexts["entertaining-services"], level2SubCategories: level3SubCategories[26].subcategories },
    { subCategoryRoute: "cleaning-services", subCategoryText: level2PersianTexts["cleaning-services"], level2SubCategories: level3SubCategories[27].subcategories },
    { subCategoryRoute: "gardening-services", subCategoryText: level2PersianTexts["gardening-services"], level2SubCategories: level3SubCategories[28].subcategories },
    { subCategoryRoute: "teaching-services", subCategoryText: level2PersianTexts["teaching-services"], level2SubCategories: level3SubCategories[29].subcategories },
  ]  },
  { route: "personal-goods", text: personalGoods, icon: Watch,
  subCategories: 
  [
    { subCategoryRoute: "apparel", subCategoryText: level2PersianTexts.apparel, level2SubCategories: level3SubCategories[30].subcategories },
    { subCategoryRoute: "accessories", subCategoryText: level2PersianTexts.accessories, level2SubCategories: level3SubCategories[31].subcategories },
    { subCategoryRoute: "beauty-and-personal-care", subCategoryText: level2PersianTexts["beauty-and-personal-care"], level2SubCategories: level3SubCategories[32].subcategories },
    { subCategoryRoute: "child-apparel", subCategoryText: level2PersianTexts["child-apparel"], level2SubCategories: level3SubCategories[33].subcategories },
    { subCategoryRoute: "child-products", subCategoryText: level2PersianTexts["child-products"], level2SubCategories: level3SubCategories[34].subcategories },
    { subCategoryRoute: "stationery", subCategoryText: level2PersianTexts.stationery, level2SubCategories: level3SubCategories[35].subcategories },
  ]  },
  { route: "entertainment", text: entertainment, icon: Dice,
  subCategories: 
  [
    { subCategoryRoute: "ticket", subCategoryText: level2PersianTexts.ticket, level2SubCategories: level3SubCategories[36].subcategories },
    { subCategoryRoute: "tours", subCategoryText: level2PersianTexts.tours, level2SubCategories: level3SubCategories[37].subcategories },
    { subCategoryRoute: "publication", subCategoryText: level2PersianTexts.publication, level2SubCategories: level3SubCategories[38].subcategories },
    { subCategoryRoute: "bike-skate-scooter", subCategoryText: level2PersianTexts["bike-skate-scooter"], level2SubCategories: level3SubCategories[39].subcategories },
    { subCategoryRoute: "pets-animals", subCategoryText: level2PersianTexts["pets-animals"], level2SubCategories: level3SubCategories[40].subcategories },
    { subCategoryRoute: "collecting", subCategoryText: level2PersianTexts.collecting, level2SubCategories: level3SubCategories[41].subcategories },
    { subCategoryRoute: "musical-instruments", subCategoryText: level2PersianTexts["musical-instruments"], level2SubCategories: level3SubCategories[42].subcategories },
    { subCategoryRoute: "sport-entertainment", subCategoryText: level2PersianTexts["sport-entertainment"], level2SubCategories: level3SubCategories[43].subcategories },
    { subCategoryRoute: "game-and-toys", subCategoryText: level2PersianTexts["game-and-toys"], level2SubCategories: level3SubCategories[44].subcategories },
  ]  },
  { route: "social-services", text: socialServices, icon: People,
  subCategories:
  [
    { subCategoryRoute: "event", subCategoryText: level2PersianTexts.event, level2SubCategories: level3SubCategories[45].subcategories },
    { subCategoryRoute: "voluntary", subCategoryText: level2PersianTexts.voluntary, level2SubCategories: level3SubCategories[46].subcategories },
    { subCategoryRoute: "missing", subCategoryText: level2PersianTexts.missing, level2SubCategories: level3SubCategories[47].subcategories },
  ]  },
  { route: "businesses", text: businesses, icon: Work,
  subCategories: 
  [
    { subCategoryRoute: "business-equipment", subCategoryText: level2PersianTexts["business-equipment"], level2SubCategories: level3SubCategories[48].subcategories },
    { subCategoryRoute: "wholesale", subCategoryText: level2PersianTexts.wholesale, level2SubCategories: level3SubCategories[49].subcategories },
  ]  },
  { route: "jobs", text: jobs, icon: Business,
  subCategories: 
  [
    { subCategoryRoute: "administrative-jobs", subCategoryText: level2PersianTexts["administrative-jobs"], level2SubCategories: level3SubCategories[50].subcategories },
    { subCategoryRoute: "janitorial-jobs", subCategoryText: level2PersianTexts["janitorial-jobs"], level2SubCategories: level3SubCategories[51].subcategories },
    { subCategoryRoute: "architect-jobs", subCategoryText: level2PersianTexts["architect-jobs"], level2SubCategories: level3SubCategories[52].subcategories },
    { subCategoryRoute: "service-jobs", subCategoryText: level2PersianTexts["service-jobs"], level2SubCategories: level3SubCategories[53].subcategories },
    { subCategoryRoute: "it-computer-jobs", subCategoryText: level2PersianTexts["it-computer-jobs"], level2SubCategories: level3SubCategories[54].subcategories },
    { subCategoryRoute: "finance-legal-jobs", subCategoryText: level2PersianTexts["finance-legal-jobs"], level2SubCategories: level3SubCategories[55].subcategories },
    { subCategoryRoute: "marketing-jobs", subCategoryText: level2PersianTexts["marketing-jobs"], level2SubCategories: level3SubCategories[56].subcategories },
    { subCategoryRoute: "technical-jobs", subCategoryText: level2PersianTexts["technical-jobs"], level2SubCategories: level3SubCategories[57].subcategories },
    { subCategoryRoute: "teaching-jobs", subCategoryText: level2PersianTexts["teaching-jobs"], level2SubCategories: level3SubCategories[58].subcategories },
    { subCategoryRoute: "transport-delivery-jobs", subCategoryText: level2PersianTexts["transport-delivery-jobs"], level2SubCategories: level3SubCategories[59].subcategories },
    { subCategoryRoute: "health-beauty-jobs", subCategoryText: level2PersianTexts["health-beauty-jobs"], level2SubCategories: level3SubCategories[60].subcategories },
    { subCategoryRoute: "art-media-jobs", subCategoryText: level2PersianTexts["art-media-jobs"], level2SubCategories: level3SubCategories[61].subcategories },
  ]  },
]





// export const level2SubCategories = [
//   { route: "real-estate", 
//     subCategories: 
//       {
//         buyResidential: { subCategoryRoute: "buy-residential", subCategoryText: level2PersianTexts["buy-residential"] },
//         rentResidential: { subCategoryRoute: "rent-residential", subCategoryText: level2PersianTexts["rent-residential"] },
//         buyCommercialProperty: { subCategoryRoute: "buy-commercial-property", subCategoryText: level2PersianTexts["buy-commercial-property"] },
//         rentCommercialProperty: { subCategoryRoute: "rent-commercial-property", subCategoryText: level2PersianTexts["rent-commercial-property"] },
//         rentTemporary: { subCategoryRoute: "rent-temporary", subCategoryText: level2PersianTexts["rent-temporary"] },
//         realEstateServices: { subCategoryRoute: "real-estate-services", subCategoryText: level2PersianTexts["real-estate-services"] },
//       }
//   },
//   {
//     route: "vehicles",
//     subCategories: 
//       {
//         auto: { subCategoryRoute: "auto", subCategoryText: level2PersianTexts.auto },
//         carAccessories: { subCategoryRoute: "car-accessories", subCategoryText: level2PersianTexts["car-accessories"] },
//         motorcycles: { subCategoryRoute: "motorcycles", subCategoryText: level2PersianTexts.motorcycles },
//         boat: { subCategoryRoute: "boat", subCategoryText: level2PersianTexts.boat },
//       }
//   },
//   {
//     route: "electronic-devices",
//     subCategories: 
//     {
//       mobileTablet: { subCategoryRoute: "mobile-tablet", subCategoryText: level2PersianTexts["mobile-tablet"] },
//       computers: { subCategoryRoute: "computers", subCategoryText: level2PersianTexts.computers },
//       gameConsoles: { subCategoryRoute: "game-consoles", subCategoryText: level2PersianTexts["game-consoles"] },
//       videoAudioDevice: { subCategoryRoute: "video-audio-device", subCategoryText: level2PersianTexts["video-audio-device"] },
//       telephone: { subCategoryRoute: "telephone", subCategoryText: level2PersianTexts.telephone },
//     }
//   },
//   {
//     route: "home-and-kitchen",
//     subCategories: 
//     {
//       homeDecorFurniture: { subCategoryRoute: "home-decor-furniture", subCategoryText: level2PersianTexts["home-decor-furniture"] },
//       kitchenAppliances: { subCategoryRoute: "kitchen-appliances", subCategoryText: level2PersianTexts["kitchen-appliances"] },
//       homeAppliances: { subCategoryRoute: "home-appliances", subCategoryText: level2PersianTexts["home-appliances"] },
//       buildingGarden: { subCategoryRoute: "building-garden", subCategoryText: level2PersianTexts["building-garden"] },
//     }
//   },
//   {
//     route: "services",
//     subCategories: 
//     {
//       vehiclesServices: { subCategoryRoute: "vehicles-services", subCategoryText: level2PersianTexts["vehicles-services"] },
//       cateringServices: { subCategoryRoute: "catering-services", subCategoryText: level2PersianTexts["catering-services"] },
//       technologyServices: { subCategoryRoute: "technology-services", subCategoryText: level2PersianTexts["technology-services"] },
//       financialServices: { subCategoryRoute: "financial-services", subCategoryText: level2PersianTexts["financial-services"] },
//       transportLogisticServices: { subCategoryRoute: "transport-logistic-services", subCategoryText: level2PersianTexts["transport-logistic-services"] },
//       craftSkillServices: { subCategoryRoute: "craft-skill-services", subCategoryText: level2PersianTexts["craft-skill-services"] },
//       beautyServices: { subCategoryRoute: "beauty-services", subCategoryText: level2PersianTexts["beauty-services"] },
//       entertainingServices: { subCategoryRoute: "entertaining-services", subCategoryText: level2PersianTexts["entertaining-services"] },
//       cleaningServices: { subCategoryRoute: "cleaning-services", subCategoryText: level2PersianTexts["cleaning-services"] },
//       gardeningServices: { subCategoryRoute: "gardening-services", subCategoryText: level2PersianTexts["gardening-services"] },
//       teachingServices: { subCategoryRoute: "teaching-services", subCategoryText: level2PersianTexts["teaching-services"] },
//     }
//   },
//   {
//     route: "personal-goods",
//     subCategories: 
//     {
//       apparel: { subCategoryRoute: "apparel", subCategoryText: level2PersianTexts.apparel },
//       accessories: { subCategoryRoute: "accessories", subCategoryText: level2PersianTexts.accessories },
//       beautyAndPersonalCare: { subCategoryRoute: "beauty-and-personal-care", subCategoryText: level2PersianTexts["beauty-and-personal-care"] },
//       childApparel: { subCategoryRoute: "child-apparel", subCategoryText: level2PersianTexts["child-apparel"] },
//       childProducts: { subCategoryRoute: "child-products", subCategoryText: level2PersianTexts["child-products"] },
//       stationery: { subCategoryRoute: "stationery", subCategoryText: level2PersianTexts.stationery },
//     }
//   },
//   {
//     route: "entertainment",
//     subCategories: 
//     {
//       ticket: { subCategoryRoute: "ticket", subCategoryText: level2PersianTexts.ticket },
//       tours: { subCategoryRoute: "tours", subCategoryText: level2PersianTexts.tours },
//       publication: { subCategoryRoute: "publication", subCategoryText: level2PersianTexts.publication },
//       bikeSkateScooter: { subCategoryRoute: "bike-skate-scooter", subCategoryText: level2PersianTexts["bike-skate-scooter"] },
//       petsAnimals: { subCategoryRoute: "pets-animals", subCategoryText: level2PersianTexts["pets-animals"] },
//       collecting: { subCategoryRoute: "collecting", subCategoryText: level2PersianTexts.collecting },
//       musicalInstruments: { subCategoryRoute: "musical-instruments", subCategoryText: level2PersianTexts["musical-instruments"] },
//       sportEntertainment: { subCategoryRoute: "sport-entertainment", subCategoryText: level2PersianTexts["sport-entertainment"] },
//       gameAndToys: { subCategoryRoute: "game-and-toys", subCategoryText: level2PersianTexts["game-and-toys"] },

//     }
//   },
//   {
//     route: "social-services",
//     subCategories:
//       {
//         event: { subCategoryRoute: "event", subCategoryText: level2PersianTexts.event },
//         voluntary: { subCategoryRoute: "voluntary", subCategoryText: level2PersianTexts.voluntary },
//         missing: { subCategoryRoute: "missing", subCategoryText: level2PersianTexts.missing },
//       }
//   },
//   {
//     route: "businesses",
//     subCategories: 
//       {
//         businessEquipment: { subCategoryRoute: "business-equipment", subCategoryText: level2PersianTexts["business-equipment"] },
//         wholesale: { subCategoryRoute: "wholesale", subCategoryText: level2PersianTexts.wholesale },
//       }
//   },
//   {
//     route: "jobs",
//     subCategories: 
//       {
//         administrativeJobs: { subCategoryRoute: "administrative-jobs", subCategoryText: level2PersianTexts["administrative-jobs"] },
//         janitorialJobs: { subCategoryRoute: "janitorial-jobs", subCategoryText: level2PersianTexts["janitorial-jobs"] },
//         architectJobs: { subCategoryRoute: "architect-jobs", subCategoryText: level2PersianTexts["architect-jobs"] },
//         serviceJobs: { subCategoryRoute: "service-jobs", subCategoryText: level2PersianTexts["service-jobs"] },
//         itComputerJobs: { subCategoryRoute: "it-computer-jobs", subCategoryText: level2PersianTexts["it-computer-jobs"] },
//         financeLegalJobs: { subCategoryRoute: "finance-legal-jobs", subCategoryText: level2PersianTexts["finance-legal-jobs"] },
//         marketingJobs: { subCategoryRoute: "marketing-jobs", subCategoryText: level2PersianTexts["marketing-jobs"] },
//         technicalJobs: { subCategoryRoute: "technical-jobs", subCategoryText: level2PersianTexts["technical-jobs"] },
//         teachingJobs: { subCategoryRoute: "teaching-jobs", subCategoryText: level2PersianTexts["teaching-jobs"] },
//         transportDeliveryJobs: { subCategoryRoute: "transport-delivery-jobs", subCategoryText: level2PersianTexts["transport-delivery-jobs"] },
//         healthBeautyJobs: { subCategoryRoute: "health-beauty-jobs", subCategoryText: level2PersianTexts["health-beauty-jobs"] },
//         artMediaJobs: { subCategoryRoute: "art-media-jobs", subCategoryText: level2PersianTexts["art-media-jobs"] },
//       }
//   },
// ]



