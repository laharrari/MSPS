/*function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	cm.sendNext("Hi, I'm #p9010003#.");
	cm.dispose();
}*/

/*
Author: Harrison
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
	cm.sendSimple ("Pick a Category#e#d" +
                 "#k\r\n#L0##rCommon" +
                 "#k\r\n#L1##rWarrior" +
                 "#k\r\n#L2##rMagician" +
                 "#k\r\n#L3##rArcher" +
                 "#k\r\n#L4##rThief" +
                 "#k\r\n#L5##rPirate" +
                 "#k\r\n#L6##rETC Items");
	  } else if (selection == 0) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L100##rEarrings" +
			"#k\r\n#L101##rNecklaces and Face Accessories" +
			"#k\r\n#L102##rCapes" +
			"#k\r\n#L103##rOveralls" +
			"#k\r\n#L104##rGloves" +
			"#k\r\n#L105##rShields" +
			"#k\r\n#L106##rShoes" +
			"#k\r\n#L107##rMaple Weapons");
	  } else if (selection == 1) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L200##bHats" +
			"#k\r\n#L201##bTops" +
			"#k\r\n#L202##bBottoms" +
			"#k\r\n#L203##bOveralls" +
			"#l\r\n#L204##bGloves" +
			"#l\r\n#L205##bShields" +
			"#l\r\n#L206##bShoes" +
			"#l\r\n#L207##b1H Axes" +
			"#k\r\n#L208##b2H Axes" +
			"#k\r\n#L209##b1H BWs" +
			"#k\r\n#L210##b2H BWs" +
			"#k\r\n#L211##b1H Swords" +
			"#k\r\n#L212##b2H Swords" +
			"#k\r\n#L213##b2H Spears" +
			"#k\r\n#L214##bPole Arms");
	  } else if (selection == 2) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L300##dHats" +
			"#k\r\n#L301##dOveralls" +
			"#k\r\n#L302##dGloves" +
			"#k\r\n#L303##dShields" +
			"#k\r\n#L304##dShoes" +
			"#k\r\n#L305##dWands" +
			"#k\r\n#L306##dStaffs");
	  } else if (selection == 3) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L400##gHats" +
			"#k\r\n#L401##gOveralls" +
			"#k\r\n#L402##gGloves" +
			"#k\r\n#L403##gShoes" +
			"#k\r\n#L404##gBows" +
			"#k\r\n#L405##gCrossbows" +
			"#k\r\n#L406##gArrows");
	  } else if (selection == 4) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L500##bHats" +
			"#k\r\n#L501##bTops" +
			"#k\r\n#L502##bBottoms" +
			"#k\r\n#L503##bOveralls" +
			"#k\r\n#L504##bGloves" +
			"#k\r\n#L505##bShields" +
			"#k\r\n#L506##bShoes" +
			"#k\r\n#L507##bDaggers" +
			"#k\r\n#L508##bClaws" +
			"#k\r\n#L509##bThrowing Stars");
	  } else if (selection == 5) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L600#Hats" +
			"#k\r\n#L601#Overalls" +
			"#k\r\n#L602#Gloves" +
			"#k\r\n#L603#Shoes" +
			"#k\r\n#L604#Weapons" +
			"#k\r\n#L605#Bullets and Capsules");
	  } else if (selection == 6) {
               cm.sendSimple ("Pick a Category #e#d" +
			"\r\n#L700#Consumables" +
			"\r\n#L701#Scrolls");
	  } else if (selection == 100) {
		cm.openShopNPC (6000);
		cm.dispose();
	  } else if (selection == 101) {
		cm.openShopNPC (6001);
		cm.dispose();
	  } else if (selection == 102) {
		cm.openShopNPC (6002);
		cm.dispose();
	  } else if (selection == 103) {
		cm.openShopNPC (6003);
		cm.dispose();
	  } else if (selection == 104) {
		cm.openShopNPC (6004);
		cm.dispose();
	  } else if (selection == 105) {
		cm.openShopNPC (6005);
		cm.dispose();
	  } else if (selection == 106) {
		cm.openShopNPC (6006);
		cm.dispose();
	  } else if (selection == 107) {
		cm.openShopNPC (6007);
		cm.dispose();
	  } else if (selection == 200) {
		cm.openShopNPC (6100);
		cm.dispose();
	  } else if (selection == 201) {
		cm.openShopNPC (6101);
		cm.dispose();
	  } else if (selection == 202) {
		cm.openShopNPC (6102);
		cm.dispose();
	  } else if (selection == 203) {
		cm.openShopNPC (6103);
		cm.dispose();
	  } else if (selection == 204) {
		cm.openShopNPC (6104);
		cm.dispose();
	  } else if (selection == 205) {
		cm.openShopNPC (6105);
		cm.dispose();
	  } else if (selection == 206) {
		cm.openShopNPC (6106);
		cm.dispose();
	  } else if (selection == 207) {
		cm.openShopNPC (6107);
		cm.dispose();
	  } else if (selection == 208) {
		cm.openShopNPC (6108);
		cm.dispose();
	  } else if (selection == 209) {
		cm.openShopNPC (6109);
		cm.dispose();
	  } else if (selection == 210) {
		cm.openShopNPC (6110);
		cm.dispose();
	  } else if (selection == 211) {
		cm.openShopNPC (6111);
		cm.dispose();
	  } else if (selection == 212) {
		cm.openShopNPC (6112);
		cm.dispose();
	  } else if (selection == 213) {
		cm.openShopNPC (6113);
		cm.dispose();
	  } else if (selection == 214) {
		cm.openShopNPC (6114);
		cm.dispose();
	  } else if (selection == 300) {
		cm.openShopNPC (6200);
		cm.dispose();
	  } else if (selection == 301) {
		cm.openShopNPC (6201);
		cm.dispose();
	  } else if (selection == 302) {
		cm.openShopNPC (6202);
		cm.dispose();
	  } else if (selection == 303) {
		cm.openShopNPC (6203);
		cm.dispose();
	  } else if (selection == 304) {
		cm.openShopNPC (6204);
		cm.dispose();
	  } else if (selection == 305) {
		cm.openShopNPC (6205);
		cm.dispose();
	  } else if (selection == 306) {
		cm.openShopNPC (6206);
		cm.dispose();
	  } else if (selection == 400) {
		cm.openShopNPC (6300);
		cm.dispose();
	  } else if (selection == 401) {
		cm.openShopNPC (6301);
		cm.dispose();
	  } else if (selection == 402) {
		cm.openShopNPC (6302);
		cm.dispose();
	  } else if (selection == 403) {
		cm.openShopNPC (6303);
		cm.dispose();
	  } else if (selection == 404) {
		cm.openShopNPC (6304);
		cm.dispose();
	  } else if (selection == 405) {
		cm.openShopNPC (6305);
		cm.dispose();
	  } else if (selection == 406) {
		cm.openShopNPC (6306);
		cm.dispose();
	  } else if (selection == 500) {
		cm.openShopNPC (6400);
		cm.dispose();
	  } else if (selection == 501) {
		cm.openShopNPC (6401);
		cm.dispose();
	  } else if (selection == 502) {
		cm.openShopNPC (6402);
		cm.dispose();
	  } else if (selection == 503) {
		cm.openShopNPC (6403);
		cm.dispose();
	  } else if (selection == 504) {
		cm.openShopNPC (6404);
		cm.dispose();
	  } else if (selection == 505) {
		cm.openShopNPC (6405);
		cm.dispose();
	  } else if (selection == 506) {
		cm.openShopNPC (6406);
		cm.dispose();
	  } else if (selection == 507) {
		cm.openShopNPC (6407);
		cm.dispose();
	  } else if (selection == 508) {
		cm.openShopNPC (6408);
		cm.dispose();
	  } else if (selection == 509) {
		cm.openShopNPC (6409);
		cm.dispose();
	  } else if (selection == 600) {
		cm.openShopNPC (6500);
		cm.dispose();
	  } else if (selection == 601) {
		cm.openShopNPC (6501);
		cm.dispose();
	  } else if (selection == 602) {
		cm.openShopNPC (6502);
		cm.dispose();
	  } else if (selection == 603) {
		cm.openShopNPC (6503);
		cm.dispose();
	  } else if (selection == 604) {
		cm.openShopNPC (6504);
		cm.dispose();
	  } else if (selection == 605) {
		cm.openShopNPC (6505);
		cm.dispose();
	  } else if (selection == 700) {
		cm.openShopNPC (6600);
		cm.dispose();
	  } else if (selection == 701) {
		cm.openShopNPC (6601);
		cm.dispose();
	  }
	}
}