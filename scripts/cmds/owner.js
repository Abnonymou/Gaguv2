module.exports = {
	config: {
		name: "owner",
		aliases: [" adinfo"],
		version: "1.0",
		author: "ZenitshuAgatsumaARBIN",
		countDown: 5,
		role: 0,
		shortDescription: "Get details of admin bot through QR code",
		longDescription: "",
		category: "info",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ "https://i.imgur.com/lgl5tCq.jpeg"
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
 attachment: await global.utils.getStreamFromURL(img)
})
}
}
