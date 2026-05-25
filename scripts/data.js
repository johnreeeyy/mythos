const gods = [
  {
    name: "Zeus",
    image: "images/Zeus.webp",
    mythology: "Greek",
    description: `Zeus is the supreme deity in ancient Greek mythology, ruling as the King of the Gods, lord of the sky, thunder, and justice. As the ruler of Mount Olympus, he maintains order, law, and fate. He is typically depicted as a mature, robust man with a beard, wielding a thunderbolt and accompanied by an eagle.`,

    domain: ["Sky", "Thunder", "Lightning", "Kingship and authority"],

    symbols: [
      "Thunderbolt",
      "Eagle",
      "Oak Tree",
      "Aegis (protective shield often associated with him)"
    ],

    trivia: `Zeus was said to be raised in secret on the island of Crete to protect him from being swallowed by his father Cronus. The most famous oracle of Zeus was located at Dodona, where priests interpreted the rustling of sacred oak trees. In many myths, Zeus could disguise himself as animals or humans to interact with mortals without revealing his true identity.`,

    lore: `Zeus is the king of the Greek gods and ruler of Mount Olympus in ancient mythology. He rose to power after leading a rebellion against his father Cronus during the Titanomachy. This war between the Titans and Olympians determined the rule of the cosmos. Zeus became the god of the sky, thunder, and lightning. He wields the thunderbolt as his primary weapon of authority. After victory, he divided the world with his brothers, giving Poseidon the sea and Hades the underworld. He is widely associated with justice, law, and divine order. However, his myths also show his flaws through numerous affairs that often caused conflict among gods and mortals.`
  },

  {
    name: "Poseidon",
    image: "images/Poseidon.webp",
    mythology: "Greek",
    description: `Poseidon is one of the twelve Olympian gods in Greek mythology, ruling the seas, earthquakes, storms, and horses. He is often depicted holding a trident and riding a chariot across the ocean waves.`,

    domain: ["Sea", "Earthquakes", "Storms", "Horses"],

    symbols: ["Trident", "Dolphin", "Horse", "Wave"],

    trivia: `Poseidon once competed with Athena for the patronage of Athens. He was believed to create horses from sea foam in some myths. Sailors often prayed to him for safe voyages across the sea.`,

    lore: `Poseidon is one of the three brothers who ruled the cosmos after the defeat of the Titans. He was given dominion over the seas and all waters of the world. He also holds power over earthquakes, earning him the title Earth-Shaker. He resides in a grand underwater palace made of coral and gems. Poseidon travels across the ocean in a chariot pulled by sea creatures. He is both protector and destroyer of sailors depending on his mood. Many myths portray him as quick to anger when disrespected. His influence is seen in storms, floods, and the shifting of the earth.`
  },

  {
    name: "Hades",
    image: "images/Hades.jpg",
    mythology: "Greek",
    description: `Hades is the Greek god of the underworld and ruler of the dead. He governs the realm of souls and oversees the hidden riches of the earth.`,

    domain: ["Underworld", "Death", "Afterlife", "Riches of the earth"],

    symbols: ["Cerberus", "Helmet of invisibility", "Bident", "Cypress"],

    trivia: `Hades was rarely worshipped openly due to fear of his name. He is not the god of death itself but of the dead and the afterlife. Precious metals found underground were associated with his domain.`,

    lore: `Hades is one of the three brothers who divided the cosmos after the defeat of the Titans. He was assigned the Underworld as his realm. He rules over the souls of the dead with strict order and fairness. His domain is divided into regions for reward and punishment. He abducted Persephone to become his queen in the Underworld. This event led to the creation of the seasons in Greek mythology. He rarely leaves his realm and avoids interference with other gods. Despite his fearsome reputation, he is a just and structured ruler rather than a cruel one.`
  },

  {
    name: "Athena",
    image: "images/Athena.webp",
    mythology: "Greek",
    description: `Athena is the Greek goddess of wisdom, strategy, and civilization. She is the patron goddess of Athens and a protector of heroes.`,

    domain: ["Wisdom", "War strategy", "Crafts", "Civilization"],

    symbols: ["Owl", "Aegis shield", "Olive tree", "Spear"],

    trivia: `Athena was born from the head of Zeus fully armed. She remained a virgin goddess throughout mythology. She is associated with logic and strategic warfare.`,

    lore: `Athena is the goddess of wisdom and strategic warfare in Greek mythology. She was born from the head of Zeus after he swallowed her mother Metis. She emerged fully grown and armored, symbolizing complete knowledge. Athena became the protector of cities, especially Athens. She is known for guiding heroes such as Odysseus and Perseus. Unlike Ares, she represents disciplined and strategic warfare. She is also skilled in crafts such as weaving and architecture. Athena embodies intelligence, reason, and civilized order.`
  },

  {
    name: "Hera",
    image: "images/Hera.jpg",
    mythology: "Greek",
    description: `Hera is the queen of the Olympian gods and goddess of marriage and family. She is the wife of Zeus and protector of women.`,

    domain: ["Marriage", "Family", "Women", "Queen of gods"],

    symbols: ["Peacock", "Crown", "Scepter", "Cow"],

    trivia: `Hera is known for her jealousy toward Zeus's lovers. The peacock is her sacred animal. She is a protector of marriage traditions.`,

    lore: `Hera is the queen of the gods and wife of Zeus in Greek mythology. She represents marriage, family, and women. She is often portrayed as proud and regal in appearance. Her marriage to Zeus is marked by repeated conflicts. She frequently punishes Zeus's lovers and their children. Despite this, she is a powerful and respected Olympian goddess. She plays important roles in several mythological events including the Trojan War. Hera symbolizes loyalty, dignity, and the complexities of marriage.`
  },

  {
    name: "Apollo",
    image: "images/Apollo.jpg",
    mythology: "Greek",
    description: `Apollo is the Greek god of light, music, prophecy, and healing. He is one of the most widely worshipped Olympian gods.`,

    domain: ["Sun", "Music", "Prophecy", "Healing"],

    symbols: ["Lyre", "Laurel wreath", "Bow and arrow", "Sun"],

    trivia: `Apollo is associated with the Oracle of Delphi. He is a master of music and poetry. He is also known for his archery skills.`,

    lore: `Apollo is the god of light, music, and prophecy in Greek mythology. He is the son of Zeus and Leto. He is the twin brother of Artemis. Apollo is associated with the Oracle of Delphi. He is a skilled archer who can bring both plague and healing. He is also a patron of music and poetry. He represents order, harmony, and intellect. Apollo is often seen as a source of inspiration for artists and prophets.`
  },

  {
    name: "Artemis",
    image: "images/Artemis.webp",
    mythology: "Greek",
    description: `Artemis is the goddess of the hunt, wilderness, and the moon. She is the twin sister of Apollo and protector of nature.`,

    domain: ["Moon", "Hunt", "Wilderness", "Virginity"],

    symbols: ["Bow and arrows", "Deer", "Crescent moon", "Hunting dogs"],

    trivia: `Artemis asked to remain a virgin forever. She protects animals and young girls. She is closely associated with nature and wilderness.`,

    lore: `Artemis is the Greek goddess of the hunt and wilderness. She is the twin sister of Apollo and daughter of Zeus and Leto. She is a virgin goddess who vowed to remain independent. Artemis protects animals, children, and young women. She roams forests with her hunting companions. She punishes those who harm nature or disrespect her. She is associated with the moon in later traditions. Artemis represents wild nature, independence, and protection.`
  },

  {
    name: "Aphrodite",
    image: "images/Aphrodite.webp",
    mythology: "Greek",
    description: `Aphrodite is the goddess of love, beauty, and desire. She influences emotions and relationships among gods and mortals.`,

    domain: ["Love", "Beauty", "Desire", "Fertility"],

    symbols: ["Dove", "Rose", "Shell", "Myrtle"],

    trivia: `Aphrodite was born from sea foam. She is associated with Cyprus. She has strong influence over gods and mortals.`,

    lore: `Aphrodite is the goddess of love and beauty in Greek mythology. She was born from sea foam after the defeat of Uranus. She is one of the most powerful Olympian gods due to her influence over desire. Aphrodite is married to Hephaestus but has many lovers. Her influence often causes both harmony and conflict among gods and mortals. She played a role in starting the Trojan War through the Judgment of Paris. She is often surrounded by attendants known as the Graces. Aphrodite represents both the joy and danger of love.`
  },

  {
    name: "Odin",
    image: "images/Odin.jpg",
    mythology: "Norse",
    description: `Odin is the chief god of Norse mythology, associated with wisdom, war, and magic. He rules Asgard and seeks knowledge at all costs.`,

    domain: ["Wisdom", "War", "Death", "Magic"],

    symbols: ["Spear (Gungnir)", "Ravens", "Wolves", "Valknut"],

    trivia: `Odin sacrificed his eye for wisdom. He hung from Yggdrasil to learn runes. He is accompanied by two ravens.`,

    lore: `Odin is the chief god in Norse mythology and ruler of Asgard. He is associated with wisdom, war, and magic. He sacrificed his eye to gain knowledge from the Well of Mimir. He is accompanied by ravens Huginn and Muninn. Odin rules over Valhalla, where fallen warriors are taken. He constantly seeks knowledge of fate and Ragnarok. He often travels in disguise among mortals. Odin values wisdom and sacrifice above all else.`
  },

  {
    name: "Thor",
    image: "images/Thor.webp",
    mythology: "Norse",
    description: `Thor is the Norse god of thunder and protector of gods and humans. He is known for his immense strength and hammer Mjölnir.`,

    domain: ["Thunder", "Storms", "Strength", "Protection"],

    symbols: ["Mjölnir", "Lightning", "Belt of strength", "Goat chariot"],

    trivia: `Thor wields the hammer Mjölnir. He protects gods and humans. Thursday is named after him.`,

    lore: `Thor is the god of thunder in Norse mythology. He is the son of Odin and the earth goddess Jörð. He wields the hammer Mjölnir in battle. He travels in a chariot pulled by goats. Thor is the protector of both Asgard and Midgard. He frequently fights giants who threaten order. He is strong but straightforward in nature. Thor represents protection, strength, and courage.`
  },

  {
    name: "Loki",
    image: "images/Loki.jpg",
    mythology: "Norse",
    description: `Loki is the trickster god of Norse mythology known for chaos and deception. He is both helper and enemy of the gods.`,

    domain: ["Trickery", "Chaos", "Fire", "Shape-shifting"],

    symbols: ["Serpent", "Knot", "Flame", "Mask"],

    trivia: `Loki is the father of monsters like Fenrir. He caused the death of Baldr. He is a master of disguise.`,

    lore: `Loki is a trickster god in Norse mythology. He is a shape-shifter who can change form. He both helps and harms the gods. He is responsible for the death of Baldr. He is punished by being bound under a serpent. He plays a major role in Ragnarok. Loki is clever, unpredictable, and dangerous. He represents chaos and change.`
  },

  {
    name: "Baldur",
    image: "images/Baldur.webp",
    mythology: "Norse",
    description: `Baldur is the Norse god of light, purity, and beauty. His death is one of the most tragic events in Norse mythology.`,

    domain: ["Light", "Beauty", "Joy", "Purity"],

    symbols: ["Mistletoe", "Light", "White flower", "Shield"],

    trivia: `Baldr is loved by all gods. His death is caused by mistletoe. He is expected to return after Ragnarok.`,

    lore: `Baldur is the god of light and beauty in Norse mythology. He is beloved by all gods for his kindness. His mother Frigg made everything swear not to harm him except mistletoe. Loki tricked his blind brother into killing him. His death marks the beginning of Ragnarok's chain of events. The gods fail to bring him back from the dead. He remains in the underworld until after Ragnarok. Baldur represents innocence, purity, and tragic fate.`
  },

  {
    name: "Heimdall",
    image: "images/Heimdall.webp",
    mythology: "Norse",
    description: `Heimdall is the watchman of the Norse gods, guarding the rainbow bridge Bifröst. He is known for his sharp senses and vigilance.`,

    domain: ["Vigilance", "Protection", "Light", "Guardianship"],

    symbols: ["Gjallarhorn", "Bifrost", "Horn", "Sword"],

    trivia: `Heimdall can hear grass grow. He guards Bifrost. He will signal Ragnarok.`,

    lore: `Heimdall is the guardian of Asgard in Norse mythology. He watches over the rainbow bridge Bifröst. He possesses extraordinary senses of sight and hearing. He requires very little sleep to remain alert. He is the son of nine mothers in myth. He will blow Gjallarhorn to signal Ragnarok. He stands as the first defense of Asgard. Heimdall represents vigilance and protection.`
  },

  {
    name: "Týr",
    image: "images/Tyr.jpg",
    mythology: "Norse",
    description: `Týr is a Norse god of war, law, and justice. He is known for his courage and sacrifice in binding Fenrir.`,

    domain: ["War", "Justice", "Law", "Courage"],

    symbols: ["Sword", "Hand", "Spear", "Wolf Fenrir"],

    trivia: `Tyr lost his hand to Fenrir. He represents justice and honor. Tuesday is named after him.`,

    lore: `Týr is a god of war and justice in Norse mythology. He is known for bravery and honor. He placed his hand in Fenrir's mouth as a guarantee. The wolf bit off his hand when deceived. His sacrifice allowed the gods to bind Fenrir. He represents lawful warfare and justice. He is one of the oldest Norse gods. Týr symbolizes courage and duty.`
  }
];
