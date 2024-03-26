/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "90/0": "90.5%",
        "95/0": "95%",
      },
      spacing: {
        79: "19rem",
        15: "3.6rem",
      },
      width: {
        "90/0": "95%",
        85: "79%",
        "15/0": "15%",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
        "chakra-petch": ["Chakra Petch", "sans-serif"],
        sarabun: ["Sarabun", "sans-serif"],
        "noto-sans-thai": ["Noto Sans Thai", "sans-serif"],
        mitr: ["Mitr", "sans-serif"],
        taviraj: ["Taviraj", "sans-serif"],
        itim: ["Itim", "sans-serif"],
        pridi: ["Pridi", "sans-serif"],
        sriracha: ["Sriracha", "sans-serif"],
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
        krub: ["Krub", "sans-serif"],
        niramit: ["Niramit", "sans-serif"],
        mali: ["Mali", "sans-serif"],
        athiti: ["Athiti", "sans-serif"],
        charm: ["Charm", "sans-serif"],
        anuphan: ["Anuphan", "sans-serif"],
        k2d: ["K2D", "sans-serif"],
        pattaya: ["Pattaya", "sans-serif"],
        "ibm-plex-sans-thai": ["IBM Plex Sans Thai", "sans-serif"],
        maitree: ["Maitree", "sans-serif"],
        chonburi: ["Chonburi", "sans-serif"],
        trirong: ["Trirong", "sans-serif"],
        thasadith: ["Thasadith", "sans-serif"],
        fahkwang: ["Fahkwang", "sans-serif"],
        koho: ["KoHo", "sans-serif"],
        kodchasan: ["Kodchasan", "sans-serif"],
        "noto-serif-thai": ["Noto Serif Thai", "sans-serif"],
        charmonman: ["Charmonman", "sans-serif"],
        "ibm-plex-sans-thai-looped": [
          "IBM Plex Sans Thai Looped",
          "sans-serif",
        ],
        srisakdi: ["Srisakdi", "sans-serif"],
        "noto-sans-thai-looped": ["Noto Sans Thai Looped", "sans-serif"],
        "Open-Sans": ["Open Sans", "sans-serif"],
        Spectral: ["Spectral", "serif"],
        "Slabo-27px": ["Slabo 27px", "serif"],
        Lato: ["Lato", "sans-serif"],
        "Roboto-Condensed": ["Roboto Condensed", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        "Source-Sans-Pro": ["Source Sans Pro", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        "Zilla-Slab": ["Zilla Slab", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        "PT-Sans": ["PT Sans", "sans-serif"],
        "Roboto-Slab": ["Roboto Slab", "serif"],
        Merriweather: ["Merriweather", "serif"],
        "Saira-Condensed": ["Saira Condensed", "sans-serif"],
        Saira: ["Saira", "sans-serif"],
        "Open-Sans-Condensed": ["Open Sans Condensed", "sans-serif"],
        "Saira-Semi-Condensed": ["Saira Semi Condensed", "sans-serif"],
        "Saira-Extra-Condensed": ["Saira Extra Condensed", "sans-serif"],
        Julee: ["Julee", "sans-serif"],
        Archivo: ["Archivo", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Lora: ["Lora", "serif"],
        Manuale: ["Manuale", "serif"],
        "Asap-Condensed": ["Asap Condensed", "sans-serif"],
        Faustina: ["Faustina", "serif"],
        Cairo: ["Cairo", "sans-serif"],
        "Playfair-Display": ["Playfair Display", "serif"],
        "Droid-Serif": ["Droid Serif", "serif"],
        "Noto-Sans": ["Noto Sans", "sans-serif"],
        "PT-Serif": ["PT Serif", "serif"],
        "Droid-Sans": ["Droid Sans", "sans-serif"],
        Arimo: ["Arimo", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        "Sedgwick-Ave-Display": ["Sedgwick Ave Display", "cursive"],
        "Titillium-Web": ["Titillium Web", "sans-serif"],
        Muli: ["Muli", "sans-serif"],
        "Sedgwick-Ave": ["Sedgwick Ave", "cursive"],
        "Indie-Flower": ["Indie Flower", "cursive"],
        Mada: ["Mada", "sans-serif"],
        "PT-Sans-Narrow": ["PT Sans Narrow", "sans-serif"],
        "Noto-Serif": ["Noto Serif", "serif"],
        Bitter: ["Bitter", "serif"],
        Dosis: ["Dosis", "sans-serif"],
        "Josefin-Sans": ["Josefin Sans", "sans-serif"],
        Inconsolata: ["Inconsolata", "monospace"],
        "Bowlby-One-SC": ["Bowlby One SC", "cursive"],
        Oxygen: ["Oxygen", "sans-serif"],
        Arvo: ["Arvo", "serif"],
        Hind: ["Hind", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
        "Fjalla-One": ["Fjalla One", "sans-serif"],
        Anton: ["Anton", "sans-serif"],
        Acme: ["Acme", "sans-serif"],
        "Archivo-Narrow": ["Archivo Narrow", "sans-serif"],
        "Mukta-Vaani": ["Mukta Vaani", "sans-serif"],
        Play: ["Play", "sans-serif"],
        Cuprum: ["Cuprum", "sans-serif"],
        "Maven-Pro": ["Maven Pro", "sans-serif"],
        "EB-Garamond": ["EB Garamond", "serif"],
        "Passion-One": ["Passion One", "sans-serif"],
        "Ropa-Sans": ["Ropa Sans", "sans-serif"],
        "Francois-One": ["Francois One", "sans-serif"],
        "Archivo-Black": ["Archivo Black", "sans-serif"],
        "Pathway-Gothic-One": ["Pathway Gothic One", "sans-serif"],
        Exo: ["Exo", "sans-serif"],
        Vollkorn: ["Vollkorn", "serif"],
        "Libre-Franklin": ["Libre Franklin", "sans-serif"],
        "Crete-Round": ["Crete Round", "serif"],
        Alegreya: ["Alegreya", "serif"],
        "PT-Sans-Caption": ["PT Sans Caption", "sans-serif"],
        "Alegrerya-Sans": ["Alegreya Sans", "sans-serif"],
        "Source-Code-Pro": ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};