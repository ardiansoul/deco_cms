module.exports = Main = {
	".wrapper": {
		width: "100%",
		height: "auto",
		"&-fluid": {
			width: "80%",
		},
	},
	".centered": {
		justifyContent: "center",
		alignItems: "center",
	},
	".bordered": {
		borderWidth: "2px",
		borderColor: "black",
	},
	"::-webkit-scrollbar": {
		width: "10px",
	},

	"::-webkit-scrollbar-track": {
    backgroundColor: "#999A9D",
    borderRadius: "2px"
  },
	"::-webkit-scrollbar-thumb": {
    backgroundColor: "#999A9D",
    borderRadius: "10px",
    transition: "background-color 0.5s"
  },
	"::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#42484E",
  },
};
