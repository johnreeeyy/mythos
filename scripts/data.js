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

    lore: `Zeus is the king of the Greek gods and ruler of Mount Olympus in ancient mythology. He became the supreme god after leading a rebellion against his father Cronus during the Titanomachy, a great war between the Titans and the Olympians. Zeus is known as the god of the sky, lightning, and thunder, and he wields a powerful thunderbolt as his main weapon. After the victory, he and his brothers divided the cosmos, with Zeus taking the heavens while Poseidon ruled the sea and Hades the underworld. Although he is often seen as a symbol of justice and authority, Zeus is also famous for his many affairs with goddesses and mortal women. These stories often led to conflicts, especially with his wife Hera, who frequently punished those involved in his relationships.`
  },

  {
    name: "Poseidon",
    image: "images/Poseidon.webp",
    mythology: "Greek",
    description: `Poseidon is one of the twelve Olympian gods in ancient Greek mythology, revered as the mighty god of the sea, storms, earthquakes, and horses. Often recognized by his iconic trident, he was known for his tempestuous temper and crucial role in governing the cosmic realms alongside his brothers, Zeus and Hades.`,

    domain: ["Sea", "Earthquakes", "Storms", "Horses"],

    symbols: ["Trident", "Dolphin", "Horse", "Wave"],

    trivia: `Poseidon once competed with Athena for the patronage of Athens. He created the first horse according to some myths. His mood was believed to directly affect the calmness or violence of the sea.`,

    lore: `Poseidon is one of the Olympian brothers who ruled the cosmos after the Titans were defeated. He was given dominion over the seas and oceans. He is also known as the Earth-Shaker due to his power over earthquakes. He resides in a palace beneath the ocean made of coral and gems. Sailors prayed to him for safe voyages and protection at sea. Despite his role as a protector, he is known for his anger and destructive storms. Many myths show him clashing with gods and heroes who offend him.`
  },

  {
    name: "Hades",
    image: "images/Hades.jpg",
    mythology: "Greek",
    description: `Hades is the Greek god of the underworld and the dead, a stern, pitiless, yet just ruler of the subterranean realm. As a brother to Zeus and Poseidon, he oversees the souls of the departed, assisted by Cerberus, the three-headed dog. Often called the "Giver of Wealth," he rules over earth's hidden riches and is associated with the Helm of Darkness.`,

    domain: ["Underworld", "Death", "Afterlife", "Riches of the earth"],

    symbols: ["Cerberus", "Helmet of invisibility", "Bident", "Cypress"],

    trivia: `Hades’ name was often avoided in ancient Greece out of fear. He is not the god of death itself but of the dead and the afterlife. He rarely leaves the Underworld, preferring order and structure.`,

    lore: `Hades is one of the three brothers who ruled the cosmos after defeating the Titans. He was given the Underworld as his domain. He rules over the dead and ensures balance in the afterlife. His realm contains different sections for punishment and reward. He abducted Persephone to become his queen. This caused the cycle of seasons in Greek myth. He is often seen as distant but fair. Hades is not evil, but a strict ruler of the dead.`
  },

  {
    name: "Athena",
    image: "images/Athena.webp",
    mythology: "Greek",
    description: `Athena is the ancient Greek goddess of wisdom, strategic warfare, and handicrafts, known as the patron of Athens and a favorite daughter of Zeus. Renowned for her intelligence and courage, she is frequently depicted in armor with an owl or olive tree symbol.`,

    domain: ["Wisdom", "War strategy", "Crafts", "Civilization"],

    symbols: ["Owl", "Aegis shield", "Olive tree", "Spear"],

    trivia: `Athena was born fully armored from Zeus’s head. She is the patron goddess of Athens. She represents strategic warfare rather than violence.`,

    lore: `Athena is the goddess of wisdom and strategic warfare. She was born from the head of Zeus after he swallowed her mother. She is one of the most respected Olympian gods. She protects cities, especially Athens. She guided many heroes in their quests. She is also skilled in crafts and weaving. She represents intelligence over brute force. Athena is a symbol of logic and wisdom.`
  },

  {
    name: "Hera",
    image: "images/Hera.jpg",
    mythology: "Greek",
    description: `Hera is the Queen of the Olympian gods in Greek mythology, ruling as the goddess of marriage, women, and childbirth. As the sister-wife of Zeus, she is depicted as regal, majestic, and often jealous, frequently punishing Zeus's lovers and offspring. Her Roman counterpart is Juno.`,

    domain: ["Marriage", "Family", "Women", "Queen of gods"],

    symbols: ["Peacock", "Crown", "Scepter", "Cow"],

    trivia: `Hera is the protector of marriage. The peacock is sacred to her. She is known for her jealousy toward Zeus’s lovers.`,

    lore: `Hera is the queen of the gods and wife of Zeus. She represents marriage and family. She is often angered by Zeus’s affairs. She punishes his lovers and illegitimate children. She is a powerful and proud goddess. She plays a major role in many myths. She appears in the Trojan War stories. Hera represents loyalty and betrayal.`
  },

  {
    name: "Apollo",
    image: "images/Apollo.jpg",
    mythology: "Greek",
    description: `Apollo is one of the most powerful Olympian deities in Greek mythology. As the god of light, music, poetry, prophecy, medicine, and archery, he was widely revered across the ancient world.`,

    domain: ["Sun", "Music", "Prophecy", "Healing"],

    symbols: ["Lyre", "Laurel wreath", "Bow and arrow", "Sun"],

    trivia: `Apollo is linked to the Oracle of Delphi. He is skilled in music and prophecy. He is also a powerful archer.`,

    lore: `Apollo is the god of light, music, and prophecy. He is the son of Zeus and Leto. He is the twin of Artemis. He is associated with the Oracle of Delphi. He is a skilled archer. He can bring both healing and plague. He represents order and harmony. Apollo inspires music and poetry.`
  },

  {
    name: "Artemis",
    image: "images/Artemis.webp",
    mythology: "Greek",
    description: `Artemis is the ancient Greek goddess of the hunt, the wilderness, wild animals, and childbirth. The daughter of Zeus and Leto and twin sister to Apollo, she is famously known as a virgin goddess who protected young girls, nature, and the cycle of life.`,

    domain: ["Moon", "Hunt", "Wilderness", "Virginity"],

    symbols: ["Bow and arrows", "Deer", "Crescent moon", "Hunting dogs"],

    trivia: `Artemis protects animals and young girls. She asked Zeus to remain a virgin forever. She is linked with nature and the moon.`,

    lore: `Artemis is the goddess of the hunt and wilderness. She is the twin sister of Apollo. She protects animals and young girls. She is a virgin goddess by choice. She roams forests with her hunters. She punishes those who disrespect nature. She is linked with the moon. Artemis represents wild nature.`
  },

  {
    name: "Aphrodite",
    image: "images/Aphrodite.webp",
    mythology: "Greek",
    description: `Aphrodite is the ancient Greek goddess of love, beauty, passion, and procreation. Recognized as one of the Twelve Olympians on Mount Olympus, she captivated both mortals and gods with her beauty and was famous for her irresistible charm.`,

    domain: ["Love", "Beauty", "Desire", "Fertility"],

    symbols: ["Dove", "Rose", "Shell", "Myrtle"],

    trivia: `Aphrodite was born from sea foam. She influenced gods and mortals through love. She is linked to Cyprus.`,

    lore: `Aphrodite is the goddess of love and beauty. She was born from sea foam. She is one of the most influential gods. She is married to Hephaestus. She had many lovers. She caused the Trojan War events. She represents desire and attraction. Aphrodite influences emotions and love.`
  },

  {
    name: "Odin",
    image: "images/Odin.jpg",
    mythology: "Norse",
    description: `Odin is the supreme, all-father god in Norse mythology, revered for his wisdom, healing, royalty, and magic. He rules Asgard, gathers fallen warriors in Valhalla, and is famous for sacrificing his eye for wisdom and hanging from the World Tree to learn the runes.`,

    domain: ["Wisdom", "War", "Death", "Magic"],

    symbols: ["Spear (Gungnir)", "Ravens", "Wolves", "Valknut"],

    trivia: `Odin sacrificed his eye for wisdom. He hung from Yggdrasil for knowledge. He is accompanied by ravens Huginn and Muninn.`,

    lore: `Odin is the chief god of Asgard. He is associated with wisdom and war. He sacrificed his eye for knowledge. He is accompanied by ravens. He rules Valhalla. He seeks knowledge of fate. He often travels in disguise. Odin values wisdom above all.`
  },

  {
    name: "Thor",
    image: "images/Thor.webp",
    mythology: "Norse",
    description: `Thor is the mighty, red-bearded god of thunder, storms, and strength. As the son of Odin and the earth goddess Jörð, he was the ultimate defender of Asgard and Midgard against giants and monsters.`,

    domain: ["Thunder", "Storms", "Strength", "Protection"],

    symbols: ["Mjölnir", "Lightning", "Belt of strength", "Goat chariot"],

    trivia: `Thor wields the hammer Mjölnir. He protects gods and humans. Thursday is named after him.`,

    lore: `Thor is the god of thunder. He is the son of Odin. He wields Mjölnir. He protects Asgard. He fights giants. He travels in a goat chariot. He is strong and brave. He represents protection.`
  },

  {
    name: "Loki",
    image: "images/Loki.jpg",
    mythology: "Norse",
    description: `Loki is the infamous trickster god of Norse mythology. A complex shape-shifter born to a giant, he served as both an ally and an enemy of the gods.`,

    domain: ["Trickery", "Chaos", "Fire", "Shape-shifting"],

    symbols: ["Serpent", "Knot", "Flame", "Mask"],

    trivia: `Loki is the father of monsters like Fenrir. He can change shape. He caused the death of Baldr.`,

    lore: `Loki is a trickster god. He is a shape-shifter. He helps and harms gods. He caused Baldr’s death. He is punished by the gods. He is bound under a serpent. He is a cause of Ragnarok. Loki is chaotic and clever.`
  },

  {
    name: "Baldur",
    image: "images/Baldur.webp",
    mythology: "Norse",
    description: `Baldur (Baldr) is the Norse god of light, joy, and beauty. He is the most beloved of the gods, but his death begins the events leading to Ragnarok.`,

    domain: ["Light", "Beauty", "Joy", "Purity"],

    symbols: ["Mistletoe", "Light", "White flower", "Shield"],

    trivia: `Baldr’s death is caused by mistletoe. He is loved by all gods. He is expected to return after Ragnarok.`,

    lore: `Baldr is the god of light and beauty. He is loved by all gods. He is killed by mistletoe. Loki tricks his death. His death leads to Ragnarok. He cannot return from the dead. He represents innocence. He is a tragic figure.`
  },

  {
    name: "Heimdall",
    image: "images/Heimdall.jpg",
    mythology: "Norse",
    description: `Heimdall is the vigilant watchman of the gods, guarding the rainbow bridge Bifröst from his fortress at the edge of Asgard.`,

    domain: ["Vigilance", "Protection", "Light", "Guardianship"],

    symbols: ["Gjallarhorn", "Bifrost", "Horn", "Sword"],

    trivia: `Heimdall can hear grass grow. He guards the Bifrost. He will signal Ragnarok.`,

    lore: `Heimdall guards Asgard. He watches Bifrost. He has sharp senses. He needs little sleep. He is always alert. He will blow Gjallarhorn. He warns of Ragnarok. He is a protector.`
  },

  {
    name: "Týr",
    image: "images/Tyr.jpg",
    mythology: "Norse",
    description: `Týr is a god of war, justice, and law, known for his bravery and sacrifice in binding the wolf Fenrir.`,

    domain: ["War", "Justice", "Law", "Courage"],

    symbols: ["Sword", "Hand", "Spear", "Fenrir wolf"],

    trivia: `Tyr lost his hand to Fenrir. He represents justice and courage. Tuesday is named after him.`,

    lore: `Tyr is a god of war and law. He is brave and just. He sacrificed his hand. He bound Fenrir. He represents honor. He is an ancient god. He values justice. He is a symbol of courage.`
  }
];
