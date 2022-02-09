class Footer extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
    <footer>
        <div>
            <a href="index.html" class="logo">WortIt.com</a>
        </div>
        <div>
            <a href="#"><img src="https://lelogama.go-jek.com/component/nav/picture/google-play-badge3x-p.png"
                    alt="googleplay" width="100px"></a>
            <a href="#"><img src="https://lelogama.go-jek.com/component/nav/picture/app-store-badge3x-p.png"
                    alt="Appstore" width="100px"></a>
        </div>
        <div>
            <p>&copy; Abdullah Nashih Ulwan</p>
        </div>
    </footer>
        `;
    }
}
customElements.define("footer-content", Footer);