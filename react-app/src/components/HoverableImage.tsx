import React from "react";
import "./HoverableImage.scss";


export default function HoverableImage({ imageUrl, heroId }: { imageUrl: string, heroId: string }) {
    const [hero, setHero] = React.useState<any>({});
    const [loading, setLoading] = React.useState(true);
    async function fetchHero(id: string) {
        console.log("fetching hero", id);
        const res = await fetch(`http://localhost:5000/superheroes/getherobyid/${id}`);
        const data = await res.json();
        return data;
    }

    React.useEffect(() => {
        fetchHero(heroId).then(data => { setHero(data); setLoading(false); }).catch(err => { console.log(err); setLoading(false); });
    }, [heroId]);


    return (
        loading ? <div className="loading"></div> :
            <div className="image-wrapper">
                <img className="main-image" src={imageUrl} alt={hero["name"]} />
                {
                    <div className="card">
                        <img className="card-image" src={hero["image"]["url"]} alt={hero["name"]} />
                        <div>
                            <div className="card-title">{hero["name"]}</div>
                            <p>{hero["biography"]["full-name"]}</p>
                            <p>{hero["biography"]["alter-egos"]}</p>
                            <p>{hero["biography"]["aliases"].join(", ")}</p>
                            <p>{hero["biography"]["place-of-birth"]}</p>
                            <p>{hero["biography"]["first-appearance"]}</p>
                            <p>{hero["biography"]["publisher"]}</p>
                            <p>{hero["biography"]["alignment"]}</p>
                        </div>
                    </div>
                }
            </div>
    )

}
