class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <!-- Jumbotron -->
            <div class="hero">
                <div class="hero-inner">
                    <h1 tabindex="0" class="hero-title">Temukan restoran favoritmu dan pesan sekarang</h1> 
                    <p tabindex="0" class ="hero-tagline">kamu dapat menemukan semuanya disini</p>
                </div>
            </div>`;
    }
}

customElements.define('hero-header', Hero);