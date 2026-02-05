import Spline from '@splinetool/react-spline';

export default function SplineScene({ scene, className }) {
    return (
        <div className={className}>
            <Spline scene={scene} />
        </div>
    );
}
