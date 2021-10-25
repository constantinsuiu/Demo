class HomePage {
	get raboLogo() { return $('.comp img[alt="Logo Rabobank"]'); }
	get whoWeAreTile() { return $('#tile_0'); }
}

export default new HomePage();