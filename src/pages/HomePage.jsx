import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="hero-modern d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <span className="hero-badge mb-4 d-inline-block">
                                Seja bem vindo
                            </span>

                            <h1 className="hero-title mb-4">
                                VIVA NOVAS
                                <br />
                                <span>AVENTURAS!</span>
                            </h1>

                            <p className="hero-description mb-5">
                                Descubra os melhores jogos para PC, PlayStation,
                                Xbox e Switch. Milhares de títulos com os melhores
                                preços e ofertas exclusivas.
                            </p>

                            <div className="d-flex gap-3 flex-wrap">
                                <Link to="/games" className="btn hero-button px-5 py-3">
                                    Explorar jogos →
                                </Link>

                                <Link
                                    to="/quiz"
                                    className="btn btn-outline-light px-4 py-3 rounded-pill"
                                >
                                    Fazer Quiz
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="floating-cards">
                                <div className="feature-card feature-card-1">
                                    <h4>Catálogo completo</h4>
                                    <p>Vários jogos para várias plataformas</p>
                                </div>

                                <div className="feature-card feature-card-2">
                                    <h4>Multiplayer</h4>
                                    <p>Jogue online com seus amigos</p>
                                </div>

                                <div className="feature-card feature-card-3">
                                    <h4>Promoções</h4>
                                    <p>Descontos exclusivos toda semana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="modern-box h-100">
                                <i className="bi bi-controller feature-icon"></i>

                                <h3>Milhares de jogos</h3>

                                <p>
                                    Explore RPGs, FPS, aventuras, indies,
                                    cooperativos e muito mais.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="modern-box h-100">
                                <i className="bi bi-people feature-icon"></i>

                                <h3>Comunidade Gamer</h3>

                                <p>
                                    Descubra recomendações, tendências
                                    e novos jogos populares.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="modern-box h-100">
                                <i className="bi bi-lightning-charge feature-icon"></i>

                                <h3>Performance Premium</h3>

                                <p>
                                    Interface rápida, moderna e criada
                                    para uma experiência gamer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="py-5">
                <div className="container">
                    <div className="about-section text-center">
                        <span className="section-tag">SOBRE</span>

                        <h2 className="section-title mt-3 mb-4">
                            Uma plataforma criada
                            <br />
                            para gamers.
                        </h2>

                        <p className="section-description mx-auto">
                            A GameStore reúne jogos incríveis, promoções,
                            experiências multiplayer e recomendações personalizadas
                            em um único lugar.
                        </p>
                    </div>
                </div>
            </section>

            {/* PREVIEW */}
            <section className="py-5 pb-0">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                        <div>
                            <span className="section-tag">CATÁLOGO</span>

                            <h2 className="section-title mt-2">
                                Explore os jogos
                            </h2>
                        </div>

                        <Link to="/games" className="btn hero-button px-4 py-2">
                            Ver catálogo completo
                        </Link>
                    </div>

                    <div className="preview-grid">
                        <div className="preview-card">
                            <img
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
                                alt="Cyberpunk"
                            />

                            <div className="preview-overlay">
                                <h4>Cyberpunk 2077</h4>
                            </div>
                        </div>


                        <div className="preview-card">
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fap%2Frnd%2F202109%2F1321%2F3GEdKTGktTBsZ8Sj9yIWnr2f.jpg"
                                alt="Gran Turismo 7"
                            />

                            <div className="preview-overlay">
                                <h4>Gran Turismo 7</h4>
                            </div>
                        </div>

                        <div className="preview-card">
                            <img
                                src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1237320/header.jpg"
                                alt="Sonic Frontiers"
                            />

                            <div className="preview-overlay">
                                <h4>Sonic Frontiers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}