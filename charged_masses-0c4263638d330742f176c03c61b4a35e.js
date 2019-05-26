var $ = jQuery;

var tick, nodes, springs, act, actNodes;


$(document).ready(function() {
	
	var width = 640;
	var height = 640;
	
	var paper = new Raphael($("#masses-paper")[0], width, height);
	
	var act = {
		2: { name: 'Alexander O\'Neal' },
		6: { name: 'Janet Jackson' },
		7: { name: 'TLC' },
		11: { name: 'Boyz II Men' },
		12: { name: 'Usher' },
		13: { name: 'Mary J. Blige' },
		14: { name: 'New Edition' },
		15: { name: 'Al B. Sure!' },
		16: { name: 'LeVert' },
		17: { name: 'MC Hammer' },
		18: { name: 'Babyface' },
		19: { name: 'Guy' },
		20: { name: 'Bobby Brown' },
		21: { name: 'Michael Jackson' },
		22: { name: 'Today' },
		23: { name: 'Keith Sweat' },
		24: { name: 'Heavy D.' },
		25: { name: 'Jane Child' },
		26: { name: 'Johnny Kemp' },
		27: { name: 'Aaron Hall' },
		28: { name: 'Big Daddy Kane' },
		29: { name: 'Tony! Toni! Toné!' },
		30: { name: 'Wreckx-N-Effect' },
		31: { name: 'Blackstreet' },
		32: { name: 'Another Bad Creation' },
		33: { name: 'After 7' },
		34: { name: 'Karyn White' },
		35: { name: 'Pebbles' },
		36: { name: 'Johnny Gill' },
		 
		37: { name: 'Chaka Khan' },
		38: { name: 'Bell Biv DeVoe' },
		39: { name: 'Hi-five' },
		40: { name: 'Color Me Badd' },
		41: { name: '' },
		42: { name: '' },
		43: { name: '' },


	

	};
	var producer = {
		0 : {
			name: 'Jimmy Jam & Terry Lewis',
			acts: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,37 ]
		},
		1 : {
			name: 'Teddy Riley',
			acts: [ 19,20,21,22,23,24,25,26,27,28,30,31,11 ]
		},
		2 : {
			name: 'Dallas Austin',
			acts: [ 21,7,11,32 ]
		},
		3 : {
			name: 'LaFace',
			acts: [ 33,34,35,36,20,12,11,38,18,7,12,11 ]
		},
	    4 : {
		name: 'Bernard Belle',
		acts: [ 22,19,20,21,39 ]
	    },
	    5 : {
		name: 'Dr. Freeze',
		acts: [21,38,40] 
	    }
	};
	
	actNodes = new Array();

	nodes = new Array();
	
	addSliders();
	

	for (var i in act) {

		var u =  act[i];

		var el = paper.set();
		var c = paper.circle(0, 0, 10).attr({stroke:'none', fill: '#efcdb8', opacity:.5});
		el.push(c);
		el.push(paper.text(0, 0, u.name).attr({ 'text-anchor':'start'}));
		
		x = Math.random()*width;
		y = Math.random()*height;
		el.translate(x, y);
		
		var node = new Node(x, y, u, el, 5, 40);	
		nodes.push(node);
		actNodes.push(node);
	}


	springs = new Array();
	producerNodes = new Array();

	for (var i in producer) {

		var prod =  producer[i];
		

		var el = paper.set();
		var s = paper.path("M-10,10L10,10L10,-10L-10,-10L-10,10").attr({stroke:'none', fill: '#669', opacity:.5});
		el.push(s);
		el.push(paper.text(0, 0, prod.name).attr({ 'text-anchor':'start'}));
		
		x = Math.random()*width;
		y = Math.random()*height;
		el.translate(x, y);
		
		var node = new Node(x, y, prod, el, 10, -50);	
		nodes.push(node);
		producerNodes.push(node);	

		var acts = prod.acts;
		for (var i=0; i<acts.length; i++) {
			attachSpringToUser(paper, node, acts[i]);
		}

	}
	

	nodeCount = nodes.length;
	springCount = springs.length;
	
	
	tick = setInterval(animate, 30);
	
});


function attachSpringToUser(paper, producerNode, userID) {
	
	for (var i=0; i<actNodes.length; i++) {
		var un = actNodes[i];

		if (i == userID) {
			springs.push(new Spring(paper, producerNode, un, 50, .05));
			return;
		}
	}
	
}




function addSliders() {
	addSlider('Spring Length', 'springLength', 10, 250, 150);
	addSlider('Spring Constant', 'springConstant', .001, .2, .069, .001);
	
	addSlider("Act Charge", 'actCharge', -500, 500, 200).bind('slide', function(el, ev) {
		for (var k=0, kk=actNodes.length; k<kk; k++) {
			actNodes[k].charge = ev.value;
		}
	});
	addSlider("Act Mass", 'actMass', .01, 50, 5, .01).bind('slide', function(el, ev) {
		for (var k=0, kk=actNodes.length; k<kk; k++) {
			actNodes[k].mass = ev.value;
		}
	});


	addSlider("Producer Charge", 'producerCharge', -500, 500, 200).bind('slide', function(el, ev) {
		for (var k=0, kk=producerNodes.length; k<kk; k++) {
			producerNodes[k].charge = ev.value;
		}
	});
	addSlider("Producer Mass", 'producerMass', .01, 50, 10, .01).bind('slide', function(el, ev) {
		for (var k=0, kk=producerNodes.length; k<kk; k++) {
			producerNodes[k].mass = ev.value;
		}
	});
}
function addSlider(label, variable, min, max, initial, step) {

	if (!step) step = 1;

	var holder = $('<div></div>');
	holder.append($('<span>'+label+' = </span>'));
	
	var readout = $('<span>'+initial+'</span>');
	holder.append(readout);

	var s = $('<div id="slider_'+variable+'"></div>');
	holder.append(s);

	s.slider({ 'min':min, 'max':max, 'value':initial, 'step':step });
	
	window[variable] = initial;
	s.bind('slide',function(el, ev){
		window[variable] = ev.value;
		readout.html(ev.value);
	});
	
	$("#masses-paper").after(holder);

	return s;
}



var nodeCount;
var springCount;
var n1, n2, dist, dist2, coefGravity, electricForce, dX, dY;
var i, j;

function animate() {
	
	for (i=0; i<nodeCount; i++) {
		n1 = nodes[i];
		for (j=i+1; j<nodeCount; j++) {
			n2 = nodes[j];


			dX = n2.x - n1.x;
			dY = n2.y - n1.y;
			
			dist2 = dX*dX + dY*dY;
			


			/* GRAVITY BEGINS */
			coefGravity = .05 / dist2;

			// gravity pulls toward the other node -- dX/dist2,dY/dist2 is the normalized direction over distance
			n1.aX += coefGravity * n2.mass * dX;
			n1.aY += coefGravity * n2.mass * dY;
			n2.aX -= coefGravity * n1.mass * dX;
			n2.aY -= coefGravity * n1.mass * dY;
			/* GRAVITY ENDS */
			
			
			/* ELECTRIC FORCE BEGINS */
			electricForce = - (.5 * n1.charge * n2.charge) / dist2;
			dist = Math.sqrt(dist2);

			n1.aX += electricForce * dX/dist / n1.mass;
			n1.aY += electricForce * dY/dist / n1.mass;
			n2.aX -= electricForce * dX/dist / n2.mass;
			n2.aY -= electricForce * dY/dist / n2.mass;
			/* ELECTRIC FORCE ENDS */

		}
	}
	
	
	for (i=0; i<springCount; i++) {
		springs[i].step();
	}



	for (i=0; i<nodeCount; i++) {
		nodes[i].stepAndResetAcceleration();
	}
	
	for (i=0; i<springCount; i++) {
		springs[i].redraw();
	}

}


function Spring(paper, node1, node2, length) {
	this.n1 = node1;
	this.n2 = node2;
	this.length = length;
	
	this.offOpacity = .2;
	this.opacity = this.offOpacity;

	this.path = paper.path("M"+node1.x+","+node1.y+"L"+node2.x+","+node2.y).attr('stroke','#000').attr('opacity',this.opacity);
	
	var self = this;
	node1.element.hover(
		function() {
			self.opacity = 1;
		},
		function() {
			self.opacity = self.offOpacity;
		}
	);
	node2.element.hover(
		function() {
			self.opacity = 1;
		},
		function() {
			self.opacity = self.offOpacity;
		}
	);
}
var springForce;
Spring.prototype.step = function() {
	
	dX = this.n2.x - this.n1.x;
	dY = this.n2.y - this.n1.y;
	
	dist = Math.sqrt(dX*dX + dY*dY);
	
	springForce = (dist-springLength) * springConstant;
	
	this.n1.aX += springForce / this.n1.mass * dX / dist;
	this.n1.aY += springForce / this.n1.mass * dY / dist;
	
	this.n2.aX -= springForce / this.n2.mass * dX / dist;
	this.n2.aY -= springForce / this.n2.mass * dY / dist;
	
}
Spring.prototype.redraw = function() {
//	this.path = paper.path("M"+node1.x+","+node1.y+"L"+node2.x+","+node2.y);
	this.path.attr('path', "M"+this.n1.x+","+this.n1.y+"L"+this.n2.x+","+this.n2.y);
	this.path.attr('opacity', this.opacity);
}



function Node(x, y, data, element, mass, charge) {
	
	this.data = data;
	this.element = element;
	
	this.mass = mass || 1;
	this.charge = charge || 1;

	this.x = x;
	this.y = y;
	this.vX = 0;
	this.vY = 0;
	
	this.aX = 0;
	this.aY = 0;
}


Node.prototype.stepAndResetAcceleration = function() {
	
	this.vX += this.aX;
	this.vY += this.aY;
	
	this.vX *= .8;
	this.vY *= .8;
	
	this.x += this.vX;
	this.y += this.vY;
//console.log(this.x, this.y);
//	this.element.translate(this.vX, this.vY);
	this.element.transform("T"+this.x+","+this.y);

	this.aX = 0;
	this.aY = 0;
}




