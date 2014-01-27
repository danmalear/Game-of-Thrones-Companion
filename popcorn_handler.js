function doPops(pop, season, episode) {
	if (season == 1) {
		if (episode == 1) {
			winterIsComing(pop);
		}
	}
}

function winterIsComing(pop) {
	pop.code({
		start: 1, // 00:00
		onStart: resetPosition
	});
	
	pop.code({
		start: 10, // 00:10
		onStart: function() {return setPosition("Castle Black");}
	});

	pop.code({
		start: 93, // 01:33
		onStart: function() {return setPosition("The Haunted Forest");}
	});

	pop.code({
		start: 446, // 07:26
		onStart: function() {return setPosition("King's Landing");}
	});

	pop.code({
		start: 469, // 07:49
		onStart: function() {return setPosition("Winterfell");}
	});

	pop.code({
		start: 490, // 08:10
		onStart: function() {return setPosition("Castle Black");}
	});

	pop.code({
		start: 505, // 08:25
		onStart: function() {return setPosition("King's Landing");}
	});

	pop.code({
		start: 510, // 08:30
		onStart: function() {return setPosition("Pentos");}
	});

	pop.code({
		start: 537, // 08:57
		onStart: function() {return setPosition("Winterfell");}
	});
	
	pop.code({
		start: 593, // 9:53
		onStart: function() {
			if (!!$("#EddardStark"))
				return addCharacter(getCharacter("EddardStark"));
			else
				return removeCharacter("EddardStark");
		},
		end: 1094, // 18:14
		onEnd: function() {
			if (!$("#EddardStark"))
				removeCharacter("EddardStark");
			else
				addCharacter(getCharacter("EddardStark"));
		}
	});

	pop.code({
		start: 1094, // 18:14
		onStart: function() {
			return setPosition("King's Landing");
		}
	});

	pop.code({
		start: 1215, // 20:15
		onStart: function() {return setPosition("Winterfell");}
	});

	pop.code({
		start: 1996, // 33:16
		onStart: function() {return setPosition("Pentos");}
	});

	pop.code({
		start: 2376, // 39:36
		onStart: function() {return setPosition("Winterfell");}
	});

	pop.code({
		start: 3000, // 50:00
		onStart: function() {return setPosition("Pentos");}
	});

	pop.code({
		start: 3438, // 57:18
		onStart: function() {return setPosition("Winterfell");}
	});

	pop.code({
		start: 3631, // 1:00:31
		onStart: resetPosition
	});
}