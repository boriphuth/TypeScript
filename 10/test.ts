class SimpleCouter {
    public count() {
        let count = 5;
        for(let i = 0; i <= 7; i++) {
			document.write(i.toString() + '<br>');
		}

		console.log('All done');
    }
}


let count = new SimpleCouter();
count.count();
