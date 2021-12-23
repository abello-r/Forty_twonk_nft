const layersOrder = [
    { name: 'background', number: 8 },
    { name: 'body', number: 1 },
    { name: 'skin', number: 8 },
    { name: 'clothes', number: 14 },
    { name: 'clothing_accessories', number: 14 },
	{ name: 'face', number: 18 },
	{ name: 'face_tune', number: 15 },
    { name: 'shine', number: 1 },
    { name: 'shine', number: 1 },
    { name: 'top lid', number: 3 },
];

const format = {
    width: 4230,
    height: 4230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
	{ key: "_ur", val: "ultra rare"}
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };