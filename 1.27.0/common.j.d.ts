/** @noSelfInFile */

// ====================
// ==== BASE TYPES ====
// ====================
declare type real = number & { readonly __real: never; }
declare type integer = number & { readonly __integer: never; }
declare type handle = number & { readonly __handle: never; }
declare type code = () => void;
declare type boolexpr = () => boolean;
declare type conditionfunc = () => boolean;
declare type filterfunc = () => boolean;

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
declare const AI_DIFFICULTY_INSANE: aidifficulty;
declare const AI_DIFFICULTY_NEWBIE: aidifficulty;
declare const AI_DIFFICULTY_NORMAL: aidifficulty;
declare const ALLIANCE_HELP_REQUEST: alliancetype;
declare const ALLIANCE_HELP_RESPONSE: alliancetype;
declare const ALLIANCE_PASSIVE: alliancetype;
declare const ALLIANCE_RESCUABLE: alliancetype;
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype;
declare const ALLIANCE_SHARED_CONTROL: alliancetype;
declare const ALLIANCE_SHARED_SPELLS: alliancetype;
declare const ALLIANCE_SHARED_VISION: alliancetype;
declare const ALLIANCE_SHARED_VISION_FORCED: alliancetype;
declare const ALLIANCE_SHARED_XP: alliancetype;
declare const ATTACK_TYPE_CHAOS: attacktype;
declare const ATTACK_TYPE_HERO: attacktype;
declare const ATTACK_TYPE_MAGIC: attacktype;
declare const ATTACK_TYPE_MELEE: attacktype;
declare const ATTACK_TYPE_NORMAL: attacktype;
declare const ATTACK_TYPE_PIERCE: attacktype;
declare const ATTACK_TYPE_SIEGE: attacktype;
declare const BLEND_MODE_ADDITIVE: blendmode;
declare const BLEND_MODE_BLEND: blendmode;
declare const BLEND_MODE_DONT_CARE: blendmode;
declare const BLEND_MODE_KEYALPHA: blendmode;
declare const BLEND_MODE_MODULATE: blendmode;
declare const BLEND_MODE_MODULATE_2X: blendmode;
declare const BLEND_MODE_NONE: blendmode;
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: camerafield;
declare const CAMERA_FIELD_FARZ: camerafield;
declare const CAMERA_FIELD_FIELD_OF_VIEW: camerafield;
declare const CAMERA_FIELD_ROLL: camerafield;
declare const CAMERA_FIELD_ROTATION: camerafield;
declare const CAMERA_FIELD_TARGET_DISTANCE: camerafield;
declare const CAMERA_FIELD_ZOFFSET: camerafield;
declare const CAMERA_MARGIN_BOTTOM: number;
declare const CAMERA_MARGIN_LEFT: number;
declare const CAMERA_MARGIN_RIGHT: number;
declare const CAMERA_MARGIN_TOP: number;
declare const DAMAGE_TYPE_ACID: damagetype;
declare const DAMAGE_TYPE_COLD: damagetype;
declare const DAMAGE_TYPE_DEATH: damagetype;
declare const DAMAGE_TYPE_DEFENSIVE: damagetype;
declare const DAMAGE_TYPE_DEMOLITION: damagetype;
declare const DAMAGE_TYPE_DISEASE: damagetype;
declare const DAMAGE_TYPE_DIVINE: damagetype;
declare const DAMAGE_TYPE_ENHANCED: damagetype;
declare const DAMAGE_TYPE_FIRE: damagetype;
declare const DAMAGE_TYPE_FORCE: damagetype;
declare const DAMAGE_TYPE_LIGHTNING: damagetype;
declare const DAMAGE_TYPE_MAGIC: damagetype;
declare const DAMAGE_TYPE_MIND: damagetype;
declare const DAMAGE_TYPE_NORMAL: damagetype;
declare const DAMAGE_TYPE_PLANT: damagetype;
declare const DAMAGE_TYPE_POISON: damagetype;
declare const DAMAGE_TYPE_SHADOW_STRIKE: damagetype;
declare const DAMAGE_TYPE_SLOW_POISON: damagetype;
declare const DAMAGE_TYPE_SONIC: damagetype;
declare const DAMAGE_TYPE_SPIRIT_LINK: damagetype;
declare const DAMAGE_TYPE_UNIVERSAL: damagetype;
declare const DAMAGE_TYPE_UNKNOWN: damagetype;
declare const EFFECT_TYPE_AREA_EFFECT: effecttype;
declare const EFFECT_TYPE_CASTER: effecttype;
declare const EFFECT_TYPE_EFFECT: effecttype;
declare const EFFECT_TYPE_LIGHTNING: effecttype;
declare const EFFECT_TYPE_MISSILE: effecttype;
declare const EFFECT_TYPE_SPECIAL: effecttype;
declare const EFFECT_TYPE_TARGET: effecttype;
declare const EQUAL: limitop;
declare const EVENT_DIALOG_BUTTON_CLICK: dialogevent;
declare const EVENT_DIALOG_CLICK: dialogevent;
declare const EVENT_GAME_BUILD_SUBMENU: gameevent;
declare const EVENT_GAME_END_LEVEL: gameevent;
declare const EVENT_GAME_ENTER_REGION: gameevent;
declare const EVENT_GAME_LEAVE_REGION: gameevent;
declare const EVENT_GAME_LOADED: gameevent;
declare const EVENT_GAME_SAVE: gameevent;
declare const EVENT_GAME_SHOW_SKILL: gameevent;
declare const EVENT_GAME_STATE_LIMIT: gameevent;
declare const EVENT_GAME_TIMER_EXPIRED: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent;
declare const EVENT_GAME_TRACKABLE_HIT: gameevent;
declare const EVENT_GAME_TRACKABLE_TRACK: gameevent;
declare const EVENT_GAME_VARIABLE_LIMIT: gameevent;
declare const EVENT_GAME_VICTORY: gameevent;
declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_UP: playerevent;
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_LEFT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_UP_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_UP_UP: playerevent;
declare const EVENT_PLAYER_CHAT: playerevent;
declare const EVENT_PLAYER_DEFEAT: playerevent;
declare const EVENT_PLAYER_END_CINEMATIC: playerevent;
declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_START: playerunitevent;
declare const EVENT_PLAYER_HERO_SKILL: playerunitevent;
declare const EVENT_PLAYER_LEAVE: playerevent;
declare const EVENT_PLAYER_STATE_LIMIT: playerevent;
declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent;
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent;
declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent;
declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DROP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_HIDDEN: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent;
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESCUED: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELL: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELL_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_SUMMON: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_USE_ITEM: playerunitevent;
declare const EVENT_PLAYER_VICTORY: playerevent;
declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent;
declare const EVENT_UNIT_ATTACKED: unitevent;
declare const EVENT_UNIT_CHANGE_OWNER: unitevent;
declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent;
declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent;
declare const EVENT_UNIT_DAMAGED: unitevent;
declare const EVENT_UNIT_DEATH: unitevent;
declare const EVENT_UNIT_DECAY: unitevent;
declare const EVENT_UNIT_DESELECTED: unitevent;
declare const EVENT_UNIT_DETECTED: unitevent;
declare const EVENT_UNIT_DROP_ITEM: unitevent;
declare const EVENT_UNIT_HERO_LEVEL: unitevent;
declare const EVENT_UNIT_HERO_REVIVABLE: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_START: unitevent;
declare const EVENT_UNIT_HERO_SKILL: unitevent;
declare const EVENT_UNIT_HIDDEN: unitevent;
declare const EVENT_UNIT_ISSUED_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_POINT_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent;
declare const EVENT_UNIT_LOADED: unitevent;
declare const EVENT_UNIT_PAWN_ITEM: unitevent;
declare const EVENT_UNIT_PICKUP_ITEM: unitevent;
declare const EVENT_UNIT_RESCUED: unitevent;
declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent;
declare const EVENT_UNIT_RESEARCH_FINISH: unitevent;
declare const EVENT_UNIT_RESEARCH_START: unitevent;
declare const EVENT_UNIT_SELECTED: unitevent;
declare const EVENT_UNIT_SELL: unitevent;
declare const EVENT_UNIT_SELL_ITEM: unitevent;
declare const EVENT_UNIT_SPELL_CAST: unitevent;
declare const EVENT_UNIT_SPELL_CHANNEL: unitevent;
declare const EVENT_UNIT_SPELL_EFFECT: unitevent;
declare const EVENT_UNIT_SPELL_ENDCAST: unitevent;
declare const EVENT_UNIT_SPELL_FINISH: unitevent;
declare const EVENT_UNIT_STATE_LIMIT: unitevent;
declare const EVENT_UNIT_SUMMON: unitevent;
declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent;
declare const EVENT_UNIT_TRAIN_CANCEL: unitevent;
declare const EVENT_UNIT_TRAIN_FINISH: unitevent;
declare const EVENT_UNIT_TRAIN_START: unitevent;
declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent;
declare const EVENT_UNIT_UPGRADE_FINISH: unitevent;
declare const EVENT_UNIT_UPGRADE_START: unitevent;
declare const EVENT_UNIT_USE_ITEM: unitevent;
declare const EVENT_WIDGET_DEATH: widgetevent;
declare const FALSE: boolean;
declare const FOG_OF_WAR_FOGGED: fogstate;
declare const FOG_OF_WAR_MASKED: fogstate;
declare const FOG_OF_WAR_VISIBLE: fogstate;
declare const GAME_STATE_DISCONNECTED: igamestate;
declare const GAME_STATE_DIVINE_INTERVENTION: igamestate;
declare const GAME_STATE_TIME_OF_DAY: fgamestate;
declare const GAME_TYPE_BLIZ: gametype;
declare const GAME_TYPE_FFA: gametype;
declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype;
declare const GAME_TYPE_MELEE: gametype;
declare const GAME_TYPE_ONE_ON_ONE: gametype;
declare const GAME_TYPE_THREE_TEAM_PLAY: gametype;
declare const GAME_TYPE_TWO_TEAM_PLAY: gametype;
declare const GAME_TYPE_USE_MAP_SETTINGS: gametype;
declare const GREATER_THAN: limitop;
declare const GREATER_THAN_OR_EQUAL: limitop;
declare const ITEM_TYPE_ANY: itemtype;
declare const ITEM_TYPE_ARTIFACT: itemtype;
declare const ITEM_TYPE_CAMPAIGN: itemtype;
declare const ITEM_TYPE_CHARGED: itemtype;
declare const ITEM_TYPE_MISCELLANEOUS: itemtype;
declare const ITEM_TYPE_PERMANENT: itemtype;
declare const ITEM_TYPE_POWERUP: itemtype;
declare const ITEM_TYPE_PURCHASABLE: itemtype;
declare const ITEM_TYPE_TOME: itemtype;
declare const ITEM_TYPE_UNKNOWN: itemtype;
declare const JASS_MAX_ARRAY_SIZE: number;
declare const LESS_THAN: limitop;
declare const LESS_THAN_OR_EQUAL: limitop;
declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag;
declare const MAP_CHEATS: mapflag;
declare const MAP_CHEATS_HIDDEN: mapflag;
declare const MAP_CONTROL_COMPUTER: mapcontrol;
declare const MAP_CONTROL_CREEP: mapcontrol;
declare const MAP_CONTROL_NEUTRAL: mapcontrol;
declare const MAP_CONTROL_NONE: mapcontrol;
declare const MAP_CONTROL_RESCUABLE: mapcontrol;
declare const MAP_CONTROL_USER: mapcontrol;
declare const MAP_DENSITY_HEAVY: mapdensity;
declare const MAP_DENSITY_LIGHT: mapdensity;
declare const MAP_DENSITY_MEDIUM: mapdensity;
declare const MAP_DENSITY_NONE: mapdensity;
declare const MAP_DIFFICULTY_EASY: gamedifficulty;
declare const MAP_DIFFICULTY_HARD: gamedifficulty;
declare const MAP_DIFFICULTY_INSANE: gamedifficulty;
declare const MAP_DIFFICULTY_NORMAL: gamedifficulty;
declare const MAP_FIXED_COLORS: mapflag;
declare const MAP_FOG_ALWAYS_VISIBLE: mapflag;
declare const MAP_FOG_HIDE_TERRAIN: mapflag;
declare const MAP_FOG_MAP_EXPLORED: mapflag;
declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag;
declare const MAP_LOCK_RANDOM_SEED: mapflag;
declare const MAP_LOCK_RESOURCE_TRADING: mapflag;
declare const MAP_LOCK_SPEED: mapflag;
declare const MAP_LOC_PRIO_HIGH: startlocprio;
declare const MAP_LOC_PRIO_LOW: startlocprio;
declare const MAP_LOC_PRIO_NOT: startlocprio;
declare const MAP_OBSERVERS: mapflag;
declare const MAP_OBSERVERS_ON_DEATH: mapflag;
declare const MAP_PLACEMENT_FIXED: placement;
declare const MAP_PLACEMENT_RANDOM: placement;
declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement;
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement;
declare const MAP_RANDOM_HERO: mapflag;
declare const MAP_RANDOM_RACES: mapflag;
declare const MAP_RELOADED: mapflag;
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag;
declare const MAP_SHARED_ADVANCED_CONTROL: mapflag;
declare const MAP_SPEED_FAST: gamespeed;
declare const MAP_SPEED_FASTEST: gamespeed;
declare const MAP_SPEED_NORMAL: gamespeed;
declare const MAP_SPEED_SLOW: gamespeed;
declare const MAP_SPEED_SLOWEST: gamespeed;
declare const MAP_USE_HANDICAPS: mapflag;
declare const NOT_EQUAL: limitop;
declare const PATHING_TYPE_AMPHIBIOUSPATHING: pathingtype;
declare const PATHING_TYPE_ANY: pathingtype;
declare const PATHING_TYPE_BLIGHTPATHING: pathingtype;
declare const PATHING_TYPE_BUILDABILITY: pathingtype;
declare const PATHING_TYPE_FLOATABILITY: pathingtype;
declare const PATHING_TYPE_FLYABILITY: pathingtype;
declare const PATHING_TYPE_PEONHARVESTPATHING: pathingtype;
declare const PATHING_TYPE_WALKABILITY: pathingtype;
declare const PLAYER_COLOR_AQUA: playercolor;
declare const PLAYER_COLOR_BLUE: playercolor;
declare const PLAYER_COLOR_BROWN: playercolor;
declare const PLAYER_COLOR_CYAN: playercolor;
declare const PLAYER_COLOR_GREEN: playercolor;
declare const PLAYER_COLOR_LIGHT_BLUE: playercolor;
declare const PLAYER_COLOR_LIGHT_GRAY: playercolor;
declare const PLAYER_COLOR_ORANGE: playercolor;
declare const PLAYER_COLOR_PINK: playercolor;
declare const PLAYER_COLOR_PURPLE: playercolor;
declare const PLAYER_COLOR_RED: playercolor;
declare const PLAYER_COLOR_YELLOW: playercolor;
declare const PLAYER_GAME_RESULT_DEFEAT: playergameresult;
declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult;
declare const PLAYER_GAME_RESULT_TIE: playergameresult;
declare const PLAYER_GAME_RESULT_VICTORY: playergameresult;
declare const PLAYER_NEUTRAL_AGGRESSIVE: number;
declare const PLAYER_NEUTRAL_PASSIVE: number;
declare const PLAYER_SCORE_FOOD_MAXPROD: playerscore;
declare const PLAYER_SCORE_FOOD_MAXUSED: playerscore;
declare const PLAYER_SCORE_GOLD_GIVEN: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_TAX: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_RECEIVED: playerscore;
declare const PLAYER_SCORE_HEROES_KILLED: playerscore;
declare const PLAYER_SCORE_HERO_TOTAL: playerscore;
declare const PLAYER_SCORE_ITEMS_GAINED: playerscore;
declare const PLAYER_SCORE_LUMBER_GIVEN: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_TAX: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_LUMBER_RECEIVED: playerscore;
declare const PLAYER_SCORE_LUMBER_TOTAL: playerscore;
declare const PLAYER_SCORE_MERCS_HIRED: playerscore;
declare const PLAYER_SCORE_RESOURCE_TOTAL: playerscore;
declare const PLAYER_SCORE_STRUCT_BUILT: playerscore;
declare const PLAYER_SCORE_STRUCT_RAZED: playerscore;
declare const PLAYER_SCORE_TECH_PERCENT: playerscore;
declare const PLAYER_SCORE_TOTAL: playerscore;
declare const PLAYER_SCORE_UNITS_KILLED: playerscore;
declare const PLAYER_SCORE_UNITS_TRAINED: playerscore;
declare const PLAYER_SCORE_UNIT_TOTAL: playerscore;
declare const PLAYER_SLOT_STATE_EMPTY: playerslotstate;
declare const PLAYER_SLOT_STATE_LEFT: playerslotstate;
declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate;
declare const PLAYER_STATE_ALLIED_VICTORY: playerstate;
declare const PLAYER_STATE_FOOD_CAP_CEILING: playerstate;
declare const PLAYER_STATE_GAME_RESULT: playerstate;
declare const PLAYER_STATE_GIVES_BOUNTY: playerstate;
declare const PLAYER_STATE_GOLD_GATHERED: playerstate;
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_LUMBER_GATHERED: playerstate;
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate;
declare const PLAYER_STATE_OBSERVER: playerstate;
declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate;
declare const PLAYER_STATE_PLACED: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_USED: playerstate;
declare const PLAYER_STATE_RESOURCE_GOLD: playerstate;
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate;
declare const PLAYER_STATE_RESOURCE_LUMBER: playerstate;
declare const PLAYER_STATE_UNFOLLOWABLE: playerstate;
declare const RACE_DEMON: race;
declare const RACE_HUMAN: race;
declare const RACE_NIGHTELF: race;
declare const RACE_ORC: race;
declare const RACE_OTHER: race;
declare const RACE_PREF_DEMON: racepreference;
declare const RACE_PREF_HUMAN: racepreference;
declare const RACE_PREF_NIGHTELF: racepreference;
declare const RACE_PREF_ORC: racepreference;
declare const RACE_PREF_RANDOM: racepreference;
declare const RACE_PREF_UNDEAD: racepreference;
declare const RACE_PREF_USER_SELECTABLE: racepreference;
declare const RACE_UNDEAD: race;
declare const RARITY_FREQUENT: raritycontrol;
declare const RARITY_RARE: raritycontrol;
declare const SOUND_TYPE_EFFECT: soundtype;
declare const SOUND_TYPE_EFFECT_LOOPED: soundtype;
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup;
declare const SOUND_VOLUMEGROUP_COMBAT: volumegroup;
declare const SOUND_VOLUMEGROUP_FIRE: volumegroup;
declare const SOUND_VOLUMEGROUP_MUSIC: volumegroup;
declare const SOUND_VOLUMEGROUP_SPELLS: volumegroup;
declare const SOUND_VOLUMEGROUP_UI: volumegroup;
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: volumegroup;
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: volumegroup;
declare const TEXMAP_FLAG_NONE: texmapflags;
declare const TEXMAP_FLAG_WRAP_U: texmapflags;
declare const TEXMAP_FLAG_WRAP_UV: texmapflags;
declare const TEXMAP_FLAG_WRAP_V: texmapflags;
declare const TRUE: boolean;
declare const UNIT_STATE_LIFE: unitstate;
declare const UNIT_STATE_MANA: unitstate;
declare const UNIT_STATE_MAX_LIFE: unitstate;
declare const UNIT_STATE_MAX_MANA: unitstate;
declare const UNIT_TYPE_ANCIENT: unittype;
declare const UNIT_TYPE_ATTACKS_FLYING: unittype;
declare const UNIT_TYPE_ATTACKS_GROUND: unittype;
declare const UNIT_TYPE_DEAD: unittype;
declare const UNIT_TYPE_ETHEREAL: unittype;
declare const UNIT_TYPE_FLYING: unittype;
declare const UNIT_TYPE_GIANT: unittype;
declare const UNIT_TYPE_GROUND: unittype;
declare const UNIT_TYPE_HERO: unittype;
declare const UNIT_TYPE_MAGIC_IMMUNE: unittype;
declare const UNIT_TYPE_MECHANICAL: unittype;
declare const UNIT_TYPE_MELEE_ATTACKER: unittype;
declare const UNIT_TYPE_PEON: unittype;
declare const UNIT_TYPE_PLAGUED: unittype;
declare const UNIT_TYPE_POISONED: unittype;
declare const UNIT_TYPE_POLYMORPHED: unittype;
declare const UNIT_TYPE_RANGED_ATTACKER: unittype;
declare const UNIT_TYPE_RESISTANT: unittype;
declare const UNIT_TYPE_SAPPER: unittype;
declare const UNIT_TYPE_SLEEPING: unittype;
declare const UNIT_TYPE_SNARED: unittype;
declare const UNIT_TYPE_STRUCTURE: unittype;
declare const UNIT_TYPE_STUNNED: unittype;
declare const UNIT_TYPE_SUMMONED: unittype;
declare const UNIT_TYPE_TAUREN: unittype;
declare const UNIT_TYPE_TOWNHALL: unittype;
declare const UNIT_TYPE_UNDEAD: unittype;
declare const VERSION_FROZEN_THRONE: version;
declare const VERSION_REIGN_OF_CHAOS: version;
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_STAB: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: weapontype;
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_WHOKNOWS: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: weapontype;

// =================
// ==== NATIVES ====
// =================
declare function AbilityId(abilityIdString: string): number;

declare function AbilityId2String(abilityId: integer): string | undefined;

declare function Acos(x: real): number;

declare function AddHeroXP(whichHero: unit, xpToAdd: integer, showEyeCandy: boolean): void;

declare function AddIndicator(whichWidget: widget, red: integer, green: integer, blue: integer, alpha: integer): void;

declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void;

declare function AddItemToStock(whichUnit: unit, itemId: integer, currentStock: integer, stockMax: integer): void;

declare function AddLightning(codeName: string, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): lightning | undefined;

declare function AddLightningEx(codeName: string, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): lightning | undefined;

declare function AddPlayerTechResearched(whichPlayer: player, techid: integer, levels: integer): void;

declare function AddResourceAmount(whichUnit: unit, amount: integer): void;

declare function AddSpecialEffect(modelName: string, x: real, y: real): effect | undefined;

declare function AddSpecialEffectLoc(modelName: string, where: location): effect | undefined;

declare function AddSpecialEffectTarget(modelName: string, targetWidget: widget, attachPointName: string): effect | undefined;

declare function AddSpellEffect(abilityString: string, t: effecttype, x: real, y: real): effect | undefined;

declare function AddSpellEffectById(abilityId: integer, t: effecttype, x: real, y: real): effect | undefined;

declare function AddSpellEffectByIdLoc(abilityId: integer, t: effecttype, where: location): effect | undefined;

declare function AddSpellEffectLoc(abilityString: string, t: effecttype, where: location): effect | undefined;

declare function AddSpellEffectTarget(modelName: string, t: effecttype, targetWidget: widget, attachPoint: string): effect | undefined;

declare function AddSpellEffectTargetById(abilityId: integer, t: effecttype, targetWidget: widget, attachPoint: string): effect | undefined;

declare function AddUnitAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): void;

declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void;

declare function AddUnitToStock(whichUnit: unit, unitId: integer, currentStock: integer, stockMax: integer): void;

declare function AddWeatherEffect(where: rect, effectID: integer): weathereffect | undefined;

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

declare function ConvertAIDifficulty(i: integer): aidifficulty | undefined;

declare function ConvertAllianceType(i: integer): alliancetype | undefined;

declare function ConvertAttackType(i: integer): attacktype | undefined;

declare function ConvertBlendMode(i: integer): blendmode | undefined;

declare function ConvertCameraField(i: integer): camerafield | undefined;

declare function ConvertDamageType(i: integer): damagetype | undefined;

declare function ConvertDialogEvent(i: integer): dialogevent | undefined;

declare function ConvertEffectType(i: integer): effecttype | undefined;

declare function ConvertFGameState(i: integer): fgamestate | undefined;

declare function ConvertFogState(i: integer): fogstate | undefined;

declare function ConvertGameDifficulty(i: integer): gamedifficulty | undefined;

declare function ConvertGameEvent(i: integer): gameevent | undefined;

declare function ConvertGameSpeed(i: integer): gamespeed | undefined;

declare function ConvertGameType(i: integer): gametype | undefined;

declare function ConvertIGameState(i: integer): igamestate | undefined;

declare function ConvertItemType(i: integer): itemtype | undefined;

declare function ConvertLimitOp(i: integer): limitop | undefined;

declare function ConvertMapControl(i: integer): mapcontrol | undefined;

declare function ConvertMapDensity(i: integer): mapdensity | undefined;

declare function ConvertMapFlag(i: integer): mapflag | undefined;

declare function ConvertMapSetting(i: integer): mapsetting | undefined;

declare function ConvertMapVisibility(i: integer): mapvisibility | undefined;

declare function ConvertPathingType(i: integer): pathingtype | undefined;

declare function ConvertPlacement(i: integer): placement | undefined;

declare function ConvertPlayerColor(i: integer): playercolor | undefined;

declare function ConvertPlayerEvent(i: integer): playerevent | undefined;

declare function ConvertPlayerGameResult(i: integer): playergameresult | undefined;

declare function ConvertPlayerScore(i: integer): playerscore | undefined;

declare function ConvertPlayerSlotState(i: integer): playerslotstate | undefined;

declare function ConvertPlayerState(i: integer): playerstate | undefined;

declare function ConvertPlayerUnitEvent(i: integer): playerunitevent | undefined;

declare function ConvertRace(i: integer): race | undefined;

declare function ConvertRacePref(i: integer): racepreference | undefined;

declare function ConvertRarityControl(i: integer): raritycontrol | undefined;

declare function ConvertSoundType(i: integer): soundtype | undefined;

declare function ConvertStartLocPrio(i: integer): startlocprio | undefined;

declare function ConvertTexMapFlags(i: integer): texmapflags | undefined;

declare function ConvertUnitEvent(i: integer): unitevent | undefined;

declare function ConvertUnitState(i: integer): unitstate | undefined;

declare function ConvertUnitType(i: integer): unittype | undefined;

declare function ConvertVersion(i: integer): version | undefined;

declare function ConvertVolumeGroup(i: integer): volumegroup | undefined;

declare function ConvertWeaponType(i: integer): weapontype | undefined;

declare function ConvertWidgetEvent(i: integer): widgetevent | undefined;

declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean;

declare function Cos(radians: real): number;

declare function CreateBlightedGoldmine(id: player, x: real, y: real, face: real): unit | undefined;

declare function CreateCameraSetup(): camerasetup;

declare function CreateCorpse(whichPlayer: player, unitid: integer, x: real, y: real, face: real): unit | undefined;

declare function CreateDeadDestructable(objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): destructable | undefined;

declare function CreateDeadDestructableZ(objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): destructable | undefined;

declare function CreateDefeatCondition(): defeatcondition | undefined;

declare function CreateDestructable(objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): destructable | undefined;

declare function CreateDestructableZ(objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): destructable | undefined;

declare function CreateFogModifierRadius(forWhichPlayer: player, whichState: fogstate, centerx: real, centerY: real, radius: real, useSharedVision: boolean, afterUnits: boolean): fogmodifier | undefined;

declare function CreateFogModifierRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: real, useSharedVision: boolean, afterUnits: boolean): fogmodifier | undefined;

declare function CreateFogModifierRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): fogmodifier | undefined;

declare function CreateForce(): force | undefined;

declare function CreateGroup(): group | undefined;

declare function CreateImage(file: string, sizeX: real, sizeY: real, sizeZ: real, posX: real, posY: real, posZ: real, originX: real, originY: real, originZ: real, imageType: integer): image | undefined;

declare function CreateItem(itemid: integer, x: real, y: real): item | undefined;

declare function CreateItemPool(): itempool | undefined;

declare function CreateLeaderboard(): leaderboard | undefined;

declare function CreateMIDISound(soundLabel: string, fadeInRate: integer, fadeOutRate: integer): sound | undefined;

declare function CreateMultiboard(): multiboard | undefined;

declare function CreateQuest(): quest | undefined;

declare function CreateRegion(): region;

declare function CreateSound(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, eaxSetting: string): sound | undefined;

declare function CreateSoundFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, SLKEntryName: string): sound | undefined;

declare function CreateSoundFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer): sound | undefined;

declare function CreateTextTag(): texttag | undefined;

declare function CreateTimer(): timer;

declare function CreateTimerDialog(t: timer): timerdialog | undefined;

declare function CreateTrackable(trackableModelPath: string, x: real, y: real, facing: real): trackable | undefined;

declare function CreateTrigger(): trigger;

declare function CreateUbersplat(x: real, y: real, name: string, red: integer, green: integer, blue: integer, alpha: integer, forcePaused: boolean, noBirthTime: boolean): ubersplat | undefined;

declare function CreateUnit(id: player, unitid: integer, x: real, y: real, face: real): unit | undefined;

declare function CreateUnitAtLoc(id: player, unitid: integer, whichLocation: location, face: real): unit | undefined;

declare function CreateUnitAtLocByName(id: player, unitname: string, whichLocation: location, face: real): unit | undefined;

declare function CreateUnitByName(whichPlayer: player, unitname: string, x: real, y: real, face: real): unit | undefined;

declare function CreateUnitPool(): unitpool | undefined;

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

declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: integer): button | undefined;

declare function DialogAddQuitButton(whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: integer): button | undefined;

declare function DialogClear(whichDialog: dialog): void;

declare function DialogCreate(): dialog | undefined;

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

declare function EnumDestructablesInRect(r: rect, filter: boolexpr | undefined, actionFunc: code): void;

declare function EnumItemsInRect(r: rect, filter: boolexpr | undefined, actionFunc: code): void;

declare function ExecuteFunc(funcName: string): void;

declare function Filter(func: code): filterfunc;

declare function FinishUbersplat(whichSplat: ubersplat): void;

declare function FirstOfGroup(whichGroup: group): unit | undefined;

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

declare function ForceEnumPlayersCounted(whichForce: force, filter: boolexpr | undefined, countLimit: integer): void;

declare function ForcePlayerStartLocation(whichPlayer: player, startLocIndex: integer): void;

declare function ForceQuestDialogUpdate(): void;

declare function ForceRemovePlayer(whichForce: force, whichPlayer: player): void;

declare function ForceUICancel(): void;

declare function ForceUIKey(key: string): void;

declare function ForForce(whichForce: force, callback: code): void;

declare function ForGroup(whichGroup: group, callback: code): void;

declare function GetAbilityEffect(abilityString: string, t: effecttype, index: integer): string | undefined;

declare function GetAbilityEffectById(abilityId: integer, t: effecttype, index: integer): string | undefined;

declare function GetAbilitySound(abilityString: string, t: soundtype): string | undefined;

declare function GetAbilitySoundById(abilityId: integer, t: soundtype): string | undefined;

declare function GetAIDifficulty(num: player): aidifficulty | undefined;

declare function GetAllyColorFilterState(): number;

declare function GetAttacker(): unit | undefined;

declare function GetBuyingUnit(): unit | undefined;

declare function GetCameraBoundMaxX(): number;

declare function GetCameraBoundMaxY(): number;

declare function GetCameraBoundMinX(): number;

declare function GetCameraBoundMinY(): number;

declare function GetCameraEyePositionLoc(): location | undefined;

declare function GetCameraEyePositionX(): number;

declare function GetCameraEyePositionY(): number;

declare function GetCameraEyePositionZ(): number;

declare function GetCameraField(whichField: camerafield): number;

declare function GetCameraMargin(whichMargin: integer): number;

declare function GetCameraTargetPositionLoc(): location | undefined;

declare function GetCameraTargetPositionX(): number;

declare function GetCameraTargetPositionY(): number;

declare function GetCameraTargetPositionZ(): number;

declare function GetCancelledStructure(): unit | undefined;

declare function GetChangingUnit(): unit | undefined;

declare function GetChangingUnitPrevOwner(): player | undefined;

declare function GetClickedButton(): button | undefined;

declare function GetClickedDialog(): dialog | undefined;

declare function GetConstructedStructure(): unit | undefined;

declare function GetConstructingStructure(): unit | undefined;

declare function GetCreatureDensity(): mapdensity | undefined;

declare function GetCreepCampFilterState(): boolean;

declare function GetCustomCampaignButtonVisible(whichButton: integer): boolean;

declare function GetDecayingUnit(): unit | undefined;

declare function GetDefaultDifficulty(): gamedifficulty | undefined;

declare function GetDestructableLife(d: destructable): number;

declare function GetDestructableMaxLife(d: destructable): number;

declare function GetDestructableName(d: destructable): string | undefined;

declare function GetDestructableOccluderHeight(d: destructable): number;

declare function GetDestructableTypeId(d: destructable): number;

declare function GetDestructableX(d: destructable): number;

declare function GetDestructableY(d: destructable): number;

declare function GetDetectedUnit(): unit | undefined;

declare function GetDyingUnit(): unit | undefined;

declare function GetEnteringUnit(): unit | undefined;

declare function GetEnumDestructable(): destructable | undefined;

declare function GetEnumItem(): item | undefined;

declare function GetEnumPlayer(): player | undefined;

declare function GetEnumUnit(): unit | undefined;

declare function GetEventDamage(): number;

declare function GetEventDamageSource(): unit | undefined;

declare function GetEventDetectingPlayer(): player | undefined;

declare function GetEventGameState(): gamestate | undefined;

declare function GetEventPlayerChatString(): string | undefined;

declare function GetEventPlayerChatStringMatched(): string | undefined;

declare function GetEventPlayerState(): playerstate | undefined;

declare function GetEventTargetUnit(): unit | undefined;

declare function GetEventUnitState(): unitstate | undefined;

declare function GetExpiredTimer(): timer | undefined;

declare function GetFilterDestructable(): destructable | undefined;

declare function GetFilterItem(): item | undefined;

declare function GetFilterPlayer(): player | undefined;

declare function GetFilterUnit(): unit | undefined;

declare function GetFloatGameState(whichFloatGameState: fgamestate): number;

declare function GetFoodMade(unitId: integer): number;

declare function GetFoodUsed(unitId: integer): number;

declare function GetGameDifficulty(): gamedifficulty | undefined;

declare function GetGamePlacement(): placement | undefined;

declare function GetGameSpeed(): gamespeed | undefined;

declare function GetGameTypeSelected(): gametype | undefined;

declare function GetHandleId(h: handle): number;

declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroLevel(whichHero: unit): number;

declare function GetHeroProperName(whichHero: unit): string | undefined;

declare function GetHeroSkillPoints(whichHero: unit): number;

declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroXP(whichHero: unit): number;

declare function GetIntegerGameState(whichIntegerGameState: igamestate): number;

declare function GetIssuedOrderId(): number;

declare function GetItemCharges(whichItem: item): number;

declare function GetItemLevel(whichItem: item): number;

declare function GetItemName(whichItem: item): string | undefined;

declare function GetItemPlayer(whichItem: item): player | undefined;

declare function GetItemType(whichItem: item): itemtype | undefined;

declare function GetItemTypeId(i: item): number;

declare function GetItemUserData(whichItem: item): number;

declare function GetItemX(i: item): number;

declare function GetItemY(i: item): number;

declare function GetKillingUnit(): unit | undefined;

declare function GetLearnedSkill(): number;

declare function GetLearnedSkillLevel(): number;

declare function GetLearningUnit(): unit | undefined;

declare function GetLeavingUnit(): unit | undefined;

declare function GetLevelingUnit(): unit | undefined;

declare function GetLightningColorA(whichBolt: lightning): number;

declare function GetLightningColorB(whichBolt: lightning): number;

declare function GetLightningColorG(whichBolt: lightning): number;

declare function GetLightningColorR(whichBolt: lightning): number;

declare function GetLoadedUnit(): unit | undefined;

declare function GetLocalizedHotkey(source: string): number;

declare function GetLocalizedString(source: string): string | undefined;

declare function GetLocalPlayer(): player;

declare function GetLocationX(whichLocation: location): number;

declare function GetLocationY(whichLocation: location): number;

declare function GetLocationZ(whichLocation: location): number;

declare function GetManipulatedItem(): item | undefined;

declare function GetManipulatingUnit(): unit | undefined;

declare function GetObjectName(objectId: integer): string | undefined;

declare function GetOrderedUnit(): unit | undefined;

declare function GetOrderPointLoc(): location | undefined;

declare function GetOrderPointX(): number;

declare function GetOrderPointY(): number;

declare function GetOrderTarget(): widget | undefined;

declare function GetOrderTargetDestructable(): destructable | undefined;

declare function GetOrderTargetItem(): item | undefined;

declare function GetOrderTargetUnit(): unit | undefined;

declare function GetOwningPlayer(whichUnit: unit): player;

declare function GetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean;

declare function GetPlayerColor(whichPlayer: player): playercolor;

declare function GetPlayerController(whichPlayer: player): mapcontrol;

declare function GetPlayerHandicap(whichPlayer: player): number;

declare function GetPlayerHandicapXP(whichPlayer: player): number;

declare function GetPlayerId(whichPlayer: player): number;

declare function GetPlayerName(whichPlayer: player): string | undefined;

declare function GetPlayerRace(whichPlayer: player): race | undefined;

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

declare function GetRescuer(): unit | undefined;

declare function GetResearched(): number;

declare function GetResearchingUnit(): unit | undefined;

declare function GetResourceAmount(whichUnit: unit): number;

declare function GetResourceDensity(): mapdensity | undefined;

declare function GetRevivableUnit(): unit | undefined;

declare function GetRevivingUnit(): unit | undefined;

declare function GetSaveBasicFilename(): string | undefined;

declare function GetSellingUnit(): unit | undefined;

declare function GetSoldItem(): item | undefined;

declare function GetSoldUnit(): unit | undefined;

declare function GetSoundDuration(soundHandle: sound): number;

declare function GetSoundFileDuration(musicFileName: string): number;

declare function GetSoundIsLoading(soundHandle: sound): boolean;

declare function GetSoundIsPlaying(soundHandle: sound): boolean;

declare function GetSpellAbility(): ability | undefined;

declare function GetSpellAbilityId(): number;

declare function GetSpellAbilityUnit(): unit | undefined;

declare function GetSpellTargetDestructable(): destructable | undefined;

declare function GetSpellTargetItem(): item | undefined;

declare function GetSpellTargetLoc(): location | undefined;

declare function GetSpellTargetUnit(): unit | undefined;

declare function GetSpellTargetX(): number;

declare function GetSpellTargetY(): number;

declare function GetStartLocationLoc(whichStartLocation: integer): location | undefined;

declare function GetStartLocationX(whichStartLocation: integer): number;

declare function GetStartLocationY(whichStartLocation: integer): number;

declare function GetStartLocPrio(whichStartLoc: integer, prioSlotIndex: integer): startlocprio | undefined;

declare function GetStartLocPrioSlot(whichStartLoc: integer, prioSlotIndex: integer): number;

declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): number;

declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): number;

declare function GetStoredString(cache: gamecache, missionKey: string, key: string): string | undefined;

declare function GetSummonedUnit(): unit | undefined;

declare function GetSummoningUnit(): unit | undefined;

declare function GetTeams(): number;

declare function GetTerrainCliffLevel(x: real, y: real): number;

declare function GetTerrainType(x: real, y: real): number;

declare function GetTerrainVariance(x: real, y: real): number;

declare function GetTimeOfDayScale(): number;

declare function GetTournamentFinishNowPlayer(): player | undefined;

declare function GetTournamentFinishNowRule(): number;

declare function GetTournamentFinishSoonTimeRemaining(): number;

declare function GetTournamentScore(whichPlayer: player): number;

declare function GetTrainedUnit(): unit | undefined;

declare function GetTrainedUnitType(): number;

declare function GetTransportUnit(): unit | undefined;

declare function GetTriggerDestructable(): destructable | undefined;

declare function GetTriggerEvalCount(whichTrigger: trigger): number;

declare function GetTriggerEventId(): eventid | undefined;

declare function GetTriggerExecCount(whichTrigger: trigger): number;

declare function GetTriggeringRegion(): region | undefined;

declare function GetTriggeringTrackable(): trackable | undefined;

declare function GetTriggeringTrigger(): trigger | undefined;

declare function GetTriggerPlayer(): player | undefined;

declare function GetTriggerUnit(): unit | undefined;

declare function GetTriggerWidget(): widget | undefined;

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

declare function GetUnitName(whichUnit: unit): string | undefined;

declare function GetUnitPointValue(whichUnit: unit): number;

declare function GetUnitPointValueByType(unitType: integer): number;

declare function GetUnitPropWindow(whichUnit: unit): number;

declare function GetUnitRace(whichUnit: unit): race;

declare function GetUnitRallyDestructable(whichUnit: unit): destructable | undefined;

declare function GetUnitRallyPoint(whichUnit: unit): location | undefined;

declare function GetUnitRallyUnit(whichUnit: unit): unit | undefined;

declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): number;

declare function GetUnitTurnSpeed(whichUnit: unit): number;

declare function GetUnitTypeId(whichUnit: unit): number;

declare function GetUnitUserData(whichUnit: unit): number;

declare function GetUnitX(whichUnit: unit): number;

declare function GetUnitY(whichUnit: unit): number;

declare function GetWidgetLife(whichWidget: widget): number;

declare function GetWidgetX(whichWidget: widget): number;

declare function GetWidgetY(whichWidget: widget): number;

declare function GetWinningPlayer(): player | undefined;

declare function GetWorldBounds(): rect | undefined;

declare function GroupAddUnit(whichGroup: group, whichUnit: unit): void;

declare function GroupClear(whichGroup: group): void;

declare function GroupEnumUnitsInRange(whichGroup: group, x: real, y: real, radius: real, filter?: boolexpr): void;

declare function GroupEnumUnitsInRangeCounted(whichGroup: group, x: real, y: real, radius: real, filter: boolexpr | undefined, countLimit: integer): void;

declare function GroupEnumUnitsInRangeOfLoc(whichGroup: group, whichLocation: location, radius: real, filter?: boolexpr): void;

declare function GroupEnumUnitsInRangeOfLocCounted(whichGroup: group, whichLocation: location, radius: real, filter: boolexpr | undefined, countLimit: integer): void;

declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter?: boolexpr): void;

declare function GroupEnumUnitsInRectCounted(whichGroup: group, r: rect, filter: boolexpr | undefined, countLimit: integer): void;

declare function GroupEnumUnitsOfPlayer(whichGroup: group, whichPlayer: player, filter?: boolexpr): void;

declare function GroupEnumUnitsOfType(whichGroup: group, unitname: string, filter?: boolexpr): void;

declare function GroupEnumUnitsOfTypeCounted(whichGroup: group, unitname: string, filter: boolexpr | undefined, countLimit: integer): void;

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

declare function I2S(i: integer): string | undefined;

declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: integer): number;

declare function InitGameCache(campaignFile: string): gamecache | undefined;

declare function InitHashtable(): hashtable | undefined;

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

declare function LeaderboardGetLabelText(lb: leaderboard): string | undefined;

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

declare function LoadAbilityHandle(table: hashtable, parentKey: integer, childKey: integer): ability | undefined;

declare function LoadBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean;

declare function LoadBooleanExprHandle(table: hashtable, parentKey: integer, childKey: integer): boolexpr | undefined;

declare function LoadButtonHandle(table: hashtable, parentKey: integer, childKey: integer): button | undefined;

declare function LoadDefeatConditionHandle(table: hashtable, parentKey: integer, childKey: integer): defeatcondition | undefined;

declare function LoadDestructableHandle(table: hashtable, parentKey: integer, childKey: integer): destructable | undefined;

declare function LoadDialogHandle(table: hashtable, parentKey: integer, childKey: integer): dialog | undefined;

declare function LoadEffectHandle(table: hashtable, parentKey: integer, childKey: integer): effect | undefined;

declare function LoadFogModifierHandle(table: hashtable, parentKey: integer, childKey: integer): fogmodifier | undefined;

declare function LoadFogStateHandle(table: hashtable, parentKey: integer, childKey: integer): fogstate | undefined;

declare function LoadForceHandle(table: hashtable, parentKey: integer, childKey: integer): force | undefined;

declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void;

declare function LoadGroupHandle(table: hashtable, parentKey: integer, childKey: integer): group | undefined;

declare function LoadHashtableHandle(table: hashtable, parentKey: integer, childKey: integer): hashtable | undefined;

declare function LoadImageHandle(table: hashtable, parentKey: integer, childKey: integer): image | undefined;

declare function LoadInteger(table: hashtable, parentKey: integer, childKey: integer): number;

declare function LoadItemHandle(table: hashtable, parentKey: integer, childKey: integer): item | undefined;

declare function LoadItemPoolHandle(table: hashtable, parentKey: integer, childKey: integer): itempool | undefined;

declare function LoadLeaderboardHandle(table: hashtable, parentKey: integer, childKey: integer): leaderboard | undefined;

declare function LoadLightningHandle(table: hashtable, parentKey: integer, childKey: integer): lightning | undefined;

declare function LoadLocationHandle(table: hashtable, parentKey: integer, childKey: integer): location | undefined;

declare function LoadMultiboardHandle(table: hashtable, parentKey: integer, childKey: integer): multiboard | undefined;

declare function LoadMultiboardItemHandle(table: hashtable, parentKey: integer, childKey: integer): multiboarditem | undefined;

declare function LoadPlayerHandle(table: hashtable, parentKey: integer, childKey: integer): player | undefined;

declare function LoadQuestHandle(table: hashtable, parentKey: integer, childKey: integer): quest | undefined;

declare function LoadQuestItemHandle(table: hashtable, parentKey: integer, childKey: integer): questitem | undefined;

declare function LoadReal(table: hashtable, parentKey: integer, childKey: integer): number;

declare function LoadRectHandle(table: hashtable, parentKey: integer, childKey: integer): rect | undefined;

declare function LoadRegionHandle(table: hashtable, parentKey: integer, childKey: integer): region | undefined;

declare function LoadSoundHandle(table: hashtable, parentKey: integer, childKey: integer): sound | undefined;

declare function LoadStr(table: hashtable, parentKey: integer, childKey: integer): string | undefined;

declare function LoadTextTagHandle(table: hashtable, parentKey: integer, childKey: integer): texttag | undefined;

declare function LoadTimerDialogHandle(table: hashtable, parentKey: integer, childKey: integer): timerdialog | undefined;

declare function LoadTimerHandle(table: hashtable, parentKey: integer, childKey: integer): timer | undefined;

declare function LoadTrackableHandle(table: hashtable, parentKey: integer, childKey: integer): trackable | undefined;

declare function LoadTriggerActionHandle(table: hashtable, parentKey: integer, childKey: integer): triggeraction | undefined;

declare function LoadTriggerConditionHandle(table: hashtable, parentKey: integer, childKey: integer): triggercondition | undefined;

declare function LoadTriggerEventHandle(table: hashtable, parentKey: integer, childKey: integer): event | undefined;

declare function LoadTriggerHandle(table: hashtable, parentKey: integer, childKey: integer): trigger | undefined;

declare function LoadUbersplatHandle(table: hashtable, parentKey: integer, childKey: integer): ubersplat | undefined;

declare function LoadUnitHandle(table: hashtable, parentKey: integer, childKey: integer): unit | undefined;

declare function LoadUnitPoolHandle(table: hashtable, parentKey: integer, childKey: integer): unitpool | undefined;

declare function LoadWidgetHandle(table: hashtable, parentKey: integer, childKey: integer): widget | undefined;

declare function Location(x: real, y: real): location;

declare function MoveLightning(whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean;

declare function MoveLightningEx(whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): boolean;

declare function MoveLocation(whichLocation: location, newX: real, newY: real): void;

declare function MoveRectTo(whichRect: rect, newCenterX: real, newCenterY: real): void;

declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): void;

declare function MultiboardClear(lb: multiboard): void;

declare function MultiboardDisplay(lb: multiboard, show: boolean): void;

declare function MultiboardGetColumnCount(lb: multiboard): number;

declare function MultiboardGetItem(lb: multiboard, row: integer, column: integer): multiboarditem | undefined;

declare function MultiboardGetRowCount(lb: multiboard): number;

declare function MultiboardGetTitleText(lb: multiboard): string | undefined;

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

declare function OrderId2String(orderId: integer): string | undefined;

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

declare function PlaceRandomItem(whichItemPool: itempool, x: real, y: real): item | undefined;

declare function PlaceRandomUnit(whichPool: unitpool, forWhichPlayer: player, x: real, y: real, facing: real): unit | undefined;

declare function PlayCinematic(movieName: string): void;

declare function Player(number: integer): player | undefined;

declare function PlayerGetLeaderboard(toPlayer: player): leaderboard | undefined;

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

declare function QuestCreateItem(whichQuest: quest): questitem | undefined;

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

declare function R2S(r: real): string | undefined;

declare function R2SW(r: real, width: integer, precision: integer): string | undefined;

declare function Rad2Deg(radians: real): number;

declare function Rect(minx: real, miny: real, maxx: real, maxy: real): rect;

declare function RectFromLoc(min: location, max: location): rect | undefined;

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

declare function RestoreUnit(cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: real, y: real, facing: real): unit | undefined;

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

declare function StringCase(source: string, upper: boolean): string | undefined;

declare function StringHash(s: string): number;

declare function StringLength(s: string): number;

declare function SubString(source: string, start: integer, end: integer): string | undefined;

declare function SuspendHeroXP(whichHero: unit, flag: boolean): void;

declare function SuspendTimeOfDay(b: boolean): void;

declare function SyncSelections(): void;

declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): void;

declare function Tan(radians: real): number;

declare function TerrainDeformCrater(x: real, y: real, radius: real, depth: real, duration: integer, permanent: boolean): terraindeformation | undefined;

declare function TerrainDeformRandom(x: real, y: real, radius: real, minDelta: real, maxDelta: real, duration: integer, updateInterval: integer): terraindeformation | undefined;

declare function TerrainDeformRipple(x: real, y: real, radius: real, depth: real, duration: integer, count: integer, spaceWaves: real, timeWaves: real, radiusStartPct: real, limitNeg: boolean): terraindeformation | undefined;

declare function TerrainDeformStop(deformation: terraindeformation, duration: integer): void;

declare function TerrainDeformStopAll(): void;

declare function TerrainDeformWave(x: real, y: real, dirX: real, dirY: real, distance: real, speed: real, radius: real, depth: real, trailTime: integer, count: integer): terraindeformation | undefined;

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

declare function TriggerAddCondition(whichTrigger: trigger, condition: boolexpr): triggercondition | undefined;

declare function TriggerClearActions(whichTrigger: trigger): void;

declare function TriggerClearConditions(whichTrigger: trigger): void;

declare function TriggerEvaluate(whichTrigger: trigger): boolean;

declare function TriggerExecute(whichTrigger: trigger): void;

declare function TriggerExecuteWait(whichTrigger: trigger): void;

declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event | undefined;

declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event | undefined;

declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event | undefined;

declare function TriggerRegisterEnterRegion(whichTrigger: trigger, whichRegion: region, filter?: boolexpr): event | undefined;

declare function TriggerRegisterFilterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter?: boolexpr): event | undefined;

declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event | undefined;

declare function TriggerRegisterGameStateEvent(whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: real): event | undefined;

declare function TriggerRegisterLeaveRegion(whichTrigger: trigger, whichRegion: region, filter?: boolexpr): event | undefined;

declare function TriggerRegisterPlayerAllianceChange(whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): event | undefined;

declare function TriggerRegisterPlayerChatEvent(whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event | undefined;

declare function TriggerRegisterPlayerEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): event | undefined;

declare function TriggerRegisterPlayerStateEvent(whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: real): event | undefined;

declare function TriggerRegisterPlayerUnitEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter?: boolexpr): event | undefined;

declare function TriggerRegisterTimerEvent(whichTrigger: trigger, timeout: real, periodic: boolean): event | undefined;

declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event | undefined;

declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event | undefined;

declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event | undefined;

declare function TriggerRegisterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): event | undefined;

declare function TriggerRegisterUnitInRange(whichTrigger: trigger, whichUnit: unit, range: real, filter?: boolexpr): event | undefined;

declare function TriggerRegisterUnitStateEvent(whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: real): event | undefined;

declare function TriggerRegisterVariableEvent(whichTrigger: trigger, varName: string, opcode: limitop, limitval: real): event | undefined;

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

declare function UnitAddItemById(whichUnit: unit, itemId: integer): item | undefined;

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

declare function UnitId2String(unitId: integer): string | undefined;

declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean;

declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean;

declare function UnitInventorySize(whichUnit: unit): number;

declare function UnitIsSleeping(whichUnit: unit): boolean;

declare function UnitItemInSlot(whichUnit: unit, itemSlot: integer): item | undefined;

declare function UnitMakeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: integer): boolean;

declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: integer): boolean;

declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void;

declare function UnitPoolAddUnitType(whichPool: unitpool, unitId: integer, weight: real): void;

declare function UnitPoolRemoveUnitType(whichPool: unitpool, unitId: integer): void;

declare function UnitRemoveAbility(whichUnit: unit, abilityId: integer): boolean;

declare function UnitRemoveBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): void;

declare function UnitRemoveBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): void;

declare function UnitRemoveItem(whichUnit: unit, whichItem: item): void;

declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: integer): item | undefined;

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

declare function VersionGet(): version | undefined;

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
