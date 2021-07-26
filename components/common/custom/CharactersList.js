import PropTypes from "prop-types";
import slugify from "slugify";
import Link from "next/link";
import CustomLayout from "./CustomLayout";

const images = {
    "luke-skywalker": "https://res.cloudinary.com/frempong/image/upload/v1627051434/star-wars/Luke-skywalker.jpg",
    "c-3po": "https://res.cloudinary.com/frempong/image/upload/v1627052016/star-wars/latest.jpg",
    "r2-d2": "https://res.cloudinary.com/frempong/image/upload/v1627244076/star-wars/ed462856-9243-43c5-bd73-ab99bd009ea2.jpg",
    "darth-vader": "https://res.cloudinary.com/frempong/image/upload/v1627246981/star-wars/darthvader-header.jpg",
    "leia-organa": "https://res.cloudinary.com/frempong/image/upload/v1627247081/star-wars/leia.jpg",
    "owen-lars": "https://res.cloudinary.com/frempong/image/upload/v1627247209/star-wars/owen-lars.jpg",
    "beru-whitesun-lars": "https://res.cloudinary.com/frempong/image/upload/v1627247380/star-wars/beru-whitesun-lars.jpg",
    "r5-d4": "https://res.cloudinary.com/frempong/image/upload/v1627248015/star-wars/r5-d4.jpg",
    "biggs-darklighter": "https://res.cloudinary.com/frempong/image/upload/v1627248106/star-wars/biggs-darklighter.png",
    "obi-wan-kenobi": "https://res.cloudinary.com/frempong/image/upload/v1627248220/star-wars/obi-wan-kenobi.jpg",
    "anakin-skywalker": "https://res.cloudinary.com/frempong/image/upload/v1627248955/star-wars/anakin-skywalker.png",
    "wilhuff-tarkin": "https://res.cloudinary.com/frempong/image/upload/v1627248405/star-wars/wilhuff-tarkin.jpg",
    "chewbacca": "https://res.cloudinary.com/frempong/image/upload/v1627248569/star-wars/chewbacca.png",
    "han-solo": "https://res.cloudinary.com/frempong/image/upload/v1627249465/star-wars/han-solo.png",
    "greedo": "https://res.cloudinary.com/frempong/image/upload/v1627249546/star-wars/greedo.jpg",
    "jabba-desilijic-tiure": "https://res.cloudinary.com/frempong/image/upload/v1627249761/star-wars/jabba-desilijic-tiure.jpg",
    "wedge-antilles": "https://res.cloudinary.com/frempong/image/upload/v1627249972/star-wars/wedge-antilles.jpg",
    "jek-tono-porkins": "https://res.cloudinary.com/frempong/image/upload/v1627250072/star-wars/jek-tono-porkins.jpg",
    "yoda": "https://res.cloudinary.com/frempong/image/upload/v1627250171/star-wars/yoda.jpg",
    "palpatine": "https://res.cloudinary.com/frempong/image/upload/v1627250263/star-wars/palpatine.png",
    "boba-fett": "https://res.cloudinary.com/frempong/image/upload/v1627250363/star-wars/boba-fett.jpg",
    "ig-88": "https://res.cloudinary.com/frempong/image/upload/v1627250535/star-wars/ig-88.jpg",
    "bossk": "https://res.cloudinary.com/frempong/image/upload/v1627250754/star-wars/bossk.png",
    "lando-calrissian": "https://res.cloudinary.com/frempong/image/upload/v1627250856/star-wars/lando-calrissian.jpg",
    "lobot": "https://res.cloudinary.com/frempong/image/upload/v1627250947/star-wars/lobot.jpg",
    "ackbar": "https://res.cloudinary.com/frempong/image/upload/v1627252050/star-wars/ackbar.jpg",
    "mon-mothma": "https://res.cloudinary.com/frempong/image/upload/v1627252168/star-wars/mon-mothma.jpg",
    "arvel-crynyd": "https://res.cloudinary.com/frempong/image/upload/v1627252272/star-wars/arvel-crynyd.jpg",
    "wicket-systri-warrick": "https://res.cloudinary.com/frempong/image/upload/v1627252359/star-wars/wicket-systri-warrick.png",
    "nien-nunb": "https://res.cloudinary.com/frempong/image/upload/v1627252448/star-wars/nien-nunb.jpg",
    "qui-gon-jinn": "https://res.cloudinary.com/frempong/image/upload/v1627252571/star-wars/qui-gon-jinn.jpg",
    "nute-gunray": "https://res.cloudinary.com/frempong/image/upload/v1627252699/star-wars/nute-gunray.jpg",
    "finis-valorum": "https://res.cloudinary.com/frempong/image/upload/v1627252795/star-wars/finis-valorum.jpg",
    "padme-amidala": "https://res.cloudinary.com/frempong/image/upload/v1627253125/star-wars/padme-amidala.png",
    "jar-jar-binks": "https://res.cloudinary.com/frempong/image/upload/v1627253000/star-wars/jar-jar-binks.jpg",
    "roos-tarpals": "https://res.cloudinary.com/frempong/image/upload/v1627254486/star-wars/roos-tarlpas.png",
    "rugor-nass": "https://res.cloudinary.com/frempong/image/upload/v1627253369/star-wars/rugor-nass.jpg",
    "ric-olie": "https://res.cloudinary.com/frempong/image/upload/v1627254581/star-wars/ric-olie.jpg",
    "watto": "https://res.cloudinary.com/frempong/image/upload/v1627254683/star-wars/watto.jpg",
    "sebulba": "https://res.cloudinary.com/frempong/image/upload/v1627254842/star-wars/sebulba.jpg",
    "quarsh-panaka": "https://res.cloudinary.com/frempong/image/upload/v1627254945/star-wars/quarsh-panaka.png",
    "shmi-skywalker": "https://res.cloudinary.com/frempong/image/upload/v1627255079/star-wars/shmi-skywalker.jpg",
    "darth-maul": "https://res.cloudinary.com/frempong/image/upload/v1627255188/star-wars/darth-maul.png",
    "bib-fortuna": "https://res.cloudinary.com/frempong/image/upload/v1627255318/star-wars/bib-fortuna.png",
    "ayla-secura": "https://res.cloudinary.com/frempong/image/upload/v1627255463/star-wars/ayla-secura.png",
    "ratts-tyerel": "https://res.cloudinary.com/frempong/image/upload/v1627255574/star-wars/ratts-tyerel.jpg",
    "dud-bolt": "https://res.cloudinary.com/frempong/image/upload/v1627255718/star-wars/dud-bolt.jpg",
    "gasgano": "https://res.cloudinary.com/frempong/image/upload/v1627255844/star-wars/gasgano.jpg",
    "ben-quadinaros": "https://res.cloudinary.com/frempong/image/upload/v1627255954/star-wars/ben-quadinaros.png",
    "mace-windu": "https://res.cloudinary.com/frempong/image/upload/v1627256104/star-wars/mace-windu.jpg",
    "ki-adi-mundi": "https://res.cloudinary.com/frempong/image/upload/v1627256225/star-wars/ki-adi-mundi.jpg",
    "kit-fisto": "https://res.cloudinary.com/frempong/image/upload/v1627256902/star-wars/kit-fisto.png",
    "eeth-koth": "https://res.cloudinary.com/frempong/image/upload/v1627256608/star-wars/eeth-koth.jpg",
    "adi-gallia": "https://res.cloudinary.com/frempong/image/upload/v1627256724/star-wars/adi-gallia.jpg",
    "saesee-tiin": "",
    "yarael-poof": "",
    "plo-koon": "",
    "mas-amedda": "",
    "gregar-typho": "",
    "corde": "",
    "cliegg-lars": "",
    "poggle-the-lesser": "",
    "luminara-unduli": "",
    "barriss-offee": "",
    "dorme": "",
    "dooku": "",
    "bail-prestor-organa" : "",
    "jango-fett": "",
    "zam-wesell": "",
    "dexter-jettster": "",
    "lama-su": "",
    "taun-we": "",
    "jocasta-nu": "",
    "r4-p17": "",
    "wat-tambor": "",
    "san-hill": "",
    "shaak-ti": "",
    "grievous": "",
    "tarfful": "",
    "raymus-antilles": "",
    "sly-moore": "",
    "tion-medon": ""
}

const CharactersList = ({characters}) => {

    const renderCharacters = () => {
        return characters.map((character) => {
            const slug = slugify(character.name, {
                lower: true,
                strict: false
            });

            const characterUrl = character.url;
            const characterUrlArr = characterUrl.split("/");
            const characterId = characterUrlArr[characterUrlArr.length - 2]

            return (
                <Link href={`/characters/${slug}-${characterId}`} key={slug}>
                    <a>
                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                 src={images[slug] || images["luke-skywalker"]}
                                 alt={slug}/>

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700">{character.name}</h3>
                            </div>
                        </div>

                    </a>
                </Link>
            )
        })
    }

    return (
        <CustomLayout title={`characters`}>
            <section className="container p-6 mx-auto bg-white mb-20">
                <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl">Characters</h2>
                <div className="flex items-center justify-center">
                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {renderCharacters()}

                    </div>
                </div>
            </section>
        </CustomLayout>
    )
}

CharactersList.propTypes = {
    characters: PropTypes.array.isRequired
}

export default CharactersList;

