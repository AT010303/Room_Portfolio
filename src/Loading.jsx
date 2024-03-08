import { useProgress } from '@react-three/drei';

export const Loading = () => {
    const { progress } = useProgress();
    console.log(progress);

    return <></>;
};
