class NavBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
        <header>
        <nav>
            <div id="navbar">
                <a href="index.html">W</a>
                <ul id="navlist">
                    <li><a id="home">Home</a></li>
                    <li><a id="kategori">Kategori</a></li>
                    <li><a id="hot">Hot Tranding</a></li>
                    <li>
                        <form>
                            <input type="search" id="search1" placeholder="Cari...">
                        </form>
                    </li>
                    <li>
                        <center>
                            <form>
                                <input type="search" id="search2" placeholder="Cari...">
                            </form>
                        </center>
                    </li>
                </ul>
                <span class="menu-icons">
                    <img src="https://scontent.fbdo2-1.fna.fbcdn.net/v/t1.0-9/95862004_1618791454939681_2651314935665000448_n.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=9h84JmHKjSQAX_DeDNu&_nc_ht=scontent.fbdo2-1.fna&oh=f1d01d4910705b11ad84e6769c08e66c&oe=5ED082CD&dl=1"
                        alt="close" class="close logo">
                    <img src="https://scontent.fbdo2-1.fna.fbcdn.net/v/t1.0-9/95261643_1618791444939682_9182471054705033216_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=YQ9n-hdGxZwAX9JToo1&_nc_ht=scontent.fbdo2-1.fna&oh=f7d0762967152a2f618b639824863bbe&oe=5ED1D608&dl=1"
                        alt="menu" class="open logo">
                </span>
                <form>
                    <input type="search" id="search3" placeholder="Cari...">
                </form>
            </div>
        </nav>
    </header>
        `;
    }
}
customElements.define("nav-bar", NavBar);
//membuat fungsi untuk memiih elemen
const selectElement = document.querySelector('span');
//buka dan tutup dengan meng-klik
selectElement.addEventListener('click', function (event) {
    const pilih = document.querySelector('nav');
    pilih.classList.toggle('active');
});