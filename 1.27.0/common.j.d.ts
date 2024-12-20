/** @noSelfInFile */

/// <reference path="./base.d.ts" />

// ==================
// ==== POINTERS ====
// ==================
declare type ability = agent & { __ability: never; }
declare type agent = handle & { __agent: never; }
declare type aidifficulty = handle & { __aidifficulty: never; }
declare type alliancetype = handle & { __alliancetype: never; }
declare type attacktype = handle & { __attacktype: never; }
declare type blendmode = handle & { __blendmode: never; }
declare type buff = ability & { __buff: never; }
declare type button = agent & { __button: never; }
declare type camerafield = handle & { __camerafield: never; }
declare type camerasetup = handle & { __camerasetup: never; }
declare type damagetype = handle & { __damagetype: never; }
declare type defeatcondition = agent & { __defeatcondition: never; }
declare type destructable = widget & { __destructable: never; }
declare type dialog = agent & { __dialog: never; }
declare type dialogevent = eventid & { __dialogevent: never; }
declare type effect = agent & { __effect: never; }
declare type effecttype = handle & { __effecttype: never; }
declare type event = agent & { __event: never; }
declare type eventid = handle & { __eventid: never; }
declare type fgamestate = gamestate & { __fgamestate: never; }
declare type fogmodifier = agent & { __fogmodifier: never; }
declare type fogstate = handle & { __fogstate: never; }
declare type force = agent & { __force: never; }
declare type gamecache = agent & { __gamecache: never; }
declare type gamedifficulty = handle & { __gamedifficulty: never; }
declare type gameevent = eventid & { __gameevent: never; }
declare type gamespeed = handle & { __gamespeed: never; }
declare type gamestate = handle & { __gamestate: never; }
declare type gametype = handle & { __gametype: never; }
declare type group = agent & { __group: never; }
declare type hashtable = agent & { __hashtable: never; }
declare type igamestate = gamestate & { __igamestate: never; }
declare type image = handle & { __image: never; }
declare type item = widget & { __item: never; }
declare type itempool = handle & { __itempool: never; }
declare type itemtype = handle & { __itemtype: never; }
declare type leaderboard = agent & { __leaderboard: never; }
declare type lightning = handle & { __lightning: never; }
declare type limitop = eventid & { __limitop: never; }
declare type location = agent & { __location: never; }
declare type mapcontrol = handle & { __mapcontrol: never; }
declare type mapdensity = handle & { __mapdensity: never; }
declare type mapflag = handle & { __mapflag: never; }
declare type mapsetting = handle & { __mapsetting: never; }
declare type mapvisibility = handle & { __mapvisibility: never; }
declare type multiboard = agent & { __multiboard: never; }
declare type multiboarditem = agent & { __multiboarditem: never; }
declare type pathingtype = handle & { __pathingtype: never; }
declare type placement = handle & { __placement: never; }
declare type player = agent & { __player: never; }
declare type playercolor = handle & { __playercolor: never; }
declare type playerevent = eventid & { __playerevent: never; }
declare type playergameresult = handle & { __playergameresult: never; }
declare type playerscore = handle & { __playerscore: never; }
declare type playerslotstate = handle & { __playerslotstate: never; }
declare type playerstate = handle & { __playerstate: never; }
declare type playerunitevent = eventid & { __playerunitevent: never; }
declare type quest = agent & { __quest: never; }
declare type questitem = agent & { __questitem: never; }
declare type race = handle & { __race: never; }
declare type racepreference = handle & { __racepreference: never; }
declare type raritycontrol = handle & { __raritycontrol: never; }
declare type rect = agent & { __rect: never; }
declare type region = agent & { __region: never; }
declare type sound = agent & { __sound: never; }
declare type soundtype = handle & { __soundtype: never; }
declare type startlocprio = handle & { __startlocprio: never; }
declare type terraindeformation = handle & { __terraindeformation: never; }
declare type texmapflags = handle & { __texmapflags: never; }
declare type texttag = handle & { __texttag: never; }
declare type timer = agent & { __timer: never; }
declare type timerdialog = agent & { __timerdialog: never; }
declare type trackable = agent & { __trackable: never; }
declare type trigger = agent & { __trigger: never; }
declare type triggeraction = handle & { __triggeraction: never; }
declare type triggercondition = agent & { __triggercondition: never; }
declare type ubersplat = handle & { __ubersplat: never; }
declare type unit = widget & { __unit: never; }
declare type unitevent = eventid & { __unitevent: never; }
declare type unitpool = handle & { __unitpool: never; }
declare type unitstate = handle & { __unitstate: never; }
declare type unittype = handle & { __unittype: never; }
declare type version = handle & { __version: never; }
declare type volumegroup = handle & { __volumegroup: never; }
declare type weapontype = handle & { __weapontype: never; }
declare type weathereffect = handle & { __weathereffect: never; }
declare type widget = agent & { __widget: never; }
declare type widgetevent = eventid & { __widgetevent: never; }

// =================
// ==== GLOBALS ====
// =================
declare const AI_DIFFICULTY_INSANE: null;
declare const AI_DIFFICULTY_NEWBIE: null;
declare const AI_DIFFICULTY_NORMAL: null;
declare const ALLIANCE_HELP_REQUEST: null;
declare const ALLIANCE_HELP_RESPONSE: null;
declare const ALLIANCE_PASSIVE: null;
declare const ALLIANCE_RESCUABLE: null;
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: null;
declare const ALLIANCE_SHARED_CONTROL: null;
declare const ALLIANCE_SHARED_SPELLS: null;
declare const ALLIANCE_SHARED_VISION: null;
declare const ALLIANCE_SHARED_VISION_FORCED: null;
declare const ALLIANCE_SHARED_XP: null;
declare const ATTACK_TYPE_CHAOS: null;
declare const ATTACK_TYPE_HERO: null;
declare const ATTACK_TYPE_MAGIC: null;
declare const ATTACK_TYPE_MELEE: null;
declare const ATTACK_TYPE_NORMAL: null;
declare const ATTACK_TYPE_PIERCE: null;
declare const ATTACK_TYPE_SIEGE: null;
declare const BLEND_MODE_ADDITIVE: null;
declare const BLEND_MODE_BLEND: null;
declare const BLEND_MODE_DONT_CARE: null;
declare const BLEND_MODE_KEYALPHA: null;
declare const BLEND_MODE_MODULATE: null;
declare const BLEND_MODE_MODULATE_2X: null;
declare const BLEND_MODE_NONE: null;
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: null;
declare const CAMERA_FIELD_FARZ: null;
declare const CAMERA_FIELD_FIELD_OF_VIEW: null;
declare const CAMERA_FIELD_ROLL: null;
declare const CAMERA_FIELD_ROTATION: null;
declare const CAMERA_FIELD_TARGET_DISTANCE: null;
declare const CAMERA_FIELD_ZOFFSET: null;
declare const CAMERA_MARGIN_BOTTOM: integer;
declare const CAMERA_MARGIN_LEFT: integer;
declare const CAMERA_MARGIN_RIGHT: integer;
declare const CAMERA_MARGIN_TOP: integer;
declare const DAMAGE_TYPE_ACID: null;
declare const DAMAGE_TYPE_COLD: null;
declare const DAMAGE_TYPE_DEATH: null;
declare const DAMAGE_TYPE_DEFENSIVE: null;
declare const DAMAGE_TYPE_DEMOLITION: null;
declare const DAMAGE_TYPE_DISEASE: null;
declare const DAMAGE_TYPE_DIVINE: null;
declare const DAMAGE_TYPE_ENHANCED: null;
declare const DAMAGE_TYPE_FIRE: null;
declare const DAMAGE_TYPE_FORCE: null;
declare const DAMAGE_TYPE_LIGHTNING: null;
declare const DAMAGE_TYPE_MAGIC: null;
declare const DAMAGE_TYPE_MIND: null;
declare const DAMAGE_TYPE_NORMAL: null;
declare const DAMAGE_TYPE_PLANT: null;
declare const DAMAGE_TYPE_POISON: null;
declare const DAMAGE_TYPE_SHADOW_STRIKE: null;
declare const DAMAGE_TYPE_SLOW_POISON: null;
declare const DAMAGE_TYPE_SONIC: null;
declare const DAMAGE_TYPE_SPIRIT_LINK: null;
declare const DAMAGE_TYPE_UNIVERSAL: null;
declare const DAMAGE_TYPE_UNKNOWN: null;
declare const EFFECT_TYPE_AREA_EFFECT: null;
declare const EFFECT_TYPE_CASTER: null;
declare const EFFECT_TYPE_EFFECT: null;
declare const EFFECT_TYPE_LIGHTNING: null;
declare const EFFECT_TYPE_MISSILE: null;
declare const EFFECT_TYPE_SPECIAL: null;
declare const EFFECT_TYPE_TARGET: null;
declare const EQUAL: null;
declare const EVENT_DIALOG_BUTTON_CLICK: null;
declare const EVENT_DIALOG_CLICK: null;
declare const EVENT_GAME_BUILD_SUBMENU: null;
declare const EVENT_GAME_END_LEVEL: null;
declare const EVENT_GAME_ENTER_REGION: null;
declare const EVENT_GAME_LEAVE_REGION: null;
declare const EVENT_GAME_LOADED: null;
declare const EVENT_GAME_SAVE: null;
declare const EVENT_GAME_SHOW_SKILL: null;
declare const EVENT_GAME_STATE_LIMIT: null;
declare const EVENT_GAME_TIMER_EXPIRED: null;
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: null;
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: null;
declare const EVENT_GAME_TRACKABLE_HIT: null;
declare const EVENT_GAME_TRACKABLE_TRACK: null;
declare const EVENT_GAME_VARIABLE_LIMIT: null;
declare const EVENT_GAME_VICTORY: null;
declare const EVENT_PLAYER_ALLIANCE_CHANGED: null;
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: null;
declare const EVENT_PLAYER_ARROW_DOWN_UP: null;
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: null;
declare const EVENT_PLAYER_ARROW_LEFT_UP: null;
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: null;
declare const EVENT_PLAYER_ARROW_RIGHT_UP: null;
declare const EVENT_PLAYER_ARROW_UP_DOWN: null;
declare const EVENT_PLAYER_ARROW_UP_UP: null;
declare const EVENT_PLAYER_CHAT: null;
declare const EVENT_PLAYER_DEFEAT: null;
declare const EVENT_PLAYER_END_CINEMATIC: null;
declare const EVENT_PLAYER_HERO_LEVEL: null;
declare const EVENT_PLAYER_HERO_REVIVABLE: null;
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: null;
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: null;
declare const EVENT_PLAYER_HERO_REVIVE_START: null;
declare const EVENT_PLAYER_HERO_SKILL: null;
declare const EVENT_PLAYER_LEAVE: null;
declare const EVENT_PLAYER_STATE_LIMIT: null;
declare const EVENT_PLAYER_UNIT_ATTACKED: null;
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: null;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: null;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: null;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: null;
declare const EVENT_PLAYER_UNIT_DEATH: null;
declare const EVENT_PLAYER_UNIT_DECAY: null;
declare const EVENT_PLAYER_UNIT_DESELECTED: null;
declare const EVENT_PLAYER_UNIT_DETECTED: null;
declare const EVENT_PLAYER_UNIT_DROP_ITEM: null;
declare const EVENT_PLAYER_UNIT_HIDDEN: null;
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: null;
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: null;
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: null;
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: null;
declare const EVENT_PLAYER_UNIT_LOADED: null;
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: null;
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: null;
declare const EVENT_PLAYER_UNIT_RESCUED: null;
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: null;
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: null;
declare const EVENT_PLAYER_UNIT_RESEARCH_START: null;
declare const EVENT_PLAYER_UNIT_SELECTED: null;
declare const EVENT_PLAYER_UNIT_SELL: null;
declare const EVENT_PLAYER_UNIT_SELL_ITEM: null;
declare const EVENT_PLAYER_UNIT_SPELL_CAST: null;
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: null;
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: null;
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: null;
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: null;
declare const EVENT_PLAYER_UNIT_SUMMON: null;
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: null;
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: null;
declare const EVENT_PLAYER_UNIT_TRAIN_START: null;
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: null;
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: null;
declare const EVENT_PLAYER_UNIT_UPGRADE_START: null;
declare const EVENT_PLAYER_UNIT_USE_ITEM: null;
declare const EVENT_PLAYER_VICTORY: null;
declare const EVENT_UNIT_ACQUIRED_TARGET: null;
declare const EVENT_UNIT_ATTACKED: null;
declare const EVENT_UNIT_CHANGE_OWNER: null;
declare const EVENT_UNIT_CONSTRUCT_CANCEL: null;
declare const EVENT_UNIT_CONSTRUCT_FINISH: null;
declare const EVENT_UNIT_DAMAGED: null;
declare const EVENT_UNIT_DEATH: null;
declare const EVENT_UNIT_DECAY: null;
declare const EVENT_UNIT_DESELECTED: null;
declare const EVENT_UNIT_DETECTED: null;
declare const EVENT_UNIT_DROP_ITEM: null;
declare const EVENT_UNIT_HERO_LEVEL: null;
declare const EVENT_UNIT_HERO_REVIVABLE: null;
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: null;
declare const EVENT_UNIT_HERO_REVIVE_FINISH: null;
declare const EVENT_UNIT_HERO_REVIVE_START: null;
declare const EVENT_UNIT_HERO_SKILL: null;
declare const EVENT_UNIT_HIDDEN: null;
declare const EVENT_UNIT_ISSUED_ORDER: null;
declare const EVENT_UNIT_ISSUED_POINT_ORDER: null;
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: null;
declare const EVENT_UNIT_LOADED: null;
declare const EVENT_UNIT_PAWN_ITEM: null;
declare const EVENT_UNIT_PICKUP_ITEM: null;
declare const EVENT_UNIT_RESCUED: null;
declare const EVENT_UNIT_RESEARCH_CANCEL: null;
declare const EVENT_UNIT_RESEARCH_FINISH: null;
declare const EVENT_UNIT_RESEARCH_START: null;
declare const EVENT_UNIT_SELECTED: null;
declare const EVENT_UNIT_SELL: null;
declare const EVENT_UNIT_SELL_ITEM: null;
declare const EVENT_UNIT_SPELL_CAST: null;
declare const EVENT_UNIT_SPELL_CHANNEL: null;
declare const EVENT_UNIT_SPELL_EFFECT: null;
declare const EVENT_UNIT_SPELL_ENDCAST: null;
declare const EVENT_UNIT_SPELL_FINISH: null;
declare const EVENT_UNIT_STATE_LIMIT: null;
declare const EVENT_UNIT_SUMMON: null;
declare const EVENT_UNIT_TARGET_IN_RANGE: null;
declare const EVENT_UNIT_TRAIN_CANCEL: null;
declare const EVENT_UNIT_TRAIN_FINISH: null;
declare const EVENT_UNIT_TRAIN_START: null;
declare const EVENT_UNIT_UPGRADE_CANCEL: null;
declare const EVENT_UNIT_UPGRADE_FINISH: null;
declare const EVENT_UNIT_UPGRADE_START: null;
declare const EVENT_UNIT_USE_ITEM: null;
declare const EVENT_WIDGET_DEATH: null;
declare const FALSE: null;
declare const FOG_OF_WAR_FOGGED: null;
declare const FOG_OF_WAR_MASKED: null;
declare const FOG_OF_WAR_VISIBLE: null;
declare const GAME_STATE_DISCONNECTED: null;
declare const GAME_STATE_DIVINE_INTERVENTION: null;
declare const GAME_STATE_TIME_OF_DAY: null;
declare const GAME_TYPE_BLIZ: null;
declare const GAME_TYPE_FFA: null;
declare const GAME_TYPE_FOUR_TEAM_PLAY: null;
declare const GAME_TYPE_MELEE: null;
declare const GAME_TYPE_ONE_ON_ONE: null;
declare const GAME_TYPE_THREE_TEAM_PLAY: null;
declare const GAME_TYPE_TWO_TEAM_PLAY: null;
declare const GAME_TYPE_USE_MAP_SETTINGS: null;
declare const GREATER_THAN: null;
declare const GREATER_THAN_OR_EQUAL: null;
declare const ITEM_TYPE_ANY: null;
declare const ITEM_TYPE_ARTIFACT: null;
declare const ITEM_TYPE_CAMPAIGN: null;
declare const ITEM_TYPE_CHARGED: null;
declare const ITEM_TYPE_MISCELLANEOUS: null;
declare const ITEM_TYPE_PERMANENT: null;
declare const ITEM_TYPE_POWERUP: null;
declare const ITEM_TYPE_PURCHASABLE: null;
declare const ITEM_TYPE_TOME: null;
declare const ITEM_TYPE_UNKNOWN: null;
declare const JASS_MAX_ARRAY_SIZE: integer;
declare const LESS_THAN: null;
declare const LESS_THAN_OR_EQUAL: null;
declare const MAP_ALLIANCE_CHANGES_HIDDEN: null;
declare const MAP_CHEATS: null;
declare const MAP_CHEATS_HIDDEN: null;
declare const MAP_CONTROL_COMPUTER: null;
declare const MAP_CONTROL_CREEP: null;
declare const MAP_CONTROL_NEUTRAL: null;
declare const MAP_CONTROL_NONE: null;
declare const MAP_CONTROL_RESCUABLE: null;
declare const MAP_CONTROL_USER: null;
declare const MAP_DENSITY_HEAVY: null;
declare const MAP_DENSITY_LIGHT: null;
declare const MAP_DENSITY_MEDIUM: null;
declare const MAP_DENSITY_NONE: null;
declare const MAP_DIFFICULTY_EASY: null;
declare const MAP_DIFFICULTY_HARD: null;
declare const MAP_DIFFICULTY_INSANE: null;
declare const MAP_DIFFICULTY_NORMAL: null;
declare const MAP_FIXED_COLORS: null;
declare const MAP_FOG_ALWAYS_VISIBLE: null;
declare const MAP_FOG_HIDE_TERRAIN: null;
declare const MAP_FOG_MAP_EXPLORED: null;
declare const MAP_LOCK_ALLIANCE_CHANGES: null;
declare const MAP_LOCK_RANDOM_SEED: null;
declare const MAP_LOCK_RESOURCE_TRADING: null;
declare const MAP_LOCK_SPEED: null;
declare const MAP_LOC_PRIO_HIGH: null;
declare const MAP_LOC_PRIO_LOW: null;
declare const MAP_LOC_PRIO_NOT: null;
declare const MAP_OBSERVERS: null;
declare const MAP_OBSERVERS_ON_DEATH: null;
declare const MAP_PLACEMENT_FIXED: null;
declare const MAP_PLACEMENT_RANDOM: null;
declare const MAP_PLACEMENT_TEAMS_TOGETHER: null;
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: null;
declare const MAP_RANDOM_HERO: null;
declare const MAP_RANDOM_RACES: null;
declare const MAP_RELOADED: null;
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: null;
declare const MAP_SHARED_ADVANCED_CONTROL: null;
declare const MAP_SPEED_FAST: null;
declare const MAP_SPEED_FASTEST: null;
declare const MAP_SPEED_NORMAL: null;
declare const MAP_SPEED_SLOW: null;
declare const MAP_SPEED_SLOWEST: null;
declare const MAP_USE_HANDICAPS: null;
declare const NOT_EQUAL: null;
declare const PATHING_TYPE_AMPHIBIOUSPATHING: null;
declare const PATHING_TYPE_ANY: null;
declare const PATHING_TYPE_BLIGHTPATHING: null;
declare const PATHING_TYPE_BUILDABILITY: null;
declare const PATHING_TYPE_FLOATABILITY: null;
declare const PATHING_TYPE_FLYABILITY: null;
declare const PATHING_TYPE_PEONHARVESTPATHING: null;
declare const PATHING_TYPE_WALKABILITY: null;
declare const PLAYER_COLOR_AQUA: null;
declare const PLAYER_COLOR_BLUE: null;
declare const PLAYER_COLOR_BROWN: null;
declare const PLAYER_COLOR_CYAN: null;
declare const PLAYER_COLOR_GREEN: null;
declare const PLAYER_COLOR_LIGHT_BLUE: null;
declare const PLAYER_COLOR_LIGHT_GRAY: null;
declare const PLAYER_COLOR_ORANGE: null;
declare const PLAYER_COLOR_PINK: null;
declare const PLAYER_COLOR_PURPLE: null;
declare const PLAYER_COLOR_RED: null;
declare const PLAYER_COLOR_YELLOW: null;
declare const PLAYER_GAME_RESULT_DEFEAT: null;
declare const PLAYER_GAME_RESULT_NEUTRAL: null;
declare const PLAYER_GAME_RESULT_TIE: null;
declare const PLAYER_GAME_RESULT_VICTORY: null;
declare const PLAYER_NEUTRAL_AGGRESSIVE: integer;
declare const PLAYER_NEUTRAL_PASSIVE: integer;
declare const PLAYER_SCORE_FOOD_MAXPROD: null;
declare const PLAYER_SCORE_FOOD_MAXUSED: null;
declare const PLAYER_SCORE_GOLD_GIVEN: null;
declare const PLAYER_SCORE_GOLD_LOST_TAX: null;
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: null;
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: null;
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: null;
declare const PLAYER_SCORE_GOLD_RECEIVED: null;
declare const PLAYER_SCORE_HEROES_KILLED: null;
declare const PLAYER_SCORE_HERO_TOTAL: null;
declare const PLAYER_SCORE_ITEMS_GAINED: null;
declare const PLAYER_SCORE_LUMBER_GIVEN: null;
declare const PLAYER_SCORE_LUMBER_LOST_TAX: null;
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: null;
declare const PLAYER_SCORE_LUMBER_RECEIVED: null;
declare const PLAYER_SCORE_LUMBER_TOTAL: null;
declare const PLAYER_SCORE_MERCS_HIRED: null;
declare const PLAYER_SCORE_RESOURCE_TOTAL: null;
declare const PLAYER_SCORE_STRUCT_BUILT: null;
declare const PLAYER_SCORE_STRUCT_RAZED: null;
declare const PLAYER_SCORE_TECH_PERCENT: null;
declare const PLAYER_SCORE_TOTAL: null;
declare const PLAYER_SCORE_UNITS_KILLED: null;
declare const PLAYER_SCORE_UNITS_TRAINED: null;
declare const PLAYER_SCORE_UNIT_TOTAL: null;
declare const PLAYER_SLOT_STATE_EMPTY: null;
declare const PLAYER_SLOT_STATE_LEFT: null;
declare const PLAYER_SLOT_STATE_PLAYING: null;
declare const PLAYER_STATE_ALLIED_VICTORY: null;
declare const PLAYER_STATE_FOOD_CAP_CEILING: null;
declare const PLAYER_STATE_GAME_RESULT: null;
declare const PLAYER_STATE_GIVES_BOUNTY: null;
declare const PLAYER_STATE_GOLD_GATHERED: null;
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: null;
declare const PLAYER_STATE_LUMBER_GATHERED: null;
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: null;
declare const PLAYER_STATE_NO_CREEP_SLEEP: null;
declare const PLAYER_STATE_OBSERVER: null;
declare const PLAYER_STATE_OBSERVER_ON_DEATH: null;
declare const PLAYER_STATE_PLACED: null;
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: null;
declare const PLAYER_STATE_RESOURCE_FOOD_USED: null;
declare const PLAYER_STATE_RESOURCE_GOLD: null;
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: null;
declare const PLAYER_STATE_RESOURCE_LUMBER: null;
declare const PLAYER_STATE_UNFOLLOWABLE: null;
declare const RACE_DEMON: null;
declare const RACE_HUMAN: null;
declare const RACE_NIGHTELF: null;
declare const RACE_ORC: null;
declare const RACE_OTHER: null;
declare const RACE_PREF_DEMON: null;
declare const RACE_PREF_HUMAN: null;
declare const RACE_PREF_NIGHTELF: null;
declare const RACE_PREF_ORC: null;
declare const RACE_PREF_RANDOM: null;
declare const RACE_PREF_UNDEAD: null;
declare const RACE_PREF_USER_SELECTABLE: null;
declare const RACE_UNDEAD: null;
declare const RARITY_FREQUENT: null;
declare const RARITY_RARE: null;
declare const SOUND_TYPE_EFFECT: null;
declare const SOUND_TYPE_EFFECT_LOOPED: null;
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: null;
declare const SOUND_VOLUMEGROUP_COMBAT: null;
declare const SOUND_VOLUMEGROUP_FIRE: null;
declare const SOUND_VOLUMEGROUP_MUSIC: null;
declare const SOUND_VOLUMEGROUP_SPELLS: null;
declare const SOUND_VOLUMEGROUP_UI: null;
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: null;
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: null;
declare const TEXMAP_FLAG_NONE: null;
declare const TEXMAP_FLAG_WRAP_U: null;
declare const TEXMAP_FLAG_WRAP_UV: null;
declare const TEXMAP_FLAG_WRAP_V: null;
declare const TRUE: null;
declare const UNIT_STATE_LIFE: null;
declare const UNIT_STATE_MANA: null;
declare const UNIT_STATE_MAX_LIFE: null;
declare const UNIT_STATE_MAX_MANA: null;
declare const UNIT_TYPE_ANCIENT: null;
declare const UNIT_TYPE_ATTACKS_FLYING: null;
declare const UNIT_TYPE_ATTACKS_GROUND: null;
declare const UNIT_TYPE_DEAD: null;
declare const UNIT_TYPE_ETHEREAL: null;
declare const UNIT_TYPE_FLYING: null;
declare const UNIT_TYPE_GIANT: null;
declare const UNIT_TYPE_GROUND: null;
declare const UNIT_TYPE_HERO: null;
declare const UNIT_TYPE_MAGIC_IMMUNE: null;
declare const UNIT_TYPE_MECHANICAL: null;
declare const UNIT_TYPE_MELEE_ATTACKER: null;
declare const UNIT_TYPE_PEON: null;
declare const UNIT_TYPE_PLAGUED: null;
declare const UNIT_TYPE_POISONED: null;
declare const UNIT_TYPE_POLYMORPHED: null;
declare const UNIT_TYPE_RANGED_ATTACKER: null;
declare const UNIT_TYPE_RESISTANT: null;
declare const UNIT_TYPE_SAPPER: null;
declare const UNIT_TYPE_SLEEPING: null;
declare const UNIT_TYPE_SNARED: null;
declare const UNIT_TYPE_STRUCTURE: null;
declare const UNIT_TYPE_STUNNED: null;
declare const UNIT_TYPE_SUMMONED: null;
declare const UNIT_TYPE_TAUREN: null;
declare const UNIT_TYPE_TOWNHALL: null;
declare const UNIT_TYPE_UNDEAD: null;
declare const VERSION_FROZEN_THRONE: null;
declare const VERSION_REIGN_OF_CHAOS: null;
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: null;
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: null;
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: null;
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: null;
declare const WEAPON_TYPE_METAL_HEAVY_BASH: null;
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: null;
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: null;
declare const WEAPON_TYPE_METAL_HEAVY_STAB: null;
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: null;
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: null;
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: null;
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: null;
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: null;
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: null;
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: null;
declare const WEAPON_TYPE_WHOKNOWS: null;
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: null;
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: null;
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: null;
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: null;
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: null;
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: null;
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: null;
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: null;

// =================
// ==== NATIVES ====
// =================
declare function AbilityId(abilityIdString: string): number;

declare function AbilityId2String(abilityId: integer): Option<string>;

declare function Acos(x: real): number;

declare function AddHeroXP(whichHero: unit, xpToAdd: integer, showEyeCandy: boolean): void;

declare function AddIndicator(whichWidget: widget, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void;

declare function AddItemToStock(whichUnit: unit, itemId: integer, currentStock: integer, stockMax: integer): void;

declare function AddLightning(codeName: string, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): Option<lightning>;

declare function AddLightningEx(codeName: string, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): Option<lightning>;

declare function AddPlayerTechResearched(whichPlayer: player, techid: integer, levels: integer): void;

declare function AddResourceAmount(whichUnit: unit, amount: integer): void;

declare function AddSpecialEffect(modelName: string, x: real, y: real): Option<effect>;

declare function AddSpecialEffectLoc(modelName: string, where: location): Option<effect>;

declare function AddSpecialEffectTarget(modelName: string, targetWidget: widget, attachPointName: string): Option<effect>;

declare function AddSpellEffect(abilityString: string, t: effecttype, x: real, y: real): Option<effect>;

declare function AddSpellEffectById(abilityId: integer, t: effecttype, x: real, y: real): Option<effect>;

declare function AddSpellEffectByIdLoc(abilityId: integer, t: effecttype, where: location): Option<effect>;

declare function AddSpellEffectLoc(abilityString: string, t: effecttype, where: location): Option<effect>;

declare function AddSpellEffectTarget(modelName: string, t: effecttype, targetWidget: widget, attachPoint: string): Option<effect>;

declare function AddSpellEffectTargetById(abilityId: integer, t: effecttype, targetWidget: widget, attachPoint: string): Option<effect>;

declare function AddUnitAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): void;

declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void;

declare function AddUnitToStock(whichUnit: unit, unitId: integer, currentStock: integer, stockMax: integer): void;

declare function AddWeatherEffect(where: rect, effectID: integer): Option<weathereffect>;

declare function AdjustCameraField(whichField: camerafield, offset: real, duration: real): void;

declare function And(operandA: boolexpr, operandB: boolexpr): boolexpr;

declare function Asin(y: real): number;

declare function Atan(x: real): number;

declare function Atan2(y: real, x: real): number;

declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): void;

declare function CachePlayerHeroData(whichPlayer: player): void;

declare function CameraSetSmoothingFactor(factor: real): void;

declare function CameraSetSourceNoise(mag: real, velocity: real): void;

declare function CameraSetSourceNoiseEx(mag: real, velocity: real, vertOnly: boolean): void;

declare function CameraSetTargetNoise(mag: real, velocity: real): void;

declare function CameraSetTargetNoiseEx(mag: real, velocity: real, vertOnly: boolean): void;

declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void;

declare function CameraSetupApplyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: real): void;

declare function CameraSetupApplyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: real, forceDuration: real): void;

declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: real): void;

declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location;

declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): number;

declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): number;

declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): number;

declare function CameraSetupSetDestPosition(whichSetup: camerasetup, x: real, y: real, duration: real): void;

declare function CameraSetupSetField(whichSetup: camerasetup, whichField: camerafield, value: real, duration: real): void;

declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void;

declare function Cheat(cheatStr: string): void;

declare function ChooseRandomCreep(level: integer): number;

declare function ChooseRandomItem(level: integer): number;

declare function ChooseRandomItemEx(whichType: itemtype, level: integer): number;

declare function ChooseRandomNPBuilding(): number;

declare function ClearMapMusic(): void;

declare function ClearSelection(): void;

declare function ClearTextMessages(): void;

declare function CommandAI(num: player, command: integer, data: integer): void;

declare function Condition(func: code): conditionfunc;

declare function ConvertAIDifficulty(i: integer): Option<aidifficulty>;

declare function ConvertAllianceType(i: integer): Option<alliancetype>;

declare function ConvertAttackType(i: integer): Option<attacktype>;

declare function ConvertBlendMode(i: integer): Option<blendmode>;

declare function ConvertCameraField(i: integer): Option<camerafield>;

declare function ConvertDamageType(i: integer): Option<damagetype>;

declare function ConvertDialogEvent(i: integer): Option<dialogevent>;

declare function ConvertEffectType(i: integer): Option<effecttype>;

declare function ConvertFGameState(i: integer): Option<fgamestate>;

declare function ConvertFogState(i: integer): Option<fogstate>;

declare function ConvertGameDifficulty(i: integer): Option<gamedifficulty>;

declare function ConvertGameEvent(i: integer): Option<gameevent>;

declare function ConvertGameSpeed(i: integer): Option<gamespeed>;

declare function ConvertGameType(i: integer): Option<gametype>;

declare function ConvertIGameState(i: integer): Option<igamestate>;

declare function ConvertItemType(i: integer): Option<itemtype>;

declare function ConvertLimitOp(i: integer): Option<limitop>;

declare function ConvertMapControl(i: integer): Option<mapcontrol>;

declare function ConvertMapDensity(i: integer): Option<mapdensity>;

declare function ConvertMapFlag(i: integer): Option<mapflag>;

declare function ConvertMapSetting(i: integer): Option<mapsetting>;

declare function ConvertMapVisibility(i: integer): Option<mapvisibility>;

declare function ConvertPathingType(i: integer): Option<pathingtype>;

declare function ConvertPlacement(i: integer): Option<placement>;

declare function ConvertPlayerColor(i: integer): Option<playercolor>;

declare function ConvertPlayerEvent(i: integer): Option<playerevent>;

declare function ConvertPlayerGameResult(i: integer): Option<playergameresult>;

declare function ConvertPlayerScore(i: integer): Option<playerscore>;

declare function ConvertPlayerSlotState(i: integer): Option<playerslotstate>;

declare function ConvertPlayerState(i: integer): Option<playerstate>;

declare function ConvertPlayerUnitEvent(i: integer): Option<playerunitevent>;

declare function ConvertRace(i: integer): Option<race>;

declare function ConvertRacePref(i: integer): Option<racepreference>;

declare function ConvertRarityControl(i: integer): Option<raritycontrol>;

declare function ConvertSoundType(i: integer): Option<soundtype>;

declare function ConvertStartLocPrio(i: integer): Option<startlocprio>;

declare function ConvertTexMapFlags(i: integer): Option<texmapflags>;

declare function ConvertUnitEvent(i: integer): Option<unitevent>;

declare function ConvertUnitState(i: integer): Option<unitstate>;

declare function ConvertUnitType(i: integer): Option<unittype>;

declare function ConvertVersion(i: integer): Option<version>;

declare function ConvertVolumeGroup(i: integer): Option<volumegroup>;

declare function ConvertWeaponType(i: integer): Option<weapontype>;

declare function ConvertWidgetEvent(i: integer): Option<widgetevent>;

declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean;

declare function Cos(radians: real): number;

declare function CreateBlightedGoldmine(id: player, x: real, y: real, face: real): Option<unit>;

declare function CreateCameraSetup(): camerasetup;

declare function CreateCorpse(whichPlayer: player, unitid: integer, x: real, y: real, face: real): Option<unit>;

declare function CreateDeadDestructable(objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): Option<destructable>;

declare function CreateDeadDestructableZ(objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): Option<destructable>;

declare function CreateDefeatCondition(): Option<defeatcondition>;

declare function CreateDestructable(objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): Option<destructable>;

declare function CreateDestructableZ(objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): Option<destructable>;

declare function CreateFogModifierRadius(forWhichPlayer: player, whichState: fogstate, centerx: real, centerY: real, radius: real, useSharedVision: boolean, afterUnits: boolean): Option<fogmodifier>;

declare function CreateFogModifierRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: real, useSharedVision: boolean, afterUnits: boolean): Option<fogmodifier>;

declare function CreateFogModifierRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): Option<fogmodifier>;

declare function CreateForce(): Option<force>;

declare function CreateGroup(): Option<group>;

declare function CreateImage(file: string, sizeX: real, sizeY: real, sizeZ: real, posX: real, posY: real, posZ: real, originX: real, originY: real, originZ: real, imageType: integer): Option<image>;

declare function CreateItem(itemid: integer, x: real, y: real): Option<item>;

declare function CreateItemPool(): Option<itempool>;

declare function CreateLeaderboard(): Option<leaderboard>;

declare function CreateMIDISound(soundLabel: string, fadeInRate: integer, fadeOutRate: integer): Option<sound>;

declare function CreateMultiboard(): Option<multiboard>;

declare function CreateQuest(): Option<quest>;

declare function CreateRegion(): region;

declare function CreateSound(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, eaxSetting: string): Option<sound>;

declare function CreateSoundFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, SLKEntryName: string): Option<sound>;

declare function CreateSoundFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer): Option<sound>;

declare function CreateTextTag(): Option<texttag>;

declare function CreateTimer(): timer;

declare function CreateTimerDialog(t: timer): Option<timerdialog>;

declare function CreateTrackable(trackableModelPath: string, x: real, y: real, facing: real): Option<trackable>;

declare function CreateTrigger(): trigger;

declare function CreateUbersplat(x: real, y: real, name: string, red: integer, green: integer, blue: integer, alpha: integer, forcePaused: boolean, noBirthTime: boolean): Option<ubersplat>;

declare function CreateUnit(id: player, unitid: integer, x: real, y: real, face: real): Option<unit>;

declare function CreateUnitAtLoc(id: player, unitid: integer, whichLocation: location, face: real): Option<unit>;

declare function CreateUnitAtLocByName(id: player, unitname: string, whichLocation: location, face: real): Option<unit>;

declare function CreateUnitByName(whichPlayer: player, unitname: string, x: real, y: real, face: real): Option<unit>;

declare function CreateUnitPool(): Option<unitpool>;

declare function CripplePlayer(whichPlayer: player, toWhichPlayers: force, flag: boolean): void;

declare function DecUnitAbilityLevel(whichUnit: unit, abilcode: integer): number;

declare function DefeatConditionSetDescription(whichCondition: defeatcondition, description: string): void;

declare function DefineStartLocation(whichStartLoc: integer, x: real, y: real): void;

declare function DefineStartLocationLoc(whichStartLoc: integer, whichLocation: location): void;

declare function Deg2Rad(degrees: real): number;

declare function DestroyBoolExpr(e: boolexpr): void;

declare function DestroyCondition(c: conditionfunc): void;

declare function DestroyDefeatCondition(whichCondition: defeatcondition): void;

declare function DestroyEffect(whichEffect: effect): void;

declare function DestroyFilter(f: filterfunc): void;

declare function DestroyFogModifier(whichFogModifier: fogmodifier): void;

declare function DestroyForce(whichForce: force): void;

declare function DestroyGroup(whichGroup: group): void;

declare function DestroyImage(whichImage: image): void;

declare function DestroyItemPool(whichItemPool: itempool): void;

declare function DestroyLeaderboard(lb: leaderboard): void;

declare function DestroyLightning(whichBolt: lightning): boolean;

declare function DestroyMultiboard(lb: multiboard): void;

declare function DestroyQuest(whichQuest: quest): void;

declare function DestroyTextTag(t: texttag): void;

declare function DestroyTimer(whichTimer: timer): void;

declare function DestroyTimerDialog(whichDialog: timerdialog): void;

declare function DestroyTrigger(whichTrigger: trigger): void;

declare function DestroyUbersplat(whichSplat: ubersplat): void;

declare function DestroyUnitPool(whichPool: unitpool): void;

declare function DestructableRestoreLife(d: destructable, life: real, birth: boolean): void;

declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: integer): Option<button>;

declare function DialogAddQuitButton(whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: integer): Option<button>;

declare function DialogClear(whichDialog: dialog): void;

declare function DialogCreate(): Option<dialog>;

declare function DialogDestroy(whichDialog: dialog): void;

declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): void;

declare function DialogSetMessage(whichDialog: dialog, messageText: string): void;

declare function DisableRestartMission(flag: boolean): void;

declare function DisableTrigger(whichTrigger: trigger): void;

declare function DisplayCineFilter(flag: boolean): void;

declare function DisplayLoadDialog(): void;

declare function DisplayTextToPlayer(toPlayer: player, x: real, y: real, message: string): void;

declare function DisplayTimedTextFromPlayer(toPlayer: player, x: real, y: real, duration: real, message: string): void;

declare function DisplayTimedTextToPlayer(toPlayer: player, x: real, y: real, duration: real, message: string): void;

declare function DoNotSaveReplay(): void;

declare function EnableDragSelect(state: boolean, ui: boolean): void;

declare function EnableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): void;

declare function EnableOcclusion(flag: boolean): void;

declare function EnablePreSelect(state: boolean, ui: boolean): void;

declare function EnableSelect(state: boolean, ui: boolean): void;

declare function EnableTrigger(whichTrigger: trigger): void;

declare function EnableUserControl(b: boolean): void;

declare function EnableUserUI(b: boolean): void;

declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void;

declare function EnableWorldFogBoundary(b: boolean): void;

declare function EndCinematicScene(): void;

declare function EndGame(doScoreScreen: boolean): void;

declare function EndThematicMusic(): void;

declare function EnumDestructablesInRect(r: rect, filter: Option<boolexpr>, actionFunc: code): void;

declare function EnumItemsInRect(r: rect, filter: Option<boolexpr>, actionFunc: code): void;

declare function ExecuteFunc(funcName: string): void;

declare function Filter(func: code): filterfunc;

declare function FinishUbersplat(whichSplat: ubersplat): void;

declare function FirstOfGroup(whichGroup: group): Option<unit>;

declare function FlashQuestDialogButton(): void;

declare function FlushChildHashtable(table: hashtable, parentKey: integer): void;

declare function FlushGameCache(cache: gamecache): void;

declare function FlushParentHashtable(table: hashtable): void;

declare function FlushStoredBoolean(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredInteger(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredMission(cache: gamecache, missionKey: string): void;

declare function FlushStoredReal(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredString(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredUnit(cache: gamecache, missionKey: string, key: string): void;

declare function FogEnable(enable: boolean): void;

declare function FogMaskEnable(enable: boolean): void;

declare function FogModifierStart(whichFogModifier: fogmodifier): void;

declare function FogModifierStop(whichFogModifier: fogmodifier): void;

declare function ForceAddPlayer(whichForce: force, whichPlayer: player): void;

declare function ForceCampaignSelectScreen(): void;

declare function ForceCinematicSubtitles(flag: boolean): void;

declare function ForceClear(whichForce: force): void;

declare function ForceEnumAllies(whichForce: force, whichPlayer: player, filter?: boolexpr): void;

declare function ForceEnumEnemies(whichForce: force, whichPlayer: player, filter?: boolexpr): void;

declare function ForceEnumPlayers(whichForce: force, filter?: boolexpr): void;

declare function ForceEnumPlayersCounted(whichForce: force, filter: Option<boolexpr>, countLimit: integer): void;

declare function ForcePlayerStartLocation(whichPlayer: player, startLocIndex: integer): void;

declare function ForceQuestDialogUpdate(): void;

declare function ForceRemovePlayer(whichForce: force, whichPlayer: player): void;

declare function ForceUICancel(): void;

declare function ForceUIKey(key: string): void;

declare function ForForce(whichForce: force, callback: code): void;

declare function ForGroup(whichGroup: group, callback: code): void;

declare function GetAbilityEffect(abilityString: string, t: effecttype, index: integer): Option<string>;

declare function GetAbilityEffectById(abilityId: integer, t: effecttype, index: integer): Option<string>;

declare function GetAbilitySound(abilityString: string, t: soundtype): Option<string>;

declare function GetAbilitySoundById(abilityId: integer, t: soundtype): Option<string>;

declare function GetAIDifficulty(num: player): Option<aidifficulty>;

declare function GetAllyColorFilterState(): number;

declare function GetAttacker(): Option<unit>;

declare function GetBuyingUnit(): Option<unit>;

declare function GetCameraBoundMaxX(): number;

declare function GetCameraBoundMaxY(): number;

declare function GetCameraBoundMinX(): number;

declare function GetCameraBoundMinY(): number;

declare function GetCameraEyePositionLoc(): Option<location>;

declare function GetCameraEyePositionX(): number;

declare function GetCameraEyePositionY(): number;

declare function GetCameraEyePositionZ(): number;

declare function GetCameraField(whichField: camerafield): number;

declare function GetCameraMargin(whichMargin: integer): number;

declare function GetCameraTargetPositionLoc(): Option<location>;

declare function GetCameraTargetPositionX(): number;

declare function GetCameraTargetPositionY(): number;

declare function GetCameraTargetPositionZ(): number;

declare function GetCancelledStructure(): Option<unit>;

declare function GetChangingUnit(): Option<unit>;

declare function GetChangingUnitPrevOwner(): Option<player>;

declare function GetClickedButton(): Option<button>;

declare function GetClickedDialog(): Option<dialog>;

declare function GetConstructedStructure(): Option<unit>;

declare function GetConstructingStructure(): Option<unit>;

declare function GetCreatureDensity(): Option<mapdensity>;

declare function GetCreepCampFilterState(): boolean;

declare function GetCustomCampaignButtonVisible(whichButton: integer): boolean;

declare function GetDecayingUnit(): Option<unit>;

declare function GetDefaultDifficulty(): Option<gamedifficulty>;

declare function GetDestructableLife(d: destructable): number;

declare function GetDestructableMaxLife(d: destructable): number;

declare function GetDestructableName(d: destructable): Option<string>;

declare function GetDestructableOccluderHeight(d: destructable): number;

declare function GetDestructableTypeId(d: destructable): number;

declare function GetDestructableX(d: destructable): number;

declare function GetDestructableY(d: destructable): number;

declare function GetDetectedUnit(): Option<unit>;

declare function GetDyingUnit(): Option<unit>;

declare function GetEnteringUnit(): Option<unit>;

declare function GetEnumDestructable(): Option<destructable>;

declare function GetEnumItem(): Option<item>;

declare function GetEnumPlayer(): Option<player>;

declare function GetEnumUnit(): Option<unit>;

declare function GetEventDamage(): number;

declare function GetEventDamageSource(): Option<unit>;

declare function GetEventDetectingPlayer(): Option<player>;

declare function GetEventGameState(): Option<gamestate>;

declare function GetEventPlayerChatString(): Option<string>;

declare function GetEventPlayerChatStringMatched(): Option<string>;

declare function GetEventPlayerState(): Option<playerstate>;

declare function GetEventTargetUnit(): Option<unit>;

declare function GetEventUnitState(): Option<unitstate>;

declare function GetExpiredTimer(): Option<timer>;

declare function GetFilterDestructable(): Option<destructable>;

declare function GetFilterItem(): Option<item>;

declare function GetFilterPlayer(): Option<player>;

declare function GetFilterUnit(): Option<unit>;

declare function GetFloatGameState(whichFloatGameState: fgamestate): number;

declare function GetFoodMade(unitId: integer): number;

declare function GetFoodUsed(unitId: integer): number;

declare function GetGameDifficulty(): Option<gamedifficulty>;

declare function GetGamePlacement(): Option<placement>;

declare function GetGameSpeed(): Option<gamespeed>;

declare function GetGameTypeSelected(): Option<gametype>;

declare function GetHandleId(h: handle): number;

declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroLevel(whichHero: unit): number;

declare function GetHeroProperName(whichHero: unit): Option<string>;

declare function GetHeroSkillPoints(whichHero: unit): number;

declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroXP(whichHero: unit): number;

declare function GetIntegerGameState(whichIntegerGameState: igamestate): number;

declare function GetIssuedOrderId(): number;

declare function GetItemCharges(whichItem: item): number;

declare function GetItemLevel(whichItem: item): number;

declare function GetItemName(whichItem: item): Option<string>;

declare function GetItemPlayer(whichItem: item): Option<player>;

declare function GetItemType(whichItem: item): Option<itemtype>;

declare function GetItemTypeId(i: item): number;

declare function GetItemUserData(whichItem: item): number;

declare function GetItemX(i: item): number;

declare function GetItemY(i: item): number;

declare function GetKillingUnit(): Option<unit>;

declare function GetLearnedSkill(): number;

declare function GetLearnedSkillLevel(): number;

declare function GetLearningUnit(): Option<unit>;

declare function GetLeavingUnit(): Option<unit>;

declare function GetLevelingUnit(): Option<unit>;

declare function GetLightningColorA(whichBolt: lightning): number;

declare function GetLightningColorB(whichBolt: lightning): number;

declare function GetLightningColorG(whichBolt: lightning): number;

declare function GetLightningColorR(whichBolt: lightning): number;

declare function GetLoadedUnit(): Option<unit>;

declare function GetLocalizedHotkey(source: string): number;

declare function GetLocalizedString(source: string): Option<string>;

declare function GetLocalPlayer(): player;

declare function GetLocationX(whichLocation: location): number;

declare function GetLocationY(whichLocation: location): number;

declare function GetLocationZ(whichLocation: location): number;

declare function GetManipulatedItem(): Option<item>;

declare function GetManipulatingUnit(): Option<unit>;

declare function GetObjectName(objectId: integer): Option<string>;

declare function GetOrderedUnit(): Option<unit>;

declare function GetOrderPointLoc(): Option<location>;

declare function GetOrderPointX(): number;

declare function GetOrderPointY(): number;

declare function GetOrderTarget(): Option<widget>;

declare function GetOrderTargetDestructable(): Option<destructable>;

declare function GetOrderTargetItem(): Option<item>;

declare function GetOrderTargetUnit(): Option<unit>;

declare function GetOwningPlayer(whichUnit: unit): player;

declare function GetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean;

declare function GetPlayerColor(whichPlayer: player): playercolor;

declare function GetPlayerController(whichPlayer: player): mapcontrol;

declare function GetPlayerHandicap(whichPlayer: player): number;

declare function GetPlayerHandicapXP(whichPlayer: player): number;

declare function GetPlayerId(whichPlayer: player): number;

declare function GetPlayerName(whichPlayer: player): Option<string>;

declare function GetPlayerRace(whichPlayer: player): Option<race>;

declare function GetPlayers(): number;

declare function GetPlayerScore(whichPlayer: player, whichPlayerScore: playerscore): number;

declare function GetPlayerSelectable(whichPlayer: player): boolean;

declare function GetPlayerSlotState(whichPlayer: player): playerslotstate;

declare function GetPlayerStartLocation(whichPlayer: player): number;

declare function GetPlayerState(whichPlayer: player, whichPlayerState: playerstate): number;

declare function GetPlayerStructureCount(whichPlayer: player, includeIncomplete: boolean): number;

declare function GetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate): number;

declare function GetPlayerTeam(whichPlayer: player): number;

declare function GetPlayerTechCount(whichPlayer: player, techid: integer, specificonly: boolean): number;

declare function GetPlayerTechMaxAllowed(whichPlayer: player, techid: integer): number;

declare function GetPlayerTechResearched(whichPlayer: player, techid: integer, specificonly: boolean): boolean;

declare function GetPlayerTypedUnitCount(whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): number;

declare function GetPlayerUnitCount(whichPlayer: player, includeIncomplete: boolean): number;

declare function GetRandomInt(lowBound: integer, highBound: integer): number;

declare function GetRandomReal(lowBound: real, highBound: real): number;

declare function GetRectCenterX(whichRect: rect): number;

declare function GetRectCenterY(whichRect: rect): number;

declare function GetRectMaxX(whichRect: rect): number;

declare function GetRectMaxY(whichRect: rect): number;

declare function GetRectMinX(whichRect: rect): number;

declare function GetRectMinY(whichRect: rect): number;

declare function GetRescuer(): Option<unit>;

declare function GetResearched(): number;

declare function GetResearchingUnit(): Option<unit>;

declare function GetResourceAmount(whichUnit: unit): number;

declare function GetResourceDensity(): Option<mapdensity>;

declare function GetRevivableUnit(): Option<unit>;

declare function GetRevivingUnit(): Option<unit>;

declare function GetSaveBasicFilename(): Option<string>;

declare function GetSellingUnit(): Option<unit>;

declare function GetSoldItem(): Option<item>;

declare function GetSoldUnit(): Option<unit>;

declare function GetSoundDuration(soundHandle: sound): number;

declare function GetSoundFileDuration(musicFileName: string): number;

declare function GetSoundIsLoading(soundHandle: sound): boolean;

declare function GetSoundIsPlaying(soundHandle: sound): boolean;

declare function GetSpellAbility(): Option<ability>;

declare function GetSpellAbilityId(): number;

declare function GetSpellAbilityUnit(): Option<unit>;

declare function GetSpellTargetDestructable(): Option<destructable>;

declare function GetSpellTargetItem(): Option<item>;

declare function GetSpellTargetLoc(): Option<location>;

declare function GetSpellTargetUnit(): Option<unit>;

declare function GetSpellTargetX(): number;

declare function GetSpellTargetY(): number;

declare function GetStartLocationLoc(whichStartLocation: integer): Option<location>;

declare function GetStartLocationX(whichStartLocation: integer): number;

declare function GetStartLocationY(whichStartLocation: integer): number;

declare function GetStartLocPrio(whichStartLoc: integer, prioSlotIndex: integer): Option<startlocprio>;

declare function GetStartLocPrioSlot(whichStartLoc: integer, prioSlotIndex: integer): number;

declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): number;

declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): number;

declare function GetStoredString(cache: gamecache, missionKey: string, key: string): Option<string>;

declare function GetSummonedUnit(): Option<unit>;

declare function GetSummoningUnit(): Option<unit>;

declare function GetTeams(): number;

declare function GetTerrainCliffLevel(x: real, y: real): number;

declare function GetTerrainType(x: real, y: real): number;

declare function GetTerrainVariance(x: real, y: real): number;

declare function GetTimeOfDayScale(): number;

declare function GetTournamentFinishNowPlayer(): Option<player>;

declare function GetTournamentFinishNowRule(): number;

declare function GetTournamentFinishSoonTimeRemaining(): number;

declare function GetTournamentScore(whichPlayer: player): number;

declare function GetTrainedUnit(): Option<unit>;

declare function GetTrainedUnitType(): number;

declare function GetTransportUnit(): Option<unit>;

declare function GetTriggerDestructable(): Option<destructable>;

declare function GetTriggerEvalCount(whichTrigger: trigger): number;

declare function GetTriggerEventId(): Option<eventid>;

declare function GetTriggerExecCount(whichTrigger: trigger): number;

declare function GetTriggeringRegion(): Option<region>;

declare function GetTriggeringTrackable(): Option<trackable>;

declare function GetTriggeringTrigger(): Option<trigger>;

declare function GetTriggerPlayer(): Option<player>;

declare function GetTriggerUnit(): Option<unit>;

declare function GetTriggerWidget(): Option<widget>;

declare function GetUnitAbilityLevel(whichUnit: unit, abilcode: integer): number;

declare function GetUnitAcquireRange(whichUnit: unit): number;

declare function GetUnitCurrentOrder(whichUnit: unit): number;

declare function GetUnitDefaultAcquireRange(whichUnit: unit): number;

declare function GetUnitDefaultFlyHeight(whichUnit: unit): number;

declare function GetUnitDefaultMoveSpeed(whichUnit: unit): number;

declare function GetUnitDefaultPropWindow(whichUnit: unit): number;

declare function GetUnitDefaultTurnSpeed(whichUnit: unit): number;

declare function GetUnitFacing(whichUnit: unit): number;

declare function GetUnitFlyHeight(whichUnit: unit): number;

declare function GetUnitFoodMade(whichUnit: unit): number;

declare function GetUnitFoodUsed(whichUnit: unit): number;

declare function GetUnitLevel(whichUnit: unit): number;

declare function GetUnitLoc(whichUnit: unit): location;

declare function GetUnitMoveSpeed(whichUnit: unit): number;

declare function GetUnitName(whichUnit: unit): Option<string>;

declare function GetUnitPointValue(whichUnit: unit): number;

declare function GetUnitPointValueByType(unitType: integer): number;

declare function GetUnitPropWindow(whichUnit: unit): number;

declare function GetUnitRace(whichUnit: unit): race;

declare function GetUnitRallyDestructable(whichUnit: unit): Option<destructable>;

declare function GetUnitRallyPoint(whichUnit: unit): Option<location>;

declare function GetUnitRallyUnit(whichUnit: unit): Option<unit>;

declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): number;

declare function GetUnitTurnSpeed(whichUnit: unit): number;

declare function GetUnitTypeId(whichUnit: unit): number;

declare function GetUnitUserData(whichUnit: unit): number;

declare function GetUnitX(whichUnit: unit): number;

declare function GetUnitY(whichUnit: unit): number;

declare function GetWidgetLife(whichWidget: widget): number;

declare function GetWidgetX(whichWidget: widget): number;

declare function GetWidgetY(whichWidget: widget): number;

declare function GetWinningPlayer(): Option<player>;

declare function GetWorldBounds(): Option<rect>;

declare function GroupAddUnit(whichGroup: group, whichUnit: unit): void;

declare function GroupClear(whichGroup: group): void;

declare function GroupEnumUnitsInRange(whichGroup: group, x: real, y: real, radius: real, filter?: boolexpr): void;

declare function GroupEnumUnitsInRangeCounted(whichGroup: group, x: real, y: real, radius: real, filter: Option<boolexpr>, countLimit: integer): void;

declare function GroupEnumUnitsInRangeOfLoc(whichGroup: group, whichLocation: location, radius: real, filter?: boolexpr): void;

declare function GroupEnumUnitsInRangeOfLocCounted(whichGroup: group, whichLocation: location, radius: real, filter: Option<boolexpr>, countLimit: integer): void;

declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter?: boolexpr): void;

declare function GroupEnumUnitsInRectCounted(whichGroup: group, r: rect, filter: Option<boolexpr>, countLimit: integer): void;

declare function GroupEnumUnitsOfPlayer(whichGroup: group, whichPlayer: player, filter?: boolexpr): void;

declare function GroupEnumUnitsOfType(whichGroup: group, unitname: string, filter?: boolexpr): void;

declare function GroupEnumUnitsOfTypeCounted(whichGroup: group, unitname: string, filter: Option<boolexpr>, countLimit: integer): void;

declare function GroupEnumUnitsSelected(whichGroup: group, whichPlayer: player, filter?: boolexpr): void;

declare function GroupImmediateOrder(whichGroup: group, order: string): boolean;

declare function GroupImmediateOrderById(whichGroup: group, order: integer): boolean;

declare function GroupPointOrder(whichGroup: group, order: string, x: real, y: real): boolean;

declare function GroupPointOrderById(whichGroup: group, order: integer, x: real, y: real): boolean;

declare function GroupPointOrderByIdLoc(whichGroup: group, order: integer, whichLocation: location): boolean;

declare function GroupPointOrderLoc(whichGroup: group, order: string, whichLocation: location): boolean;

declare function GroupRemoveUnit(whichGroup: group, whichUnit: unit): void;

declare function GroupTargetOrder(whichGroup: group, order: string, targetWidget: widget): boolean;

declare function GroupTargetOrderById(whichGroup: group, order: integer, targetWidget: widget): boolean;

declare function HaveSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean;

declare function HaveSavedHandle(table: hashtable, parentKey: integer, childKey: integer): boolean;

declare function HaveSavedInteger(table: hashtable, parentKey: integer, childKey: integer): boolean;

declare function HaveSavedReal(table: hashtable, parentKey: integer, childKey: integer): boolean;

declare function HaveSavedString(table: hashtable, parentKey: integer, childKey: integer): boolean;

declare function HaveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredReal(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredString(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean;

declare function I2R(i: integer): number;

declare function I2S(i: integer): Option<string>;

declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: integer): number;

declare function InitGameCache(campaignFile: string): Option<gamecache>;

declare function InitHashtable(): Option<hashtable>;

declare function IsCineFilterDisplayed(): boolean;

declare function IsDestructableInvulnerable(d: destructable): boolean;

declare function IsFogEnabled(): boolean;

declare function IsFoggedToPlayer(x: real, y: real, whichPlayer: player): boolean;

declare function IsFogMaskEnabled(): boolean;

declare function IsGameTypeSupported(whichGameType: gametype): boolean;

declare function IsHeroUnitId(unitId: integer): boolean;

declare function IsItemIdPawnable(itemId: integer): boolean;

declare function IsItemIdPowerup(itemId: integer): boolean;

declare function IsItemIdSellable(itemId: integer): boolean;

declare function IsItemInvulnerable(whichItem: item): boolean;

declare function IsItemOwned(whichItem: item): boolean;

declare function IsItemPawnable(whichItem: item): boolean;

declare function IsItemPowerup(whichItem: item): boolean;

declare function IsItemSellable(whichItem: item): boolean;

declare function IsItemVisible(whichItem: item): boolean;

declare function IsLeaderboardDisplayed(lb: leaderboard): boolean;

declare function IsLocationFoggedToPlayer(whichLocation: location, whichPlayer: player): boolean;

declare function IsLocationInRegion(whichRegion: region, whichLocation: location): boolean;

declare function IsLocationMaskedToPlayer(whichLocation: location, whichPlayer: player): boolean;

declare function IsLocationVisibleToPlayer(whichLocation: location, whichPlayer: player): boolean;

declare function IsMapFlagSet(whichMapFlag: mapflag): boolean;

declare function IsMaskedToPlayer(x: real, y: real, whichPlayer: player): boolean;

declare function IsMultiboardDisplayed(lb: multiboard): boolean;

declare function IsMultiboardMinimized(lb: multiboard): boolean;

declare function IsNoDefeatCheat(): boolean;

declare function IsNoVictoryCheat(): boolean;

declare function IsPlayerAlly(whichPlayer: player, otherPlayer: player): boolean;

declare function IsPlayerEnemy(whichPlayer: player, otherPlayer: player): boolean;

declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean;

declare function IsPlayerObserver(whichPlayer: player): boolean;

declare function IsPlayerRacePrefSet(whichPlayer: player, pref: racepreference): boolean;

declare function IsPointBlighted(x: real, y: real): boolean;

declare function IsPointInRegion(whichRegion: region, x: real, y: real): boolean;

declare function IsQuestCompleted(whichQuest: quest): boolean;

declare function IsQuestDiscovered(whichQuest: quest): boolean;

declare function IsQuestEnabled(whichQuest: quest): boolean;

declare function IsQuestFailed(whichQuest: quest): boolean;

declare function IsQuestItemCompleted(whichQuestItem: questitem): boolean;

declare function IsQuestRequired(whichQuest: quest): boolean;

declare function IssueBuildOrder(whichPeon: unit, unitToBuild: string, x: real, y: real): boolean;

declare function IssueBuildOrderById(whichPeon: unit, unitId: integer, x: real, y: real): boolean;

declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean;

declare function IssueImmediateOrderById(whichUnit: unit, order: integer): boolean;

declare function IssueInstantPointOrder(whichUnit: unit, order: string, x: real, y: real, instantTargetWidget: widget): boolean;

declare function IssueInstantPointOrderById(whichUnit: unit, order: integer, x: real, y: real, instantTargetWidget: widget): boolean;

declare function IssueInstantTargetOrder(whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget): boolean;

declare function IssueInstantTargetOrderById(whichUnit: unit, order: integer, targetWidget: widget, instantTargetWidget: widget): boolean;

declare function IssueNeutralImmediateOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string): boolean;

declare function IssueNeutralImmediateOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer): boolean;

declare function IssueNeutralPointOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: real, y: real): boolean;

declare function IssueNeutralPointOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer, x: real, y: real): boolean;

declare function IssueNeutralTargetOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget): boolean;

declare function IssueNeutralTargetOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer, target: widget): boolean;

declare function IssuePointOrder(whichUnit: unit, order: string, x: real, y: real): boolean;

declare function IssuePointOrderById(whichUnit: unit, order: integer, x: real, y: real): boolean;

declare function IssuePointOrderByIdLoc(whichUnit: unit, order: integer, whichLocation: location): boolean;

declare function IssuePointOrderLoc(whichUnit: unit, order: string, whichLocation: location): boolean;

declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean;

declare function IssueTargetOrderById(whichUnit: unit, order: integer, targetWidget: widget): boolean;

declare function IsSuspendedXP(whichHero: unit): boolean;

declare function IsTerrainPathable(x: real, y: real, t: pathingtype): boolean;

declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean;

declare function IsTriggerEnabled(whichTrigger: trigger): boolean;

declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean;

declare function IsUnit(whichUnit: unit, whichSpecifiedUnit: unit): boolean;

declare function IsUnitAlly(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitDetected(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitEnemy(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitFogged(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitHidden(whichUnit: unit): boolean;

declare function IsUnitIdType(unitId: integer, whichUnitType: unittype): boolean;

declare function IsUnitIllusion(whichUnit: unit): boolean;

declare function IsUnitInForce(whichUnit: unit, whichForce: force): boolean;

declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean;

declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: real): boolean;

declare function IsUnitInRangeLoc(whichUnit: unit, whichLocation: location, distance: real): boolean;

declare function IsUnitInRangeXY(whichUnit: unit, x: real, y: real, distance: real): boolean;

declare function IsUnitInRegion(whichRegion: region, whichUnit: unit): boolean;

declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean;

declare function IsUnitInvisible(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitLoaded(whichUnit: unit): boolean;

declare function IsUnitMasked(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitPaused(whichHero: unit): boolean;

declare function IsUnitRace(whichUnit: unit, whichRace: race): boolean;

declare function IsUnitSelected(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitType(whichUnit: unit, whichUnitType: unittype): boolean;

declare function IsUnitVisible(whichUnit: unit, whichPlayer: player): boolean;

declare function IsVisibleToPlayer(x: real, y: real, whichPlayer: player): boolean;

declare function ItemPoolAddItemType(whichItemPool: itempool, itemId: integer, weight: real): void;

declare function ItemPoolRemoveItemType(whichItemPool: itempool, itemId: integer): void;

declare function KillDestructable(d: destructable): void;

declare function KillSoundWhenDone(soundHandle: sound): void;

declare function KillUnit(whichUnit: unit): void;

declare function LeaderboardAddItem(lb: leaderboard, label: string, value: integer, p: player): void;

declare function LeaderboardClear(lb: leaderboard): void;

declare function LeaderboardDisplay(lb: leaderboard, show: boolean): void;

declare function LeaderboardGetItemCount(lb: leaderboard): number;

declare function LeaderboardGetLabelText(lb: leaderboard): Option<string>;

declare function LeaderboardGetPlayerIndex(lb: leaderboard, p: player): number;

declare function LeaderboardHasPlayerItem(lb: leaderboard, p: player): boolean;

declare function LeaderboardRemoveItem(lb: leaderboard, index: integer): void;

declare function LeaderboardRemovePlayerItem(lb: leaderboard, p: player): void;

declare function LeaderboardSetItemLabel(lb: leaderboard, whichItem: integer, val: string): void;

declare function LeaderboardSetItemLabelColor(lb: leaderboard, whichItem: integer, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function LeaderboardSetItemStyle(lb: leaderboard, whichItem: integer, showLabel: boolean, showValue: boolean, showIcon: boolean): void;

declare function LeaderboardSetItemValue(lb: leaderboard, whichItem: integer, val: integer): void;

declare function LeaderboardSetItemValueColor(lb: leaderboard, whichItem: integer, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function LeaderboardSetLabel(lb: leaderboard, label: string): void;

declare function LeaderboardSetLabelColor(lb: leaderboard, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function LeaderboardSetSizeByItemCount(lb: leaderboard, count: integer): void;

declare function LeaderboardSetStyle(lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): void;

declare function LeaderboardSetValueColor(lb: leaderboard, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function LeaderboardSortItemsByLabel(lb: leaderboard, ascending: boolean): void;

declare function LeaderboardSortItemsByPlayer(lb: leaderboard, ascending: boolean): void;

declare function LeaderboardSortItemsByValue(lb: leaderboard, ascending: boolean): void;

declare function LoadAbilityHandle(table: hashtable, parentKey: integer, childKey: integer): Option<ability>;

declare function LoadBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean;

declare function LoadBooleanExprHandle(table: hashtable, parentKey: integer, childKey: integer): Option<boolexpr>;

declare function LoadButtonHandle(table: hashtable, parentKey: integer, childKey: integer): Option<button>;

declare function LoadDefeatConditionHandle(table: hashtable, parentKey: integer, childKey: integer): Option<defeatcondition>;

declare function LoadDestructableHandle(table: hashtable, parentKey: integer, childKey: integer): Option<destructable>;

declare function LoadDialogHandle(table: hashtable, parentKey: integer, childKey: integer): Option<dialog>;

declare function LoadEffectHandle(table: hashtable, parentKey: integer, childKey: integer): Option<effect>;

declare function LoadFogModifierHandle(table: hashtable, parentKey: integer, childKey: integer): Option<fogmodifier>;

declare function LoadFogStateHandle(table: hashtable, parentKey: integer, childKey: integer): Option<fogstate>;

declare function LoadForceHandle(table: hashtable, parentKey: integer, childKey: integer): Option<force>;

declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void;

declare function LoadGroupHandle(table: hashtable, parentKey: integer, childKey: integer): Option<group>;

declare function LoadHashtableHandle(table: hashtable, parentKey: integer, childKey: integer): Option<hashtable>;

declare function LoadImageHandle(table: hashtable, parentKey: integer, childKey: integer): Option<image>;

declare function LoadInteger(table: hashtable, parentKey: integer, childKey: integer): number;

declare function LoadItemHandle(table: hashtable, parentKey: integer, childKey: integer): Option<item>;

declare function LoadItemPoolHandle(table: hashtable, parentKey: integer, childKey: integer): Option<itempool>;

declare function LoadLeaderboardHandle(table: hashtable, parentKey: integer, childKey: integer): Option<leaderboard>;

declare function LoadLightningHandle(table: hashtable, parentKey: integer, childKey: integer): Option<lightning>;

declare function LoadLocationHandle(table: hashtable, parentKey: integer, childKey: integer): Option<location>;

declare function LoadMultiboardHandle(table: hashtable, parentKey: integer, childKey: integer): Option<multiboard>;

declare function LoadMultiboardItemHandle(table: hashtable, parentKey: integer, childKey: integer): Option<multiboarditem>;

declare function LoadPlayerHandle(table: hashtable, parentKey: integer, childKey: integer): Option<player>;

declare function LoadQuestHandle(table: hashtable, parentKey: integer, childKey: integer): Option<quest>;

declare function LoadQuestItemHandle(table: hashtable, parentKey: integer, childKey: integer): Option<questitem>;

declare function LoadReal(table: hashtable, parentKey: integer, childKey: integer): number;

declare function LoadRectHandle(table: hashtable, parentKey: integer, childKey: integer): Option<rect>;

declare function LoadRegionHandle(table: hashtable, parentKey: integer, childKey: integer): Option<region>;

declare function LoadSoundHandle(table: hashtable, parentKey: integer, childKey: integer): Option<sound>;

declare function LoadStr(table: hashtable, parentKey: integer, childKey: integer): Option<string>;

declare function LoadTextTagHandle(table: hashtable, parentKey: integer, childKey: integer): Option<texttag>;

declare function LoadTimerDialogHandle(table: hashtable, parentKey: integer, childKey: integer): Option<timerdialog>;

declare function LoadTimerHandle(table: hashtable, parentKey: integer, childKey: integer): Option<timer>;

declare function LoadTrackableHandle(table: hashtable, parentKey: integer, childKey: integer): Option<trackable>;

declare function LoadTriggerActionHandle(table: hashtable, parentKey: integer, childKey: integer): Option<triggeraction>;

declare function LoadTriggerConditionHandle(table: hashtable, parentKey: integer, childKey: integer): Option<triggercondition>;

declare function LoadTriggerEventHandle(table: hashtable, parentKey: integer, childKey: integer): Option<event>;

declare function LoadTriggerHandle(table: hashtable, parentKey: integer, childKey: integer): Option<trigger>;

declare function LoadUbersplatHandle(table: hashtable, parentKey: integer, childKey: integer): Option<ubersplat>;

declare function LoadUnitHandle(table: hashtable, parentKey: integer, childKey: integer): Option<unit>;

declare function LoadUnitPoolHandle(table: hashtable, parentKey: integer, childKey: integer): Option<unitpool>;

declare function LoadWidgetHandle(table: hashtable, parentKey: integer, childKey: integer): Option<widget>;

declare function Location(x: real, y: real): location;

declare function MoveLightning(whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean;

declare function MoveLightningEx(whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): boolean;

declare function MoveLocation(whichLocation: location, newX: real, newY: real): void;

declare function MoveRectTo(whichRect: rect, newCenterX: real, newCenterY: real): void;

declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): void;

declare function MultiboardClear(lb: multiboard): void;

declare function MultiboardDisplay(lb: multiboard, show: boolean): void;

declare function MultiboardGetColumnCount(lb: multiboard): number;

declare function MultiboardGetItem(lb: multiboard, row: integer, column: integer): Option<multiboarditem>;

declare function MultiboardGetRowCount(lb: multiboard): number;

declare function MultiboardGetTitleText(lb: multiboard): Option<string>;

declare function MultiboardMinimize(lb: multiboard, minimize: boolean): void;

declare function MultiboardReleaseItem(mbi: multiboarditem): void;

declare function MultiboardSetColumnCount(lb: multiboard, count: integer): void;

declare function MultiboardSetItemIcon(mbi: multiboarditem, iconFileName: string): void;

declare function MultiboardSetItemsIcon(lb: multiboard, iconPath: string): void;

declare function MultiboardSetItemsStyle(lb: multiboard, showValues: boolean, showIcons: boolean): void;

declare function MultiboardSetItemStyle(mbi: multiboarditem, showValue: boolean, showIcon: boolean): void;

declare function MultiboardSetItemsValue(lb: multiboard, value: string): void;

declare function MultiboardSetItemsValueColor(lb: multiboard, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function MultiboardSetItemsWidth(lb: multiboard, width: real): void;

declare function MultiboardSetItemValue(mbi: multiboarditem, val: string): void;

declare function MultiboardSetItemValueColor(mbi: multiboarditem, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function MultiboardSetItemWidth(mbi: multiboarditem, width: real): void;

declare function MultiboardSetRowCount(lb: multiboard, count: integer): void;

declare function MultiboardSetTitleText(lb: multiboard, label: string): void;

declare function MultiboardSetTitleTextColor(lb: multiboard, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function MultiboardSuppressDisplay(flag: boolean): void;

declare function NewSoundEnvironment(environmentName: string): void;

declare function Not(operand: boolexpr): boolexpr;

declare function Or(operandA: boolexpr, operandB: boolexpr): boolexpr;

declare function OrderId(orderIdString: string): number;

declare function OrderId2String(orderId: integer): Option<string>;

declare function PanCameraTo(x: real, y: real): void;

declare function PanCameraToTimed(x: real, y: real, duration: real): void;

declare function PanCameraToTimedWithZ(x: real, y: real, zOffsetDest: real, duration: real): void;

declare function PanCameraToWithZ(x: real, y: real, zOffsetDest: real): void;

declare function PauseCompAI(p: player, pause: boolean): void;

declare function PauseGame(flag: boolean): void;

declare function PauseTimer(whichTimer: timer): void;

declare function PauseUnit(whichUnit: unit, flag: boolean): void;

declare function PingMinimap(x: real, y: real, duration: real): void;

declare function PingMinimapEx(x: real, y: real, duration: real, red: integer, green: integer, blue: integer, extraEffects: boolean): void;

declare function PlaceRandomItem(whichItemPool: itempool, x: real, y: real): Option<item>;

declare function PlaceRandomUnit(whichPool: unitpool, forWhichPlayer: player, x: real, y: real, facing: real): Option<unit>;

declare function PlayCinematic(movieName: string): void;

declare function Player(number: integer): Option<player>;

declare function PlayerGetLeaderboard(toPlayer: player): Option<leaderboard>;

declare function PlayerSetLeaderboard(toPlayer: player, lb: leaderboard): void;

declare function PlayModelCinematic(modelName: string): void;

declare function PlayMusic(musicName: string): void;

declare function PlayMusicEx(musicName: string, frommsecs: integer, fadeinmsecs: integer): void;

declare function PlayThematicMusic(musicFileName: string): void;

declare function PlayThematicMusicEx(musicFileName: string, frommsecs: integer): void;

declare function Pow(x: real, power: real): number;

declare function Preload(filename: string): void;

declare function PreloadEnd(timeout: real): void;

declare function PreloadEndEx(): void;

declare function Preloader(filename: string): void;

declare function PreloadGenClear(): void;

declare function PreloadGenEnd(filename: string): void;

declare function PreloadGenStart(): void;

declare function PreloadRefresh(): void;

declare function PreloadStart(): void;

declare function QuestCreateItem(whichQuest: quest): Option<questitem>;

declare function QuestItemSetCompleted(whichQuestItem: questitem, completed: boolean): void;

declare function QuestItemSetDescription(whichQuestItem: questitem, description: string): void;

declare function QuestSetCompleted(whichQuest: quest, completed: boolean): void;

declare function QuestSetDescription(whichQuest: quest, description: string): void;

declare function QuestSetDiscovered(whichQuest: quest, discovered: boolean): void;

declare function QuestSetEnabled(whichQuest: quest, enabled: boolean): void;

declare function QuestSetFailed(whichQuest: quest, failed: boolean): void;

declare function QuestSetIconPath(whichQuest: quest, iconPath: string): void;

declare function QuestSetRequired(whichQuest: quest, required: boolean): void;

declare function QuestSetTitle(whichQuest: quest, title: string): void;

declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): void;

declare function QueueUnitAnimation(whichUnit: unit, whichAnimation: string): void;

declare function R2I(r: real): number;

declare function R2S(r: real): Option<string>;

declare function R2SW(r: real, width: integer, precision: integer): Option<string>;

declare function Rad2Deg(radians: real): number;

declare function Rect(minx: real, miny: real, maxx: real, maxy: real): rect;

declare function RectFromLoc(min: location, max: location): Option<rect>;

declare function RecycleGuardPosition(hUnit: unit): void;

declare function RegionAddCell(whichRegion: region, x: real, y: real): void;

declare function RegionAddCellAtLoc(whichRegion: region, whichLocation: location): void;

declare function RegionAddRect(whichRegion: region, r: rect): void;

declare function RegionClearCell(whichRegion: region, x: real, y: real): void;

declare function RegionClearCellAtLoc(whichRegion: region, whichLocation: location): void;

declare function RegionClearRect(whichRegion: region, r: rect): void;

declare function RegisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: real, rectheight: real): void;

declare function ReloadGame(): void;

declare function ReloadGameCachesFromDisk(): boolean;

declare function RemoveAllGuardPositions(num: player): void;

declare function RemoveDestructable(d: destructable): void;

declare function RemoveGuardPosition(hUnit: unit): void;

declare function RemoveItem(whichItem: item): void;

declare function RemoveItemFromAllStock(itemId: integer): void;

declare function RemoveItemFromStock(whichUnit: unit, itemId: integer): void;

declare function RemoveLocation(whichLocation: location): void;

declare function RemovePlayer(whichPlayer: player, gameResult: playergameresult): void;

declare function RemoveRect(whichRect: rect): void;

declare function RemoveRegion(whichRegion: region): void;

declare function RemoveSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): void;

declare function RemoveSavedHandle(table: hashtable, parentKey: integer, childKey: integer): void;

declare function RemoveSavedInteger(table: hashtable, parentKey: integer, childKey: integer): void;

declare function RemoveSaveDirectory(sourceDirName: string): boolean;

declare function RemoveSavedReal(table: hashtable, parentKey: integer, childKey: integer): void;

declare function RemoveSavedString(table: hashtable, parentKey: integer, childKey: integer): void;

declare function RemoveUnit(whichUnit: unit): void;

declare function RemoveUnitFromAllStock(unitId: integer): void;

declare function RemoveUnitFromStock(whichUnit: unit, unitId: integer): void;

declare function RemoveWeatherEffect(whichEffect: weathereffect): void;

declare function RenameSaveDirectory(sourceDirName: string, destDirName: string): boolean;

declare function ResetTerrainFog(): void;

declare function ResetToGameCamera(duration: real): void;

declare function ResetTrigger(whichTrigger: trigger): void;

declare function ResetUbersplat(whichSplat: ubersplat): void;

declare function ResetUnitLookAt(whichUnit: unit): void;

declare function RestartGame(doScoreScreen: boolean): void;

declare function RestoreUnit(cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: real, y: real, facing: real): Option<unit>;

declare function ResumeMusic(): void;

declare function ResumeTimer(whichTimer: timer): void;

declare function ReviveHero(whichHero: unit, x: real, y: real, doEyecandy: boolean): boolean;

declare function ReviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean;

declare function S2I(s: string): number;

declare function S2R(s: string): number;

declare function SaveAbilityHandle(table: hashtable, parentKey: integer, childKey: integer, whichAbility: ability): boolean;

declare function SaveAgentHandle(table: hashtable, parentKey: integer, childKey: integer, whichAgent: agent): boolean;

declare function SaveBoolean(table: hashtable, parentKey: integer, childKey: integer, value: boolean): void;

declare function SaveBooleanExprHandle(table: hashtable, parentKey: integer, childKey: integer, whichBoolexpr: boolexpr): boolean;

declare function SaveButtonHandle(table: hashtable, parentKey: integer, childKey: integer, whichButton: button): boolean;

declare function SaveDefeatConditionHandle(table: hashtable, parentKey: integer, childKey: integer, whichDefeatcondition: defeatcondition): boolean;

declare function SaveDestructableHandle(table: hashtable, parentKey: integer, childKey: integer, whichDestructable: destructable): boolean;

declare function SaveDialogHandle(table: hashtable, parentKey: integer, childKey: integer, whichDialog: dialog): boolean;

declare function SaveEffectHandle(table: hashtable, parentKey: integer, childKey: integer, whichEffect: effect): boolean;

declare function SaveFogModifierHandle(table: hashtable, parentKey: integer, childKey: integer, whichFogModifier: fogmodifier): boolean;

declare function SaveFogStateHandle(table: hashtable, parentKey: integer, childKey: integer, whichFogState: fogstate): boolean;

declare function SaveForceHandle(table: hashtable, parentKey: integer, childKey: integer, whichForce: force): boolean;

declare function SaveGame(saveFileName: string): void;

declare function SaveGameCache(whichCache: gamecache): boolean;

declare function SaveGameExists(saveName: string): boolean;

declare function SaveGroupHandle(table: hashtable, parentKey: integer, childKey: integer, whichGroup: group): boolean;

declare function SaveHashtableHandle(table: hashtable, parentKey: integer, childKey: integer, whichHashtable: hashtable): boolean;

declare function SaveImageHandle(table: hashtable, parentKey: integer, childKey: integer, whichImage: image): boolean;

declare function SaveInteger(table: hashtable, parentKey: integer, childKey: integer, value: integer): void;

declare function SaveItemHandle(table: hashtable, parentKey: integer, childKey: integer, whichItem: item): boolean;

declare function SaveItemPoolHandle(table: hashtable, parentKey: integer, childKey: integer, whichItempool: itempool): boolean;

declare function SaveLeaderboardHandle(table: hashtable, parentKey: integer, childKey: integer, whichLeaderboard: leaderboard): boolean;

declare function SaveLightningHandle(table: hashtable, parentKey: integer, childKey: integer, whichLightning: lightning): boolean;

declare function SaveLocationHandle(table: hashtable, parentKey: integer, childKey: integer, whichLocation: location): boolean;

declare function SaveMultiboardHandle(table: hashtable, parentKey: integer, childKey: integer, whichMultiboard: multiboard): boolean;

declare function SaveMultiboardItemHandle(table: hashtable, parentKey: integer, childKey: integer, whichMultiboarditem: multiboarditem): boolean;

declare function SavePlayerHandle(table: hashtable, parentKey: integer, childKey: integer, whichPlayer: player): boolean;

declare function SaveQuestHandle(table: hashtable, parentKey: integer, childKey: integer, whichQuest: quest): boolean;

declare function SaveQuestItemHandle(table: hashtable, parentKey: integer, childKey: integer, whichQuestitem: questitem): boolean;

declare function SaveReal(table: hashtable, parentKey: integer, childKey: integer, value: real): void;

declare function SaveRectHandle(table: hashtable, parentKey: integer, childKey: integer, whichRect: rect): boolean;

declare function SaveRegionHandle(table: hashtable, parentKey: integer, childKey: integer, whichRegion: region): boolean;

declare function SaveSoundHandle(table: hashtable, parentKey: integer, childKey: integer, whichSound: sound): boolean;

declare function SaveStr(table: hashtable, parentKey: integer, childKey: integer, value: string): boolean;

declare function SaveTextTagHandle(table: hashtable, parentKey: integer, childKey: integer, whichTexttag: texttag): boolean;

declare function SaveTimerDialogHandle(table: hashtable, parentKey: integer, childKey: integer, whichTimerdialog: timerdialog): boolean;

declare function SaveTimerHandle(table: hashtable, parentKey: integer, childKey: integer, whichTimer: timer): boolean;

declare function SaveTrackableHandle(table: hashtable, parentKey: integer, childKey: integer, whichTrackable: trackable): boolean;

declare function SaveTriggerActionHandle(table: hashtable, parentKey: integer, childKey: integer, whichTriggeraction: triggeraction): boolean;

declare function SaveTriggerConditionHandle(table: hashtable, parentKey: integer, childKey: integer, whichTriggercondition: triggercondition): boolean;

declare function SaveTriggerEventHandle(table: hashtable, parentKey: integer, childKey: integer, whichEvent: event): boolean;

declare function SaveTriggerHandle(table: hashtable, parentKey: integer, childKey: integer, whichTrigger: trigger): boolean;

declare function SaveUbersplatHandle(table: hashtable, parentKey: integer, childKey: integer, whichUbersplat: ubersplat): boolean;

declare function SaveUnitHandle(table: hashtable, parentKey: integer, childKey: integer, whichUnit: unit): boolean;

declare function SaveUnitPoolHandle(table: hashtable, parentKey: integer, childKey: integer, whichUnitpool: unitpool): boolean;

declare function SaveWidgetHandle(table: hashtable, parentKey: integer, childKey: integer, whichWidget: widget): boolean;

declare function SelectHeroSkill(whichHero: unit, abilcode: integer): void;

declare function SelectUnit(whichUnit: unit, flag: boolean): void;

declare function SetAllItemTypeSlots(slots: integer): void;

declare function SetAllUnitTypeSlots(slots: integer): void;

declare function SetAllyColorFilterState(state: integer): void;

declare function SetAltMinimapIcon(iconPath: string): void;

declare function SetBlight(whichPlayer: player, x: real, y: real, radius: real, addBlight: boolean): void;

declare function SetBlightLoc(whichPlayer: player, whichLocation: location, radius: real, addBlight: boolean): void;

declare function SetBlightPoint(whichPlayer: player, x: real, y: real, addBlight: boolean): void;

declare function SetBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void;

declare function SetCameraBounds(x1: real, y1: real, x2: real, y2: real, x3: real, y3: real, x4: real, y4: real): void;

declare function SetCameraField(whichField: camerafield, value: real, duration: real): void;

declare function SetCameraOrientController(whichUnit: unit, xoffset: real, yoffset: real): void;

declare function SetCameraPosition(x: real, y: real): void;

declare function SetCameraQuickPosition(x: real, y: real): void;

declare function SetCameraRotateMode(x: real, y: real, radiansToSweep: real, duration: real): void;

declare function SetCameraTargetController(whichUnit: unit, xoffset: real, yoffset: real, inheritOrientation: boolean): void;

declare function SetCampaignAvailable(campaignNumber: integer, available: boolean): void;

declare function SetCampaignMenuRace(r: race): void;

declare function SetCampaignMenuRaceEx(campaignIndex: integer): void;

declare function SetCineFilterBlendMode(whichMode: blendmode): void;

declare function SetCineFilterDuration(duration: real): void;

declare function SetCineFilterEndColor(red: integer, green: integer, blue: integer, alpha: integer): void;

declare function SetCineFilterEndUV(minu: real, minv: real, maxu: real, maxv: real): void;

declare function SetCineFilterStartColor(red: integer, green: integer, blue: integer, alpha: integer): void;

declare function SetCineFilterStartUV(minu: real, minv: real, maxu: real, maxv: real): void;

declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): void;

declare function SetCineFilterTexture(filename: string): void;

declare function SetCinematicCamera(cameraModelFile: string): void;

declare function SetCinematicScene(portraitUnitId: integer, color: playercolor, speakerTitle: string, text: string, sceneDuration: real, voiceoverDuration: real): void;

declare function SetCreatureDensity(whichdensity: mapdensity): void;

declare function SetCreepCampFilterState(state: boolean): void;

declare function SetCustomCampaignButtonVisible(whichButton: integer, visible: boolean): void;

declare function SetDayNightModels(terrainDNCFile: string, unitDNCFile: string): void;

declare function SetDefaultDifficulty(g: gamedifficulty): void;

declare function SetDestructableAnimation(d: destructable, whichAnimation: string): void;

declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: real): void;

declare function SetDestructableInvulnerable(d: destructable, flag: boolean): void;

declare function SetDestructableLife(d: destructable, life: real): void;

declare function SetDestructableMaxLife(d: destructable, max: real): void;

declare function SetDestructableOccluderHeight(d: destructable, height: real): void;

declare function SetDoodadAnimation(x: real, y: real, radius: real, doodadID: integer, nearestOnly: boolean, animName: string, animRandom: boolean): void;

declare function SetDoodadAnimationRect(r: rect, doodadID: integer, animName: string, animRandom: boolean): void;

declare function SetEdCinematicAvailable(campaignNumber: integer, available: boolean): void;

declare function SetFloatGameState(whichFloatGameState: fgamestate, value: real): void;

declare function SetFogStateRadius(forWhichPlayer: player, whichState: fogstate, centerx: real, centerY: real, radius: real, useSharedVision: boolean): void;

declare function SetFogStateRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: real, useSharedVision: boolean): void;

declare function SetFogStateRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): void;

declare function SetGameDifficulty(whichdifficulty: gamedifficulty): void;

declare function SetGamePlacement(whichPlacementType: placement): void;

declare function SetGameSpeed(whichspeed: gamespeed): void;

declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void;

declare function SetHeroAgi(whichHero: unit, newAgi: integer, permanent: boolean): void;

declare function SetHeroInt(whichHero: unit, newInt: integer, permanent: boolean): void;

declare function SetHeroLevel(whichHero: unit, level: integer, showEyeCandy: boolean): void;

declare function SetHeroStr(whichHero: unit, newStr: integer, permanent: boolean): void;

declare function SetHeroXP(whichHero: unit, newXpVal: integer, showEyeCandy: boolean): void;

declare function SetImageAboveWater(whichImage: image, flag: boolean, useWaterAlpha: boolean): void;

declare function SetImageColor(whichImage: image, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function SetImageConstantHeight(whichImage: image, flag: boolean, height: real): void;

declare function SetImagePosition(whichImage: image, x: real, y: real, z: real): void;

declare function SetImageRender(whichImage: image, flag: boolean): void;

declare function SetImageRenderAlways(whichImage: image, flag: boolean): void;

declare function SetImageType(whichImage: image, imageType: integer): void;

declare function SetIntegerGameState(whichIntegerGameState: igamestate, value: integer): void;

declare function SetIntroShotModel(introModelPath: string): void;

declare function SetIntroShotText(introText: string): void;

declare function SetItemCharges(whichItem: item, charges: integer): void;

declare function SetItemDropID(whichItem: item, unitId: integer): void;

declare function SetItemDropOnDeath(whichItem: item, flag: boolean): void;

declare function SetItemDroppable(i: item, flag: boolean): void;

declare function SetItemInvulnerable(whichItem: item, flag: boolean): void;

declare function SetItemPawnable(i: item, flag: boolean): void;

declare function SetItemPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): void;

declare function SetItemPosition(i: item, x: real, y: real): void;

declare function SetItemTypeSlots(whichUnit: unit, slots: integer): void;

declare function SetItemUserData(whichItem: item, data: integer): void;

declare function SetItemVisible(whichItem: item, show: boolean): void;

declare function SetLightningColor(whichBolt: lightning, r: real, g: real, b: real, a: real): boolean;

declare function SetMapDescription(description: string): void;

declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void;

declare function SetMapMusic(musicName: string, random: boolean, index: integer): void;

declare function SetMapName(name: string): void;

declare function SetMissionAvailable(campaignNumber: integer, missionNumber: integer, available: boolean): void;

declare function SetMusicPlayPosition(millisecs: integer): void;

declare function SetMusicVolume(volume: integer): void;

declare function SetOpCinematicAvailable(campaignNumber: integer, available: boolean): void;

declare function SetPlayerAbilityAvailable(whichPlayer: player, abilid: integer, avail: boolean): void;

declare function SetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): void;

declare function SetPlayerColor(whichPlayer: player, color: playercolor): void;

declare function SetPlayerController(whichPlayer: player, controlType: mapcontrol): void;

declare function SetPlayerHandicap(whichPlayer: player, handicap: real): void;

declare function SetPlayerHandicapXP(whichPlayer: player, handicap: real): void;

declare function SetPlayerName(whichPlayer: player, name: string): void;

declare function SetPlayerOnScoreScreen(whichPlayer: player, flag: boolean): void;

declare function SetPlayerRacePreference(whichPlayer: player, whichRacePreference: racepreference): void;

declare function SetPlayerRaceSelectable(whichPlayer: player, value: boolean): void;

declare function SetPlayers(playercount: integer): void;

declare function SetPlayerStartLocation(whichPlayer: player, startLocIndex: integer): void;

declare function SetPlayerState(whichPlayer: player, whichPlayerState: playerstate, value: integer): void;

declare function SetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: integer): void;

declare function SetPlayerTeam(whichPlayer: player, whichTeam: integer): void;

declare function SetPlayerTechMaxAllowed(whichPlayer: player, techid: integer, maximum: integer): void;

declare function SetPlayerTechResearched(whichPlayer: player, techid: integer, setToLevel: integer): void;

declare function SetPlayerUnitsOwner(whichPlayer: player, newOwner: integer): void;

declare function SetRandomSeed(seed: integer): void;

declare function SetRect(whichRect: rect, minx: real, miny: real, maxx: real, maxy: real): void;

declare function SetRectFromLoc(whichRect: rect, min: location, max: location): void;

declare function SetReservedLocalHeroButtons(reserved: integer): void;

declare function SetResourceAmount(whichUnit: unit, amount: integer): void;

declare function SetResourceDensity(whichdensity: mapdensity): void;

declare function SetSkyModel(skyModelFile: string): void;

declare function SetSoundChannel(soundHandle: sound, channel: integer): void;

declare function SetSoundConeAngles(soundHandle: sound, inside: real, outside: real, outsideVolume: integer): void;

declare function SetSoundConeOrientation(soundHandle: sound, x: real, y: real, z: real): void;

declare function SetSoundDistanceCutoff(soundHandle: sound, cutoff: real): void;

declare function SetSoundDistances(soundHandle: sound, minDist: real, maxDist: real): void;

declare function SetSoundDuration(soundHandle: sound, duration: integer): void;

declare function SetSoundParamsFromLabel(soundHandle: sound, soundLabel: string): void;

declare function SetSoundPitch(soundHandle: sound, pitch: real): void;

declare function SetSoundPlayPosition(soundHandle: sound, millisecs: integer): void;

declare function SetSoundPosition(soundHandle: sound, x: real, y: real, z: real): void;

declare function SetSoundVelocity(soundHandle: sound, x: real, y: real, z: real): void;

declare function SetSoundVolume(soundHandle: sound, volume: integer): void;

declare function SetStartLocPrio(whichStartLoc: integer, prioSlotIndex: integer, otherStartLocIndex: integer, priority: startlocprio): void;

declare function SetStartLocPrioCount(whichStartLoc: integer, prioSlotCount: integer): void;

declare function SetTeams(teamcount: integer): void;

declare function SetTerrainFog(a: real, b: real, c: real, d: real, e: real): void;

declare function SetTerrainFogEx(style: integer, zstart: real, zend: real, density: real, red: real, green: real, blue: real): void;

declare function SetTerrainPathable(x: real, y: real, t: pathingtype, flag: boolean): void;

declare function SetTerrainType(x: real, y: real, terrainType: integer, variation: integer, area: integer, shape: integer): void;

declare function SetTextTagAge(t: texttag, age: real): void;

declare function SetTextTagColor(t: texttag, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function SetTextTagFadepoint(t: texttag, fadepoint: real): void;

declare function SetTextTagLifespan(t: texttag, lifespan: real): void;

declare function SetTextTagPermanent(t: texttag, flag: boolean): void;

declare function SetTextTagPos(t: texttag, x: real, y: real, heightOffset: real): void;

declare function SetTextTagPosUnit(t: texttag, whichUnit: unit, heightOffset: real): void;

declare function SetTextTagSuspended(t: texttag, flag: boolean): void;

declare function SetTextTagText(t: texttag, s: string, height: real): void;

declare function SetTextTagVelocity(t: texttag, xvel: real, yvel: real): void;

declare function SetTextTagVisibility(t: texttag, flag: boolean): void;

declare function SetThematicMusicPlayPosition(millisecs: integer): void;

declare function SetTimeOfDayScale(r: real): void;

declare function SetTutorialCleared(cleared: boolean): void;

declare function SetUbersplatRender(whichSplat: ubersplat, flag: boolean): void;

declare function SetUbersplatRenderAlways(whichSplat: ubersplat, flag: boolean): void;

declare function SetUnitAbilityLevel(whichUnit: unit, abilcode: integer, level: integer): number;

declare function SetUnitAcquireRange(whichUnit: unit, newAcquireRange: real): void;

declare function SetUnitAnimation(whichUnit: unit, whichAnimation: string): void;

declare function SetUnitAnimationByIndex(whichUnit: unit, whichAnimation: integer): void;

declare function SetUnitAnimationWithRarity(whichUnit: unit, whichAnimation: string, rarity: raritycontrol): void;

declare function SetUnitBlendTime(whichUnit: unit, blendTime: real): void;

declare function SetUnitColor(whichUnit: unit, whichColor: playercolor): void;

declare function SetUnitCreepGuard(whichUnit: unit, creepGuard: boolean): void;

declare function SetUnitExploded(whichUnit: unit, exploded: boolean): void;

declare function SetUnitFacing(whichUnit: unit, facingAngle: real): void;

declare function SetUnitFacingTimed(whichUnit: unit, facingAngle: real, duration: real): void;

declare function SetUnitFlyHeight(whichUnit: unit, newHeight: real, rate: real): void;

declare function SetUnitFog(a: real, b: real, c: real, d: real, e: real): void;

declare function SetUnitInvulnerable(whichUnit: unit, flag: boolean): void;

declare function SetUnitLookAt(whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: real, offsetY: real, offsetZ: real): void;

declare function SetUnitMoveSpeed(whichUnit: unit, newSpeed: real): void;

declare function SetUnitOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): void;

declare function SetUnitPathing(whichUnit: unit, flag: boolean): void;

declare function SetUnitPosition(whichUnit: unit, newX: real, newY: real): void;

declare function SetUnitPositionLoc(whichUnit: unit, whichLocation: location): void;

declare function SetUnitPropWindow(whichUnit: unit, newPropWindowAngle: real): void;

declare function SetUnitRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): void;

declare function SetUnitRescueRange(whichUnit: unit, range: real): void;

declare function SetUnitScale(whichUnit: unit, scaleX: real, scaleY: real, scaleZ: real): void;

declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: real): void;

declare function SetUnitTimeScale(whichUnit: unit, timeScale: real): void;

declare function SetUnitTurnSpeed(whichUnit: unit, newTurnSpeed: real): void;

declare function SetUnitTypeSlots(whichUnit: unit, slots: integer): void;

declare function SetUnitUseFood(whichUnit: unit, useFood: boolean): void;

declare function SetUnitUserData(whichUnit: unit, data: integer): void;

declare function SetUnitVertexColor(whichUnit: unit, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function SetUnitX(whichUnit: unit, newX: real): void;

declare function SetUnitY(whichUnit: unit, newY: real): void;

declare function SetWaterBaseColor(red: integer, green: integer, blue: integer, alpha: integer): void;

declare function SetWaterDeforms(val: boolean): void;

declare function SetWidgetLife(whichWidget: widget, newLife: real): void;

declare function ShowDestructable(d: destructable, flag: boolean): void;

declare function ShowImage(whichImage: image, flag: boolean): void;

declare function ShowInterface(flag: boolean, fadeDuration: real): void;

declare function ShowUbersplat(whichSplat: ubersplat, flag: boolean): void;

declare function ShowUnit(whichUnit: unit, show: boolean): void;

declare function Sin(radians: real): number;

declare function SquareRoot(x: real): number;

declare function StartCampaignAI(num: player, script: string): void;

declare function StartMeleeAI(num: player, script: string): void;

declare function StartSound(soundHandle: sound): void;

declare function StopCamera(): void;

declare function StopMusic(fadeOut: boolean): void;

declare function StopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void;

declare function StoreBoolean(cache: gamecache, missionKey: string, key: string, value: boolean): void;

declare function StoreInteger(cache: gamecache, missionKey: string, key: string, value: integer): void;

declare function StoreReal(cache: gamecache, missionKey: string, key: string, value: real): void;

declare function StoreString(cache: gamecache, missionKey: string, key: string, value: string): boolean;

declare function StoreUnit(cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean;

declare function StringCase(source: string, upper: boolean): Option<string>;

declare function StringHash(s: string): number;

declare function StringLength(s: string): number;

declare function SubString(source: string, start: integer, end: integer): Option<string>;

declare function SuspendHeroXP(whichHero: unit, flag: boolean): void;

declare function SuspendTimeOfDay(b: boolean): void;

declare function SyncSelections(): void;

declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): void;

declare function Tan(radians: real): number;

declare function TerrainDeformCrater(x: real, y: real, radius: real, depth: real, duration: integer, permanent: boolean): Option<terraindeformation>;

declare function TerrainDeformRandom(x: real, y: real, radius: real, minDelta: real, maxDelta: real, duration: integer, updateInterval: integer): Option<terraindeformation>;

declare function TerrainDeformRipple(x: real, y: real, radius: real, depth: real, duration: integer, count: integer, spaceWaves: real, timeWaves: real, radiusStartPct: real, limitNeg: boolean): Option<terraindeformation>;

declare function TerrainDeformStop(deformation: terraindeformation, duration: integer): void;

declare function TerrainDeformStopAll(): void;

declare function TerrainDeformWave(x: real, y: real, dirX: real, dirY: real, distance: real, speed: real, radius: real, depth: real, trailTime: integer, count: integer): Option<terraindeformation>;

declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): void;

declare function TimerDialogSetRealTimeRemaining(whichDialog: timerdialog, timeRemaining: real): void;

declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: real): void;

declare function TimerDialogSetTimeColor(whichDialog: timerdialog, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): void;

declare function TimerDialogSetTitleColor(whichDialog: timerdialog, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function TimerGetElapsed(whichTimer: timer): number;

declare function TimerGetRemaining(whichTimer: timer): number;

declare function TimerGetTimeout(whichTimer: timer): number;

declare function TimerStart(whichTimer: timer, timeout: real, periodic: boolean, handlerFunc: code): void;

declare function TriggerAddAction(whichTrigger: trigger, actionFunc: code): triggeraction;

declare function TriggerAddCondition(whichTrigger: trigger, condition: boolexpr): Option<triggercondition>;

declare function TriggerClearActions(whichTrigger: trigger): void;

declare function TriggerClearConditions(whichTrigger: trigger): void;

declare function TriggerEvaluate(whichTrigger: trigger): boolean;

declare function TriggerExecute(whichTrigger: trigger): void;

declare function TriggerExecuteWait(whichTrigger: trigger): void;

declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): Option<event>;

declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): Option<event>;

declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): Option<event>;

declare function TriggerRegisterEnterRegion(whichTrigger: trigger, whichRegion: region, filter?: boolexpr): Option<event>;

declare function TriggerRegisterFilterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter?: boolexpr): Option<event>;

declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): Option<event>;

declare function TriggerRegisterGameStateEvent(whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: real): Option<event>;

declare function TriggerRegisterLeaveRegion(whichTrigger: trigger, whichRegion: region, filter?: boolexpr): Option<event>;

declare function TriggerRegisterPlayerAllianceChange(whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): Option<event>;

declare function TriggerRegisterPlayerChatEvent(whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): Option<event>;

declare function TriggerRegisterPlayerEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): Option<event>;

declare function TriggerRegisterPlayerStateEvent(whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: real): Option<event>;

declare function TriggerRegisterPlayerUnitEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter?: boolexpr): Option<event>;

declare function TriggerRegisterTimerEvent(whichTrigger: trigger, timeout: real, periodic: boolean): Option<event>;

declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): Option<event>;

declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): Option<event>;

declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): Option<event>;

declare function TriggerRegisterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): Option<event>;

declare function TriggerRegisterUnitInRange(whichTrigger: trigger, whichUnit: unit, range: real, filter?: boolexpr): Option<event>;

declare function TriggerRegisterUnitStateEvent(whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: real): Option<event>;

declare function TriggerRegisterVariableEvent(whichTrigger: trigger, varName: string, opcode: limitop, limitval: real): Option<event>;

declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): void;

declare function TriggerRemoveCondition(whichTrigger: trigger, whichCondition: triggercondition): void;

declare function TriggerSleepAction(timeout: real): void;

declare function TriggerSyncReady(): void;

declare function TriggerSyncStart(): void;

declare function TriggerWaitForSound(s: sound, offset: real): void;

declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): void;

declare function UnitAddAbility(whichUnit: unit, abilityId: integer): boolean;

declare function UnitAddIndicator(whichUnit: unit, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function UnitAddItem(whichUnit: unit, whichItem: item): boolean;

declare function UnitAddItemById(whichUnit: unit, itemId: integer): Option<item>;

declare function UnitAddItemToSlotById(whichUnit: unit, itemId: integer, itemSlot: integer): boolean;

declare function UnitAddSleep(whichUnit: unit, add: boolean): void;

declare function UnitAddSleepPerm(whichUnit: unit, add: boolean): void;

declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean;

declare function UnitApplyTimedLife(whichUnit: unit, buffId: integer, duration: real): void;

declare function UnitCanSleep(whichUnit: unit): boolean;

declare function UnitCanSleepPerm(whichUnit: unit): boolean;

declare function UnitCountBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): number;

declare function UnitDamagePoint(whichUnit: unit, delay: real, radius: real, x: real, y: real, amount: real, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

declare function UnitDamageTarget(whichUnit: unit, target: widget, amount: real, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

declare function UnitDropItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean;

declare function UnitDropItemSlot(whichUnit: unit, whichItem: item, slot: integer): boolean;

declare function UnitDropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

declare function UnitHasBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean;

declare function UnitHasItem(whichUnit: unit, whichItem: item): boolean;

declare function UnitId(unitIdString: string): number;

declare function UnitId2String(unitId: integer): Option<string>;

declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean;

declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean;

declare function UnitInventorySize(whichUnit: unit): number;

declare function UnitIsSleeping(whichUnit: unit): boolean;

declare function UnitItemInSlot(whichUnit: unit, itemSlot: integer): Option<item>;

declare function UnitMakeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: integer): boolean;

declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: integer): boolean;

declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void;

declare function UnitPoolAddUnitType(whichPool: unitpool, unitId: integer, weight: real): void;

declare function UnitPoolRemoveUnitType(whichPool: unitpool, unitId: integer): void;

declare function UnitRemoveAbility(whichUnit: unit, abilityId: integer): boolean;

declare function UnitRemoveBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): void;

declare function UnitRemoveBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): void;

declare function UnitRemoveItem(whichUnit: unit, whichItem: item): void;

declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: integer): Option<item>;

declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean;

declare function UnitResetCooldown(whichUnit: unit): void;

declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: integer): void;

declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: integer): void;

declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): void;

declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): void;

declare function UnitStripHeroLevel(whichHero: unit, howManyLevels: integer): boolean;

declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): void;

declare function UnitUseItem(whichUnit: unit, whichItem: item): boolean;

declare function UnitUseItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean;

declare function UnitUseItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

declare function UnitWakeUp(whichUnit: unit): void;

declare function UnregisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: real, rectheight: real): void;

declare function VersionCompatible(whichVersion: version): boolean;

declare function VersionGet(): Option<version>;

declare function VersionSupported(whichVersion: version): boolean;

declare function VolumeGroupReset(): void;

declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: real): void;

declare function WaygateActivate(waygate: unit, activate: boolean): void;

declare function WaygateGetDestinationX(waygate: unit): number;

declare function WaygateGetDestinationY(waygate: unit): number;

declare function WaygateIsActive(waygate: unit): boolean;

declare function WaygateSetDestination(waygate: unit, x: real, y: real): void;

// ===================
// ==== FUNCTIONS ====
// ===================
