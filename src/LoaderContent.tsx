import loadGifImage from './img/load.gif';

const LoaderContent: React.FC = () => {
    return(
        <div>
            <h1>Carregando...</h1>
            <img src={loadGifImage} alt="Dog Loader" width="200px" height="auto" />
        </div>
    )
}

export default LoaderContent;