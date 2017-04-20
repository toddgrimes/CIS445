use game;
db.character.drop();
db.location.drop();
db.items.drop();

db.character.insert ({ "_id" : ObjectId("58d3d6c10eefd2e0da746704"), "name" : "Tim", "character" : { "attributes" : { "strength" : 10, "dexterity" : 16, "intelligence" : 17, "charisma" : 8 }, "class" : "mage", "race" : "human", "health" : 212, "mana" : 152 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3d7a80eefd2e0da746705"), "name" : "Tanis", "character" : { "attributes" : { "strength" : 13, "dexterity" : 16, "intelligence" : 12, "charisma" : 10 }, "class" : "ranger", "race" : "half-elf", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3d86e0eefd2e0da746706"), "name" : "Caramon", "character" : { "attributes" : { "strength" : 19, "dexterity" : 12, "intelligence" : 10, "charisma" : 10 }, "class" : "warrior", "race" : "human", "health" : 300, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3d91d0eefd2e0da746707"), "name" : "Raistlin", "character" : { "attributes" : { "strength" : 10, "dexterity" : 10, "intelligence" : 19, "charisma" : 10 }, "class" : "mage", "race" : "human", "health" : 200, "mana" : 170 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3d9ac0eefd2e0da746708"), "name" : "Goldmoon", "character" : { "attributes" : { "strength" : 10, "dexterity" : 12, "intelligence" : 16, "charisma" : 14 }, "class" : "priest", "race" : "human", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3da420eefd2e0da746709"), "name" : "Riverwind", "character" : { "attributes" : { "strength" : 18, "dexterity" : 12, "intelligence" : 10, "charisma" : 10 }, "class" : "barbarian", "race" : "human", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3daac0eefd2e0da74670a"), "name" : "Tasslehoff", "character" : { "attributes" : { "strength" : 10, "dexterity" : 18, "intelligence" : 12, "charisma" : 12 }, "class" : "thief", "race" : "kender", "health" : 210, "mana" : 130 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3db6e0eefd2e0da74670b"), "name" : "Thrall", "character" : { "attributes" : { "strength" : 14, "dexterity" : 14, "intelligence" : 14, "charisma" : 10 }, "class" : "shaman", "race" : "orc", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3df880eefd2e0da74670c"), "name" : "Arthas", "character" : { "attributes" : { "strength" : 16, "dexterity" : 12, "intelligence" : 12, "charisma" : 14 }, "class" : "paladin", "race" : "human", "health" : 260, "mana" : 120 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e2530eefd2e0da74670d"), "name" : "Illidan", "character" : { "attributes" : { "strength" : 14, "dexterity" : 18, "intelligence" : 10, "charisma" : 10 }, "class" : "demon hunter", "race" : "elf", "health" : 260, "mana" : 100 }, "location" : { "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e2c20eefd2e0da74670e"), "name" : "Flint", "character" : { "attributes" : { "strength" : 18, "dexterity" : 12, "intelligence" : 10, "charisma" : 10 }, "class" : "warrior", "race" : "dwarf", "health" : 280, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e3ea0eefd2e0da74670f"), "name" : "Malfurion", "character" : { "attributes" : { "strength" : 14, "dexterity" : 14, "intelligence" : 14, "charisma" : 10 }, "class" : "druid", "race" : "elf", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e6790eefd2e0da746710"), "name" : "Lich King", "character" : { "attributes" : { "strength" : 18, "dexterity" : 10, "intelligence" : 12, "charisma" : 10 }, "class" : "death knight", "race" : "undead", "health" : 500, "mana" : 250 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e7250eefd2e0da746711"), "name" : "Lady Sylvanas", "character" : { "attributes" : { "strength" : 11, "dexterity" : 19, "intelligence" : 13, "charisma" : 10 }, "class" : "rogue", "race" : "undead", "health" : 260, "mana" : 120 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e7dc0eefd2e0da746712"), "name" : "Millhouse", "character" : { "attributes" : { "strength" : 10, "dexterity" : 10, "intelligence" : 18, "charisma" : 16 }, "class" : "mage", "race" : "gnome", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e8700eefd2e0da746713"), "name" : "Leeroy Jenkins", "character" : { "attributes" : { "strength" : 16, "dexterity" : 10, "intelligence" : 10, "charisma" : 18 }, "class" : "warrior", "race" : "human", "health" : 280, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e8f80eefd2e0da746714"), "name" : "Gargamel", "character" : { "attributes" : { "strength" : 10, "dexterity" : 10, "intelligence" : 17, "charisma" : 10 }, "class" : "warlock", "race" : "human", "health" : 250, "mana" : 150 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e9670eefd2e0da746715"), "name" : "Guldan", "character" : { "attributes" : { "strength" : 10, "dexterity" : 10, "intelligence" : 19, "charisma" : 10 }, "class" : "warlock", "race" : "orc", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3e9dc0eefd2e0da746716"), "name" : "Voljin", "character" : { "attributes" : { "strength" : 14, "dexterity" : 12, "intelligence" : 16, "charisma" : 10 }, "class" : "shaman", "race" : "troll", "health" : 260, "mana" : 100 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });
db.character.insert ({ "_id" : ObjectId("58d3ea3e0eefd2e0da746717"), "name" : "Deathwing", "character" : { "attributes" : { "strength" : 20, "dexterity" : 20, "intelligence" : 20, "charisma" : 20 }, "class" : "boss", "race" : "dragon", "health" : 500, "mana" : 500 }, "location" : { "id" : "", "description" : "", "exits" : {  }, "player" : [ {  } ], "inventory" : [ {  } ] }, "gold" : 0, "armor" : [ {  } ], "weapons" : [ {  } ], "inventory" : [ {  } ] });


db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466ec"), "name" : "maze-1", "description" : "a maze of twisty little passages...", "exits" : { "n" : "maze-1", "e" : "troll room", "s" : "maze-4" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466ed"), "name" : "maze-2", "description" : "n/a", "exits" : { "n" : "maze-1", "e" : "maze-5", "w" : "maze-3" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466ee"), "name" : "maze-3", "description" : "n/a", "exits" : { "n" : "maze-2", "w" : "maze-4", "u" : "maze-6" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466ef"), "name" : "maze-4", "description" : "n/a", "exits" : { "e" : "maze-3", "s" : "maze-1", "d" : "maze-2" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f0"), "name" : "maze-5", "description" : "dead end", "exits" : { "s" : "maze-2" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f1"), "name" : "maze-6", "description" : "skeleton", "exits" : { "n" : "maze-3", "e" : "maze-7", "sw" : "maze-8" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f2"), "name" : "maze-7", "description" : "dead end", "exits" : { "w" : "maze-6" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f3"), "name" : "maze-8", "description" : "n/a", "exits" : { "e" : "maze-9", "w" : "maze-8", "u" : "maze-14", "d" : "maze-6" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f4"), "name" : "maze-9", "description" : "n/a", "exits" : { "e" : "maze-10", "s" : "maze-13", "w" : "maze-8", "u" : "maze-12", "d" : "maze-5" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f5"), "name" : "maze-10", "description" : "n/a", "exits" : { "ne" : "maze-9", "se" : "maze-11", "w" : "maze-10" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f6"), "name" : "maze-11", "description" : "dead end", "exits" : { "n" : "maze-10" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f7"), "name" : "maze-12", "description" : "n/a", "exits" : { "ne" : "maze-9", "s" : "maze-9", "w" : "maze-13", "nw" : "maze-12" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f8"), "name" : "maze-13", "description" : "n/a", "exits" : { "se" : "cyclops room", "s" : "maze-9", "w" : "maze-12" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466f9"), "name" : "cyclops room", "description" : "n/a", "exits" : { "e" : "strange passage", "nw" : "maze-13", "u" : "treasure room" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466fa"), "name" : "treasure room", "description" : "n/a", "exits" : { "d" : "cyclops room" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466fb"), "name" : "strange passage", "description" : "n/a", "exits" : { "e" : "to living room wooden door", "w" : "cyclops room" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466fc"), "name" : "maze-14", "description" : "n/a", "exits" : { "n" : "maze-8", "e" : "maze-16", "s" : "maze-17", "w" : "maze-18", "nw" : "maze-14", "d" : "maze-15" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466fd"), "name" : "maze-15", "description" : "n/a", "exits" : { "ne" : "grating room", "sw" : "maze-18", "nw" : "maze-17", "d" : "maze-16" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466fe"), "name" : "grating room", "description" : "n/a", "exits" : { "sw" : "maze-15", "u" : "clearing" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da7466ff"), "name" : "clearing", "description" : "n/a", "exits" : { "d" : "grating room" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da746700"), "name" : "maze-16", "description" : "n/a", "exits" : { "e" : "maze-14", "w" : "maze-17", "u" : "maze-15" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da746701"), "name" : "maze-17", "description" : "n/a", "exits" : { "e" : "maze-14", "s" : "maze-16", "w" : "maze-15", "d" : "maze-18" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da746702"), "name" : "maze-18", "description" : "n/a", "exits" : { "n" : "maze-19", "e" : "maze-17", "sw" : "maze-15", "u" : "maze-14", "d" : "maze-6" }, "players" : [ {  } ], "inventory" : [ {  } ] });
db.location.insert ({ "_id" : ObjectId("58d3cee40eefd2e0da746703"), "name" : "maze-19", "description" : "dead end", "exits" : { "s" : "maze-18" }, "players" : [ {  } ], "inventory" : [ {  } ] });

db.items.insert ({ "_id" : ObjectId("58d1c3f5e73915ebd2f5ca35"), "name" : "Backpack", "type" : "container", "bonus" : null, "slots" : 20, "weight" : 1, "price" : 0 });
db.items.insert ({ "_id" : ObjectId("58d1c3f5e73915ebd2f5ca36"), "name" : "Belt Pouch", "type" : "container", "bonus" : null, "slots" : 6, "weight" : 1, "price" : 0 });
db.items.insert ({ "_id" : ObjectId("58d1c3f5e73915ebd2f5ca37"), "name" : "Dagger", "type" : "weapon", "bonus" : 0, "weight" : 1, "price" : 5, "damage" : 4 });
db.items.insert ({ "_id" : ObjectId("58d1c3f5e73915ebd2f5ca38"), "name" : "Short Sword", "type" : "weapon", "bonus" : 0, "weight" : 9, "damage" : 8, "price" : 10 });
db.items.insert ({ "_id" : ObjectId("58d1c3f5e73915ebd2f5ca39"), "name" : "Axe", "type" : "weapon", "bonus" : 0, "weight" : 9, "damage" : 8, "price" : 10 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca3a"), "name" : "Torch", "type" : "gear", "bonus" : null, "weight" : 1, "price" : 1 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca3b"), "name" : "Helm", "type" : "armor", "bonus" : null, "region" : "head", "durability" : 20, "weight" : 5, "price" : 20 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca3c"), "name" : "Breast Plate", "type" : "armor", "bonus" : 0, "region" : "chest", "weight" : 15, "price" : 100, "durability" : 20 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca3d"), "name" : "Greaves", "type" : "armor", "bonus" : 0, "region" : "legs", "weight" : 12, "price" : 80, "durability" : 20 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca3e"), "name" : "Gauntlets", "type" : "armor", "bonus" : 0, "region" : "arms", "weight" : 8, "price" : 90, "durability" : 20 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca3f"), "name" : "Longbow", "type" : "weapon", "bonus" : 0, "weight" : 3, "price" : 80, "damage" : 6 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca40"), "name" : "Lantern", "type" : "gear", "bonus" : 0, "weight" : 1, "price" : 10 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca41"), "name" : "Spell Book", "type" : "gear", "bonus" : null, "weight" : 5, "price" : 10 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca42"), "name" : "Rope", "type" : "gear", "bonus" : null, "weight" : 2, "price" : 5 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca43"), "name" : "Spell Book", "type" : "gear", "bonus" : null, "weight" : 5, "price" : 10 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca44"), "name" : "Boots", "type" : "armor", "bonus" : 0, "region" : "feet", "weight" : 5, "price" : 10, "durability" : 20 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca45"), "name" : "Bandage", "type" : "gear", "bonus" : null, "weight" : 0, "price" : 1 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca46"), "name" : "Map", "type" : "gear", "bonus" : null, "weight" : 0, "price" : 25 });
db.items.insert ({ "_id" : ObjectId("58d1c3f6e73915ebd2f5ca47"), "name" : "Bedroll", "type" : "gear", "bonus" : null, "weight" : 1, "price" : 7 });
db.items.insert ({ "_id" : ObjectId("58d1c3f7e73915ebd2f5ca48"), "name" : "Holy Symbol", "type" : "gear", "bonus" : null, "weight" : 1, "price" : 30 });
