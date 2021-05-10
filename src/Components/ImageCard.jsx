const ImageCard = ({image}) => {
    const tags = image.tags.split(",");

    console.log(image);
    return (
        <div className="imageCard">
            <img src={image.webformatURL} width="300px" height="250px"></img>
            <div className="author">
                Photo by {image.user}
            </div>
            <ul className="stats">
                <li>
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
            </ul>
            <div className="tags">
                {tags.map((tag,index) => (
                    <span className="tag" key={index}>#{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default ImageCard;