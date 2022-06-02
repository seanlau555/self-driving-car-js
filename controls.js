class Controls {
	constructor(type) {
		this.forward = false;
		this.left = false;
		this.right = false;
		this.reverse = false;

		switch(type) {
			case "KEYS":
				this.#addKeyboardListeners() // # means private func
				break;
			case "DUMMY":
				this.forward=true
				break;
		}
	}

	#addKeyboardListeners() {
		document.onkeydown = (evt) => {
			switch(evt.key) {
				case "ArrowLeft":
					this.left = true;  // => func refer this. to the constructor one
					break;
				case "ArrowRight":
					this.right = true;
					break;
				case "ArrowUp":
					this.forward = true;
					break;
				case "ArrowDown":
					this.reverse = true;
					break;
			}
		}
		document.onkeyup = (evt) => {
			switch(evt.key) {
				case "ArrowLeft":
					this.left = false;
					break;
				case "ArrowRight":
					this.right = false;
					break;
				case "ArrowUp":
					this.forward = false;
					break;
				case "ArrowDown":
					this.reverse = false;
					break;
			}
		}
	}
}

