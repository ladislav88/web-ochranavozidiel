export interface EngineType {
  name: string;
  value: string;
}

export interface CarModel {
  name: string;
  value: string;
  engines?: EngineType[];
}

export interface CarBrand {
  name: string;
  value: string;
  models: CarModel[];
}

// Default engine types to use when specific model engines are not available
export const defaultEngineTypes: EngineType[] = [
  { name: "Benzín", value: "benzin" },
  { name: "Benzín hybrid", value: "benzin_hybrid" },
  { name: "Diesel", value: "diesel" },
  { name: "Elektrický pohon", value: "elektro" },
  { name: "Iné", value: "other" }
];

export const carBrands: CarBrand[] = [
  {
    name: "Abarth",
    value: "abarth",
    models: [
      { 
        name: "124 Spider", 
        value: "124_spider",
        engines: [
          { name: "1.4 MultiAir Turbo 170HP", value: "1.4_multiair_turbo_170hp" }
        ]
      },
      { 
        name: "500", 
        value: "500",
        engines: [
          { name: "1.4 T-Jet 145HP", value: "1.4_tjet_145hp" },
          { name: "1.4 T-Jet 165HP", value: "1.4_tjet_165hp" }
        ]
      },
      { 
        name: "595", 
        value: "595",
        engines: [
          { name: "1.4 T-Jet 145HP", value: "1.4_tjet_145hp" },
          { name: "1.4 T-Jet 165HP", value: "1.4_tjet_165hp" },
          { name: "1.4 T-Jet 180HP", value: "1.4_tjet_180hp" }
        ]
      },
      { 
        name: "695", 
        value: "695",
        engines: [
          { name: "1.4 T-Jet 180HP", value: "1.4_tjet_180hp" }
        ]
      },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Acura",
    value: "acura",
    models: [
      { name: "ILX", value: "ilx" },
      { name: "MDX", value: "mdx" },
      { name: "NSX", value: "nsx" },
      { name: "RDX", value: "rdx" },
      { name: "TLX", value: "tlx" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Alfa Romeo",
    value: "alfa_romeo",
    models: [
      { 
        name: "Giulia", 
        value: "giulia",
        engines: [
          { name: "2.0 Turbo 200HP", value: "2.0_turbo_200hp" },
          { name: "2.0 Turbo 280HP", value: "2.0_turbo_280hp" },
          { name: "2.9 V6 Biturbo 510HP", value: "2.9_v6_biturbo_510hp" },
          { name: "2.2 Diesel 160HP", value: "2.2_diesel_160hp" },
          { name: "2.2 Diesel 190HP", value: "2.2_diesel_190hp" },
          { name: "2.2 Diesel 210HP", value: "2.2_diesel_210hp" }
        ]
      },
      { name: "Giulietta", value: "giulietta" },
      { 
        name: "Stelvio", 
        value: "stelvio",
        engines: [
          { name: "2.0 Turbo 200HP", value: "2.0_turbo_200hp" },
          { name: "2.0 Turbo 280HP", value: "2.0_turbo_280hp" },
          { name: "2.9 V6 Biturbo 510HP", value: "2.9_v6_biturbo_510hp" },
          { name: "2.2 Diesel 160HP", value: "2.2_diesel_160hp" },
          { name: "2.2 Diesel 190HP", value: "2.2_diesel_190hp" },
          { name: "2.2 Diesel 210HP", value: "2.2_diesel_210hp" }
        ]
      },
      { name: "Tonale", value: "tonale" },
      { name: "4C", value: "4c" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Audi",
    value: "audi",
    models: [
      { name: "A1", value: "a1" },
      { 
        name: "A3", 
        value: "a3",
        engines: [
          { name: "1.0 TFSI 110HP", value: "1.0_tfsi_110hp" },
          { name: "1.5 TFSI 150HP", value: "1.5_tfsi_150hp" },
          { name: "2.0 TFSI 190HP", value: "2.0_tfsi_190hp" },
          { name: "2.0 TFSI 300HP (S3)", value: "2.0_tfsi_300hp" },
          { name: "2.5 TFSI 400HP (RS3)", value: "2.5_tfsi_400hp" },
          { name: "2.0 TDI 116HP", value: "2.0_tdi_116hp" },
          { name: "2.0 TDI 150HP", value: "2.0_tdi_150hp" },
          { name: "2.0 TDI 184HP", value: "2.0_tdi_184hp" },
          { name: "1.4 TFSI e-tron 204HP", value: "1.4_tfsi_etron_204hp" }
        ]
      },
      { 
        name: "A4", 
        value: "a4",
        engines: [
          { name: "2.0 TFSI 150HP", value: "2.0_tfsi_150hp" },
          { name: "2.0 TFSI 190HP", value: "2.0_tfsi_190hp" },
          { name: "2.0 TFSI 245HP", value: "2.0_tfsi_245hp" },
          { name: "2.0 TFSI 265HP", value: "2.0_tfsi_265hp" },
          { name: "3.0 TFSI 354HP (S4)", value: "3.0_tfsi_354hp" },
          { name: "2.9 TFSI 450HP (RS4)", value: "2.9_tfsi_450hp" },
          { name: "2.0 TDI 136HP", value: "2.0_tdi_136hp" },
          { name: "2.0 TDI 163HP", value: "2.0_tdi_163hp" },
          { name: "2.0 TDI 190HP", value: "2.0_tdi_190hp" },
          { name: "3.0 TDI 231HP", value: "3.0_tdi_231hp" },
          { name: "3.0 TDI 286HP", value: "3.0_tdi_286hp" }
        ]
      },
      { name: "A5", value: "a5" },
      { name: "A6", value: "a6" },
      { name: "A7", value: "a7" },
      { name: "A8", value: "a8" },
      { name: "Q2", value: "q2" },
      { name: "Q3", value: "q3" },
      { name: "Q5", value: "q5" },
      { name: "Q7", value: "q7" },
      { name: "Q8", value: "q8" },
      { 
        name: "e-tron", 
        value: "etron",
        engines: [
          { name: "Electric 313HP", value: "electric_313hp" },
          { name: "Electric 408HP", value: "electric_408hp" }
        ]
      },
      { name: "TT", value: "tt" },
      { name: "R8", value: "r8" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "BMW",
    value: "bmw",
    models: [
      { name: "Séria 1", value: "seria_1" },
      { name: "Séria 2", value: "seria_2" },
      { name: "Séria 3", value: "seria_3" },
      { name: "Séria 4", value: "seria_4" },
      { name: "Séria 5", value: "seria_5" },
      { name: "Séria 6", value: "seria_6" },
      { name: "Séria 7", value: "seria_7" },
      { name: "Séria 8", value: "seria_8" },
      { name: "X1", value: "x1" },
      { name: "X2", value: "x2" },
      { name: "X3", value: "x3" },
      { name: "X4", value: "x4" },
      { name: "X5", value: "x5" },
      { name: "X6", value: "x6" },
      { name: "X7", value: "x7" },
      { name: "i3", value: "i3" },
      { name: "i4", value: "i4" },
      { name: "i8", value: "i8" },
      { name: "iX", value: "ix" },
      { name: "Z4", value: "z4" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Citroën",
    value: "citroen",
    models: [
      { name: "C1", value: "c1" },
      { name: "C3", value: "c3" },
      { name: "C3 Aircross", value: "c3_aircross" },
      { name: "C4", value: "c4" },
      { name: "C4 Cactus", value: "c4_cactus" },
      { name: "C5 Aircross", value: "c5_aircross" },
      { name: "Berlingo", value: "berlingo" },
      { name: "SpaceTourer", value: "spacetourer" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Dacia",
    value: "dacia",
    models: [
      { name: "Duster", value: "duster" },
      { name: "Logan", value: "logan" },
      { name: "Sandero", value: "sandero" },
      { name: "Spring", value: "spring" },
      { name: "Jogger", value: "jogger" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Ford",
    value: "ford",
    models: [
      { name: "Fiesta", value: "fiesta" },
      { name: "Focus", value: "focus" },
      { name: "Mondeo", value: "mondeo" },
      { name: "Kuga", value: "kuga" },
      { name: "Puma", value: "puma" },
      { name: "EcoSport", value: "ecosport" },
      { name: "Edge", value: "edge" },
      { name: "Explorer", value: "explorer" },
      { name: "Mustang", value: "mustang" },
      { name: "Mustang Mach-E", value: "mustang_mach_e" },
      { name: "Ranger", value: "ranger" },
      { name: "Transit", value: "transit" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Honda",
    value: "honda",
    models: [
      { name: "Civic", value: "civic" },
      { name: "CR-V", value: "cr_v" },
      { name: "HR-V", value: "hr_v" },
      { name: "Jazz", value: "jazz" },
      { name: "e", value: "e" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Hyundai",
    value: "hyundai",
    models: [
      { name: "i10", value: "i10" },
      { name: "i20", value: "i20" },
      { name: "i30", value: "i30" },
      { name: "Tucson", value: "tucson" },
      { name: "Kona", value: "kona" },
      { name: "Santa Fe", value: "santa_fe" },
      { name: "IONIQ", value: "ioniq" },
      { name: "IONIQ 5", value: "ioniq_5" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Kia",
    value: "kia",
    models: [
      { name: "Picanto", value: "picanto" },
      { name: "Rio", value: "rio" },
      { name: "Ceed", value: "ceed" },
      { name: "Sportage", value: "sportage" },
      { name: "Niro", value: "niro" },
      { name: "Sorento", value: "sorento" },
      { name: "Stonic", value: "stonic" },
      { name: "e-Soul", value: "e_soul" },
      { name: "EV6", value: "ev6" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Land Rover",
    value: "land_rover",
    models: [
      { name: "Defender", value: "defender" },
      { name: "Discovery", value: "discovery" },
      { name: "Discovery Sport", value: "discovery_sport" },
      { name: "Range Rover", value: "range_rover" },
      { name: "Range Rover Evoque", value: "range_rover_evoque" },
      { name: "Range Rover Sport", value: "range_rover_sport" },
      { name: "Range Rover Velar", value: "range_rover_velar" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Mazda",
    value: "mazda",
    models: [
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "6", value: "6" },
      { name: "CX-3", value: "cx_3" },
      { name: "CX-30", value: "cx_30" },
      { name: "CX-5", value: "cx_5" },
      { name: "MX-5", value: "mx_5" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Mercedes-Benz",
    value: "mercedes_benz",
    models: [
      { name: "Trieda A", value: "a_class" },
      { name: "Trieda B", value: "b_class" },
      { name: "Trieda C", value: "c_class" },
      { name: "Trieda E", value: "e_class" },
      { name: "Trieda S", value: "s_class" },
      { name: "GLA", value: "gla" },
      { name: "GLB", value: "glb" },
      { name: "GLC", value: "glc" },
      { name: "GLE", value: "gle" },
      { name: "GLS", value: "gls" },
      { name: "EQA", value: "eqa" },
      { name: "EQB", value: "eqb" },
      { name: "EQC", value: "eqc" },
      { name: "EQE", value: "eqe" },
      { name: "EQS", value: "eqs" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Nissan",
    value: "nissan",
    models: [
      { name: "Micra", value: "micra" },
      { name: "Juke", value: "juke" },
      { name: "Qashqai", value: "qashqai" },
      { name: "X-Trail", value: "x_trail" },
      { name: "Leaf", value: "leaf" },
      { name: "Ariya", value: "ariya" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Opel",
    value: "opel",
    models: [
      { name: "Corsa", value: "corsa" },
      { name: "Astra", value: "astra" },
      { name: "Crossland", value: "crossland" },
      { name: "Grandland", value: "grandland" },
      { name: "Mokka", value: "mokka" },
      { name: "Insignia", value: "insignia" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Peugeot",
    value: "peugeot",
    models: [
      { name: "108", value: "108" },
      { name: "208", value: "208" },
      { name: "308", value: "308" },
      { name: "508", value: "508" },
      { name: "2008", value: "2008" },
      { name: "3008", value: "3008" },
      { name: "5008", value: "5008" },
      { name: "e-208", value: "e_208" },
      { name: "e-2008", value: "e_2008" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Renault",
    value: "renault",
    models: [
      { name: "Clio", value: "clio" },
      { name: "Captur", value: "captur" },
      { name: "Megane", value: "megane" },
      { name: "Kadjar", value: "kadjar" },
      { name: "Arkana", value: "arkana" },
      { name: "Zoe", value: "zoe" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Seat",
    value: "seat",
    models: [
      { name: "Ibiza", value: "ibiza" },
      { name: "Leon", value: "leon" },
      { name: "Arona", value: "arona" },
      { name: "Ateca", value: "ateca" },
      { name: "Tarraco", value: "tarraco" },
      { name: "Mii", value: "mii" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Škoda",
    value: "skoda",
    models: [
      { name: "Citigo", value: "citigo" },
      { 
        name: "Fabia", 
        value: "fabia",
        engines: [
          { name: "1.0 MPI 60HP", value: "1.0_mpi_60hp" },
          { name: "1.0 MPI 75HP", value: "1.0_mpi_75hp" },
          { name: "1.0 TSI 95HP", value: "1.0_tsi_95hp" },
          { name: "1.0 TSI 110HP", value: "1.0_tsi_110hp" },
          { name: "1.5 TSI 150HP", value: "1.5_tsi_150hp" }
        ]
      },
      { name: "Scala", value: "scala" },
      { 
        name: "Octavia", 
        value: "octavia",
        engines: [
          { name: "1.0 TSI 110HP", value: "1.0_tsi_110hp" },
          { name: "1.5 TSI 150HP", value: "1.5_tsi_150hp" },
          { name: "2.0 TSI 190HP", value: "2.0_tsi_190hp" },
          { name: "2.0 TSI 245HP (RS)", value: "2.0_tsi_245hp" },
          { name: "1.6 TDI 115HP", value: "1.6_tdi_115hp" },
          { name: "2.0 TDI 150HP", value: "2.0_tdi_150hp" },
          { name: "2.0 TDI 200HP", value: "2.0_tdi_200hp" },
          { name: "1.4 TSI iV 204HP (Plug-in Hybrid)", value: "1.4_tsi_iv_204hp" }
        ]
      },
      { name: "Kamiq", value: "kamiq" },
      { name: "Karoq", value: "karoq" },
      { name: "Kodiaq", value: "kodiaq" },
      { name: "Superb", value: "superb" },
      { 
        name: "Enyaq", 
        value: "enyaq",
        engines: [
          { name: "Electric 150HP (50)", value: "electric_150hp" },
          { name: "Electric 180HP (60)", value: "electric_180hp" },
          { name: "Electric 204HP (80)", value: "electric_204hp" },
          { name: "Electric 265HP (80x)", value: "electric_265hp" },
          { name: "Electric 299HP (RS)", value: "electric_299hp" }
        ]
      },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Tesla",
    value: "tesla",
    models: [
      { 
        name: "Model 3", 
        value: "model_3",
        engines: [
          { name: "Electric RWD", value: "electric_rwd" },
          { name: "Electric Long Range AWD", value: "electric_long_range_awd" },
          { name: "Electric Performance AWD", value: "electric_performance_awd" }
        ]
      },
      { 
        name: "Model S", 
        value: "model_s",
        engines: [
          { name: "Electric Long Range", value: "electric_long_range" },
          { name: "Electric Plaid", value: "electric_plaid" }
        ]
      },
      { 
        name: "Model X", 
        value: "model_x",
        engines: [
          { name: "Electric Long Range", value: "electric_long_range" },
          { name: "Electric Plaid", value: "electric_plaid" }
        ]
      },
      { 
        name: "Model Y", 
        value: "model_y",
        engines: [
          { name: "Electric RWD", value: "electric_rwd" },
          { name: "Electric Long Range AWD", value: "electric_long_range_awd" },
          { name: "Electric Performance AWD", value: "electric_performance_awd" }
        ]
      },
      { name: "Cybertruck", value: "cybertruck" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Toyota",
    value: "toyota",
    models: [
      { name: "Aygo", value: "aygo" },
      { name: "Yaris", value: "yaris" },
      { name: "Corolla", value: "corolla" },
      { name: "C-HR", value: "c_hr" },
      { name: "RAV4", value: "rav4" },
      { name: "Camry", value: "camry" },
      { name: "Prius", value: "prius" },
      { name: "Land Cruiser", value: "land_cruiser" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Volkswagen",
    value: "volkswagen",
    models: [
      { name: "up!", value: "up" },
      { name: "Polo", value: "polo" },
      { 
        name: "Golf", 
        value: "golf",
        engines: [
          { name: "1.0 TSI 90HP", value: "1.0_tsi_90hp" },
          { name: "1.0 TSI 110HP", value: "1.0_tsi_110hp" },
          { name: "1.5 TSI 130HP", value: "1.5_tsi_130hp" },
          { name: "1.5 TSI 150HP", value: "1.5_tsi_150hp" },
          { name: "2.0 TSI 245HP (GTI)", value: "2.0_tsi_245hp" },
          { name: "2.0 TSI 320HP (R)", value: "2.0_tsi_320hp" },
          { name: "2.0 TDI 115HP", value: "2.0_tdi_115hp" },
          { name: "2.0 TDI 150HP", value: "2.0_tdi_150hp" },
          { name: "2.0 TDI 200HP (GTD)", value: "2.0_tdi_200hp" },
          { name: "1.4 eHybrid 204HP", value: "1.4_ehybrid_204hp" },
          { name: "1.4 GTE 245HP", value: "1.4_gte_245hp" }
        ]
      },
      { name: "T-Cross", value: "t_cross" },
      { name: "T-Roc", value: "t_roc" },
      { name: "Tiguan", value: "tiguan" },
      { name: "Passat", value: "passat" },
      { name: "Touareg", value: "touareg" },
      { 
        name: "ID.3", 
        value: "id3",
        engines: [
          { name: "Electric 150HP (Pure)", value: "electric_150hp" },
          { name: "Electric 170HP (Pro)", value: "electric_170hp" },
          { name: "Electric 204HP (Pro S)", value: "electric_204hp" }
        ]
      },
      { 
        name: "ID.4", 
        value: "id4",
        engines: [
          { name: "Electric 170HP (Pure)", value: "electric_170hp" },
          { name: "Electric 204HP (Pro)", value: "electric_204hp" },
          { name: "Electric 299HP (GTX)", value: "electric_299hp" }
        ]
      },
      { 
        name: "ID.5", 
        value: "id5",
        engines: [
          { name: "Electric 174HP", value: "electric_174hp" },
          { name: "Electric 204HP", value: "electric_204hp" },
          { name: "Electric 299HP (GTX)", value: "electric_299hp" }
        ]
      },
      { name: "Arteon", value: "arteon" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Volvo",
    value: "volvo",
    models: [
      { name: "S60", value: "s60" },
      { name: "S90", value: "s90" },
      { name: "V60", value: "v60" },
      { name: "V90", value: "v90" },
      { name: "XC40", value: "xc40" },
      { name: "XC60", value: "xc60" },
      { name: "XC90", value: "xc90" },
      { name: "C40", value: "c40" },
      { name: "Iné", value: "other" }
    ]
  },
  {
    name: "Iné",
    value: "other",
    models: [
      { name: "Iné", value: "other" }
    ]
  }
];
