import { useProgress } from '@react-three/drei';

export const LoadingPage = () => {
    const { progress } = useProgress();

    return (
        <div
            id="loading-page"
            className={`overlay ${progress >= 100 ? 'fade' : ''}`}
        >
            <h1 className={`loading ${progress >= 100 ? 'fade' : ''}`}>
                Loading Experience... {Math.floor(progress)} %
            </h1>
        </div>
    );
};
