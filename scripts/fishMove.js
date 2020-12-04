const Scene = require('Scene');
const Patches = require('Patches');
export const Diagnostics = require('Diagnostics');
const Reactive = require('Reactive');
const TouchGestures = require('TouchGestures');

const poolRadius = 4.8;
const sharkRadius = 5.8;

var fishSet1 = false;
var fishTime1 = 0;
var fishposX1 = 0;
var fishposY1 = 0;
var fishposZ1 = 0;
var fishdirX1 = 0;
var fishhorSpeed1 = 0;
const fishScale1 = (.4) * Math.random() + .9;

var fishSet2 = false;
var fishTime2 = 0;
var fishposX2 = 0;
var fishposY2 = 0;
var fishposZ2 = 0;
var fishdirX2 = 0;
var fishhorSpeed2 = 0;
const fishScale2 = (.4) * Math.random() + .9;

var fishSet3 = false;
var fishTime3 = 0;
var fishposX3 = 0;
var fishposY3 = 0;
var fishposZ3 = 0;
var fishdirX3 = 0;
var fishhorSpeed3 = 0;
const fishScale3 = (.4) * Math.random() + .9;

var fishSet4 = false;
var fishTime4 = 0;
var fishposX4 = 0;
var fishposY4 = 0;
var fishposZ4 = 0;
var fishdirX4 = 0;
var fishhorSpeed4 = 0;
const fishScale4 = (.4) * Math.random() + .9;


const timePassing = Patches.getScalarValue('timePassed');

const sceneRoot = Scene.root;

Promise.all([
	sceneRoot.findFirst('fishDirection1'),
	sceneRoot.findFirst('fishDirection2'),
	sceneRoot.findFirst('fishDirection3'),
	sceneRoot.findFirst('sharkDirection1'),
	sceneRoot.findFirst('textOption1')
])
.then(function(objects) {
	const fish1 = objects[0];
	const fishTransform1 = fish1.transform;
	const fish2 = objects[1];
	const fishTransform2 = fish2.transform;
	const fish3 = objects[2];
	const fishTransform3 = fish3.transform;
	const fish4 = objects[3];
	const fishTransform4 = fish4.transform;
	const firstText = objects[4];

	fishTransform1.scaleX = fishScale1;
	fishTransform1.scaleY = fishScale1;
	fishTransform1.scaleZ = fishScale1;

	fishTransform2.scaleX = fishScale2;
	fishTransform2.scaleY = fishScale2;
	fishTransform2.scaleZ = fishScale2;

	fishTransform3.scaleX = fishScale3;
	fishTransform3.scaleY = fishScale3;
	fishTransform3.scaleZ = fishScale3;

	fishTransform4.scaleX = fishScale4;
	fishTransform4.scaleY = fishScale4;
	fishTransform4.scaleZ = fishScale4;

	Reactive.monitorMany([timePassing]).subscribe(function(event) {
		var timePassedValue = event.newValues["0"];

		// FISH 1
		if (!fishSet1) {
			fishSet1 = true;
			fishposX1 = (poolRadius * 2) * Math.random() - poolRadius;
			fishposY1 = 2 * Math.random() - 1;
			fishposZ1 = Math.sqrt(Math.pow(poolRadius, 2) - Math.pow(fishposX1, 2));
			const newZdir = Math.floor(Math.random() * 2);
			if (newZdir == 0) {
				fishposZ1 = -1 * fishposZ1;
			}
			fishTransform1.x = fishposX1;
			fishTransform1.y = fishposY1;
			fishTransform1.z = fishposZ1;
			const newYRotation = -1 * Math.atan2(fishposZ1, fishposX1) * (180 / Math.PI) - 90 + (60 * Math.random() - 30);
			Patches.setScalarValue('fishRotY1', newYRotation);
			// add angle up?
			fishTime1 = timePassedValue;
			fishdirX1 = Math.tan((newYRotation) * (Math.PI / 180)) * fishposZ1;
			fishhorSpeed1 = (.04) * Math.random() + .08;
			//fishScale1 = (.4) * Math.random() + .9;
		}
		var fish1XPos = fishposX1 - ((fishhorSpeed1) * (fishdirX1) * (timePassedValue - fishTime1))
		var fish1ZPos = fishposZ1 - ((fishhorSpeed1) * (fishposZ1) * (timePassedValue - fishTime1))
		fishTransform1.x = fish1XPos;
		fishTransform1.z = fish1ZPos;
		if ((Math.pow(fish1XPos, 2) + Math.pow(fish1ZPos, 2)) > Math.pow(poolRadius, 2)) {
			fishSet1 = false;
		}

		// FISH 2
		if (!fishSet2) {
			fishSet2 = true;
			fishposX2 = (poolRadius * 2) * Math.random() - poolRadius;
			fishposY2 = 2 * Math.random() - 1;
			fishposZ2 = Math.sqrt(Math.pow(poolRadius, 2) - Math.pow(fishposX2, 2));
			const newZdir = Math.floor(Math.random() * 2);
			if (newZdir == 0) {
				fishposZ2 = -1 * fishposZ2;
			}
			fishTransform2.x = fishposX2;
			fishTransform2.y = fishposY2;
			fishTransform2.z = fishposZ2;
			const newYRotation = -1 * Math.atan2(fishposZ2, fishposX2) * (180 / Math.PI) - 90 + (60 * Math.random() - 30);
			Patches.setScalarValue('fishRotY2', newYRotation);
			// add angle up?
			fishTime2 = timePassedValue;
			fishdirX2 = Math.tan((newYRotation) * (Math.PI / 180)) * fishposZ2;
			fishhorSpeed2 = (.04) * Math.random() + .08;
			//fishScale2 = (.4) * Math.random() + .9;
		}
		var fish2XPos = fishposX2 - ((fishhorSpeed2) * (fishdirX2) * (timePassedValue - fishTime2))
		var fish2ZPos = fishposZ2 - ((fishhorSpeed2) * (fishposZ2) * (timePassedValue - fishTime2))
		fishTransform2.x = fish2XPos;
		fishTransform2.z = fish2ZPos;
		if ((Math.pow(fish2XPos, 2) + Math.pow(fish2ZPos, 2)) > Math.pow(poolRadius, 2)) {
			fishSet2 = false;
		}

		// FISH 3
		if (!fishSet3) {
			fishSet3 = true;
			fishposX3 = (poolRadius * 2) * Math.random() - poolRadius;
			fishposY3 = 2 * Math.random() - 1;
			fishposZ3 = Math.sqrt(Math.pow(poolRadius, 2) - Math.pow(fishposX3, 2));
			const newZdir = Math.floor(Math.random() * 2);
			if (newZdir == 0) {
				fishposZ3 = -1 * fishposZ3;
			}
			fishTransform3.x = fishposX3;
			fishTransform3.y = fishposY3;
			fishTransform3.z = fishposZ3;
			const newYRotation = -1 * Math.atan2(fishposZ3, fishposX3) * (180 / Math.PI) - 90 + (60 * Math.random() - 30);
			Patches.setScalarValue('fishRotY3', newYRotation);
			// add angle up?
			fishTime3 = timePassedValue;
			fishdirX3 = Math.tan((newYRotation) * (Math.PI / 180)) * fishposZ3;
			fishhorSpeed3 = (.04) * Math.random() + .08;
			//fishScale3 = (.4) * Math.random() + .9;
		}
		var fish3XPos = fishposX3 - ((fishhorSpeed3) * (fishdirX3) * (timePassedValue - fishTime3))
		var fish3ZPos = fishposZ3 - ((fishhorSpeed3) * (fishposZ3) * (timePassedValue - fishTime3))
		fishTransform3.x = fish3XPos;
		fishTransform3.z = fish3ZPos;
		if ((Math.pow(fish3XPos, 2) + Math.pow(fish3ZPos, 2)) > Math.pow(poolRadius, 2)) {
			fishSet3 = false;
		}

		// FISH 4
		if (!fishSet4) {
			fishSet4 = true;
			fishposX4 = (sharkRadius * 2) * Math.random() - sharkRadius;
			fishposY4 = 2 * Math.random() - 1;
			fishposZ4 = Math.sqrt(Math.pow(sharkRadius, 2) - Math.pow(fishposX4, 2));
			const newZdir = Math.floor(Math.random() * 2);
			if (newZdir == 0) {
				fishposZ4 = -1 * fishposZ4;
			}
			fishTransform4.x = fishposX4;
			fishTransform4.y = fishposY4;
			fishTransform4.z = fishposZ4;
			const newYRotation = -1 * Math.atan2(fishposZ4, fishposX4) * (180 / Math.PI) - 90 + (60 * Math.random() - 30);
			Patches.setScalarValue('fishRotY4', newYRotation);
			// add angle up?
			fishTime4 = timePassedValue;
			fishdirX4 = Math.tan((newYRotation) * (Math.PI / 180)) * fishposZ4;
			fishhorSpeed4 = (.04) * Math.random() + .08;
			//fishScale3 = (.4) * Math.random() + .9;
		}
		var fish4XPos = fishposX4 - ((fishhorSpeed4) * (fishdirX4) * (timePassedValue - fishTime4))
		var fish4ZPos = fishposZ4 - ((fishhorSpeed4) * (fishposZ4) * (timePassedValue - fishTime4))
		fishTransform4.x = fish4XPos;
		fishTransform4.z = fish4ZPos;
		if ((Math.pow(fish4XPos, 2) + Math.pow(fish4ZPos, 2)) > Math.pow(sharkRadius, 2)) {
			fishSet4 = false;
		}
	});
});