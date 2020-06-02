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
                 "#k\r\n#L80##rCommon" +
                 "#k\r\n#L81##rWarrior" +
                 "#k\r\n#L82##rMagician" +
                 "#k\r\n#L83##rArcher" +
                 "#k\r\n#L84##rThief" +
                 "#k\r\n#L85##rPirate" +
                 "#k\r\n#L86##rETC Items");
	  } else if (selection == 80) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L0##rEarrings" +
			"#k\r\n#L1##rNecklaces and Face Accessories" +
			"#k\r\n#L2##rCapes" +
			"#k\r\n#L3##rOveralls" +
			"#k\r\n#L4##rGloves" +
			"#k\r\n#L5##rShoes" +
			"#k\r\n#L6##rMaple Weapons");
	  } else if (selection == 81) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L7##bHats" +
			"#k\r\n#L8##bTops" +
			"#k\r\n#L9##bBottoms" +
			"#k\r\n#L10##bOveralls" +
			"#l\r\n#L11##bGloves" +
			"#l\r\n#L12##bShields" +
			"#l\r\n#L13##bShoes" +
			"#l\r\n#L14##b1H Axes" +
			"#k\r\n#L15##b2H Axes" +
			"#k\r\n#L16##b1H BWs" +
			"#k\r\n#L17##b2H BWs" +
			"#k\r\n#L18##b1H Swords" +
			"#k\r\n#L19##b2H Swords" +
			"#k\r\n#L20##b2H Spears" +
			"#k\r\n#L21##bPole Arms");
	  } else if (selection == 82) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L22##dHats" +
			"#k\r\n#L23##dOveralls" +
			"#k\r\n#L24##dGloves" +
			"#k\r\n#L25##dShields" +
			"#k\r\n#L26##dShoes" +
			"#k\r\n#L27##dWands" +
			"#k\r\n#L28##dStaffs");
	  } else if (selection == 83) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L29##gHats" +
			"#k\r\n#L30##gOveralls" +
			"#k\r\n#L31##gGloves" +
			"#k\r\n#L32##gShoes" +
			"#k\r\n#L33##gBows" +
			"#k\r\n#L34##gCrossbows" +
			"#k\r\n#L35##gArrows");
	  } else if (selection == 84) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L36##bHats" +
			"#k\r\n#L37##bTops" +
			"#k\r\n#L38##bBottoms" +
			"#k\r\n#L39##bOveralls" +
			"#k\r\n#L40##bGloves" +
			"#k\r\n#L41##bShields" +
			"#k\r\n#L42##bShoes" +
			"#k\r\n#L43##bDaggers" +
			"#k\r\n#L44##bClaws" +
			"#k\r\n#L45##bThrowing Stars");
	  } else if (selection == 85) {
               cm.sendSimple ("Pick a Category #e#d" +
			"#k\r\n#L46#Hats" +
			"#k\r\n#L47#Overalls" +
			"#k\r\n#L48#Gloves" +
			"#k\r\n#L49#Shoes" +
			"#k\r\n#L50#Weapons" +
			"#k\r\n#L51#Bullets and Capsules");
	  } else if (selection == 86) {
               cm.sendSimple ("Pick a Category #e#d" +
			"\r\n#L52#Consumables" +
			"\r\n#L53#Scrolls");
	  } else if (selection == 0) {
		cm.openShopNPC (6000);
		cm.dispose();
	  } else if (selection == 1) {
		cm.openShopNPC (6001);
		cm.dispose();
	  } else if (selection == 2) {
		cm.openShopNPC (6002);
		cm.dispose();
	  } else if (selection == 3) {
		cm.openShopNPC (6003);
		cm.dispose();
	  } else if (selection == 4) {
		cm.openShopNPC (6004);
		cm.dispose();
	  } else if (selection == 5) {
		cm.openShopNPC (6005);
		cm.dispose();
	  } else if (selection == 6) {
		cm.openShopNPC (6006);
		cm.dispose();
	  } else if (selection == 7) {
		cm.openShopNPC (6100);
		cm.dispose();
	  } else if (selection == 8) {
		cm.openShopNPC (6101);
		cm.dispose();
	  } else if (selection == 9) {
		cm.openShopNPC (6102);
		cm.dispose();
	  } else if (selection == 10) {
		cm.openShopNPC (6103);
		cm.dispose();
	  } else if (selection == 11) {
		cm.openShopNPC (6104);
		cm.dispose();
	  } else if (selection == 12) {
		cm.openShopNPC (6105);
		cm.dispose();
	  } else if (selection == 13) {
		cm.openShopNPC (6106);
		cm.dispose();
	  } else if (selection == 14) {
		cm.openShopNPC (6107);
		cm.dispose();
	  } else if (selection == 15) {
		cm.openShopNPC (6108);
		cm.dispose();
	  } else if (selection == 16) {
		cm.openShopNPC (6109);
		cm.dispose();
	  } else if (selection == 17) {
		cm.openShopNPC (6110);
		cm.dispose();
	  } else if (selection == 18) {
		cm.openShopNPC (6111);
		cm.dispose();
	  } else if (selection == 19) {
		cm.openShopNPC (6112);
		cm.dispose();
	  } else if (selection == 20) {
		cm.openShopNPC (6113);
		cm.dispose();
	  } else if (selection == 21) {
		cm.openShopNPC (6114);
		cm.dispose();
	  } else if (selection == 22) {
		cm.openShopNPC (6200);
		cm.dispose();
	  } else if (selection == 23) {
		cm.openShopNPC (6201);
		cm.dispose();
	  } else if (selection == 24) {
		cm.openShopNPC (6202);
		cm.dispose();
	  } else if (selection == 25) {
		cm.openShopNPC (6203);
		cm.dispose();
	  } else if (selection == 26) {
		cm.openShopNPC (6204);
		cm.dispose();
	  } else if (selection == 27) {
		cm.openShopNPC (6205);
		cm.dispose();
	  } else if (selection == 28) {
		cm.openShopNPC (6206);
		cm.dispose();
	  } else if (selection == 29) {
		cm.openShopNPC (6300);
		cm.dispose();
	  } else if (selection == 30) {
		cm.openShopNPC (6301);
		cm.dispose();
	  } else if (selection == 31) {
		cm.openShopNPC (6302);
		cm.dispose();
	  } else if (selection == 32) {
		cm.openShopNPC (6303);
		cm.dispose();
	  } else if (selection == 33) {
		cm.openShopNPC (6304);
		cm.dispose();
	  } else if (selection == 34) {
		cm.openShopNPC (6305);
		cm.dispose();
	  } else if (selection == 35) {
		cm.openShopNPC (6306);
		cm.dispose();
	  } else if (selection == 36) {
		cm.openShopNPC (6400);
		cm.dispose();
	  } else if (selection == 37) {
		cm.openShopNPC (6401);
		cm.dispose();
	  } else if (selection == 38) {
		cm.openShopNPC (6402);
		cm.dispose();
	  } else if (selection == 39) {
		cm.openShopNPC (6403);
		cm.dispose();
	  } else if (selection == 40) {
		cm.openShopNPC (6404);
		cm.dispose();
	  } else if (selection == 41) {
		cm.openShopNPC (6405);
		cm.dispose();
	  } else if (selection == 42) {
		cm.openShopNPC (6406);
		cm.dispose();
	  } else if (selection == 43) {
		cm.openShopNPC (6407);
		cm.dispose();
	  } else if (selection == 44) {
		cm.openShopNPC (6408);
		cm.dispose();
	  } else if (selection == 45) {
		cm.openShopNPC (6409);
		cm.dispose();
	  } else if (selection == 46) {
		cm.openShopNPC (6500);
		cm.dispose();
	  } else if (selection == 47) {
		cm.openShopNPC (6501);
		cm.dispose();
	  } else if (selection == 48) {
		cm.openShopNPC (6502);
		cm.dispose();
	  } else if (selection == 49) {
		cm.openShopNPC (6503);
		cm.dispose();
	  } else if (selection == 50) {
		cm.openShopNPC (6504);
		cm.dispose();
	  } else if (selection == 51) {
		cm.openShopNPC (6505);
		cm.dispose();
	  } else if (selection == 52) {
		// cm.openShopNPC (6600);
		cm.sendOk("Under construction");
		cm.dispose();
	  } else if (selection == 53) {
		cm.openShopNPC (6601);
		cm.dispose();
	  }
	}
}